import { useNavigate } from 'react-router-dom';

interface GameOverProps {
  score: number;
  totalQuestions: number;
  usedSeconds?: number;
  totalDuration?: number;
  onRestart: () => void;
}

export default function GameOver({ score, totalQuestions, usedSeconds, totalDuration, onRestart }: GameOverProps) {
  const navigate = useNavigate();
  const maxScore = totalQuestions * 10;
  // If usedSeconds is provided (game ended early due to lives), scale the effective max score
  // by the fraction of time used. If not provided, assume full duration used (no scaling).
  let effectiveMax = maxScore;
  if (typeof usedSeconds === 'number' && typeof totalDuration === 'number' && totalDuration > 0) {
    const frac = Math.max(0, Math.min(1, usedSeconds / totalDuration));
    effectiveMax = Math.max(1, Math.round(maxScore * frac));
  }

  const percentage = Math.max(0, Math.min(100, (score / effectiveMax) * 100));

  const getMessage = () => {
    if (percentage >= 80) return { text: 'Mükemmel!', icon: 'ri-trophy-line', color: 'from-yellow-400 to-amber-500' };
    if (percentage >= 60) return { text: 'Harika!', icon: 'ri-medal-line', color: 'from-emerald-400 to-teal-500' };
    if (percentage >= 40) return { text: 'İyi!', icon: 'ri-thumb-up-line', color: 'from-blue-400 to-indigo-500' };
    return { text: 'Tekrar Dene!', icon: 'ri-restart-line', color: 'from-purple-400 to-pink-500' };
  };

  const message = getMessage();

  return (
    <div className="w-full h-screen bg-gradient-to-br from-teal-100 via-cyan-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-12 text-center border-4 border-teal-400">
          <div className={`w-32 h-32 mx-auto mb-8 flex items-center justify-center bg-gradient-to-br ${message.color} rounded-full shadow-xl`}>
            <i className={`${message.icon} text-6xl text-white`}></i>
          </div>

          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {message.text}
          </h1>

          <p className="text-xl text-gray-600 mb-8">
            Oyun Tamamlandı
          </p>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 mb-8 border-2 border-teal-200">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl">
                  <i className="ri-star-line text-3xl text-white"></i>
                </div>
                <p className="text-sm text-gray-500 mb-2">Toplam Puan</p>
                <p className="text-4xl font-bold text-gray-800">{score}</p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl">
                  <i className="ri-percent-line text-3xl text-white"></i>
                </div>
                <p className="text-sm text-gray-500 mb-2">Başarı Oranı</p>
                <p className="text-4xl font-bold text-gray-800">{percentage.toFixed(0)}%</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={onRestart}
              className="w-full bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-xl py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-restart-line mr-3"></i>
              Tekrar Oyna
            </button>

            <button
              onClick={() => navigate('/')}
              className="w-full bg-white hover:bg-gray-50 text-gray-700 font-bold text-lg py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl border-2 border-gray-200 transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-home-line mr-3"></i>
              Ana Sayfa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
