
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 overflow-hidden">
      <div className="relative h-full flex items-start justify-center px-4 md:px-6 pt-4 md:pt-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-40 h-40 md:w-48 md:h-48 flex items-center justify-center">
              <img 
                src="/nizam.png" 
                alt="Hijyen Macerası Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Hijyen Macerası
          </h1>

          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Eğlenceli sorularla hijyen kurallarını öğren ve sağlıklı yaşam alışkanlıkları kazan!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => navigate('/game')}
              className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-bold text-2xl py-6 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-play-circle-line mr-3"></i>
              Oyuna Başla
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-102 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
                <i className="ri-question-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Hızlı Ol!</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Soru çok olabilir ama süre içinde ne kadar çok çözerseniz o kadar çok puan alırsınız!</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-102 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-rose-400 to-red-500 rounded-2xl">
                <i className="ri-heart-3-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">5 can</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Dikkatli ol! 5 hakkın var. Canların biterse oyun biter!</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-102 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl">
                <i className="ri-share-line text-3xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Puanını Paylaş</h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-sm mx-auto">Puanını arkadaşlarına paylaş. Kim daha çok doğru bilecek bakalım!</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center max-w-4xl mx-auto -mt-8 md:-mt-12">
            <div className="w-full h-40 md:h-52 flex items-center justify-center p-6 md:p-12 mt-0 md:mt-0">
              <img 
                src="/tertemiz_yarınlar.png" 
                alt="Tertemiz Yarınlar" 
                loading="lazy"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/1b54d5e3e3679f2c673e8c648eb8802b.png'; }}
                className="max-w-full max-h-full object-contain scale-125"
              />
            </div>
            <div className="w-full h-40 md:h-52 flex items-center justify-center p-6 md:p-12 mt-0 md:mt-0">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/d95510119b0990bfb675058c43ba72c0.png" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain scale-125"
              />
            </div>
            <div className="w-full h-40 md:h-52 flex items-center justify-center p-6 md:p-12 mt-0 md:mt-0">
              <img 
                src="https://static.readdy.ai/image/1a6dc68b8259eb6118d5042abebc473a/19180769e02e14b84b17a3d6e35ab0b5.png" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain scale-125"
              />
            </div>
            <div className="w-full h-40 md:h-52 flex items-center justify-center p-6 md:p-12 mt-0 md:mt-0">
              <img 
                src="/nizam.png" 
                alt="Kurum Logosu" 
                className="max-w-full max-h-full object-contain scale-125"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-teal-400 to-emerald-500 py-4">
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p className="text-white text-sm">
            © 2025 Hijyen Macerası • Sağlıklı yaşam için eğlenceli öğrenme
          </p>
        </div>
      </div>
    </div>
  );
}
