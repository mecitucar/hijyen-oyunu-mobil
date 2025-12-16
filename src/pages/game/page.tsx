import { useState, useEffect } from 'react';
import GameCanvas from './components/GameCanvas';
import QuestionPanel from './components/QuestionPanel';
import GameHeader from './components/GameHeader';
import GameOver from './components/GameOver';
import { generateQuestions, generateQuestionsAsync } from '../../utils/questionGenerator';

export default function GamePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const START_SECONDS = 120; // 2 minutes countdown
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS);
  const [gameState, setGameState] = useState<'playing' | 'gameover'>('playing');
  const [backgroundTheme, setBackgroundTheme] = useState<'neutral' | 'positive' | 'negative'>('neutral');
  const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean | null>(null);
  const [questions, setQuestions] = useState(() => generateQuestions(10));
  const [loadingQuestions, setLoadingQuestions] = useState(false);
  const [hfError, setHfError] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | undefined;
    if (gameState === 'playing') {
      timer = window.setInterval(() => {
        setSecondsLeft(s => {
          if (s <= 1) {
            // time's up
            clearInterval(timer);
            setGameState('gameover');
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer !== undefined) clearInterval(timer);
    };
  }, [gameState]);

  useEffect(() => {
    if (lives <= 0) {
      setGameState('gameover');
    }
  }, [lives]);

  // Try to load questions from HF proxy on mount (async). Falls back to local generator on error.
  useEffect(() => {
    let mounted = true;
    const load = async () => {
      setLoadingQuestions(true);
      try {
        const qs = await generateQuestionsAsync(10);
        if (mounted) {
          setQuestions(qs);
          setHfError(null);
        }
      } catch (e) {
        console.warn('Failed to load remote questions, using local generator', e);
        if (mounted) {
          setQuestions(generateQuestions(10));
          setHfError(String(e ?? 'Hugging Face fetch failed'));
        }
      } finally {
        if (mounted) setLoadingQuestions(false);
      }
    };
    load();
    return () => { mounted = false; };
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    setAnsweredCorrectly(isCorrect);
    console.log('handleAnswer called:', { isCorrect, currentQuestion, correctCount, incorrectCount });
    
    if (isCorrect) {
      setScore(score + 10);
      setCorrectCount(c => c + 1);
      setBackgroundTheme('positive');
    } else {
      setScore(Math.max(0, score - 5));
      setLives(lives - 1);
      setIncorrectCount(c => c + 1);
      setBackgroundTheme('negative');
    }
    console.log('after update (queued):', { correctCount, incorrectCount });
  };

  const nextQuestion = () => {
    if (lives <= 0) {
      setGameState('gameover');
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setBackgroundTheme('neutral');
      setAnsweredCorrectly(null);
    } else {
      setGameState('gameover');
    }
  };

  const restartGame = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(5);
    setCorrectCount(0);
    setIncorrectCount(0);
    setGameState('playing');
    setBackgroundTheme('neutral');
    setAnsweredCorrectly(null);
    // regenerate fresh unique questions for the new run
    (async () => {
      setLoadingQuestions(true);
      try {
        const qs = await generateQuestionsAsync(10);
        setQuestions(qs);
        setHfError(null);
      } catch (e) {
        setQuestions(generateQuestions(10));
        setHfError(String(e ?? 'Hugging Face fetch failed'));
      } finally {
        setLoadingQuestions(false);
      }
    })();
    setSecondsLeft(START_SECONDS);
  };

  if (gameState === 'gameover') {
    const usedSeconds = START_SECONDS - secondsLeft;
    return <GameOver score={score} totalQuestions={questions.length} usedSeconds={usedSeconds} totalDuration={START_SECONDS} onRestart={restartGame} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Arka Plan Dekorasyon */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-36 h-36 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-44 h-44 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      {/* Oyun İçeriği */}
      <div className="relative z-10">
        <GameHeader
          score={score}
          lives={lives}
          correctCount={correctCount}
          incorrectCount={incorrectCount}
          elapsedSeconds={secondsLeft}
        />
        
        {hfError && (
          <div className="container mx-auto px-4 pt-28">
            <div className="bg-rose-50 border border-rose-200 text-rose-800 px-4 py-2 rounded-md text-sm flex items-center justify-between">
              <div>Uzaktan soru yüklenemedi: {hfError}</div>
              <button onClick={() => setHfError(null)} className="ml-4 text-rose-600 underline">Kapat</button>
            </div>
          </div>
        )}

        <div className="container mx-auto px-4 pt-32 pb-20">
          {loadingQuestions ? (
            <div className="w-full text-center py-20 text-gray-500">Yükleniyor...</div>
          ) : (
            <QuestionPanel
              question={questions[currentQuestion]}
              onAnswer={handleAnswer}
              disabled={answeredCorrectly !== null}
              answeredCorrectly={answeredCorrectly}
              onNext={nextQuestion}
            />
          )}
        </div>
      </div>

      {/* Animasyonlar */}
      <GameCanvas 
        theme={backgroundTheme} 
        questionTheme={questions[currentQuestion]?.theme}
        answeredCorrectly={answeredCorrectly}
      />
    </div>
  );
}
