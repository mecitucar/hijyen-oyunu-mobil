// Lightweight question generator utility
// Produces simple, varied question objects when no external API is used.

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export type Question = {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  theme?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

type Template = {
  tpl: string | ((n: number) => string);
  correct: string;
  distractors?: string[];
  theme?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
};

// Hygiene-focused templates and answer pools
const TEMPLATES: Template[] = [
  {
    tpl: (n: number) => `Bir ürün alırken çevreye duyarlı olduğunu gösteren en güvenilir işaret nedir?`,
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

export function generateQuestions(count = 6): Question[] {
  const questions: Question[] = [];
  const now = Date.now();
  for (let i = 0; i < count; i++) {
    const tplIndex = randInt(0, TEMPLATES.length - 1);
    const tplObj = TEMPLATES[tplIndex];
    const id = `q_${now}_${i}_${Math.floor(Math.random() * 10000)}`;
    const text = typeof tplObj.tpl === 'function' ? tplObj.tpl(0) : String(tplObj.tpl);
    const correct = tplObj.correct;
    const distractors = tplObj.distractors ? tplObj.distractors.slice(0) : [];

    // Extra distractor pool to ensure we can always produce 3 wrong options
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

    // Start with template distractors, then fill from extras without duplicating
    const pool: string[] = [];
    const addIfUnique = (s: string) => {
      if (!s) return;
      if (s === correct) return;
      if (pool.includes(s)) return;
      pool.push(s);
    };

    // add template distractors
    shuffle(distractors).forEach(d => addIfUnique(d));
    // fill from extra pool if needed
    shuffle(EXTRA_DISTRACTORS).forEach(d => { if (pool.length < 3) addIfUnique(d); });

    // ensure we have exactly 3 distractors
    const finalDistractors = pool.slice(0, 3);
    const options = shuffle([correct, ...finalDistractors]).slice(0, 4);
    const theme = tplObj.theme || 'hijyen';
    questions.push({ id, question: text, options, correctAnswer: options.indexOf(correct), theme, difficulty: 'easy' });
  }
  return questions;
}

export default { generateQuestions };

// --- Async remote option (tries HF proxy, falls back to local generator) ---
import { fetchHFQuestions } from './hfQuestionApi';

export async function generateQuestionsAsync(count = 6): Promise<Question[]> {
  // Use remote only when the client requests it (Vite env var can control it)
  const useRemote = typeof window !== 'undefined' && (import.meta.env.VITE_USE_HF === 'true');
  if (!useRemote) return generateQuestions(count);

  try {
    const hf = await fetchHFQuestions(count);
    // map HFQuestion -> Question
    const mapped: Question[] = hf.map((h, i) => ({
      id: `hf_${Date.now()}_${i}`,
      question: h.question,
      options: h.options.slice(0, 4),
      correctAnswer: Math.max(0, Math.min(3, Number(h.correct_index) || 0)),
      theme: 'hijyen',
      difficulty: 'easy'
    }));
    return mapped;
  } catch (err) {
    // fallback to local generator on any error
    console.warn('HF fetch failed, falling back to local generator', err);
    return generateQuestions(count);
  }
}
