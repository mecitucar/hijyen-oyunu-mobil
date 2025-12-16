// Simple Node test for the JSON extraction and validation logic used in api/generate-question.ts

function sanitizeJsonString(s) {
  return s
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/,\s*([}\]])/g, '$1')
    .trim();
}

function extractJsonCandidates(text) {
  const candidates = [];
  const arrayRegex = /\[[\s\S]*?\]/g;
  const objRegex = /\{[\s\S]*?\}/g;
  let match;
  while ((match = arrayRegex.exec(text))) candidates.push(match[0]);
  while ((match = objRegex.exec(text))) candidates.push(match[0]);
  return candidates;
}

function isValidQuestion(q) {
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

function tryParse(text) {
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
  if (parsed && !Array.isArray(parsed) && typeof parsed === 'object') parsed = [parsed];
  return parsed;
}

const samples = [
  // clean JSON
  `[{"question":"Soru 1","options":["A","B","C","D"],"correct_index":1}]`,

  // smart quotes and trailing comma
  `[
    {“question”:”Soru 2”,“options”:["A","B","C","D"],"correct_index":0,},
  ]`,

  // text with prose and JSON inside
  `Here is the result:\n\n[{"question":"Soru 3","options":["A","B","C","D"],"correct_index":2}]\nThanks!`,

  // single object
  `{"question":"Tek","options":["A","B","C","D"],"correct_index":3}`,

  // invalid shape
  `[{"q":"bad","opts":[1,2],"correct":5}]`
];

for (const s of samples) {
  console.log('\n--- Sample ---\n' + s + '\n');
  const parsed = tryParse(s);
  if (!parsed) {
    console.log('Parse failed');
    continue;
  }
  console.log('Parsed:', parsed);
  const validated = parsed.map((q) => {
    if (!q) return { ok: false, reason: 'missing' };
    if (!isValidQuestion(q)) return { ok: false, q, reason: 'invalid shape' };
    return { ok: true, q };
  });
  console.log('Validated:', validated);
}
