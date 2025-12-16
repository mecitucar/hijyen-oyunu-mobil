export type HFQuestion = {
  question: string;
  options: string[];
  correct_index: number;
};

export async function fetchHFQuestions(count = 1): Promise<HFQuestion[]> {
  try {
    const resp = await fetch('/api/generate-question', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ count })
    });
    if (!resp.ok) {
      const txt = await resp.text();
      throw new Error(`Proxy error: ${resp.status} ${txt}`);
    }
    const data = await resp.json();
    // Prefer parsed field if present
    const parsed = data.parsed ?? data;
    if (!Array.isArray(parsed)) throw new Error('Invalid response shape from proxy');

    // Validate and normalize
    const out: HFQuestion[] = parsed.map((it: any) => ({
      question: String(it.question || it.prompt || ''),
      options: Array.isArray(it.options) ? it.options.map(String) : [],
      correct_index: Number.isInteger?.(it.correct_index) ? it.correct_index : (it.correctIndex ?? -1)
    }));

    // Final validation: every item must have 4 options and correct_index in range
    const valid = out.filter(q => q.options.length === 4 && q.correct_index >= 0 && q.correct_index < 4);
    if (valid.length !== out.length) throw new Error('Some items failed validation');
    return out;
  } catch (err) {
    throw err;
  }
}
