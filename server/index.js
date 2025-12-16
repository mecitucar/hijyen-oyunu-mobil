// Simple Express server to serve built frontend and a local /api/generate-question
// Run: npm run build && npm run start:server

import express from 'express';
import path from 'path';
import cors from 'cors';

import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

// Serve files from `out/` if they exist for the requested path.
// This middleware runs early and will return files from the build output
// even if the server started before the build was created.
// compute outDir relative to process.cwd() to avoid issues with import.meta URL paths on Windows
const outDir = path.resolve(process.cwd(), 'out');

app.use((req, res, next) => {
  try {
    const reqPath = req.path === '/' ? 'index.html' : req.path.replace(/^\/+/, '');
    const filePath = path.join(outDir, reqPath);
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      return res.sendFile(filePath);
    }
  } catch (e) {
    // ignore and continue to other handlers
  }
  next();
});

// Simple local question generator (JS port of src/utils/questionGenerator.ts)
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const TEMPLATES = [
  {
    tpl: () => `Bir ürün alırken çevreye duyarlı olduğunu gösteren en güvenilir işaret nedir?`,
    correct: 'Üzerinde geri dönüşüm logosu varsa',
    distractors: ['Ürünün rengi yeşilse', 'Fiyatının ucuz olması', 'Sadece ambalajı plastik değilse']
  },
  {
    tpl: () => `Ellerimizi sabunla yıkarken en doğru uygulama hangisidir?`,
    correct: 'Tüm parmak aralarını ve tırnak altlarını sabunlayarak 20-30 saniye yıkamak',
    distractors: ['Sadece avuç içlerini yıkamak', 'Sadece suyla durulamak', 'Sadece parmak uçlarını yıkamak']
  },
  {
    tpl: () => `Hapşırma veya öksürme sırasında en hijyenik davranış hangisidir?`,
    correct: 'Dirseğin içine veya mendile yönlendirip ardından elleri yıkamak',
    distractors: ['Elimizle doğrudan ağızı kapatmak', 'Hiçbir şey yapmamak', 'Etrafdakilere doğru hapşırmak']
  },
  {
    tpl: () => `Bir oyuncak veya mutfak eşyasını temizlemek için en güvenli yöntem hangisidir?`,
    correct: 'Üretici talimatına uygun, sabun ve suyla düzenli temizlemek',
    distractors: ['Sadece suyla çalkalamak', 'Sadece güneşte bekletmek', 'Hiç temizlememek']
  },
  {
    tpl: () => `Tuvalet sonrasında ellerimizi ne kadar süreyle yıkamalıyız?`,
    correct: 'En az 20 saniye boyunca sabunla yıkamalıyız',
    distractors: ['Sadece suyla çalkalamak yeterli', '5 saniye yeterlidir', 'Sadece kuru mendille silmek yeterli']
  }
];

function generateQuestions(count = 6) {
  const questions = [];
  const now = Date.now();
  for (let i = 0; i < count; i++) {
    const tplIndex = randInt(0, TEMPLATES.length - 1);
    const tplObj = TEMPLATES[tplIndex];
    const id = `q_${now}_${i}_${Math.floor(Math.random() * 10000)}`;
    const text = typeof tplObj.tpl === 'function' ? tplObj.tpl(0) : String(tplObj.tpl);
    const correct = tplObj.correct;
    const distractors = tplObj.distractors ? tplObj.distractors.slice(0) : [];

    const EXTRA_DISTRACTORS = [
      'Sadece suyla durulamak',
      'Sadece güneşte bekletmek',
      'Sadece parmak uçlarını yıkamak',
      'Hiçbir şey yapmamak',
      'Sadece ambalajı kontrol etmek',
      'Sadece görünüşüne bakmak',
      'Sadece fiyatına bakmak',
      'Sadece rengini kontrol etmek'
    ];

    const pool = [];
    const addIfUnique = (s) => {
      if (!s) return;
      if (s === correct) return;
      if (pool.includes(s)) return;
      pool.push(s);
    };

    shuffle(distractors).forEach(d => addIfUnique(d));
    shuffle(EXTRA_DISTRACTORS).forEach(d => { if (pool.length < 3) addIfUnique(d); });

    const finalDistractors = pool.slice(0, 3);
    const options = shuffle([correct, ...finalDistractors]).slice(0, 4);
    questions.push({ id, question: text, options, correctAnswer: options.indexOf(correct), theme: 'hijyen', difficulty: 'easy' });
  }
  return questions;
}

