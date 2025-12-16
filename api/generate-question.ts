import { VercelRequest, VercelResponse } from '@vercel/node';
import { generateQuestions as localGenerate } from '../src/utils/questionGenerator';

// Vercel Serverless function that calls Hugging Face Inference API
// Expects environment variable HF_API_KEY to be set in deployment.

const MODEL = process.env.HF_MODEL || 'google/flan-t5-small';

type Question = {
  question: string;
  options: string[];
  correct_index: number;
};

function buildPrompt(count: number) {
  return `Aşağıdaki gereksinimlere göre Türkçe, hijyen odaklı, okul seviyesine uygun çoktan seçmeli sorular üret. Çıktı yalnızca JSON olmalı (boşluk/yorum olmadan). JSON formatı: [{"question":"...","options":["..","..","..",".."],"correct_index":0}, ...]. Her soru için kesinlikle 4 seçenek olmalı ve "correct_index" 0-3 aralığında olmalı. Matematik içermesin. Üretilecek soru sayısı: ${count}.`;
}

function sanitizeJsonString(s: string) {
  // Replace smart quotes and trailing commas that commonly break JSON
  return s
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/,\s*([}\]])/g, '$1')
    .trim();
}

function extractJsonCandidates(text: string): string[] {
  const candidates: string[] = [];
  const arrayRegex = /\[[\s\S]*?\]/g;
  const objRegex = /\{[\s\S]*?\}/g;
  let match: RegExpExecArray | null;
  while ((match = arrayRegex.exec(text))) candidates.push(match[0]);
  while ((match = objRegex.exec(text))) candidates.push(match[0]);
  return candidates;
}

function isValidQuestion(q: any): q is Question {
  return (
    q &&
    typeof q.question === 'string' &&
    Array.isArray(q.options) &&
    q.options.length === 4 &&
    Number.isInteger(q.correct_index) &&
    q.correct_index >= 0 &&
    q.correct_index < 4
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).send({ error: 'Method not allowed' });
  const { count = 1 } = req.body || {};
  const requestedCount = Math.min(20, Math.max(1, Number(count || 1)));

  const FORCE_LOCAL = process.env.FORCE_LOCAL === 'true';

  // If FORCE_LOCAL is set, or no HF API key is configured, fall back to a local generator
  // so the app works without requiring external credentials.
  if (FORCE_LOCAL || !process.env.HF_API_KEY) {
    const local = localGenerate(requestedCount);
    const parsed = local.map((q) => ({ question: q.question, options: q.options, correct_index: q.correctAnswer }));
    const validated: { ok: boolean; q?: Question; reason?: string }[] = parsed.map((q: any) => {
      if (!q) return { ok: false, reason: 'missing' };
      if (!isValidQuestion(q)) return { ok: false, q, reason: 'invalid shape' };
      return { ok: true, q };
    });
    const okCount = validated.filter((v) => v.ok).length;
    return res.json({ model_raw: null, parsed, validated, okCount, requestedCount, fallback: 'local' });
  }

  const prompt = buildPrompt(requestedCount);

  try {
    const r = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.HF_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 512, temperature: 0.7 } })
    });

    const text = await r.text();

    // Try direct parse first
    let parsed: any = null;
    try {
      parsed = JSON.parse(sanitizeJsonString(text));
    } catch (_) {
      // Try to extract candidate JSON blobs and parse them
      const candidates = extractJsonCandidates(text);
      for (const c of candidates) {
        try {
          const s = sanitizeJsonString(c);
          const p = JSON.parse(s);
          // prefer arrays of questions
          if (Array.isArray(p)) {
            parsed = p;
            break;
          }
          // or single object wrapped in array
          if (p && typeof p === 'object') {
            parsed = [p];
            break;
          }
        } catch (e) {
          continue;
        }
      }
    }

    if (!parsed) return res.status(502).json({ error: 'Unable to parse model output as JSON', raw: text });

    if (!Array.isArray(parsed)) return res.status(502).json({ error: 'Parsed output not array', parsed });

    const validated: { ok: boolean; q?: Question; reason?: string }[] = parsed.map((q: any) => {
      if (!q) return { ok: false, reason: 'missing' };
      if (!isValidQuestion(q)) return { ok: false, q, reason: 'invalid shape' };
      return { ok: true, q };
    });

    const okCount = validated.filter((v) => v.ok).length;

    return res.json({ model_raw: text, parsed: parsed, validated, okCount, requestedCount });
  } catch (err: any) {
    return res.status(500).json({ error: String(err) });
  }
}
