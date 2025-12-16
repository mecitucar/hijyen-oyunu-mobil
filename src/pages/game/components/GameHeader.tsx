interface GameHeaderProps {
  score: number;
  lives: number;
  correctCount: number;
  incorrectCount: number;
  elapsedSeconds?: number;
}

export default function GameHeader({ score, lives, correctCount, incorrectCount, elapsedSeconds = 0 }: GameHeaderProps) {
  const fmt = (s: number) => {
    const m = Math.floor(s / 60).toString().padStart(2, '0');
    const sec = (s % 60).toString().padStart(2, '0');
    return `${m}:${sec}`;
  };
  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-between">

          {/* Left group: Soru (moved to left) */}
          <div className="flex items-center gap-4 ml-20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl relative" style={{ background: 'linear-gradient(135deg,#a78bfa 0%,#7c3aed 100%)', boxShadow: '0 6px 18px rgba(124,58,237,0.12)' }}>
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)', mixBlendMode: 'overlay' }} />
                <i className="ri-check-line text-2xl text-white drop-shadow-sm"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Doğru</p>
                <p className="text-lg font-bold text-gray-800">
                  <span className="inline-block bg-purple-50 px-3 py-1 rounded-full text-purple-700 font-semibold shadow-sm">{correctCount}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl relative" style={{ background: 'linear-gradient(135deg,#f87171 0%,#ef4444 100%)', boxShadow: '0 6px 18px rgba(239,68,68,0.12)' }}>
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)', mixBlendMode: 'overlay' }} />
                <i className="ri-close-line text-2xl text-white drop-shadow-sm"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Yanlış</p>
                <p className="text-lg font-bold text-gray-800">
                  <span className="inline-block bg-rose-50 px-3 py-1 rounded-full text-rose-700 font-semibold shadow-sm">{incorrectCount}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right group: Canlar + Puan + Timer */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3 ml-14">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl relative" style={{ background: 'linear-gradient(135deg,#2dd4bf 0%,#14b8a6 100%)', boxShadow: '0 6px 18px rgba(20,184,166,0.18)' }}>
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)', mixBlendMode: 'overlay' }} />
                <i className="ri-heart-pulse-line text-2xl text-white drop-shadow-sm animate-[pulse_1400ms_ease-in-out_infinite]" style={{ transform: 'scale(1.02)' }}></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Canlar</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`ri-heart-3-fill text-xl ${i < lives ? 'text-rose-500' : 'text-gray-300'}`}
                      style={{ filter: i < lives ? 'drop-shadow(0 6px 12px rgba(239,68,68,0.18))' : undefined }}
                    ></i>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl relative" style={{ background: 'linear-gradient(135deg,#f59e0b 0%,#f97316 100%)', boxShadow: '0 6px 18px rgba(249,115,22,0.14)' }}>
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.12)', mixBlendMode: 'overlay' }} />
                <i className="ri-trophy-line text-2xl text-white drop-shadow-sm"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Puan</p>
                <p className="text-xl font-bold text-gray-800">
                  <span className="inline-block bg-amber-50 px-3 py-1 rounded-full text-amber-700 font-semibold shadow-sm">{score}</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl relative" style={{ background: 'linear-gradient(135deg,#60a5fa 0%,#3b82f6 100%)', boxShadow: '0 6px 18px rgba(59,130,246,0.12)' }}>
                <div className="absolute inset-0 rounded-xl" style={{ boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)', mixBlendMode: 'overlay' }} />
                <i className="ri-time-line text-2xl text-white drop-shadow-sm"></i>
              </div>
              <div>
                <p className="text-xs font-medium text-gray-500">Süre</p>
                <p className="text-xl font-bold text-gray-800">
                  <span className="inline-block bg-sky-50 px-3 py-1 rounded-full text-sky-700 font-semibold shadow-sm">{fmt(elapsedSeconds)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
