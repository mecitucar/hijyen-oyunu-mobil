import { useState, useRef, useEffect } from 'react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  theme: string;
}

interface QuestionPanelProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  disabled: boolean;
  answeredCorrectly?: boolean | null;
  onNext?: () => void;
}

export default function QuestionPanel({ question, onAnswer, disabled, answeredCorrectly, onNext }: QuestionPanelProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const questionRef = useRef<HTMLHeadingElement | null>(null);
  const [questionFontSize, setQuestionFontSize] = useState<number>(24);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const optionTextRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [optionFontSizes, setOptionFontSizes] = useState<number[]>([]);

  useEffect(() => {
    const fit = () => {
      const el = questionRef.current;
      if (!el) return;
      const container = el.parentElement as HTMLElement | null;
      const containerHeight = container ? container.clientHeight : 140;
      let size = 28;
      const minSize = 14;
      const step = 0.5;
      const original = el.style.fontSize;

      while (true) {
        el.style.fontSize = size + 'px';
        if (el.scrollHeight <= containerHeight || size <= minSize) break;
        size -= step;
      }

      setQuestionFontSize(size);
      el.style.fontSize = original;
    };

    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, [question.question]);

  // Scale options text so they never force the card to expand.
  useEffect(() => {
    const fitOptions = () => {
      const sizes: number[] = [];
      const minSize = 12;
      const step = 0.5;
      optionTextRefs.current.forEach((span, idx) => {
        if (!span) {
          sizes[idx] = 16;
          return;
        }
        const container = span.parentElement as HTMLElement | null;
        const containerH = container ? container.clientHeight : 64;
        let size = 16;
        const original = span.style.fontSize;
        while (true) {
          span.style.fontSize = size + 'px';
          if (span.scrollHeight <= containerH || size <= minSize) break;
          size -= step;
        }
        sizes[idx] = size;
        span.style.fontSize = original;
      });
      setOptionFontSizes(sizes);
    };

    fitOptions();
    window.addEventListener('resize', fitOptions);
    return () => window.removeEventListener('resize', fitOptions);
  }, [question.question, question.options]);

  const handleOptionClick = (index: number) => {
    if (disabled) return;
    
    setSelectedOption(index);
    const isCorrect = index === question.correctAnswer;
    onAnswer(isCorrect);
    // keep selection visible until user advances with Next
  };

  const getOptionStyle = (index: number) => {
    if (selectedOption === null) {
      if (hoveredOption === index) {
        return 'bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-500 shadow-2xl transform scale-105 -translate-y-1';
      }
      return 'bg-white hover:bg-gradient-to-br hover:from-teal-50 hover:to-emerald-50 border-gray-200 hover:border-teal-400 hover:shadow-xl transform hover:scale-105 hover:-translate-y-1';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 border-emerald-500 shadow-2xl scale-105 animate-pulse';
    }
    
    if (index === selectedOption && index !== question.correctAnswer) {
      return 'bg-gradient-to-br from-rose-500 via-red-500 to-pink-500 border-red-600 shadow-2xl scale-95';
    }
    
    return 'bg-gray-50 border-gray-200 opacity-40';
  };

  const getOptionTextStyle = (index: number) => {
    if (selectedOption !== null && (index === question.correctAnswer || index === selectedOption)) {
      return 'text-white font-bold';
    }
    if (hoveredOption === index && selectedOption === null) {
      return 'text-teal-700 font-bold';
    }
    return 'text-gray-800 font-semibold';
  };

  return (
    <div className="absolute top-20 md:top-24 left-0 right-0 z-50 flex justify-center items-start pointer-events-auto">
      <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
        <div ref={cardRef} className="bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 backdrop-blur-lg rounded-[1.5rem] shadow-[0_16px_48px_rgba(0,0,0,0.24)] p-6 border-4 border-white/60 ring-4 ring-teal-400/30 overflow-hidden relative" style={{ height: 'min(480px, 66vh)', maxHeight: '66vh' }}>
          <div className="mb-8 text-center">
            <div className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-transparent bg-clip-text mb-2">
              <i className="ri-question-line text-4xl"></i>
            </div>

            {/* Fixed-height question box with dynamic font scaling to fit */}
            <div className="mx-auto w-full max-w-5xl">
              <div className="h-20 md:h-28 flex items-center justify-center">
                <h2
                  ref={questionRef}
                  style={{ fontSize: questionFontSize + 'px' }}
                  className="font-bold text-gray-900 leading-tight drop-shadow-sm text-center px-4"
                >
                  {question.question}
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                disabled={disabled}
                className={`${getOptionStyle(index)} border-3 rounded-2xl p-5 transition-all duration-300 cursor-pointer group relative overflow-hidden`}
              >
                {/* Hover ışık efekti */}
                {hoveredOption === index && selectedOption === null && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                )}
                
                <div className="flex items-center gap-5 relative z-10">
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl transition-all duration-300 ${
                    selectedOption !== null && (index === question.correctAnswer || index === selectedOption)
                      ? 'bg-white/30 text-white shadow-lg scale-110'
                      : hoveredOption === index
                      ? 'bg-gradient-to-br from-teal-500 to-emerald-500 text-white shadow-lg scale-110'
                      : 'bg-gradient-to-br from-teal-100 to-emerald-100 text-teal-700 group-hover:scale-110'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span
                    ref={el => (optionTextRefs.current[index] = el)}
                    style={{ fontSize: (optionFontSizes[index] ?? 16) + 'px' }}
                    className={`${getOptionTextStyle(index)} text-lg flex-1 text-left transition-all duration-300 break-words`}
                  >
                    {option}
                  </span>
                  {selectedOption !== null && index === question.correctAnswer && (
                    <div className="animate-bounce">
                      <i className="ri-check-line text-4xl text-white drop-shadow-lg"></i>
                    </div>
                  )}
                  {selectedOption === index && index !== question.correctAnswer && (
                    <div className="animate-pulse">
                      <i className="ri-close-line text-4xl text-white drop-shadow-lg"></i>
                    </div>
                  )}
                  {hoveredOption === index && selectedOption === null && (
                    <div className="transition-all duration-300">
                      <i className="ri-arrow-right-circle-line text-3xl text-teal-600"></i>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Next button - pinned inside card (static) */}
          <button
            onClick={() => {
              setSelectedOption(null);
              onNext && onNext();
            }}
            disabled={answeredCorrectly === null}
            className={`absolute right-4 bottom-3 md:right-5 md:bottom-4 px-4 md:px-5 py-2 rounded-full font-bold shadow-lg transition-all duration-200 ${answeredCorrectly === null ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : answeredCorrectly === true ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-white' : 'bg-gradient-to-r from-rose-500 to-red-500 text-white'}`}
          >
            Sonraki Soru →
          </button>
        </div>
      </div>
    </div>
  );
}
