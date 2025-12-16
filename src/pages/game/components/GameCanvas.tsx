import { useEffect, useState, useRef } from 'react';
import mutsuzImg from '../../../assets/mutsuz.png';
import Tree from './Tree';

interface GameCanvasProps {
  theme: 'neutral' | 'positive' | 'negative';
  questionTheme: string;
  answeredCorrectly: boolean | null;
}

export default function GameCanvas({ theme, questionTheme, answeredCorrectly }: GameCanvasProps) {
  const [characterPosition, setCharacterPosition] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [showWrong, setShowWrong] = useState(false);
  const [isHidingWrong, setIsHidingWrong] = useState(false);
  const [isHidingCelebration, setIsHidingCelebration] = useState(false);
  const [useGroundImg, setUseGroundImg] = useState(true);
  const [groundSrc, setGroundSrc] = useState('/ground.svg');
  const [treeOffset, setTreeOffset] = useState(120); // px from bottom (slightly lower than before)
  const [autoLowering, setAutoLowering] = useState(false); // disabled by default
  const lowerIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout> | undefined;

    if (answeredCorrectly === true) {
      setCharacterPosition(prev => prev + 10);
      // keep celebration visible until parent clears answeredCorrectly (next question)
      setShowCelebration(true);
    } else if (answeredCorrectly === false) {
      // Small delay before showing wrong effects so quick taps/new-question transitions
      // don't flash the large wrong-state visuals.
      const SHOW_DELAY = 160; // ms
      showTimer = setTimeout(() => setShowWrong(true), SHOW_DELAY);
      // do NOT auto-hide; keep wrong visuals visible until answeredCorrectly becomes null
    } else {
      // During loading/new question ensure visuals are reset immediately
      setShowCelebration(false);
      setShowWrong(false);
    }

    return () => {
      if (showTimer) clearTimeout(showTimer);
    };
  }, [answeredCorrectly]);

  const getThemeElements = () => {
    const elements = [];
    const progress = characterPosition / 15;
    
    // El yıkama teması - lavabo/sabun (görsel kaldırıldı)
    
    // Diş fırçalama teması
    if (questionTheme.includes('diş') || questionTheme.includes('ağız')) {
      elements.push(
        <div 
          key="tooth" 
          className={`absolute bottom-40 transition-all duration-1000 transform ${
            progress >= 4 ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-45'
          }`}
          style={{ left: '20%' }}
        >
          <div className={`w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${
            theme === 'positive' ? 'bg-gradient-to-br from-white to-blue-50 ring-4 ring-blue-300/50' : 'bg-gray-400'
          }`}>
            <i className={`ri-tooth-line text-7xl ${
              theme === 'positive' ? 'text-blue-500' : 'text-gray-600'
            }`}></i>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"></div>
        </div>
      );
    }
    
    // Çöp/atık teması
    if (questionTheme.includes('çöp') || questionTheme.includes('atık')) {
      elements.push(
        <div 
          key="trash" 
          className={`absolute bottom-40 transition-all duration-1000 transform ${
            progress >= 6 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ right: '35%' }}
        >
          <div className={`w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${
            theme === 'positive' ? 'bg-gradient-to-br from-emerald-100 to-green-50 ring-4 ring-emerald-300/50' : 'bg-gray-500'
          }`}>
            <i className={`ri-delete-bin-line text-7xl ${
              theme === 'positive' ? 'text-emerald-600' : 'text-gray-700'
            }`}></i>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"></div>
        </div>
      );
    }

    // Banyo/duş teması
    if (questionTheme.includes('banyo') || questionTheme.includes('duş')) {
      elements.push(
        <div 
          key="shower" 
          className={`absolute bottom-40 transition-all duration-1000 transform ${
            progress >= 8 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ left: '30%' }}
        >
          <div className={`w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${
            theme === 'positive' ? 'bg-gradient-to-br from-cyan-100 to-blue-50 ring-4 ring-cyan-300/50' : 'bg-gray-400'
          }`}>
            <i className={`ri-water-flash-line text-7xl ${
              theme === 'positive' ? 'text-cyan-600' : 'text-gray-600'
            }`}></i>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"></div>
        </div>
      );
    }

    // Ağaç öğeleri kaldırıldı (gereksiz görsel yük) - temiz arayüz için.

    // Çalılar ve küçük bitkiler (plant-line) kaldırıldı — sadeleştirme.

    // Decorative flowers and drop icons removed — ground image will extend into this area.

    return elements;
  };

    const getBackgroundGradient = () => {
      switch (theme) {
        case 'positive':
          return 'from-sky-300 via-emerald-200 to-teal-100';
        case 'negative':
          return 'from-slate-400 via-gray-300 to-stone-300';
        default:
          return 'from-sky-200 via-cyan-100 to-emerald-50';
      }
    };

    const getSkyElements = () => {
      if (theme === 'positive') {
        return (
          <>
            <div className="absolute right-8 top-20 z-50 pointer-events-none" style={{ transform: 'translateX(0%) translateY(0%)' }}>
              {showWrong ? null : (
                <svg width="240" height="240" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="4" fill="#FFD54F" />
                    <g stroke="#FFD54F" strokeWidth="1.4" strokeLinecap="round" style={{ filter: 'drop-shadow(0 6px 10px rgba(255,209,79,0.24))' }}>
                      <line x1="12" y1="0.5" x2="12" y2="3.6" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(45 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(90 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(135 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(180 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(225 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(270 12 12)" />
                      <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(315 12 12)" />
                    </g>
                  </svg>
              )}
            </div>
            <i
              className="ri-cloud-fill z-30 text-8xl absolute top-56 left-40 drop-shadow-lg"
              style={{
                animationDuration: '3s',
                color: '#ffffff',
                transform: (showWrong && answeredCorrectly === false) ? 'scale(2.2) translateX(12%)' : 'scale(2)',
                transformOrigin: 'center',
                opacity: 1,
                transition: 'opacity 220ms ease, transform 320ms ease',
                textShadow: '0 8px 18px rgba(0,0,0,0.18)',
                WebkitTextStroke: '0.6px rgba(0,0,0,0.06)'
              }}
            ></i>
              <i className="ri-cloud-fill z-30 text-8xl absolute top-80 right-56 drop-shadow-lg"
                style={{
                  animationDuration: '4s',
                  color: '#ffffff',
                  transform: (showCelebration && answeredCorrectly === true) ? 'scale(1.25) translateX(-18%) translateY(-12%)' : (showWrong && answeredCorrectly === false) ? 'scale(1.6) translateX(40%) translateY(42%)' : 'scale(1.25) translateX(8%) translateY(22%)',
                  transformOrigin: 'center',
                  opacity: 1,
                  transition: 'opacity 220ms ease, transform 320ms ease',
                  textShadow: '0 8px 18px rgba(0,0,0,0.16)',
                  WebkitTextStroke: '0.5px rgba(0,0,0,0.05)'
                }}
              ></i>
            
          </>
        );
      } else if (theme === 'negative') {
        return (
          <>
            <i className="ri-cloud-fill z-30 text-9xl absolute top-64 right-80 drop-shadow-lg" style={{ color: '#ffffff', transform: (showCelebration && answeredCorrectly === true) ? 'scale(1.25) translateX(-18%) translateY(-12%)' : (showWrong && answeredCorrectly === false) ? 'scale(1.6) translateX(40%) translateY(34%)' : 'scale(1.25) translateX(8%) translateY(18%)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
            <i className="ri-cloud-fill z-30 text-8xl absolute top-60 left-40 drop-shadow-lg" style={{ color: '#ffffff', transform: (showWrong && answeredCorrectly === false) ? 'scale(2.2) translateX(12%)' : 'scale(2)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
            
          </>
        );
      }

      // Neutral/default theme
      return (
        <>
          <div className="absolute right-8 top-24 z-50 pointer-events-none" style={{ transform: 'translateX(0%) translateY(0%)' }}>
              {showWrong ? null : (
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4" fill="#FFD54F" />
                <g stroke="#FFD54F" strokeWidth="1.4" strokeLinecap="round" style={{ filter: 'drop-shadow(0 6px 10px rgba(255,209,79,0.24))' }}>
                  <line x1="12" y1="0.5" x2="12" y2="3.6" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(45 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(90 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(135 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(180 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(225 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(270 12 12)" />
                  <line x1="12" y1="0.5" x2="12" y2="3.6" transform="rotate(315 12 12)" />
                </g>
              </svg>
            )}
            </div>
          </>
      );
    };

    // Hidden auto-lowering: when `autoLowering` is true, trees will gradually move down.
    useEffect(() => {
      if (autoLowering) {
        if (lowerIntervalRef.current) window.clearInterval(lowerIntervalRef.current);
        lowerIntervalRef.current = window.setInterval(() => {
          setTreeOffset(prev => Math.max(prev - 4, -160));
        }, 220);
      }
      return () => {
        if (lowerIntervalRef.current) {
          window.clearInterval(lowerIntervalRef.current);
          lowerIntervalRef.current = null;
        }
      };
    }, [autoLowering]);

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-b ${getBackgroundGradient()} transition-all duration-1000 overflow-hidden`}
      style={{ animation: showWrong ? 'screenShake 900ms cubic-bezier(.36,.07,.19,.97)' : undefined }}
    >
      {/* Gökyüzü elementleri */}
      {getSkyElements()}
      {/* Persistent white clouds for question screens (duplicates of wrong-state clouds) */}
      {answeredCorrectly === null && (
        <>
          {theme === 'positive' && (
            <>
              <i className="ri-cloud-fill z-30 text-8xl absolute top-56 left-40 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(2)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.18)', WebkitTextStroke: '0.6px rgba(0,0,0,0.06)' }}></i>
              <i className="ri-cloud-fill z-30 text-7xl absolute top-72 right-64 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(1.25) translateX(8%)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
              {/* Copy of the large left cloud placed near the right cloud */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', right: '136px', top: '50%', transform: 'translateY(-50%) scale(2)', transformOrigin: 'center', opacity: 0.98, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.18)', WebkitTextStroke: '0.6px rgba(0,0,0,0.06)' }}></i>
              <i className="ri-cloud-fill z-30 text-7xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '300px', top: '40%', transform: 'translateY(-34%) scale(1.28)', transformOrigin: 'center', opacity: 0.94, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 7px 14px rgba(0,0,0,0.14)', WebkitTextStroke: '0.45px rgba(0,0,0,0.045)' }}></i>
              {/* small copy slightly left of the under-copy */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '124px', top: '44%', transform: 'translateY(-30%) scale(1.42)', transformOrigin: 'center', opacity: 0.94, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 16px rgba(0,0,0,0.14)', WebkitTextStroke: '0.5px rgba(0,0,0,0.045)' }}></i>
            </>
          )}

          {theme === 'negative' && (
            <>
              <i className="ri-cloud-fill z-30 text-9xl absolute top-48 right-96 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(1.25) translateX(8%)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
              <i className="ri-cloud-fill z-30 text-8xl absolute top-60 left-40 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(2)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
              {/* Copy of the large left cloud placed near the right cloud for negative theme */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', right: '166px', top: '50%', transform: 'translateY(-50%) scale(2)', transformOrigin: 'center', opacity: 0.98, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
              <i className="ri-cloud-fill z-30 text-7xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '300px', top: '42%', transform: 'translateY(-30%) scale(1.25)', transformOrigin: 'center', opacity: 0.92, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 6px 13px rgba(0,0,0,0.13)', WebkitTextStroke: '0.42px rgba(0,0,0,0.043)' }}></i>
              {/* small copy slightly left of the under-copy */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '124px', top: '46%', transform: 'translateY(-26%) scale(1.38)', transformOrigin: 'center', opacity: 0.92, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 7px 14px rgba(0,0,0,0.13)', WebkitTextStroke: '0.48px rgba(0,0,0,0.044)' }}></i>
            </>
          )}
          {theme === 'neutral' && (
            <>
              <i className="ri-cloud-fill z-30 text-8xl absolute top-56 left-40 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(2)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.18)', WebkitTextStroke: '0.6px rgba(0,0,0,0.06)' }}></i>
              <i className="ri-cloud-fill z-30 text-7xl absolute top-72 right-64 drop-shadow-lg" style={{ color: '#ffffff', transform: 'scale(1.25) translateX(8%)', transformOrigin: 'center', opacity: 1, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.16)', WebkitTextStroke: '0.5px rgba(0,0,0,0.05)' }}></i>
              {/* Copy for neutral as well */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', right: '136px', top: '50%', transform: 'translateY(-50%) scale(2)', transformOrigin: 'center', opacity: 0.98, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 8px 18px rgba(0,0,0,0.18)', WebkitTextStroke: '0.6px rgba(0,0,0,0.06)' }}></i>
              <i className="ri-cloud-fill z-30 text-7xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '300px', top: '44%', transform: 'translateY(-30%) scale(1.22)', transformOrigin: 'center', opacity: 0.9, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 6px 12px rgba(0,0,0,0.12)', WebkitTextStroke: '0.4px rgba(0,0,0,0.04)' }}></i>
              {/* small copy slightly left of the under-copy */}
              <i className="ri-cloud-fill z-30 text-8xl absolute drop-shadow-lg" style={{ color: '#ffffff', left: '124px', top: '48%', transform: 'translateY(-26%) scale(1.32)', transformOrigin: 'center', opacity: 0.9, transition: 'opacity 220ms ease, transform 320ms ease', textShadow: '0 6px 12px rgba(0,0,0,0.12)', WebkitTextStroke: '0.44px rgba(0,0,0,0.042)' }}></i>
            </>
          )}
        </>
      )}
      {/* Storm/dusk overlay (always mounted) - fades in when wrong answer shown */}
      <div className="absolute inset-0 pointer-events-none z-40" style={{ transition: 'opacity 800ms ease', opacity: (showWrong && answeredCorrectly === false) ? 1 : 0, background: 'linear-gradient(rgba(10,18,28,0.0), rgba(6,10,16,0.28))' }} />

      {/* drifting cloud silhouettes repeated across the width (fades in) */}
      <div className="absolute inset-0 pointer-events-none z-45" style={{ transition: 'opacity 900ms ease', opacity: (showWrong && answeredCorrectly === false) ? 1 : 0, backgroundImage: 'url("data:image/svg+xml;utf8,<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"1600\\" height=\\"400\\"><g fill=\\"%23010b12\\" opacity=\\"0.07\\"><ellipse cx=\\"200\\" cy=\\"80\\" rx=\\"200\\" ry=\\"60\\"/><ellipse cx=\\"600\\" cy=\\"60\\" rx=\\"260\\" ry=\\"70\\"/><ellipse cx=\\"1000\\" cy=\\"90\\" rx=\\"220\\" ry=\\"65\\"/><ellipse cx=\\"1400\\" cy=\\"70\\" rx=\\"240\\" ry=\\"72\\"/></g></svg>" )', backgroundRepeat: 'repeat-x', backgroundPosition: 'top center', mixBlendMode: 'multiply', transform: 'translateY(-8px)' }} />

      {/* rain layers (two parallax layers) - opacity driven for fade */}
      <div className="absolute inset-0 pointer-events-none z-50" style={{ overflow: 'hidden', transition: 'opacity 900ms ease', opacity: (showWrong && answeredCorrectly === false) ? 1 : 0 }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(transparent 40%, rgba(255,255,255,0.06) 41%, rgba(255,255,255,0.06) 42%, transparent 43%)', backgroundSize: '2px 20px', opacity: 0.6, animation: 'rainFall 700ms linear infinite' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(transparent 60%, rgba(255,255,255,0.03) 61%, rgba(255,255,255,0.03) 62%, transparent 63%)', backgroundSize: '1px 14px', opacity: 0.45, animation: 'rainFall 1100ms linear infinite', animationDelay: '120ms' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.06)', mixBlendMode: 'overlay' }} />
      </div>

      {/* lightning ambiance flash (plays when showWrong true) - animation toggled */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 60, opacity: (showWrong && answeredCorrectly === false) ? 1 : 0, animation: (showWrong && answeredCorrectly === false) ? 'lightningFlash 900ms ease-in-out 1' : undefined, transition: 'opacity 400ms ease' }} />

      {/* Moon overlays: appear at sun positions during wrong answers (higher z-index to ensure visibility) */}
      <div className="absolute right-8 top-24 z-60 pointer-events-none" style={{ display: showWrong ? 'block' : 'none' }}>
        <img
          src="/ay.svg"
          alt="moon"
          draggable={false}
          className="pointer-events-none"
          style={{ width: 220, height: 'auto', filter: 'drop-shadow(0 6px 14px rgba(30,41,59,0.06))' }}
          onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
        />
      </div>
      {/* single moon overlay (kept only one to avoid duplicates) */}
      
      {/* Uzak dağlar - perspektif */}
      <div className="absolute bottom-48 left-0 right-0 h-32">
        <div className={`absolute inset-0 ${
          theme === 'positive' 
            ? 'bg-gradient-to-t from-emerald-300/40 to-transparent' 
            : 'bg-gradient-to-t from-gray-400/40 to-transparent'
        }`}>
          <i className="ri-mountain-line text-9xl text-emerald-400/30 absolute left-10 bottom-0"></i>
          <i className="ri-mountain-line text-8xl text-teal-400/30 absolute right-20 bottom-0"></i>
        </div>
      </div>

      {/* Orta plan - çim ve doğa (kullanılabilir bir ground görseli varsa /ground.png kullanılacak, yoksa fallback gradient) */}
      {useGroundImg ? (
        <img
          src={groundSrc}
          alt="ground"
          className="absolute left-0 right-0 h-96 w-full object-cover z-0"
          style={{ bottom: '-56px', animation: 'groundEnter 600ms cubic-bezier(.2,.9,.2,1) both' }}
          onError={() => {
            if (groundSrc === '/ground.svg') {
              setGroundSrc('/ground.png');
            } else {
              setUseGroundImg(false);
            }
          }}
        />
      ) : (
        <div className="absolute left-0 right-0 h-96 bg-gradient-to-t from-green-500/40 via-emerald-400/30 to-transparent" style={{ bottom: '-56px' }}></div>
      )}

      {/* Trees placed across the scene just above the ground */}
      <div className="absolute left-0 right-0 pointer-events-none z-10" style={{ bottom: `${treeOffset}px` }}>
        <div style={{ position: 'absolute', left: '6%', bottom: 0 }}>
          <Tree scale={0.92} flip={false} isWrong={showWrong} />
        </div>
        <div style={{ position: 'absolute', left: '22%', bottom: 0 }}>
          <Tree scale={1.12} flip={true} isWrong={showWrong} />
        </div>
        <div style={{ position: 'absolute', left: '44%', bottom: 0 }}>
          <Tree scale={0.82} flip={false} isWrong={showWrong} />
        </div>
        <div style={{ position: 'absolute', left: '66%', bottom: 0 }}>
          <Tree scale={1.0} flip={false} isWrong={showWrong} />
        </div>
        <div style={{ position: 'absolute', left: '84%', bottom: 0 }}>
          <Tree scale={0.74} flip={true} isWrong={showWrong} />
        </div>
      </div>

      {/* Tree position controlled via assistant commands; no on-screen controls */}
      
      {/* Tema elementleri ve doğa */}
      {getThemeElements()}

      {/* Kutlama animasyonu */}
      {showCelebration && (
        <div
          className="absolute bottom-0 z-30 pointer-events-none"
          style={{
              left: showCelebration ? '0%' : '-30%',
              transform: 'translateX(0%)',
              animation: showCelebration && !isHidingCelebration ? 'celebrateIn 420ms cubic-bezier(.2,.9,.2,1) forwards' : isHidingCelebration ? 'celebrateOut 420ms cubic-bezier(.2,.9,.2,1) forwards' : undefined
          }}
        >
          <img
            src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/554baf9496b445d209d0b74b2df3d51f.png"
            alt="Kutlama"
            className="h-96 w-auto object-contain drop-shadow-2xl"
          />
        </div>
      )}

      {/* Yıldız/parıltı animasyonları - sadece doğru cevapta görünür, soru alanı çerçevesinin dışında (sağ & sol) */}
      {showCelebration && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {/* Left cluster - kept outside question frame */}
          <div className="absolute" style={{ left: '6%', top: '46%' }}>
            {[0,1,2].map(i => (
              <svg
                key={`l-${i}`}
                viewBox="0 0 24 24"
                style={{
                  position: 'absolute',
                  left: `${i * 48}px`,
                  width: `${96 + i * 28}px`,
                  height: 'auto',
                  fill: theme === 'positive' ? '#F59E0B' : theme === 'negative' ? '#9CA3AF' : (i % 2 ? '#60A5FA' : '#FDE68A'),
                  opacity: 0,
                  transformOrigin: 'center',
                  animation: `starSparkleLarge 1600ms cubic-bezier(.2,.9,.3,1) ${i * 160}ms both`
                }}
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.897 4.666 23.16l1.4-8.162L.132 9.21l8.2-1.192z" />
              </svg>
            ))}
          </div>

          {/* Right cluster - outside question frame, slightly offset vertically to avoid aligning with other elements */}
          <div className="absolute" style={{ right: '6%', top: '46%' }}>
            {[0,1,2].map(i => (
              <svg
                key={`r-${i}`}
                viewBox="0 0 24 24"
                style={{
                  position: 'absolute',
                  right: `${i * 48}px`,
                  width: `${96 + i * 28}px`,
                  height: 'auto',
                  fill: theme === 'positive' ? '#F59E0B' : theme === 'negative' ? '#9CA3AF' : (i % 2 ? '#60A5FA' : '#FDE68A'),
                  opacity: 0,
                  transformOrigin: 'center',
                  animation: `starSparkleLarge 1600ms cubic-bezier(.2,.9,.3,1) ${i * 180}ms both`
                }}
              >
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.897 4.666 23.16l1.4-8.162L.132 9.21l8.2-1.192z" />
              </svg>
            ))}
          </div>
        </div>
      )}

      {showWrong && (
        <>
        <div className="absolute inset-0 pointer-events-none z-50" style={{ pointerEvents: 'none' }}>
          {/* Dramatic lightning strikes + ground impact at the star cluster positions */}
          <div className={
            theme === 'positive' ? 'absolute top-56 left-40' :
            theme === 'negative' ? 'absolute top-60 left-40' :
            'absolute top-56 left-40'
          } style={{ transform: 'translateX(0px) translateY(80px)', zIndex: 9999 }}>
            <svg viewBox="0 0 24 48" style={{ position: 'relative', zIndex: 9999, width: '110px', height: 'auto', filter: 'drop-shadow(0 14px 28px #FFD54F)', transformOrigin: 'top center', animation: showWrong && !isHidingWrong ? 'lightningEnter 420ms cubic-bezier(.2,.8,.2,1) forwards' : isHidingWrong ? 'lightningExit 420ms cubic-bezier(.2,.8,.2,1) forwards' : undefined, opacity: 1 }}>
              <path fill="#FFD54F" d="M13 0 L6 18h7l-2 20 12-22h-8l-1-16z" />
            </svg>
          </div>

          <div className={
            theme === 'positive' ? 'absolute top-64 right-56' :
            theme === 'negative' ? 'absolute top-40 right-80' :
            'absolute top-64 right-56'
          } style={{ transform: 'translateX(24px) translateY(260px) scale(1)', zIndex: 9999 }}>
            <svg viewBox="0 0 24 56" style={{ position: 'relative', zIndex: 9999, width: '88px', height: 'auto', filter: 'drop-shadow(0 12px 20px #FFD54F)', transformOrigin: 'top center', animation: showWrong && !isHidingWrong ? 'lightningEnter 420ms cubic-bezier(.2,.8,.2,1) 120ms forwards' : isHidingWrong ? 'lightningExit 420ms cubic-bezier(.2,.8,.2,1) forwards' : undefined, opacity: 1 }}>
              <path fill="#FFD54F" d="M13 0 L5 20h8l-2 22 14-24h-8l-2-18z" />
            </svg>
          </div>
        </div>
        
        <div
          className="absolute bottom-0 z-30 pointer-events-none"
          style={{
              right: showWrong ? '0%' : '-30%',
              transform: 'translateX(0%)',
              animation: showWrong && !isHidingWrong ? 'celebrateIn 420ms cubic-bezier(.2,.9,.2,1) forwards' : isHidingWrong ? 'celebrateOut 420ms cubic-bezier(.2,.9,.2,1) forwards' : undefined
          }}
        >
          <img
            src={mutsuzImg}
            alt="Yanlış"
            className="h-96 w-auto object-contain drop-shadow-2xl"
          />
        </div>
        </>
      )}

      {/* Modern platform/zemin */}
      {!useGroundImg && (
      <div className="absolute bottom-0 left-0 right-0">
        {/* Dekoratif küçük saksılar (ri-plant-line) kaldırıldı */}

        {/* Ana platform - 3 katmanlı tasarım */}
        <div className="relative">
          {/* Üst dekoratif şerit */}
          <div className={`h-3 ${
            theme === 'positive'
              ? 'bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500'
              : theme === 'negative'
              ? 'bg-gradient-to-r from-gray-400 via-slate-400 to-gray-400'
              : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400'
          } shadow-lg relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  left: `${i * 6.66}%`,
                  animationDelay: `${i * 0.2}s`
                }}
              ></div>
            ))}
          </div>

          {/* Ana platform gövdesi */}
          <div className={`h-24 relative ${
            theme === 'positive'
              ? 'bg-gradient-to-b from-emerald-600 via-teal-600 to-cyan-700'
              : theme === 'negative'
              ? 'bg-gradient-to-b from-gray-600 via-slate-600 to-gray-700'
              : 'bg-gradient-to-b from-green-600 via-emerald-600 to-teal-700'
          } shadow-2xl overflow-hidden`}>
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-x-0 h-px bg-white/10"
                  style={{ top: `${(i + 1) * 8}%` }}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0 opacity-30">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-white/20"
                  style={{ left: `${i * 2}%` }}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0">
              {[...Array(40)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full animate-pulse"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            
            <div className={`absolute inset-0 ${useGroundImg ? 'opacity-0' : 'opacity-20'}`}>
              {[...Array(6)].map((row, i) => (
                <div key={`row-${i}`} className="flex" style={{ marginTop: `${i * 16}px` }}>
                  {[...Array(20)].map((_, j) => (
                    <div
                      key={`brick-${i}-${j}`}
                      className="w-12 h-4 border border-white/30 mr-1"
                      style={{ marginLeft: i % 2 === 0 ? '0' : '24px' }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className={`h-4 ${
            theme === 'positive'
              ? 'bg-gradient-to-b from-cyan-800 to-teal-900'
              : theme === 'negative'
              ? 'bg-gradient-to-b from-gray-700 to-gray-800'
              : 'bg-gradient-to-b from-teal-800 to-emerald-900'
          }`}></div>
        </div>

        <div className="h-16 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>
      </div>
      )}

      {/* Öğrenci karakterleri kaldırıldı (silüetler) */}

      {/* İlerleme göstergesi */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="relative"
          >
            <div className={`w-5 h-5 rounded-full transition-all duration-500 ${
              i < characterPosition / 10
                ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 scale-150 shadow-xl ring-4 ring-white/60' 
                : 'bg-white/50 scale-100 shadow-md'
            }`}></div>
            {i < characterPosition / 10 && (
              <>
                <div className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"></div>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm opacity-50"></div>
              </>
            )}
          </div>
        ))}
      </div>

      <style>{`
          @keyframes celebrateLeft {
            0% {
              left: -30%;
              opacity: 0;
            }
            20% {
              left: 0%;
              opacity: 1;
            }
            80% {
              left: 0%;
              opacity: 1;
            }
            100% {
              left: 0%;
              opacity: 1;
            }
          }
          @keyframes celebrateRight {
            0% {
              right: -30%;
              opacity: 0;
            }
            20% {
              right: 0%;
              opacity: 1;
            }
            80% {
              right: 0%;
              opacity: 1;
            }
            100% {
              right: 0%;
              opacity: 1;
            }
          }
          @keyframes celebrateIn {
            0% { transform: translateX(-30%); opacity: 0 }
            40% { transform: translateX(0%); opacity: 1 }
            100% { transform: translateX(0%); opacity: 1 }
          }
          @keyframes celebrateOut {
            0% { transform: translateX(0%); opacity: 1 }
            100% { transform: translateX(-30%); opacity: 0 }
          }
          @keyframes starSparkle {
            0% { transform: translateY(6px) scale(0.6); opacity: 0; filter: blur(1px); }
            30% { transform: translateY(0px) scale(1.05); opacity: 1; filter: blur(0); }
            70% { transform: translateY(-4px) scale(0.95); opacity: 0.9; }
            100% { transform: translateY(-12px) scale(0.6); opacity: 0; }
          }
          @keyframes starSparkleLarge {
            0% { transform: translateY(20px) scale(0.8) rotate(0deg); opacity: 0; filter: blur(2px); }
            25% { transform: translateY(0px) scale(1.4) rotate(8deg); opacity: 1; filter: blur(0); }
            60% { transform: translateY(-12px) scale(1.2) rotate(-6deg); opacity: 0.95; }
            100% { transform: translateY(-36px) scale(0.8) rotate(0deg); opacity: 0; }
          }
          @keyframes lightningFlash {
            0% { opacity: 0; transform: translateY(-6px) scale(0.9) rotate(-6deg); filter: blur(2px); }
            10% { opacity: 1; transform: translateY(0px) scale(1.05) rotate(2deg); filter: blur(0); }
            30% { opacity: 0.9; transform: translateY(-4px) scale(1) rotate(-2deg); }
            60% { opacity: 0.6; transform: translateY(-8px) scale(0.95) rotate(2deg); }
            100% { opacity: 0; transform: translateY(-12px) scale(0.9) rotate(0deg); }
          }
          @keyframes lightningEnter {
            0% { opacity: 0; transform: translateY(-80px) scaleY(0.95) scaleX(0.95); }
            60% { opacity: 1; transform: translateY(0px) scaleY(1.0) scaleX(1.0); }
            100% { opacity: 1; transform: translateY(0px) scaleY(1.0) scaleX(1.0); }
          }
          @keyframes lightningExit {
            0% { opacity: 1; transform: translateY(0px) scaleY(1.0) scaleX(1.0); }
            100% { opacity: 0; transform: translateY(24px) scaleY(0.95) scaleX(0.98); }
          }
          @keyframes rainFall {
            0% { background-position: 0 -10px; }
            100% { background-position: 0 20px; }
          }
          @keyframes groundEnter {
            0% { transform: translateY(18px) scale(1.02); opacity: 0; }
            40% { transform: translateY(6px) scale(1.01); opacity: 0.6; }
            100% { transform: translateY(0px) scale(1); opacity: 1; }
          }
          @keyframes impactPulse {
            0% { opacity: 0; transform: scale(0.8); filter: blur(4px); }
            18% { opacity: 0.7; transform: scale(1.0); filter: blur(0); }
            50% { opacity: 0.35; transform: scale(1.12); }
            100% { opacity: 0; transform: scale(1.28); }
          }
          @keyframes screenShake {
            0% { transform: translateX(0); }
            12% { transform: translateX(-4px) translateY(0); }
            24% { transform: translateX(4px) translateY(-1px); }
            36% { transform: translateX(-2px) translateY(0); }
            48% { transform: translateX(2px) translateY(-1px); }
            100% { transform: translateX(0); }
          }
      `}</style>
    </div>
  );
}
