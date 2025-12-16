const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/mocks/questions.ts');
const txt = fs.readFileSync(file, 'utf8');
const lines = txt.split(/\r?\n/);
let count = 0;
for (const l of lines) {
  if (l.includes("{ question:") || l.includes("{question:")) count++;
}
// Also count exported arrays lengths by crude regex for allQuestions assignment
const matchAll = txt.match(/export const allQuestions = \[([\s\S]*?)\];/m);
let allCount = null;
if (matchAll) {
  const inner = matchAll[1];
  const items = inner.split(/\},\s*\{/g).length;
  allCount = items;
}
console.log('lines_with_{ question: =', count);
if (allCount) console.log('rough allQuestions items estimate =', allCount);
else console.log('allQuestions export not matched.');
