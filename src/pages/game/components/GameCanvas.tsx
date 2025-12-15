import { useEffect, useState } from 'react';

interface GameCanvasProps {
  theme: 'neutral' | 'positive' | 'negative';
  questionTheme: string;
  answeredCorrectly: boolean | null;
}

export default function GameCanvas({ theme, questionTheme, answeredCorrectly }: GameCanvasProps) {
  const [characterPosition, setCharacterPosition] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    if (answeredCorrectly === true) {
      setCharacterPosition(prev => prev + 10);
      setShowCelebration(true);
      setTimeout(() => setShowCelebration(false), 2500);
    }
  }, [answeredCorrectly]);

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
          <i className="ri-sun-line text-7xl text-yellow-400 absolute top-16 right-32 animate-pulse drop-shadow-2xl"></i>
          <i className="ri-cloud-line text-6xl text-white/90 absolute top-24 left-40 animate-bounce drop-shadow-lg" style={{ animationDuration: '3s' }}></i>
          <i className="ri-cloud-line text-5xl text-white/80 absolute top-40 right-64 animate-bounce drop-shadow-lg" style={{ animationDuration: '4s' }}></i>
          <i className="ri-flight-takeoff-line text-4xl text-gray-700 absolute top-32 left-1/3 animate-pulse" style={{ animationDuration: '5s' }}></i>
        </>
      );
    } else if (theme === 'negative') {
      return (
        <>
          <i className="ri-cloud-line text-7xl text-gray-600 absolute top-16 right-32 drop-shadow-lg"></i>
          <i className="ri-cloud-line text-6xl text-gray-700 absolute top-28 left-40 drop-shadow-lg"></i>
          <i className="ri-flashlight-line text-5xl text-yellow-600 absolute top-36 right-48 animate-pulse"></i>
        </>
      );
    }
    return (
      <>
        <i className="ri-sun-line text-7xl text-yellow-300 absolute top-16 right-32 drop-shadow-xl"></i>
        <i className="ri-cloud-line text-6xl text-white/70 absolute top-24 left-40 drop-shadow-lg"></i>
        <i className="ri-cloud-line text-5xl text-white/60 absolute top-40 right-56"></i>
      </>
    );
  };

  const getThemeElements = () => {
    const elements = [];
    const progress = characterPosition / 15;
    
    // El yıkama teması - lavabo/sabun
    if (questionTheme.includes('el') || questionTheme.includes('yıkama')) {
      elements.push(
        <div 
          key="sink" 
          className={`absolute bottom-40 transition-all duration-1000 transform ${
            progress >= 2 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          style={{ right: '25%' }}
        >
          <div className={`w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${
            theme === 'positive' ? 'bg-gradient-to-br from-white to-teal-50 ring-4 ring-teal-300/50' : 'bg-gray-400'
          }`}>
            <i className={`ri-hand-sanitizer-line text-7xl ${
              theme === 'positive' ? 'text-teal-500' : 'text-gray-600'
            }`}></i>
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"></div>
        </div>
      );
    }
    
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

    // Doğa elementleri - ağaçlar
    const trees = [
      { left: '8%', delay: 0, size: 'text-9xl', color: 'text-emerald-700' },
      { left: '18%', delay: 0.5, size: 'text-7xl', color: 'text-green-600' },
      { left: '28%', delay: 1, size: 'text-8xl', color: 'text-emerald-600' },
      { left: '38%', delay: 1.5, size: 'text-9xl', color: 'text-green-700' },
      { left: '48%', delay: 2, size: 'text-7xl', color: 'text-emerald-600' },
      { left: '58%', delay: 2.5, size: 'text-10xl', color: 'text-green-700' },
      { left: '68%', delay: 3, size: 'text-8xl', color: 'text-emerald-700' },
      { left: '78%', delay: 3.5, size: 'text-7xl', color: 'text-green-600' },
      { left: '88%', delay: 4, size: 'text-9xl', color: 'text-emerald-600' },
      { left: '95%', delay: 4.5, size: 'text-8xl', color: 'text-green-700' },
    ];

    trees.forEach((tree, index) => {
      elements.push(
        <div
          key={`tree-${index}`}
          className="absolute bottom-32 transition-all duration-1000 hover:scale-110"
          style={{ 
            left: tree.left,
            animationDelay: `${tree.delay}s`
          }}
        >
          <i className={`ri-tree-line ${tree.size} ${
            theme === 'positive' 
              ? tree.color
              : theme === 'negative'
              ? 'text-gray-600'
              : 'text-green-600'
          } drop-shadow-2xl filter brightness-110`}></i>
        </div>
      );
    });

    // Çalılar ve küçük bitkiler
    const bushes = [
      { left: '5%', icon: 'ri-plant-line', size: 'text-5xl', color: 'text-green-600' },
      { left: '12%', icon: 'ri-leaf-line', size: 'text-4xl', color: 'text-emerald-500' },
      { left: '22%', icon: 'ri-plant-line', size: 'text-6xl', color: 'text-green-700' },
      { left: '32%', icon: 'ri-leaf-line', size: 'text-5xl', color: 'text-emerald-600' },
      { left: '42%', icon: 'ri-plant-line', size: 'text-4xl', color: 'text-green-600' },
      { left: '52%', icon: 'ri-leaf-line', size: 'text-6xl', color: 'text-emerald-700' },
      { left: '62%', icon: 'ri-plant-line', size: 'text-5xl', color: 'text-green-600' },
      { left: '72%', icon: 'ri-leaf-line', size: 'text-4xl', color: 'text-emerald-600' },
      { left: '82%', icon: 'ri-plant-line', size: 'text-6xl', color: 'text-green-700' },
      { left: '92%', icon: 'ri-leaf-line', size: 'text-5xl', color: 'text-emerald-600' },
    ];

    bushes.forEach((bush, index) => {
      elements.push(
        <div
          key={`bush-${index}`}
          className="absolute bottom-24 transition-all duration-500 hover:scale-125"
          style={{ left: bush.left }}
        >
          <i className={`${bush.icon} ${bush.size} ${
            theme === 'positive' ? bush.color : 'text-gray-500'
          } drop-shadow-lg`}></i>
        </div>
      );
    });

    // Çiçekler ve çimler
    const flowers = [
      { left: '3%', icon: 'ri-flower-line', color: 'text-pink-500', size: 'text-4xl' },
      { left: '7%', icon: 'ri-plant-line', color: 'text-purple-500', size: 'text-3xl' },
      { left: '11%', icon: 'ri-leaf-line', color: 'text-green-500', size: 'text-3xl' },
      { left: '15%', icon: 'ri-flower-line', color: 'text-yellow-500', size: 'text-4xl' },
      { left: '19%', icon: 'ri-plant-line', color: 'text-pink-500', size: 'text-3xl' },
      { left: '24%', icon: 'ri-leaf-line', color: 'text-teal-500', size: 'text-3xl' },
      { left: '29%', icon: 'ri-flower-line', color: 'text-rose-500', size: 'text-4xl' },
      { left: '34%', icon: 'ri-plant-line', color: 'text-purple-500', size: 'text-3xl' },
      { left: '39%', icon: 'ri-leaf-line', color: 'text-green-500', size: 'text-3xl' },
      { left: '44%', icon: 'ri-flower-line', color: 'text-yellow-500', size: 'text-4xl' },
      { left: '49%', icon: 'ri-plant-line', color: 'text-pink-500', size: 'text-3xl' },
      { left: '54%', icon: 'ri-leaf-line', color: 'text-teal-500', size: 'text-3xl' },
      { left: '59%', icon: 'ri-flower-line', color: 'text-rose-500', size: 'text-4xl' },
      { left: '64%', icon: 'ri-plant-line', color: 'text-purple-500', size: 'text-3xl' },
      { left: '69%', icon: 'ri-leaf-line', color: 'text-green-500', size: 'text-3xl' },
      { left: '74%', icon: 'ri-flower-line', color: 'text-yellow-500', size: 'text-4xl' },
      { left: '79%', icon: 'ri-plant-line', color: 'text-pink-500', size: 'text-3xl' },
      { left: '84%', icon: 'ri-leaf-line', color: 'text-teal-500', size: 'text-3xl' },
      { left: '89%', icon: 'ri-flower-line', color: 'text-rose-500', size: 'text-4xl' },
      { left: '94%', icon: 'ri-plant-line', color: 'text-purple-500', size: 'text-3xl' },
      { left: '97%', icon: 'ri-leaf-line', color: 'text-green-500', size: 'text-3xl' },
    ];

    flowers.forEach((flower, index) => {
      elements.push(
        <div
          key={`flower-${index}`}
          className="absolute bottom-20 transition-all duration-500 hover:scale-125 animate-pulse"
          style={{ 
            left: flower.left,
            animationDuration: `${2 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        >
          <i className={`${flower.icon} ${flower.size} ${
            theme === 'positive' ? flower.color : 'text-gray-500'
          } drop-shadow-md`}></i>
        </div>
      );
    });

    // Kelebekler ve böcekler
    const butterflies = [
      { left: '20%', top: '35%', delay: 0 },
      { left: '45%', top: '25%', delay: 1 },
      { left: '70%', top: '30%', delay: 2 },
      { left: '85%', top: '40%', delay: 3 },
    ];

    butterflies.forEach((butterfly, index) => {
      elements.push(
        <div
          key={`butterfly-${index}`}
          className="absolute animate-bounce"
          style={{ 
            left: butterfly.left,
            top: butterfly.top,
            animationDuration: '3s',
            animationDelay: `${butterfly.delay}s`
          }}
        >
          <i className={`ri-bug-line text-3xl ${
            theme === 'positive' ? 'text-pink-400' : 'text-gray-400'
          } drop-shadow-lg`}></i>
        </div>
      );
    });

    // Taşlar ve kayalar
    const rocks = [
      { left: '10%', size: 'text-4xl' },
      { left: '25%', size: 'text-3xl' },
      { left: '40%', size: 'text-5xl' },
      { left: '55%', size: 'text-3xl' },
      { left: '70%', size: 'text-4xl' },
      { left: '85%', size: 'text-3xl' },
    ];

    rocks.forEach((rock, index) => {
      elements.push(
        <div
          key={`rock-${index}`}
          className="absolute bottom-28"
          style={{ left: rock.left }}
        >
          <i className={`ri-contrast-drop-2-line ${rock.size} ${
            theme === 'positive' ? 'text-gray-400' : 'text-gray-600'
          } drop-shadow-md`}></i>
        </div>
      );
    });

    return elements;
  };

  return (
    <div className={`absolute inset-0 bg-gradient-to-b ${getBackgroundGradient()} transition-all duration-1000 overflow-hidden`}>
      {/* Gökyüzü elementleri */}
      {getSkyElements()}
      
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

      {/* Orta plan - çim ve doğa */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-500/40 via-emerald-400/30 to-transparent"></div>
      
      {/* Tema elementleri ve doğa */}
      {getThemeElements()}

      {/* Kutlama animasyonu */}
      {showCelebration && (
        <div
          className="absolute bottom-28 z-30 pointer-events-none"
          style={{
              left: showCelebration ? '13%' : '-30%',
              transform: 'translateX(0%)',
              animation: 'celebrateLeft 2.5s linear'
          }}
        >
          <img
            src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/554baf9496b445d209d0b74b2df3d51f.png"
            alt="Kutlama"
            className="h-96 w-auto object-contain drop-shadow-2xl"
          />
        </div>
      )}

      {/* Modern platform/zemin */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Dekoratif çim detayları */}
        <div className="absolute -top-8 left-0 right-0 flex justify-around">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="relative">
              <i className={`ri-plant-line text-2xl ${
                theme === 'positive' ? 'text-green-500' : 'text-gray-500'
              } opacity-70 animate-pulse`} style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}></i>
            </div>
          ))}
        </div>

        {/* Ana platform - 3 katmanlı tasarım */}
          {/* Üst dekoratif şerit */}
          <div className={`h-3 ${
                    left: 13%;
                    opacity: 1;
              ? 'bg-gradient-to-r from-gray-400 via-slate-400 to-gray-400'
              : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400'
                    left: 13%;
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"></div>
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-1 h-1 bg-white rounded-full animate-pulse"
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
            
            <div className="absolute inset-0 opacity-20">
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
            transform: translateX(-90%) scale(0.6);
            opacity: 0;
          }
          20% {
            transform: translateX(-30%) scale(1.15);
            opacity: 1;
          }
          60% {
            transform: translateX(-20%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(-90%) scale(0.6);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
