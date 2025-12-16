import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/pages/game/components/GameCanvas.tsx");import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope;

let prevRefreshReg;
let prevRefreshSig;

if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react-swc can't detect preamble. Something is wrong."
    );
  }

  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}

import __vite__cjsImport2_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=afa8c616"; const _jsxDEV = __vite__cjsImport2_react_jsxDevRuntime["jsxDEV"]; const _Fragment = __vite__cjsImport2_react_jsxDevRuntime["Fragment"];
var _s = $RefreshSig$();
import __vite__cjsImport3_react from "/node_modules/.vite/deps/react.js?v=afa8c616"; const useEffect = __vite__cjsImport3_react["useEffect"]; const useState = __vite__cjsImport3_react["useState"];
import mutsuzImg from "/src/assets/mutsuz.png?import";
export default function GameCanvas({ theme, questionTheme, answeredCorrectly }) {
    _s();
    const [characterPosition, setCharacterPosition] = useState(0);
    const [showCelebration, setShowCelebration] = useState(false);
    const [showWrong, setShowWrong] = useState(false);
    const [isHidingWrong, setIsHidingWrong] = useState(false);
    const [isHidingCelebration, setIsHidingCelebration] = useState(false);
    const [useGroundImg, setUseGroundImg] = useState(true);
    const [groundSrc, setGroundSrc] = useState('/ground.svg');
    useEffect(()=>{
        let showTimer;
        if (answeredCorrectly === true) {
            setCharacterPosition((prev)=>prev + 10);
            // keep celebration visible until parent clears answeredCorrectly (next question)
            setShowCelebration(true);
        } else if (answeredCorrectly === false) {
            // Small delay before showing wrong effects so quick taps/new-question transitions
            // don't flash the large wrong-state visuals.
            const SHOW_DELAY = 160; // ms
            showTimer = setTimeout(()=>setShowWrong(true), SHOW_DELAY);
        // do NOT auto-hide; keep wrong visuals visible until answeredCorrectly becomes null
        } else {
            // During loading/new question ensure visuals are reset immediately
            setShowCelebration(false);
            setShowWrong(false);
        }
        return ()=>{
            if (showTimer) clearTimeout(showTimer);
        };
    }, [
        answeredCorrectly
    ]);
    const getThemeElements = ()=>{
        const elements = [];
        const progress = characterPosition / 15;
        // El yÄ±kama temasÄ± - lavabo/sabun (gÃ¶rsel kaldÄ±rÄ±ldÄ±)
        // DiÅ fÄ±rÃ§alama temasÄ±
        if (questionTheme.includes('diÅ') || questionTheme.includes('aÄÄ±z')) {
            elements.push(/*#__PURE__*/ _jsxDEV("div", {
                className: `absolute bottom-40 transition-all duration-1000 transform ${progress >= 4 ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-45'}`,
                style: {
                    left: '20%'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${theme === 'positive' ? 'bg-gradient-to-br from-white to-blue-50 ring-4 ring-blue-300/50' : 'bg-gray-400'}`,
                        children: /*#__PURE__*/ _jsxDEV("i", {
                            className: `ri-tooth-line text-7xl ${theme === 'positive' ? 'text-blue-500' : 'text-gray-600'}`
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, "tooth", true, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this));
        }
        // ÃÃ¶p/atÄ±k temasÄ±
        if (questionTheme.includes('Ã§Ã¶p') || questionTheme.includes('atÄ±k')) {
            elements.push(/*#__PURE__*/ _jsxDEV("div", {
                className: `absolute bottom-40 transition-all duration-1000 transform ${progress >= 6 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`,
                style: {
                    right: '35%'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${theme === 'positive' ? 'bg-gradient-to-br from-emerald-100 to-green-50 ring-4 ring-emerald-300/50' : 'bg-gray-500'}`,
                        children: /*#__PURE__*/ _jsxDEV("i", {
                            className: `ri-delete-bin-line text-7xl ${theme === 'positive' ? 'text-emerald-600' : 'text-gray-700'}`
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, "trash", true, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 74,
                columnNumber: 9
            }, this));
        }
        // Banyo/duÅ temasÄ±
        if (questionTheme.includes('banyo') || questionTheme.includes('duÅ')) {
            elements.push(/*#__PURE__*/ _jsxDEV("div", {
                className: `absolute bottom-40 transition-all duration-1000 transform ${progress >= 8 ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`,
                style: {
                    left: '30%'
                },
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: `w-32 h-32 flex items-center justify-center rounded-3xl shadow-2xl ${theme === 'positive' ? 'bg-gradient-to-br from-cyan-100 to-blue-50 ring-4 ring-cyan-300/50' : 'bg-gray-400'}`,
                        children: /*#__PURE__*/ _jsxDEV("i", {
                            className: `ri-water-flash-line text-7xl ${theme === 'positive' ? 'text-cyan-600' : 'text-gray-600'}`
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 106,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-36 h-4 bg-black/20 rounded-full blur-md"
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                ]
            }, "shower", true, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, this));
        }
        // AÄaÃ§ Ã¶Äeleri kaldÄ±rÄ±ldÄ± (gereksiz gÃ¶rsel yÃ¼k) - temiz arayÃ¼z iÃ§in.
        // ÃalÄ±lar ve kÃ¼Ã§Ã¼k bitkiler (plant-line) kaldÄ±rÄ±ldÄ± â sadeleÅtirme.
        // ÃiÃ§ekler ve Ã§imler
        const flowers = [
            {
                left: '3%',
                icon: 'ri-flower-line',
                color: 'text-pink-500',
                size: 'text-4xl'
            },
            {
                left: '7%',
                icon: 'ri-plant-line',
                color: 'text-purple-500',
                size: 'text-3xl'
            },
            {
                left: '11%',
                icon: 'ri-leaf-line',
                color: 'text-green-500',
                size: 'text-3xl'
            },
            {
                left: '15%',
                icon: 'ri-flower-line',
                color: 'text-yellow-500',
                size: 'text-4xl'
            },
            {
                left: '19%',
                icon: 'ri-plant-line',
                color: 'text-pink-500',
                size: 'text-3xl'
            },
            {
                left: '24%',
                icon: 'ri-leaf-line',
                color: 'text-teal-500',
                size: 'text-3xl'
            },
            {
                left: '29%',
                icon: 'ri-flower-line',
                color: 'text-rose-500',
                size: 'text-4xl'
            },
            {
                left: '34%',
                icon: 'ri-plant-line',
                color: 'text-purple-500',
                size: 'text-3xl'
            },
            {
                left: '39%',
                icon: 'ri-leaf-line',
                color: 'text-green-500',
                size: 'text-3xl'
            },
            {
                left: '44%',
                icon: 'ri-flower-line',
                color: 'text-yellow-500',
                size: 'text-4xl'
            },
            {
                left: '49%',
                icon: 'ri-plant-line',
                color: 'text-pink-500',
                size: 'text-3xl'
            },
            {
                left: '54%',
                icon: 'ri-leaf-line',
                color: 'text-teal-500',
                size: 'text-3xl'
            },
            {
                left: '59%',
                icon: 'ri-flower-line',
                color: 'text-rose-500',
                size: 'text-4xl'
            },
            {
                left: '64%',
                icon: 'ri-plant-line',
                color: 'text-purple-500',
                size: 'text-3xl'
            },
            {
                left: '69%',
                icon: 'ri-leaf-line',
                color: 'text-green-500',
                size: 'text-3xl'
            },
            {
                left: '74%',
                icon: 'ri-flower-line',
                color: 'text-yellow-500',
                size: 'text-4xl'
            },
            {
                left: '79%',
                icon: 'ri-plant-line',
                color: 'text-pink-500',
                size: 'text-3xl'
            },
            {
                left: '84%',
                icon: 'ri-leaf-line',
                color: 'text-teal-500',
                size: 'text-3xl'
            },
            {
                left: '89%',
                icon: 'ri-flower-line',
                color: 'text-rose-500',
                size: 'text-4xl'
            },
            {
                left: '94%',
                icon: 'ri-plant-line',
                color: 'text-purple-500',
                size: 'text-3xl'
            },
            {
                left: '97%',
                icon: 'ri-leaf-line',
                color: 'text-green-500',
                size: 'text-3xl'
            }
        ];
        flowers.forEach((flower, index)=>{
            elements.push(/*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-20 transition-all duration-500 hover:scale-125 animate-pulse",
                style: {
                    left: flower.left,
                    animationDuration: `${2 + Math.random() * 2}s`,
                    animationDelay: `${Math.random() * 2}s`
                },
                children: /*#__PURE__*/ _jsxDEV("i", {
                    className: `${flower.icon} ${flower.size} ${theme === 'positive' ? flower.color : 'text-gray-500'} drop-shadow-md`
                }, void 0, false, {
                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, `flower-${index}`, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this));
        });
        // Kelebek ve bÃ¶cek animasyonlarÄ± kaldÄ±rÄ±ldÄ± (gÃ¶sterilmeyecek)
        // TaÅlar ve kayalar
        const rocks = [
            {
                left: '10%',
                size: 'text-4xl'
            },
            {
                left: '25%',
                size: 'text-3xl'
            },
            {
                left: '40%',
                size: 'text-5xl'
            },
            {
                left: '55%',
                size: 'text-3xl'
            },
            {
                left: '70%',
                size: 'text-4xl'
            },
            {
                left: '85%',
                size: 'text-3xl'
            }
        ];
        rocks.forEach((rock, index)=>{
            elements.push(/*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-28",
                style: {
                    left: rock.left
                },
                children: /*#__PURE__*/ _jsxDEV("i", {
                    className: `ri-contrast-drop-2-line ${rock.size} ${theme === 'positive' ? 'text-gray-400' : 'text-gray-600'} drop-shadow-md`
                }, void 0, false, {
                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, this)
            }, `rock-${index}`, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 176,
                columnNumber: 9
            }, this));
        });
        return elements;
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: `absolute inset-0 bg-gradient-to-b ${getBackgroundGradient()} transition-all duration-1000 overflow-hidden`,
        style: {
            animation: showWrong ? 'screenShake 900ms cubic-bezier(.36,.07,.19,.97)' : undefined
        },
        children: [
            getSkyElements(),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-48 left-0 right-0 h-32",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: `absolute inset-0 ${theme === 'positive' ? 'bg-gradient-to-t from-emerald-300/40 to-transparent' : 'bg-gradient-to-t from-gray-400/40 to-transparent'}`,
                    children: [
                        /*#__PURE__*/ _jsxDEV("i", {
                            className: "ri-mountain-line text-9xl text-emerald-400/30 absolute left-10 bottom-0"
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("i", {
                            className: "ri-mountain-line text-8xl text-teal-400/30 absolute right-20 bottom-0"
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 207,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                    lineNumber: 201,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            useGroundImg && (answeredCorrectly === true || answeredCorrectly === null) ? /*#__PURE__*/ _jsxDEV("img", {
                src: groundSrc,
                alt: "ground",
                className: "absolute bottom-0 left-0 right-0 h-64 w-full object-cover z-0",
                style: {
                    animation: 'groundEnter 600ms cubic-bezier(.2,.9,.2,1) both'
                },
                onError: ()=>{
                    if (groundSrc === '/ground.svg') {
                        setGroundSrc('/ground.png');
                    } else {
                        setUseGroundImg(false);
                    }
                }
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, this) : /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-green-500/40 via-emerald-400/30 to-transparent"
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this),
            getThemeElements(),
            showCelebration && /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-28 z-30 pointer-events-none",
                style: {
                    left: showCelebration ? '0%' : '-30%',
                    transform: 'translateX(0%)',
                    animation: showCelebration && !isHidingCelebration ? 'celebrateIn 420ms cubic-bezier(.2,.9,.2,1) forwards' : isHidingCelebration ? 'celebrateOut 420ms cubic-bezier(.2,.9,.2,1) forwards' : undefined
                },
                children: /*#__PURE__*/ _jsxDEV("img", {
                    src: "https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/554baf9496b445d209d0b74b2df3d51f.png",
                    alt: "Kutlama",
                    className: "h-96 w-auto object-contain drop-shadow-2xl"
                }, void 0, false, {
                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                    lineNumber: 243,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 235,
                columnNumber: 9
            }, this),
            showCelebration && /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute inset-0 pointer-events-none z-20",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute",
                        style: {
                            left: '6%',
                            top: '46%'
                        },
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ _jsxDEV("svg", {
                                viewBox: "0 0 24 24",
                                style: {
                                    position: 'absolute',
                                    left: `${i * 36}px`,
                                    width: `${64 + i * 20}px`,
                                    height: 'auto',
                                    fill: theme === 'positive' ? '#F59E0B' : theme === 'negative' ? '#9CA3AF' : i % 2 ? '#60A5FA' : '#FDE68A',
                                    opacity: 0,
                                    transformOrigin: 'center',
                                    animation: `starSparkleLarge 1600ms cubic-bezier(.2,.9,.3,1) ${i * 160}ms both`
                                },
                                children: /*#__PURE__*/ _jsxDEV("path", {
                                    d: "M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.897 4.666 23.16l1.4-8.162L.132 9.21l8.2-1.192z"
                                }, void 0, false, {
                                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this)
                            }, `l-${i}`, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 257,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute",
                        style: {
                            right: '6%',
                            top: '46%'
                        },
                        children: [
                            0,
                            1,
                            2
                        ].map((i)=>/*#__PURE__*/ _jsxDEV("svg", {
                                viewBox: "0 0 24 24",
                                style: {
                                    position: 'absolute',
                                    right: `${i * 36}px`,
                                    width: `${64 + i * 20}px`,
                                    height: 'auto',
                                    fill: theme === 'positive' ? '#F59E0B' : theme === 'negative' ? '#9CA3AF' : i % 2 ? '#60A5FA' : '#FDE68A',
                                    opacity: 0,
                                    transformOrigin: 'center',
                                    animation: `starSparkleLarge 1600ms cubic-bezier(.2,.9,.3,1) ${i * 180}ms both`
                                },
                                children: /*#__PURE__*/ _jsxDEV("path", {
                                    d: "M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.4 8.162L12 18.897 4.666 23.16l1.4-8.162L.132 9.21l8.2-1.192z"
                                }, void 0, false, {
                                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this)
                            }, `r-${i}`, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 277,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 253,
                columnNumber: 9
            }, this),
            showWrong && /*#__PURE__*/ _jsxDEV(_Fragment, {
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute inset-0 pointer-events-none z-50",
                        style: {
                            pointerEvents: 'none'
                        },
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: theme === 'positive' ? 'absolute top-56 left-40' : theme === 'negative' ? 'absolute top-60 left-40' : 'absolute top-56 left-40',
                                style: {
                                    transform: 'translateX(8px) translateY(40px)',
                                    zIndex: 9999
                                },
                                children: /*#__PURE__*/ _jsxDEV("svg", {
                                    viewBox: "0 0 24 48",
                                    style: {
                                        position: 'relative',
                                        zIndex: 9999,
                                        width: '76px',
                                        height: 'auto',
                                        filter: 'drop-shadow(0 10px 18px #FFD54F)',
                                        transformOrigin: 'top center',
                                        animation: showWrong && !isHidingWrong ? 'lightningEnter 420ms cubic-bezier(.2,.8,.2,1) forwards' : isHidingWrong ? 'lightningExit 420ms cubic-bezier(.2,.8,.2,1) forwards' : undefined,
                                        opacity: 1
                                    },
                                    children: /*#__PURE__*/ _jsxDEV("path", {
                                        fill: "#FFD54F",
                                        d: "M13 0 L6 18h7l-2 20 12-22h-8l-1-16z"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 310,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: theme === 'positive' ? 'absolute top-72 right-72' : theme === 'negative' ? 'absolute top-48 right-96' : 'absolute top-72 right-64',
                                style: {
                                    transform: 'translateX(-8px) translateY(44px) scale(0.8)',
                                    zIndex: 9999
                                },
                                children: /*#__PURE__*/ _jsxDEV("svg", {
                                    viewBox: "0 0 24 56",
                                    style: {
                                        position: 'relative',
                                        zIndex: 9999,
                                        width: '88px',
                                        height: 'auto',
                                        filter: 'drop-shadow(0 12px 20px #FFD54F)',
                                        transformOrigin: 'top center',
                                        animation: showWrong && !isHidingWrong ? 'lightningEnter 420ms cubic-bezier(.2,.8,.2,1) 120ms forwards' : isHidingWrong ? 'lightningExit 420ms cubic-bezier(.2,.8,.2,1) forwards' : undefined,
                                        opacity: 1
                                    },
                                    children: /*#__PURE__*/ _jsxDEV("path", {
                                        fill: "#FFD54F",
                                        d: "M13 0 L5 20h8l-2 22 14-24h-8l-2-18z"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 320,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                    lineNumber: 319,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "absolute bottom-28 z-30 pointer-events-none",
                        style: {
                            right: showWrong ? '0%' : '-30%',
                            transform: 'translateX(0%)',
                            animation: showWrong && !isHidingWrong ? 'celebrateIn 420ms cubic-bezier(.2,.9,.2,1) forwards' : isHidingWrong ? 'celebrateOut 420ms cubic-bezier(.2,.9,.2,1) forwards' : undefined
                        },
                        children: /*#__PURE__*/ _jsxDEV("img", {
                            src: mutsuzImg,
                            alt: "YanlÄ±Å",
                            className: "h-96 w-auto object-contain drop-shadow-2xl"
                        }, void 0, false, {
                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                            lineNumber: 333,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 325,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-0 left-0 right-0",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `h-3 ${theme === 'positive' ? 'bg-gradient-to-r from-yellow-500 via-amber-400 to-orange-500' : theme === 'negative' ? 'bg-gradient-to-r from-gray-400 via-slate-400 to-gray-400' : 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-400'} shadow-lg relative overflow-hidden`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 356,
                                        columnNumber: 13
                                    }, this),
                                    [
                                        ...Array(15)
                                    ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                            className: "absolute top-1/2 w-1 h-1 bg-white rounded-full animate-pulse",
                                            style: {
                                                left: `${i * 6.66}%`,
                                                animationDelay: `${i * 0.2}s`
                                            }
                                        }, i, false, {
                                            fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                            lineNumber: 358,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `h-24 relative ${theme === 'positive' ? 'bg-gradient-to-b from-emerald-600 via-teal-600 to-cyan-700' : theme === 'negative' ? 'bg-gradient-to-b from-gray-600 via-slate-600 to-gray-700' : 'bg-gradient-to-b from-green-600 via-emerald-600 to-teal-700'} shadow-2xl overflow-hidden`,
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 377,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            ...Array(12)
                                        ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute inset-x-0 h-px bg-white/10",
                                                style: {
                                                    top: `${(i + 1) * 8}%`
                                                }
                                            }, i, false, {
                                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0 opacity-30",
                                        children: [
                                            ...Array(50)
                                        ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute top-0 bottom-0 w-1 bg-gradient-to-b from-white/40 via-transparent to-white/20",
                                                style: {
                                                    left: `${i * 2}%`
                                                }
                                            }, i, false, {
                                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                                lineNumber: 391,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 389,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0",
                                        children: [
                                            ...Array(40)
                                        ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                className: "absolute w-1 h-1 bg-white/60 rounded-full animate-pulse",
                                                style: {
                                                    left: `${Math.random() * 100}%`,
                                                    top: `${Math.random() * 100}%`,
                                                    animationDelay: `${Math.random() * 2}s`,
                                                    animationDuration: `${2 + Math.random() * 2}s`
                                                }
                                            }, i, false, {
                                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                                lineNumber: 401,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 414,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: `absolute inset-0 ${useGroundImg ? 'opacity-0' : 'opacity-20'}`,
                                        children: [
                                            ...Array(6)
                                        ].map((row, i)=>/*#__PURE__*/ _jsxDEV("div", {
                                                className: "flex",
                                                style: {
                                                    marginTop: `${i * 16}px`
                                                },
                                                children: [
                                                    ...Array(20)
                                                ].map((_, j)=>/*#__PURE__*/ _jsxDEV("div", {
                                                        className: "w-12 h-4 border border-white/30 mr-1",
                                                        style: {
                                                            marginLeft: i % 2 === 0 ? '0' : '24px'
                                                        }
                                                    }, `brick-${i}-${j}`, false, {
                                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 21
                                                    }, this))
                                            }, `row-${i}`, false, {
                                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                                lineNumber: 418,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 416,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 370,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `h-4 ${theme === 'positive' ? 'bg-gradient-to-b from-cyan-800 to-teal-900' : theme === 'negative' ? 'bg-gradient-to-b from-gray-700 to-gray-800' : 'bg-gradient-to-b from-teal-800 to-emerald-900'}`
                            }, void 0, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 431,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "h-16 bg-gradient-to-b from-black/30 via-black/10 to-transparent"
                    }, void 0, false, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "absolute bottom-8 left-0 right-0 flex justify-center gap-4 z-10",
                children: [
                    ...Array(10)
                ].map((_, i)=>/*#__PURE__*/ _jsxDEV("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ _jsxDEV("div", {
                                className: `w-5 h-5 rounded-full transition-all duration-500 ${i < characterPosition / 10 ? 'bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500 scale-150 shadow-xl ring-4 ring-white/60' : 'bg-white/50 scale-100 shadow-md'}`
                            }, void 0, false, {
                                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                lineNumber: 452,
                                columnNumber: 13
                            }, this),
                            i < characterPosition / 10 && /*#__PURE__*/ _jsxDEV(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-75"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 459,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ _jsxDEV("div", {
                                        className: "absolute -inset-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-sm opacity-50"
                                    }, void 0, false, {
                                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                                        lineNumber: 460,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true)
                        ]
                    }, i, true, {
                        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 446,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("style", {
                children: `
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
            0% { transform: translateY(12px) scale(0.6) rotate(0deg); opacity: 0; filter: blur(2px); }
            25% { transform: translateY(0px) scale(1.15) rotate(8deg); opacity: 1; filter: blur(0); }
            60% { transform: translateY(-6px) scale(1.05) rotate(-6deg); opacity: 0.9; }
            100% { transform: translateY(-20px) scale(0.6) rotate(0deg); opacity: 0; }
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
      `
            }, void 0, false, {
                fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
                lineNumber: 467,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
_s(GameCanvas, "thlgO4gSjBvmeQ5lfKXKgOsO3Sk=");
_c = GameCanvas;
var _c;
$RefreshReg$(_c, "GameCanvas");


if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}


if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("C:/Users/QP Super/Desktop/Hijyen Oyunu/src/pages/game/components/GameCanvas.tsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdhbWVDYW52YXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbXV0c3V6SW1nIGZyb20gJy4uLy4uLy4uL2Fzc2V0cy9tdXRzdXoucG5nJztcblxuaW50ZXJmYWNlIEdhbWVDYW52YXNQcm9wcyB7XG4gIHRoZW1lOiAnbmV1dHJhbCcgfCAncG9zaXRpdmUnIHwgJ25lZ2F0aXZlJztcbiAgcXVlc3Rpb25UaGVtZTogc3RyaW5nO1xuICBhbnN3ZXJlZENvcnJlY3RseTogYm9vbGVhbiB8IG51bGw7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVDYW52YXMoeyB0aGVtZSwgcXVlc3Rpb25UaGVtZSwgYW5zd2VyZWRDb3JyZWN0bHkgfTogR2FtZUNhbnZhc1Byb3BzKSB7XG4gIGNvbnN0IFtjaGFyYWN0ZXJQb3NpdGlvbiwgc2V0Q2hhcmFjdGVyUG9zaXRpb25dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzaG93Q2VsZWJyYXRpb24sIHNldFNob3dDZWxlYnJhdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93V3JvbmcsIHNldFNob3dXcm9uZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0hpZGluZ1dyb25nLCBzZXRJc0hpZGluZ1dyb25nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzSGlkaW5nQ2VsZWJyYXRpb24sIHNldElzSGlkaW5nQ2VsZWJyYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXNlR3JvdW5kSW1nLCBzZXRVc2VHcm91bmRJbWddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtncm91bmRTcmMsIHNldEdyb3VuZFNyY10gPSB1c2VTdGF0ZSgnL2dyb3VuZC5zdmcnKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBzaG93VGltZXI6IFJldHVyblR5cGU8dHlwZW9mIHNldFRpbWVvdXQ+IHwgdW5kZWZpbmVkO1xuXG4gICAgaWYgKGFuc3dlcmVkQ29ycmVjdGx5ID09PSB0cnVlKSB7XG4gICAgICBzZXRDaGFyYWN0ZXJQb3NpdGlvbihwcmV2ID0+IHByZXYgKyAxMCk7XG4gICAgICAvLyBrZWVwIGNlbGVicmF0aW9uIHZpc2libGUgdW50aWwgcGFyZW50IGNsZWFycyBhbnN3ZXJlZENvcnJlY3RseSAobmV4dCBxdWVzdGlvbilcbiAgICAgIHNldFNob3dDZWxlYnJhdGlvbih0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGFuc3dlcmVkQ29ycmVjdGx5ID09PSBmYWxzZSkge1xuICAgICAgLy8gU21hbGwgZGVsYXkgYmVmb3JlIHNob3dpbmcgd3JvbmcgZWZmZWN0cyBzbyBxdWljayB0YXBzL25ldy1xdWVzdGlvbiB0cmFuc2l0aW9uc1xuICAgICAgLy8gZG9uJ3QgZmxhc2ggdGhlIGxhcmdlIHdyb25nLXN0YXRlIHZpc3VhbHMuXG4gICAgICBjb25zdCBTSE9XX0RFTEFZID0gMTYwOyAvLyBtc1xuICAgICAgc2hvd1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiBzZXRTaG93V3JvbmcodHJ1ZSksIFNIT1dfREVMQVkpO1xuICAgICAgLy8gZG8gTk9UIGF1dG8taGlkZTsga2VlcCB3cm9uZyB2aXN1YWxzIHZpc2libGUgdW50aWwgYW5zd2VyZWRDb3JyZWN0bHkgYmVjb21lcyBudWxsXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIER1cmluZyBsb2FkaW5nL25ldyBxdWVzdGlvbiBlbnN1cmUgdmlzdWFscyBhcmUgcmVzZXQgaW1tZWRpYXRlbHlcbiAgICAgIHNldFNob3dDZWxlYnJhdGlvbihmYWxzZSk7XG4gICAgICBzZXRTaG93V3JvbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoc2hvd1RpbWVyKSBjbGVhclRpbWVvdXQoc2hvd1RpbWVyKTtcbiAgICB9O1xuICB9LCBbYW5zd2VyZWRDb3JyZWN0bHldKTtcblxuICBjb25zdCBnZXRUaGVtZUVsZW1lbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gW107XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBjaGFyYWN0ZXJQb3NpdGlvbiAvIDE1O1xuICAgIFxuICAgIC8vIEVsIHnEsWthbWEgdGVtYXPEsSAtIGxhdmFiby9zYWJ1biAoZ8O2cnNlbCBrYWxkxLFyxLFsZMSxKVxuICAgIFxuICAgIC8vIERpxZ8gZsSxcsOnYWxhbWEgdGVtYXPEsVxuICAgIGlmIChxdWVzdGlvblRoZW1lLmluY2x1ZGVzKCdkacWfJykgfHwgcXVlc3Rpb25UaGVtZS5pbmNsdWRlcygnYcSfxLF6JykpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAga2V5PVwidG9vdGhcIiBcbiAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSBib3R0b20tNDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCB0cmFuc2Zvcm0gJHtcbiAgICAgICAgICAgIHByb2dyZXNzID49IDQgPyAnc2NhbGUtMTAwIG9wYWNpdHktMTAwIHJvdGF0ZS0wJyA6ICdzY2FsZS0wIG9wYWNpdHktMCAtcm90YXRlLTQ1J1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6ICcyMCUnIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMzIgaC0zMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLTN4bCBzaGFkb3ctMnhsICR7XG4gICAgICAgICAgICB0aGVtZSA9PT0gJ3Bvc2l0aXZlJyA/ICdiZy1ncmFkaWVudC10by1iciBmcm9tLXdoaXRlIHRvLWJsdWUtNTAgcmluZy00IHJpbmctYmx1ZS0zMDAvNTAnIDogJ2JnLWdyYXktNDAwJ1xuICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17YHJpLXRvb3RoLWxpbmUgdGV4dC03eGwgJHtcbiAgICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZScgPyAndGV4dC1ibHVlLTUwMCcgOiAndGV4dC1ncmF5LTYwMCdcbiAgICAgICAgICAgIH1gfT48L2k+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtYm90dG9tLTIgbGVmdC0xLzIgdHJhbnNmb3JtIC10cmFuc2xhdGUteC0xLzIgdy0zNiBoLTQgYmctYmxhY2svMjAgcm91bmRlZC1mdWxsIGJsdXItbWRcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICBcbiAgICAvLyDDh8O2cC9hdMSxayB0ZW1hc8SxXG4gICAgaWYgKHF1ZXN0aW9uVGhlbWUuaW5jbHVkZXMoJ8Onw7ZwJykgfHwgcXVlc3Rpb25UaGVtZS5pbmNsdWRlcygnYXTEsWsnKSkge1xuICAgICAgZWxlbWVudHMucHVzaChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICBrZXk9XCJ0cmFzaFwiIFxuICAgICAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGJvdHRvbS00MCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwIHRyYW5zZm9ybSAke1xuICAgICAgICAgICAgcHJvZ3Jlc3MgPj0gNiA/ICdzY2FsZS0xMDAgb3BhY2l0eS0xMDAnIDogJ3NjYWxlLTAgb3BhY2l0eS0wJ1xuICAgICAgICAgIH1gfVxuICAgICAgICAgIHN0eWxlPXt7IHJpZ2h0OiAnMzUlJyB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTMyIGgtMzIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcm91bmRlZC0zeGwgc2hhZG93LTJ4bCAke1xuICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZScgPyAnYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1lbWVyYWxkLTEwMCB0by1ncmVlbi01MCByaW5nLTQgcmluZy1lbWVyYWxkLTMwMC81MCcgOiAnYmctZ3JheS01MDAnXG4gICAgICAgICAgfWB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgcmktZGVsZXRlLWJpbi1saW5lIHRleHQtN3hsICR7XG4gICAgICAgICAgICAgIHRoZW1lID09PSAncG9zaXRpdmUnID8gJ3RleHQtZW1lcmFsZC02MDAnIDogJ3RleHQtZ3JheS03MDAnXG4gICAgICAgICAgICB9YH0+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWJvdHRvbS0yIGxlZnQtMS8yIHRyYW5zZm9ybSAtdHJhbnNsYXRlLXgtMS8yIHctMzYgaC00IGJnLWJsYWNrLzIwIHJvdW5kZWQtZnVsbCBibHVyLW1kXCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCYW55by9kdcWfIHRlbWFzxLFcbiAgICBpZiAocXVlc3Rpb25UaGVtZS5pbmNsdWRlcygnYmFueW8nKSB8fCBxdWVzdGlvblRoZW1lLmluY2x1ZGVzKCdkdcWfJykpIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxkaXYgXG4gICAgICAgICAga2V5PVwic2hvd2VyXCIgXG4gICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYm90dG9tLTQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAgdHJhbnNmb3JtICR7XG4gICAgICAgICAgICBwcm9ncmVzcyA+PSA4ID8gJ3NjYWxlLTEwMCBvcGFjaXR5LTEwMCcgOiAnc2NhbGUtMCBvcGFjaXR5LTAnXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgc3R5bGU9e3sgbGVmdDogJzMwJScgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdy0zMiBoLTMyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtM3hsIHNoYWRvdy0yeGwgJHtcbiAgICAgICAgICAgIHRoZW1lID09PSAncG9zaXRpdmUnID8gJ2JnLWdyYWRpZW50LXRvLWJyIGZyb20tY3lhbi0xMDAgdG8tYmx1ZS01MCByaW5nLTQgcmluZy1jeWFuLTMwMC81MCcgOiAnYmctZ3JheS00MDAnXG4gICAgICAgICAgfWB9PlxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgcmktd2F0ZXItZmxhc2gtbGluZSB0ZXh0LTd4bCAke1xuICAgICAgICAgICAgICB0aGVtZSA9PT0gJ3Bvc2l0aXZlJyA/ICd0ZXh0LWN5YW4tNjAwJyA6ICd0ZXh0LWdyYXktNjAwJ1xuICAgICAgICAgICAgfWB9PjwvaT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMiB3LTM2IGgtNCBiZy1ibGFjay8yMCByb3VuZGVkLWZ1bGwgYmx1ci1tZFwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQcSfYcOnIMO2xJ9lbGVyaSBrYWxkxLFyxLFsZMSxIChnZXJla3NpeiBnw7Zyc2VsIHnDvGspIC0gdGVtaXogYXJhecO8eiBpw6dpbi5cblxuICAgIC8vIMOHYWzEsWxhciB2ZSBrw7zDp8O8ayBiaXRraWxlciAocGxhbnQtbGluZSkga2FsZMSxcsSxbGTEsSDigJQgc2FkZWxlxZ90aXJtZS5cblxuICAgIC8vIMOHacOnZWtsZXIgdmUgw6dpbWxlclxuICAgIGNvbnN0IGZsb3dlcnMgPSBbXG4gICAgICB7IGxlZnQ6ICczJScsIGljb246ICdyaS1mbG93ZXItbGluZScsIGNvbG9yOiAndGV4dC1waW5rLTUwMCcsIHNpemU6ICd0ZXh0LTR4bCcgfSxcbiAgICAgIHsgbGVmdDogJzclJywgaWNvbjogJ3JpLXBsYW50LWxpbmUnLCBjb2xvcjogJ3RleHQtcHVycGxlLTUwMCcsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzExJScsIGljb246ICdyaS1sZWFmLWxpbmUnLCBjb2xvcjogJ3RleHQtZ3JlZW4tNTAwJywgc2l6ZTogJ3RleHQtM3hsJyB9LFxuICAgICAgeyBsZWZ0OiAnMTUlJywgaWNvbjogJ3JpLWZsb3dlci1saW5lJywgY29sb3I6ICd0ZXh0LXllbGxvdy01MDAnLCBzaXplOiAndGV4dC00eGwnIH0sXG4gICAgICB7IGxlZnQ6ICcxOSUnLCBpY29uOiAncmktcGxhbnQtbGluZScsIGNvbG9yOiAndGV4dC1waW5rLTUwMCcsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzI0JScsIGljb246ICdyaS1sZWFmLWxpbmUnLCBjb2xvcjogJ3RleHQtdGVhbC01MDAnLCBzaXplOiAndGV4dC0zeGwnIH0sXG4gICAgICB7IGxlZnQ6ICcyOSUnLCBpY29uOiAncmktZmxvd2VyLWxpbmUnLCBjb2xvcjogJ3RleHQtcm9zZS01MDAnLCBzaXplOiAndGV4dC00eGwnIH0sXG4gICAgICB7IGxlZnQ6ICczNCUnLCBpY29uOiAncmktcGxhbnQtbGluZScsIGNvbG9yOiAndGV4dC1wdXJwbGUtNTAwJywgc2l6ZTogJ3RleHQtM3hsJyB9LFxuICAgICAgeyBsZWZ0OiAnMzklJywgaWNvbjogJ3JpLWxlYWYtbGluZScsIGNvbG9yOiAndGV4dC1ncmVlbi01MDAnLCBzaXplOiAndGV4dC0zeGwnIH0sXG4gICAgICB7IGxlZnQ6ICc0NCUnLCBpY29uOiAncmktZmxvd2VyLWxpbmUnLCBjb2xvcjogJ3RleHQteWVsbG93LTUwMCcsIHNpemU6ICd0ZXh0LTR4bCcgfSxcbiAgICAgIHsgbGVmdDogJzQ5JScsIGljb246ICdyaS1wbGFudC1saW5lJywgY29sb3I6ICd0ZXh0LXBpbmstNTAwJywgc2l6ZTogJ3RleHQtM3hsJyB9LFxuICAgICAgeyBsZWZ0OiAnNTQlJywgaWNvbjogJ3JpLWxlYWYtbGluZScsIGNvbG9yOiAndGV4dC10ZWFsLTUwMCcsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzU5JScsIGljb246ICdyaS1mbG93ZXItbGluZScsIGNvbG9yOiAndGV4dC1yb3NlLTUwMCcsIHNpemU6ICd0ZXh0LTR4bCcgfSxcbiAgICAgIHsgbGVmdDogJzY0JScsIGljb246ICdyaS1wbGFudC1saW5lJywgY29sb3I6ICd0ZXh0LXB1cnBsZS01MDAnLCBzaXplOiAndGV4dC0zeGwnIH0sXG4gICAgICB7IGxlZnQ6ICc2OSUnLCBpY29uOiAncmktbGVhZi1saW5lJywgY29sb3I6ICd0ZXh0LWdyZWVuLTUwMCcsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzc0JScsIGljb246ICdyaS1mbG93ZXItbGluZScsIGNvbG9yOiAndGV4dC15ZWxsb3ctNTAwJywgc2l6ZTogJ3RleHQtNHhsJyB9LFxuICAgICAgeyBsZWZ0OiAnNzklJywgaWNvbjogJ3JpLXBsYW50LWxpbmUnLCBjb2xvcjogJ3RleHQtcGluay01MDAnLCBzaXplOiAndGV4dC0zeGwnIH0sXG4gICAgICB7IGxlZnQ6ICc4NCUnLCBpY29uOiAncmktbGVhZi1saW5lJywgY29sb3I6ICd0ZXh0LXRlYWwtNTAwJywgc2l6ZTogJ3RleHQtM3hsJyB9LFxuICAgICAgeyBsZWZ0OiAnODklJywgaWNvbjogJ3JpLWZsb3dlci1saW5lJywgY29sb3I6ICd0ZXh0LXJvc2UtNTAwJywgc2l6ZTogJ3RleHQtNHhsJyB9LFxuICAgICAgeyBsZWZ0OiAnOTQlJywgaWNvbjogJ3JpLXBsYW50LWxpbmUnLCBjb2xvcjogJ3RleHQtcHVycGxlLTUwMCcsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzk3JScsIGljb246ICdyaS1sZWFmLWxpbmUnLCBjb2xvcjogJ3RleHQtZ3JlZW4tNTAwJywgc2l6ZTogJ3RleHQtM3hsJyB9LFxuICAgIF07XG5cbiAgICBmbG93ZXJzLmZvckVhY2goKGZsb3dlciwgaW5kZXgpID0+IHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2BmbG93ZXItJHtpbmRleH1gfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yMCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTI1IGFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgbGVmdDogZmxvd2VyLmxlZnQsXG4gICAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogYCR7MiArIE1hdGgucmFuZG9tKCkgKiAyfXNgLFxuICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGAke01hdGgucmFuZG9tKCkgKiAyfXNgXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT17YCR7Zmxvd2VyLmljb259ICR7Zmxvd2VyLnNpemV9ICR7XG4gICAgICAgICAgICB0aGVtZSA9PT0gJ3Bvc2l0aXZlJyA/IGZsb3dlci5jb2xvciA6ICd0ZXh0LWdyYXktNTAwJ1xuICAgICAgICAgIH0gZHJvcC1zaGFkb3ctbWRgfT48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIC8vIEtlbGViZWsgdmUgYsO2Y2VrIGFuaW1hc3lvbmxhcsSxIGthbGTEsXLEsWxkxLEgKGfDtnN0ZXJpbG1leWVjZWspXG5cbiAgICAvLyBUYcWfbGFyIHZlIGtheWFsYXJcbiAgICBjb25zdCByb2NrcyA9IFtcbiAgICAgIHsgbGVmdDogJzEwJScsIHNpemU6ICd0ZXh0LTR4bCcgfSxcbiAgICAgIHsgbGVmdDogJzI1JScsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzQwJScsIHNpemU6ICd0ZXh0LTV4bCcgfSxcbiAgICAgIHsgbGVmdDogJzU1JScsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICAgIHsgbGVmdDogJzcwJScsIHNpemU6ICd0ZXh0LTR4bCcgfSxcbiAgICAgIHsgbGVmdDogJzg1JScsIHNpemU6ICd0ZXh0LTN4bCcgfSxcbiAgICBdO1xuXG4gICAgcm9ja3MuZm9yRWFjaCgocm9jaywgaW5kZXgpID0+IHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e2Byb2NrLSR7aW5kZXh9YH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMjhcIlxuICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IHJvY2subGVmdCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPXtgcmktY29udHJhc3QtZHJvcC0yLWxpbmUgJHtyb2NrLnNpemV9ICR7XG4gICAgICAgICAgICB0aGVtZSA9PT0gJ3Bvc2l0aXZlJyA/ICd0ZXh0LWdyYXktNDAwJyA6ICd0ZXh0LWdyYXktNjAwJ1xuICAgICAgICAgIH0gZHJvcC1zaGFkb3ctbWRgfT48L2k+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBlbGVtZW50cztcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YGFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tYiAke2dldEJhY2tncm91bmRHcmFkaWVudCgpfSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwIG92ZXJmbG93LWhpZGRlbmB9XG4gICAgICBzdHlsZT17eyBhbmltYXRpb246IHNob3dXcm9uZyA/ICdzY3JlZW5TaGFrZSA5MDBtcyBjdWJpYy1iZXppZXIoLjM2LC4wNywuMTksLjk3KScgOiB1bmRlZmluZWQgfX1cbiAgICA+XG4gICAgICB7LyogR8O2a3nDvHrDvCBlbGVtZW50bGVyaSAqL31cbiAgICAgIHtnZXRTa3lFbGVtZW50cygpfVxuICAgICAgXG4gICAgICB7LyogVXphayBkYcSfbGFyIC0gcGVyc3Bla3RpZiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQ4IGxlZnQtMCByaWdodC0wIGgtMzJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wICR7XG4gICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZScgXG4gICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by10IGZyb20tZW1lcmFsZC0zMDAvNDAgdG8tdHJhbnNwYXJlbnQnIFxuICAgICAgICAgICAgOiAnYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktNDAwLzQwIHRvLXRyYW5zcGFyZW50J1xuICAgICAgICB9YH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbW91bnRhaW4tbGluZSB0ZXh0LTl4bCB0ZXh0LWVtZXJhbGQtNDAwLzMwIGFic29sdXRlIGxlZnQtMTAgYm90dG9tLTBcIj48L2k+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwicmktbW91bnRhaW4tbGluZSB0ZXh0LTh4bCB0ZXh0LXRlYWwtNDAwLzMwIGFic29sdXRlIHJpZ2h0LTIwIGJvdHRvbS0wXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogT3J0YSBwbGFuIC0gw6dpbSB2ZSBkb8SfYSAoa3VsbGFuxLFsYWJpbGlyIGJpciBncm91bmQgZ8O2cnNlbGkgdmFyc2EgL2dyb3VuZC5wbmcga3VsbGFuxLFsYWNhaywgeW9rc2EgZmFsbGJhY2sgZ3JhZGllbnQpICovfVxuICAgICAgeyh1c2VHcm91bmRJbWcgJiYgKGFuc3dlcmVkQ29ycmVjdGx5ID09PSB0cnVlIHx8IGFuc3dlcmVkQ29ycmVjdGx5ID09PSBudWxsKSkgPyAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2dyb3VuZFNyY31cbiAgICAgICAgICBhbHQ9XCJncm91bmRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIGgtNjQgdy1mdWxsIG9iamVjdC1jb3ZlciB6LTBcIlxuICAgICAgICAgIHN0eWxlPXt7IGFuaW1hdGlvbjogJ2dyb3VuZEVudGVyIDYwMG1zIGN1YmljLWJlemllciguMiwuOSwuMiwxKSBib3RoJyB9fVxuICAgICAgICAgIG9uRXJyb3I9eygpID0+IHtcbiAgICAgICAgICAgIGlmIChncm91bmRTcmMgPT09ICcvZ3JvdW5kLnN2ZycpIHtcbiAgICAgICAgICAgICAgc2V0R3JvdW5kU3JjKCcvZ3JvdW5kLnBuZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2V0VXNlR3JvdW5kSW1nKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCBoLTY0IGJnLWdyYWRpZW50LXRvLXQgZnJvbS1ncmVlbi01MDAvNDAgdmlhLWVtZXJhbGQtNDAwLzMwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICApfVxuICAgICAgXG4gICAgICB7LyogVGVtYSBlbGVtZW50bGVyaSB2ZSBkb8SfYSAqL31cbiAgICAgIHtnZXRUaGVtZUVsZW1lbnRzKCl9XG5cbiAgICAgIHsvKiBLdXRsYW1hIGFuaW1hc3lvbnUgKi99XG4gICAgICB7c2hvd0NlbGVicmF0aW9uICYmIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yOCB6LTMwIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGxlZnQ6IHNob3dDZWxlYnJhdGlvbiA/ICcwJScgOiAnLTMwJScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCUpJyxcbiAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzaG93Q2VsZWJyYXRpb24gJiYgIWlzSGlkaW5nQ2VsZWJyYXRpb24gPyAnY2VsZWJyYXRlSW4gNDIwbXMgY3ViaWMtYmV6aWVyKC4yLC45LC4yLDEpIGZvcndhcmRzJyA6IGlzSGlkaW5nQ2VsZWJyYXRpb24gPyAnY2VsZWJyYXRlT3V0IDQyMG1zIGN1YmljLWJlemllciguMiwuOSwuMiwxKSBmb3J3YXJkcycgOiB1bmRlZmluZWRcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zdGF0aWMucmVhZGR5LmFpL2ltYWdlLzFhNmRjNjhiODI1OWViNjExOGQ1MDQyYWJlYmM0NzNhLzU1NGJhZjk0OTZiNDQ1ZDIwOWQwYjc0YjJkZjNkNTFmLnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJLdXRsYW1hXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOTYgdy1hdXRvIG9iamVjdC1jb250YWluIGRyb3Atc2hhZG93LTJ4bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7LyogWcSxbGTEsXovcGFyxLFsdMSxIGFuaW1hc3lvbmxhcsSxIC0gc2FkZWNlIGRvxJ9ydSBjZXZhcHRhIGfDtnLDvG7DvHIsIHNvcnUgYWxhbsSxIMOnZXLDp2V2ZXNpbmluIGTEscWfxLFuZGEgKHNhxJ8gJiBzb2wpICovfVxuICAgICAge3Nob3dDZWxlYnJhdGlvbiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBwb2ludGVyLWV2ZW50cy1ub25lIHotMjBcIj5cbiAgICAgICAgICB7LyogTGVmdCBjbHVzdGVyIC0ga2VwdCBvdXRzaWRlIHF1ZXN0aW9uIGZyYW1lICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGVcIiBzdHlsZT17eyBsZWZ0OiAnNiUnLCB0b3A6ICc0NiUnIH19PlxuICAgICAgICAgICAge1swLDEsMl0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAga2V5PXtgbC0ke2l9YH1cbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBgJHtpICogMzZ9cHhgLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IGAkezY0ICsgaSAqIDIwfXB4YCxcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgICAgICAgICAgZmlsbDogdGhlbWUgPT09ICdwb3NpdGl2ZScgPyAnI0Y1OUUwQicgOiB0aGVtZSA9PT0gJ25lZ2F0aXZlJyA/ICcjOUNBM0FGJyA6IChpICUgMiA/ICcjNjBBNUZBJyA6ICcjRkRFNjhBJyksXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYHN0YXJTcGFya2xlTGFyZ2UgMTYwMG1zIGN1YmljLWJlemllciguMiwuOSwuMywxKSAke2kgKiAxNjB9bXMgYm90aGBcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMiAuNTg3bDMuNjY4IDcuNDMxIDguMiAxLjE5Mi01LjkzNCA1Ljc4OCAxLjQgOC4xNjJMMTIgMTguODk3IDQuNjY2IDIzLjE2bDEuNC04LjE2MkwuMTMyIDkuMjFsOC4yLTEuMTkyelwiIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7LyogUmlnaHQgY2x1c3RlciAtIG91dHNpZGUgcXVlc3Rpb24gZnJhbWUsIHNsaWdodGx5IG9mZnNldCB2ZXJ0aWNhbGx5IHRvIGF2b2lkIGFsaWduaW5nIHdpdGggb3RoZXIgZWxlbWVudHMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZVwiIHN0eWxlPXt7IHJpZ2h0OiAnNiUnLCB0b3A6ICc0NiUnIH19PlxuICAgICAgICAgICAge1swLDEsMl0ubWFwKGkgPT4gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAga2V5PXtgci0ke2l9YH1cbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICByaWdodDogYCR7aSAqIDM2fXB4YCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHs2NCArIGkgKiAyMH1weGAsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgIGZpbGw6IHRoZW1lID09PSAncG9zaXRpdmUnID8gJyNGNTlFMEInIDogdGhlbWUgPT09ICduZWdhdGl2ZScgPyAnIzlDQTNBRicgOiAoaSAlIDIgPyAnIzYwQTVGQScgOiAnI0ZERTY4QScpLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICBhbmltYXRpb246IGBzdGFyU3BhcmtsZUxhcmdlIDE2MDBtcyBjdWJpYy1iZXppZXIoLjIsLjksLjMsMSkgJHtpICogMTgwfW1zIGJvdGhgXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIgLjU4N2wzLjY2OCA3LjQzMSA4LjIgMS4xOTItNS45MzQgNS43ODggMS40IDguMTYyTDEyIDE4Ljg5NyA0LjY2NiAyMy4xNmwxLjQtOC4xNjJMLjEzMiA5LjIxbDguMi0xLjE5MnpcIiAvPlxuICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtzaG93V3JvbmcgJiYgKFxuICAgICAgICA8PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcG9pbnRlci1ldmVudHMtbm9uZSB6LTUwXCIgc3R5bGU9e3sgcG9pbnRlckV2ZW50czogJ25vbmUnIH19PlxuICAgICAgICAgIHsvKiBEcmFtYXRpYyBsaWdodG5pbmcgc3RyaWtlcyArIGdyb3VuZCBpbXBhY3QgYXQgdGhlIHN0YXIgY2x1c3RlciBwb3NpdGlvbnMgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZScgPyAnYWJzb2x1dGUgdG9wLTU2IGxlZnQtNDAnIDpcbiAgICAgICAgICAgIHRoZW1lID09PSAnbmVnYXRpdmUnID8gJ2Fic29sdXRlIHRvcC02MCBsZWZ0LTQwJyA6XG4gICAgICAgICAgICAnYWJzb2x1dGUgdG9wLTU2IGxlZnQtNDAnXG4gICAgICAgICAgfSBzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDhweCkgdHJhbnNsYXRlWSg0MHB4KScsIHpJbmRleDogOTk5OSB9fT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCA0OFwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDk5OTksIHdpZHRoOiAnNzZweCcsIGhlaWdodDogJ2F1dG8nLCBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDEwcHggMThweCAjRkZENTRGKScsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInLCBhbmltYXRpb246IHNob3dXcm9uZyAmJiAhaXNIaWRpbmdXcm9uZyA/ICdsaWdodG5pbmdFbnRlciA0MjBtcyBjdWJpYy1iZXppZXIoLjIsLjgsLjIsMSkgZm9yd2FyZHMnIDogaXNIaWRpbmdXcm9uZyA/ICdsaWdodG5pbmdFeGl0IDQyMG1zIGN1YmljLWJlemllciguMiwuOCwuMiwxKSBmb3J3YXJkcycgOiB1bmRlZmluZWQsIG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjRkZENTRGXCIgZD1cIk0xMyAwIEw2IDE4aDdsLTIgMjAgMTItMjJoLThsLTEtMTZ6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1xuICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZScgPyAnYWJzb2x1dGUgdG9wLTcyIHJpZ2h0LTcyJyA6XG4gICAgICAgICAgICB0aGVtZSA9PT0gJ25lZ2F0aXZlJyA/ICdhYnNvbHV0ZSB0b3AtNDggcmlnaHQtOTYnIDpcbiAgICAgICAgICAgICdhYnNvbHV0ZSB0b3AtNzIgcmlnaHQtNjQnXG4gICAgICAgICAgfSBzdHlsZT17eyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC04cHgpIHRyYW5zbGF0ZVkoNDRweCkgc2NhbGUoMC44KScsIHpJbmRleDogOTk5OSB9fT5cbiAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCA1NlwiIHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnLCB6SW5kZXg6IDk5OTksIHdpZHRoOiAnODhweCcsIGhlaWdodDogJ2F1dG8nLCBmaWx0ZXI6ICdkcm9wLXNoYWRvdygwIDEycHggMjBweCAjRkZENTRGKScsIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBjZW50ZXInLCBhbmltYXRpb246IHNob3dXcm9uZyAmJiAhaXNIaWRpbmdXcm9uZyA/ICdsaWdodG5pbmdFbnRlciA0MjBtcyBjdWJpYy1iZXppZXIoLjIsLjgsLjIsMSkgMTIwbXMgZm9yd2FyZHMnIDogaXNIaWRpbmdXcm9uZyA/ICdsaWdodG5pbmdFeGl0IDQyMG1zIGN1YmljLWJlemllciguMiwuOCwuMiwxKSBmb3J3YXJkcycgOiB1bmRlZmluZWQsIG9wYWNpdHk6IDEgfX0+XG4gICAgICAgICAgICAgIDxwYXRoIGZpbGw9XCIjRkZENTRGXCIgZD1cIk0xMyAwIEw1IDIwaDhsLTIgMjIgMTQtMjRoLThsLTItMTh6XCIgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMjggei0zMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICByaWdodDogc2hvd1dyb25nID8gJzAlJyA6ICctMzAlJyxcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwJSknLFxuICAgICAgICAgICAgICBhbmltYXRpb246IHNob3dXcm9uZyAmJiAhaXNIaWRpbmdXcm9uZyA/ICdjZWxlYnJhdGVJbiA0MjBtcyBjdWJpYy1iZXppZXIoLjIsLjksLjIsMSkgZm9yd2FyZHMnIDogaXNIaWRpbmdXcm9uZyA/ICdjZWxlYnJhdGVPdXQgNDIwbXMgY3ViaWMtYmV6aWVyKC4yLC45LC4yLDEpIGZvcndhcmRzJyA6IHVuZGVmaW5lZFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e211dHN1ekltZ31cbiAgICAgICAgICAgIGFsdD1cIllhbmzEscWfXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtOTYgdy1hdXRvIG9iamVjdC1jb250YWluIGRyb3Atc2hhZG93LTJ4bFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgey8qIE1vZGVybiBwbGF0Zm9ybS96ZW1pbiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTBcIj5cbiAgICAgICAgey8qIERla29yYXRpZiBrw7zDp8O8ayBzYWtzxLFsYXIgKHJpLXBsYW50LWxpbmUpIGthbGTEsXLEsWxkxLEgKi99XG5cbiAgICAgICAgey8qIEFuYSBwbGF0Zm9ybSAtIDMga2F0bWFubMSxIHRhc2FyxLFtICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XG4gICAgICAgICAgey8qIMOcc3QgZGVrb3JhdGlmIMWfZXJpdCAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtMyAke1xuICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgPyAnYmctZ3JhZGllbnQtdG8tciBmcm9tLXllbGxvdy01MDAgdmlhLWFtYmVyLTQwMCB0by1vcmFuZ2UtNTAwJ1xuICAgICAgICAgICAgICA6IHRoZW1lID09PSAnbmVnYXRpdmUnXG4gICAgICAgICAgICAgID8gJ2JnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmF5LTQwMCB2aWEtc2xhdGUtNDAwIHRvLWdyYXktNDAwJ1xuICAgICAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1yIGZyb20tYW1iZXItNDAwIHZpYS15ZWxsb3ctNDAwIHRvLWFtYmVyLTQwMCdcbiAgICAgICAgICB9IHNoYWRvdy1sZyByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlLzUwIHRvLXRyYW5zcGFyZW50IGFuaW1hdGUtc2hpbW1lclwiPjwvZGl2PlxuICAgICAgICAgICAge1suLi5BcnJheSgxNSldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzIgdy0xIGgtMSBiZy13aGl0ZSByb3VuZGVkLWZ1bGwgYW5pbWF0ZS1wdWxzZVwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIGxlZnQ6IGAke2kgKiA2LjY2fSVgLFxuICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGVsYXk6IGAke2kgKiAwLjJ9c2BcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBBbmEgcGxhdGZvcm0gZ8O2dmRlc2kgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BoLTI0IHJlbGF0aXZlICR7XG4gICAgICAgICAgICB0aGVtZSA9PT0gJ3Bvc2l0aXZlJ1xuICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by1iIGZyb20tZW1lcmFsZC02MDAgdmlhLXRlYWwtNjAwIHRvLWN5YW4tNzAwJ1xuICAgICAgICAgICAgICA6IHRoZW1lID09PSAnbmVnYXRpdmUnXG4gICAgICAgICAgICAgID8gJ2JnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTYwMCB2aWEtc2xhdGUtNjAwIHRvLWdyYXktNzAwJ1xuICAgICAgICAgICAgICA6ICdiZy1ncmFkaWVudC10by1iIGZyb20tZ3JlZW4tNjAwIHZpYS1lbWVyYWxkLTYwMCB0by10ZWFsLTcwMCdcbiAgICAgICAgICB9IHNoYWRvdy0yeGwgb3ZlcmZsb3ctaGlkZGVuYH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGgtMSBiZy1ncmFkaWVudC10by1yIGZyb20tdHJhbnNwYXJlbnQgdmlhLXdoaXRlLzYwIHRvLXRyYW5zcGFyZW50XCI+PC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMFwiPlxuICAgICAgICAgICAgICB7Wy4uLkFycmF5KDEyKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIGgtcHggYmctd2hpdGUvMTBcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdG9wOiBgJHsoaSArIDEpICogOH0lYCB9fVxuICAgICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIG9wYWNpdHktMzBcIj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg1MCldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvdHRvbS0wIHctMSBiZy1ncmFkaWVudC10by1iIGZyb20td2hpdGUvNDAgdmlhLXRyYW5zcGFyZW50IHRvLXdoaXRlLzIwXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGxlZnQ6IGAke2kgKiAyfSVgIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIj5cbiAgICAgICAgICAgICAge1suLi5BcnJheSg0MCldLm1hcCgoXywgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHctMSBoLTEgYmctd2hpdGUvNjAgcm91bmRlZC1mdWxsIGFuaW1hdGUtcHVsc2VcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYCR7TWF0aC5yYW5kb20oKSAqIDEwMH0lYCxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiBgJHtNYXRoLnJhbmRvbSgpICogMTAwfSVgLFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogYCR7TWF0aC5yYW5kb20oKSAqIDJ9c2AsXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBgJHsyICsgTWF0aC5yYW5kb20oKSAqIDJ9c2BcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXRyYW5zcGFyZW50IHZpYS13aGl0ZS8xMCB0by10cmFuc3BhcmVudCBhbmltYXRlLXNoaW1tZXJcIj48L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBpbnNldC0wICR7dXNlR3JvdW5kSW1nID8gJ29wYWNpdHktMCcgOiAnb3BhY2l0eS0yMCd9YH0+XG4gICAgICAgICAgICAgIHtbLi4uQXJyYXkoNildLm1hcCgocm93LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Byb3ctJHtpfWB9IGNsYXNzTmFtZT1cImZsZXhcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IGAke2kgKiAxNn1weGAgfX0+XG4gICAgICAgICAgICAgICAgICB7Wy4uLkFycmF5KDIwKV0ubWFwKChfLCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Bicmljay0ke2l9LSR7an1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTIgaC00IGJvcmRlciBib3JkZXItd2hpdGUvMzAgbXItMVwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogaSAlIDIgPT09IDAgPyAnMCcgOiAnMjRweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtNCAke1xuICAgICAgICAgICAgdGhlbWUgPT09ICdwb3NpdGl2ZSdcbiAgICAgICAgICAgICAgPyAnYmctZ3JhZGllbnQtdG8tYiBmcm9tLWN5YW4tODAwIHRvLXRlYWwtOTAwJ1xuICAgICAgICAgICAgICA6IHRoZW1lID09PSAnbmVnYXRpdmUnXG4gICAgICAgICAgICAgID8gJ2JnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTcwMCB0by1ncmF5LTgwMCdcbiAgICAgICAgICAgICAgOiAnYmctZ3JhZGllbnQtdG8tYiBmcm9tLXRlYWwtODAwIHRvLWVtZXJhbGQtOTAwJ1xuICAgICAgICAgIH1gfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjay8zMCB2aWEtYmxhY2svMTAgdG8tdHJhbnNwYXJlbnRcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7Lyogw5bEn3JlbmNpIGthcmFrdGVybGVyaSBrYWxkxLFyxLFsZMSxIChzaWzDvGV0bGVyKSAqL31cblxuICAgICAgey8qIMSwbGVybGVtZSBnw7ZzdGVyZ2VzaSAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTggbGVmdC0wIHJpZ2h0LTAgZmxleCBqdXN0aWZ5LWNlbnRlciBnYXAtNCB6LTEwXCI+XG4gICAgICAgIHtbLi4uQXJyYXkoMTApXS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LTUgaC01IHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgJHtcbiAgICAgICAgICAgICAgaSA8IGNoYXJhY3RlclBvc2l0aW9uIC8gMTBcbiAgICAgICAgICAgICAgICA/ICdiZy1ncmFkaWVudC10by1iciBmcm9tLXllbGxvdy00MDAgdmlhLWFtYmVyLTUwMCB0by1vcmFuZ2UtNTAwIHNjYWxlLTE1MCBzaGFkb3cteGwgcmluZy00IHJpbmctd2hpdGUvNjAnIFxuICAgICAgICAgICAgICAgIDogJ2JnLXdoaXRlLzUwIHNjYWxlLTEwMCBzaGFkb3ctbWQnXG4gICAgICAgICAgICB9YH0+PC9kaXY+XG4gICAgICAgICAgICB7aSA8IGNoYXJhY3RlclBvc2l0aW9uIC8gMTAgJiYgKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQtMCByb3VuZGVkLWZ1bGwgYmcteWVsbG93LTQwMCBhbmltYXRlLXBpbmcgb3BhY2l0eS03NVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWluc2V0LTEgcm91bmRlZC1mdWxsIGJnLWdyYWRpZW50LXRvLXIgZnJvbS15ZWxsb3ctNDAwIHRvLW9yYW5nZS01MDAgYmx1ci1zbSBvcGFjaXR5LTUwXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlPntgXG4gICAgICAgICAgQGtleWZyYW1lcyBjZWxlYnJhdGVMZWZ0IHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgbGVmdDogLTMwJTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAgIGxlZnQ6IDAlO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgODAlIHtcbiAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgY2VsZWJyYXRlUmlnaHQge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICByaWdodDogLTMwJTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDIwJSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDgwJSB7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgY2VsZWJyYXRlSW4ge1xuICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTMwJSk7IG9wYWNpdHk6IDAgfVxuICAgICAgICAgICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgb3BhY2l0eTogMSB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgb3BhY2l0eTogMSB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgY2VsZWJyYXRlT3V0IHtcbiAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTsgb3BhY2l0eTogMSB9XG4gICAgICAgICAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMCUpOyBvcGFjaXR5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBzdGFyU3BhcmtsZSB7XG4gICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2cHgpIHNjYWxlKDAuNik7IG9wYWNpdHk6IDA7IGZpbHRlcjogYmx1cigxcHgpOyB9XG4gICAgICAgICAgICAzMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxLjA1KTsgb3BhY2l0eTogMTsgZmlsdGVyOiBibHVyKDApOyB9XG4gICAgICAgICAgICA3MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMC45NSk7IG9wYWNpdHk6IDAuOTsgfVxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTJweCkgc2NhbGUoMC42KTsgb3BhY2l0eTogMDsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHN0YXJTcGFya2xlTGFyZ2Uge1xuICAgICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCkgc2NhbGUoMC42KSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDA7IGZpbHRlcjogYmx1cigycHgpOyB9XG4gICAgICAgICAgICAyNSUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxLjE1KSByb3RhdGUoOGRlZyk7IG9wYWNpdHk6IDE7IGZpbHRlcjogYmx1cigwKTsgfVxuICAgICAgICAgICAgNjAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpIHNjYWxlKDEuMDUpIHJvdGF0ZSgtNmRlZyk7IG9wYWNpdHk6IDAuOTsgfVxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCkgc2NhbGUoMC42KSByb3RhdGUoMGRlZyk7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBsaWdodG5pbmdGbGFzaCB7XG4gICAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KSBzY2FsZSgwLjkpIHJvdGF0ZSgtNmRlZyk7IGZpbHRlcjogYmx1cigycHgpOyB9XG4gICAgICAgICAgICAxMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZSgxLjA1KSByb3RhdGUoMmRlZyk7IGZpbHRlcjogYmx1cigwKTsgfVxuICAgICAgICAgICAgMzAlIHsgb3BhY2l0eTogMC45OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgc2NhbGUoMSkgcm90YXRlKC0yZGVnKTsgfVxuICAgICAgICAgICAgNjAlIHsgb3BhY2l0eTogMC42OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCkgc2NhbGUoMC45NSkgcm90YXRlKDJkZWcpOyB9XG4gICAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMnB4KSBzY2FsZSgwLjkpIHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIGxpZ2h0bmluZ0VudGVyIHtcbiAgICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04MHB4KSBzY2FsZVkoMC45NSkgc2NhbGVYKDAuOTUpOyB9XG4gICAgICAgICAgICA2MCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSBzY2FsZVkoMS4wKSBzY2FsZVgoMS4wKTsgfVxuICAgICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlWSgxLjApIHNjYWxlWCgxLjApOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgbGlnaHRuaW5nRXhpdCB7XG4gICAgICAgICAgICAwJSB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlWSgxLjApIHNjYWxlWCgxLjApOyB9XG4gICAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI0cHgpIHNjYWxlWSgwLjk1KSBzY2FsZVgoMC45OCk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyBncm91bmRFbnRlciB7XG4gICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxOHB4KSBzY2FsZSgxLjAyKTsgb3BhY2l0eTogMDsgfVxuICAgICAgICAgICAgNDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDZweCkgc2NhbGUoMS4wMSk7IG9wYWNpdHk6IDAuNjsgfVxuICAgICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgaW1wYWN0UHVsc2Uge1xuICAgICAgICAgICAgMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7IGZpbHRlcjogYmx1cig0cHgpOyB9XG4gICAgICAgICAgICAxOCUgeyBvcGFjaXR5OiAwLjc7IHRyYW5zZm9ybTogc2NhbGUoMS4wKTsgZmlsdGVyOiBibHVyKDApOyB9XG4gICAgICAgICAgICA1MCUgeyBvcGFjaXR5OiAwLjM1OyB0cmFuc2Zvcm06IHNjYWxlKDEuMTIpOyB9XG4gICAgICAgICAgICAxMDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgxLjI4KTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHNjcmVlblNoYWtlIHtcbiAgICAgICAgICAgIDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApOyB9XG4gICAgICAgICAgICAxMiUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCkgdHJhbnNsYXRlWSgwKTsgfVxuICAgICAgICAgICAgMjQlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCkgdHJhbnNsYXRlWSgtMXB4KTsgfVxuICAgICAgICAgICAgMzYlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpIHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAgICAgICAgIDQ4JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpIHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cbiAgICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtdXRzdXpJbWciLCJHYW1lQ2FudmFzIiwidGhlbWUiLCJxdWVzdGlvblRoZW1lIiwiYW5zd2VyZWRDb3JyZWN0bHkiLCJjaGFyYWN0ZXJQb3NpdGlvbiIsInNldENoYXJhY3RlclBvc2l0aW9uIiwic2hvd0NlbGVicmF0aW9uIiwic2V0U2hvd0NlbGVicmF0aW9uIiwic2hvd1dyb25nIiwic2V0U2hvd1dyb25nIiwiaXNIaWRpbmdXcm9uZyIsInNldElzSGlkaW5nV3JvbmciLCJpc0hpZGluZ0NlbGVicmF0aW9uIiwic2V0SXNIaWRpbmdDZWxlYnJhdGlvbiIsInVzZUdyb3VuZEltZyIsInNldFVzZUdyb3VuZEltZyIsImdyb3VuZFNyYyIsInNldEdyb3VuZFNyYyIsInNob3dUaW1lciIsInByZXYiLCJTSE9XX0RFTEFZIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImdldFRoZW1lRWxlbWVudHMiLCJlbGVtZW50cyIsInByb2dyZXNzIiwiaW5jbHVkZXMiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJsZWZ0IiwiaSIsInJpZ2h0IiwiZmxvd2VycyIsImljb24iLCJjb2xvciIsInNpemUiLCJmb3JFYWNoIiwiZmxvd2VyIiwiaW5kZXgiLCJhbmltYXRpb25EdXJhdGlvbiIsIk1hdGgiLCJyYW5kb20iLCJhbmltYXRpb25EZWxheSIsInJvY2tzIiwicm9jayIsImdldEJhY2tncm91bmRHcmFkaWVudCIsImFuaW1hdGlvbiIsInVuZGVmaW5lZCIsImdldFNreUVsZW1lbnRzIiwiaW1nIiwic3JjIiwiYWx0Iiwib25FcnJvciIsInRyYW5zZm9ybSIsInRvcCIsIm1hcCIsInN2ZyIsInZpZXdCb3giLCJwb3NpdGlvbiIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbCIsIm9wYWNpdHkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYXRoIiwiZCIsInBvaW50ZXJFdmVudHMiLCJ6SW5kZXgiLCJmaWx0ZXIiLCJBcnJheSIsIl8iLCJyb3ciLCJtYXJnaW5Ub3AiLCJqIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBUTtBQUM1QyxPQUFPQyxlQUFlLDZCQUE2QjtBQVFuRCxlQUFlLFNBQVNDLFdBQVcsRUFBRUMsS0FBSyxFQUFFQyxhQUFhLEVBQUVDLGlCQUFpQixFQUFtQjs7SUFDN0YsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCxTQUFTO0lBQzNELE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1QsU0FBUztJQUN2RCxNQUFNLENBQUNVLFdBQVdDLGFBQWEsR0FBR1gsU0FBUztJQUMzQyxNQUFNLENBQUNZLGVBQWVDLGlCQUFpQixHQUFHYixTQUFTO0lBQ25ELE1BQU0sQ0FBQ2MscUJBQXFCQyx1QkFBdUIsR0FBR2YsU0FBUztJQUMvRCxNQUFNLENBQUNnQixjQUFjQyxnQkFBZ0IsR0FBR2pCLFNBQVM7SUFDakQsTUFBTSxDQUFDa0IsV0FBV0MsYUFBYSxHQUFHbkIsU0FBUztJQUUzQ0QsVUFBVTtRQUNSLElBQUlxQjtRQUVKLElBQUlmLHNCQUFzQixNQUFNO1lBQzlCRSxxQkFBcUJjLENBQUFBLE9BQVFBLE9BQU87WUFDcEMsaUZBQWlGO1lBQ2pGWixtQkFBbUI7UUFDckIsT0FBTyxJQUFJSixzQkFBc0IsT0FBTztZQUN0QyxrRkFBa0Y7WUFDbEYsNkNBQTZDO1lBQzdDLE1BQU1pQixhQUFhLEtBQUssS0FBSztZQUM3QkYsWUFBWUcsV0FBVyxJQUFNWixhQUFhLE9BQU9XO1FBQ2pELG9G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