// API route
// Simulate messy HF model raw output for testing parser without an HF key
app.post('/api/simulate-hf', (req, res) => {
  const count = Number(req.body?.count) || Number(req.query?.count) || 3;
  // produce intentionally messy output with prose + smart quotes + trailing commas
  const items = [];
  for (let i = 0; i < count; i++) {
    items.push({
      question: `Simüle soru ${i + 1}: Elleri yıkarken hangi adım daha önemlidir?`,
      options: [
        'Tüm parmak aralarını ve tırnak altlarını sabunlamak',
        'Sadece avuç içlerini yıkamak',
        'Sadece suyla durulamak',
        'Sadece parmak uçlarını yıkamak'
      ],
      correct_index: 0
    });
  }

  const json = JSON.stringify(items);
  const messy = `İşte model çıktı örneği (not: yanlış biçimlendirme olabilir):\n\nSome preamble text explaining things...\n\n“${json.slice(1, -1)}”,\n\nThank you!`;
  res.type('text/plain').send(messy);
});

app.post('/api/generate-question', (req, res) => {
  const count = Number(req.body?.count) || Number(req.query?.count) || 6;
  const requestedCount = Math.min(20, Math.max(1, Number(count || 1)));

  const FORCE_LOCAL = process.env.FORCE_LOCAL === 'true';

  // If FORCE_LOCAL or no HF key, use local generator
  if (FORCE_LOCAL || !process.env.HF_API_KEY) {
    const questions = generateQuestions(requestedCount);
    console.log(`[server] Generated ${questions.length} questions (local generator)`);
    return res.json({ generatedBy: 'local-generator', okCount: questions.length, requestedCount, questions });
  }

  // Otherwise call Hugging Face Inference API
  (async () => {
    try {
      const MODEL = process.env.HF_MODEL || 'google/flan-t5-small';
      const buildPrompt = (c) => `Aşağıdaki gereksinimlere göre Türkçe, hijyen odaklı, okul seviyesine uygun çoktan seçmeli sorular üret. Çıktı yalnızca JSON olmalı (boşluk/yorum olmadan). JSON formatı: [{"question":"...","options":["..","..","..",".."],"correct_index":0}, ...]. Her soru için kesinlikle 4 seçenek olmalı ve "correct_index" 0-3 aralığında olmalı. Matematik içermesin. Üretilecek soru sayısı: ${c}.`;

      const sanitizeJsonString = (s) => s.replace(/[“”]/g, '"').replace(/[‘’]/g, "'").replace(/,\s*([}\]])/g, '$1').trim();
      const extractJsonCandidates = (text) => {
        const candidates = [];
        const arrayRegex = /\[[\s\S]*?\]/g;
        const objRegex = /\{[\s\S]*?\}/g;
        let m;
        while ((m = arrayRegex.exec(text))) candidates.push(m[0]);
        while ((m = objRegex.exec(text))) candidates.push(m[0]);
        return candidates;
      };

      const isValidQuestion = (q) => q && typeof q.question === 'string' && Array.isArray(q.options) && q.options.length === 4 && Number.isInteger(q.correct_index) && q.correct_index >= 0 && q.correct_index < 4;

      const prompt = buildPrompt(requestedCount);
      const r = await fetch(`https://api-inference.huggingface.co/models/${MODEL}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.HF_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputs: prompt, parameters: { max_new_tokens: 512, temperature: 0.7 } })
      });

      const text = await r.text();

      let parsed = null;
      try {
        parsed = JSON.parse(sanitizeJsonString(text));
      } catch (e) {
        const candidates = extractJsonCandidates(text);
        for (const c of candidates) {
          try {
            const s = sanitizeJsonString(c);
            const p = JSON.parse(s);
            if (Array.isArray(p)) {
              parsed = p;
              break;
            }
            if (p && typeof p === 'object') {
              parsed = [p];
              break;
            }
          } catch (err) {
            continue;
          }
        }
      }

      if (!parsed) return res.status(502).json({ error: 'Unable to parse model output as JSON', raw: text });
      if (!Array.isArray(parsed)) return res.status(502).json({ error: 'Parsed output not array', parsed });

      const validated = parsed.map((q) => {
        if (!q) return { ok: false, reason: 'missing' };
        if (!isValidQuestion(q)) return { ok: false, q, reason: 'invalid shape' };
        return { ok: true, q };
      });

      const okCount = validated.filter((v) => v.ok).length;
      console.log(`[server] HF generated ${okCount}/${parsed.length} valid questions`);
      return res.json({ model_raw: text, parsed, validated, okCount, requestedCount, generatedBy: 'huggingface' });
    } catch (err) {
      console.error('[server] HF call failed, falling back to local generator', err);
      const questions = generateQuestions(requestedCount);
      return res.json({ generatedBy: 'local-generator', okCount: questions.length, requestedCount, questions, fallback: 'hf-failed' });
    }
  })();
});

// simple GET for quick check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, timestamp: Date.now() });
});

// (Static mounting handled above.)

const port = process.env.PORT || 4000;
// Bind to 0.0.0.0 to ensure accessibility from other hosts (and consistent behavior on Windows)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port} (also accessible via http://localhost:${port})`);
});
