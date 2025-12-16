export const questions = [
  // User-provided "Çevre Bilinci" questions (14)
  {
    question: 'Aşağıdakilerden hangisi sera gazı değildir?',
    options: ['Karbon dioksit (CO₂)', 'Metan (CH₄)', 'Azot oksit (N₂O)', 'Oksijen (O₂)'],
    correctAnswer: 3,
    theme: 'çevre'
  },
  {
    question: 'Küresel ısınmanın başlıca nedeni nedir?',
    options: ['Dünya’nın ekseninde dönmesi', 'Sera gazlarının atmosferde birikmesi', 'Ay’ın çekim gücü', 'Güneş’in daha fazla ışık yayması'],
    correctAnswer: 1,
    theme: 'çevre'
  },
  {
    question: 'Aşağıdakilerden hangisi küresel ısınmanın sonucu değildir?',
    options: ['Buzulların erimesi', 'Deniz seviyesinin yükselmesi', 'Kuraklık', 'Depremlerin artması'],
    correctAnswer: 3,
    theme: 'çevre'
  },
  {
    question: 'Sera gazı salınımını azaltmak için en etkili yöntem hangisidir?',
    options: ['Fosil yakıt kullanımını artırmak', 'Yenilenebilir enerjiye geçmek', 'Daha fazla plastik üretmek', 'Ormanları kesmek'],
    correctAnswer: 1,
    theme: 'enerji'
  },
  {
    question: 'Atmosferde en fazla bulunan sera gazı hangisidir?',
    options: ['Metan', 'Karbon dioksit', 'Su buharı', 'Azot oksit'],
    correctAnswer: 2,
    theme: 'çevre'
  },
  {
    question: 'Evde elektrik tasarrufu için en etkili yöntem hangisidir?',
    options: ['Ampulleri LED ile değiştirmek', 'Buzdolabını sürekli açık bırakmak', 'Elektrikli cihazları prizde bırakmak', 'Perdeleri gündüz kapalı tutmak'],
    correctAnswer: 0,
    theme: 'tasarruf'
  },
  {
    question: 'Su tasarrufu için en uygun davranış hangisidir?',
    options: ['Damlayan muslukları tamir etmek', 'Diş fırçalarken musluğu açık bırakmak', 'Bahçeyi öğlen hortumla sulamak', 'Uzun süre duş almak'],
    correctAnswer: 0,
    theme: 'tasarruf'
  },
  {
    question: 'Bilgisayar kullanılmadığında ne yapılmalıdır?',
    options: ['Sürekli şarjda bırakılmalı', 'Açık bırakılmalı', 'Ekran parlaklığı artırılmalı', 'Uyku moduna alınmalı'],
    correctAnswer: 3,
    theme: 'tasarruf'
  },
  {
    question: 'Bahçeyi sularken su tasarrufu için en uygun yöntem hangisidir?',
    options: ['Gece damlama sistemi kullanmak', 'Öğlen hortumla sulamak', 'Musluğu açık bırakmak', 'Her gün uzun süre sulamak'],
    correctAnswer: 0,
    theme: 'tasarruf'
  },
  {
    question: 'Evde elektrik tasarrufu için doğru alışkanlık hangisidir?',
    options: ['Kullanılmayan ışıkları kapatmak', 'Televizyonu sürekli açık tutmak', 'Ampulleri sürekli açık bırakmak', 'Elektrikli cihazları prizde bırakmak'],
    correctAnswer: 0,
    theme: 'tasarruf'
  },
  {
    question: 'Aşağıdakilerden hangisi yenilenebilir enerji kaynağıdır?',
    options: ['Petrol', 'Doğalgaz', 'Güneş', 'Kömür'],
    correctAnswer: 2,
    theme: 'enerji'
  },
  {
    question: 'Rüzgarın gücünü kullanan enerji kaynağı hangisidir?',
    options: ['Jeotermal', 'Güneş paneli', 'Rüzgar türbini', 'Hidroelektrik'],
    correctAnswer: 2,
    theme: 'enerji'
  },
  {
    question: 'Yer altı sıcaklığını kullanan enerji kaynağı hangisidir?',
    options: ['Rüzgar', 'Dalga', 'Güneş', 'Jeotermal'],
    correctAnswer: 3,
    theme: 'enerji'
  },
  {
    question: 'Suyun hareketini kullanan enerji kaynağı hangisidir?',
    options: ['Hidroelektrik', 'Rüzgar', 'Güneş', 'Jeotermal'],
    correctAnswer: 0,
    theme: 'enerji'
  }
  // existing hygiene questions could be appended here if desired
];

// Additional user-provided questions (Çevre Bilinci setinin genişletilmiş versiyonu)
export const additionalQuestions = [
  { question: 'Aşağıdakilerden hangisi doğayı korumak için doğru bir davranıştır?', options: ['Çöpleri doğaya bırakmak', 'Geri dönüşüm yapmak', 'Plastik kullanımını artırmak', 'Ormanları kesmek'], correctAnswer: 1, theme: 'çevre' },
  { question: 'Ormanların yok edilmesi hangi sonucu doğurur?', options: ['Oksijen azalması', 'Deniz seviyesinin yükselmesi', 'Depremlerin artması', 'Güneş ışığının azalması'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Çevre kirliliğini azaltmak için en etkili yöntem hangisidir?', options: ['Toplu taşıma kullanmak', 'Daha fazla araba almak', 'Plastik torba kullanmak', 'Çöpleri yakmak'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Doğayı korumak için hangi alışkanlık yanlıştır?', options: ['Tek kullanımlık ürünleri azaltmak', 'Çöpleri geri dönüştürmek', 'Elektrikli araç kullanmak', 'Plastik şişeleri doğaya atmak'], correctAnswer: 3, theme: 'çevre' },
  { question: 'Aşağıdakilerden hangisi doğa dostu bir davranıştır?', options: ['Yeniden kullanılabilir çanta kullanmak', 'Çöpleri denize atmak', 'Kağıtları yakmak', 'Plastik şişeleri çöpe karıştırmak'], correctAnswer: 0, theme: 'çevre' },

  { question: 'Küresel ısınmanın en önemli etkilerinden biri nedir?', options: ['Buzulların erimesi', 'Dünya’nın dönme hızının artması', 'Ay’ın çekim gücünün azalması', 'Depremlerin çoğalması'], correctAnswer: 0, theme: 'sera' },
  { question: 'Sera gazlarının artması hangi sonucu doğurur?', options: ['Atmosferde ısının hapsolması', 'Güneş ışığının azalması', 'Dünya’nın dönme hızının değişmesi', 'Okyanusların küçülmesi'], correctAnswer: 0, theme: 'sera' },
  { question: 'Fosil yakıtların kullanımı hangi gazı artırır?', options: ['Karbon dioksit', 'Oksijen', 'Helyum', 'Azot'], correctAnswer: 0, theme: 'sera' },
  { question: 'Küresel ısınmayı azaltmak için hangi davranış yanlıştır?', options: ['Yenilenebilir enerji kullanmak', 'Fosil yakıt tüketimini artırmak', 'Enerji tasarrufu yapmak', 'Geri dönüşüm yapmak'], correctAnswer: 1, theme: 'sera' },
  { question: 'Küresel ısınmanın tarım üzerindeki etkisi nedir?', options: ['Kuraklık', 'Depremler', 'Oksijen artışı', 'Güneş ışığının azalması'], correctAnswer: 0, theme: 'sera' },

  { question: 'Diş fırçalarken su tasarrufu için ne yapılmalıdır?', options: ['Musluğu kapatmak', 'Musluğu açık bırakmak', 'Daha fazla su kullanmak', 'Musluğu sürekli akıtmak'], correctAnswer: 0, theme: 'su' },
  { question: 'Bahçeyi sularken su tasarrufu için en uygun zaman hangisidir?', options: ['Gece', 'Öğlen', 'Sabah', 'Akşamüstü'], correctAnswer: 0, theme: 'su' },
  { question: 'Damlayan musluk neden zararlıdır?', options: ['Su israfına yol açar', 'Elektrik tüketimini artırır', 'Oksijen üretimini azaltır', 'Güneş ışığını engeller'], correctAnswer: 0, theme: 'su' },
  { question: 'Su tasarrufu için hangi davranış yanlıştır?', options: ['Kısa süre duş almak', 'Musluğu kapatmak', 'Bahçeyi damlama sistemiyle sulamak', 'Musluğu sürekli açık bırakmak'], correctAnswer: 3, theme: 'su' },
  { question: 'Evde su tasarrufu için hangi cihaz kullanılabilir?', options: ['Su tasarruflu musluk başlığı', 'Elektrikli soba', 'Ampul', 'Televizyon'], correctAnswer: 0, theme: 'su' },

  { question: 'Elektrik tasarrufu için hangi ampul tercih edilmelidir?', options: ['LED', 'Halojen', 'Akkor', 'Floresan'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Kullanılmayan ışıkları kapatmak neden önemlidir?', options: ['Elektrik tasarrufu sağlar', 'Su tasarrufu sağlar', 'Oksijen üretir', 'Güneş ışığını artırır'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Bilgisayar kullanılmadığında ne yapılmalıdır?', options: ['Uyku moduna alınmalı', 'Sürekli açık bırakılmalı', 'Şarjda tutulmalı', 'Parlaklığı artırılmalı'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Enerji sınıfı yüksek buzdolabı seçmenin avantajı nedir?', options: ['Daha az enerji tüketir', 'Daha fazla su harcar', 'Daha fazla plastik üretir', 'Daha çok ısı yayar'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Elektrikli cihazları prizde bırakmak neden yanlıştır?', options: ['Enerji tüketimini artırır', 'Su tüketimini artırır', 'Oksijen üretimini azaltır', 'Güneş ışığını engeller'], correctAnswer: 0, theme: 'elektrik' },

  { question: 'Aşağıdakilerden hangisi yenilenebilir enerji kaynağı değildir?', options: ['Güneş', 'Rüzgar', 'Kömür', 'Jeotermal'], correctAnswer: 2, theme: 'enerji' },
  { question: 'Rüzgar türbinleri hangi enerjiyi üretir?', options: ['Elektrik', 'Su', 'Isı', 'Oksijen'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Jeotermal enerji hangi kaynağı kullanır?', options: ['Yer altı sıcaklığı', 'Güneş ışığı', 'Rüzgar', 'Dalga'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Hidroelektrik enerji hangi kaynağı kullanır?', options: ['Su', 'Rüzgar', 'Güneş', 'Jeotermal'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Dalga enerjisi hangi kaynağı kullanır?', options: ['Okyanus dalgaları', 'Güneş ışığı', 'Rüzgar', 'Yer altı sıcaklığı'], correctAnswer: 0, theme: 'enerji' },

  { question: 'Hijyen için eller ne zaman yıkanmalıdır?', options: ['Yemekten önce', 'Yemekten sonra', 'Uyurken', 'Televizyon izlerken'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için sabun kullanmak neden önemlidir?', options: ['Mikropları öldürür', 'Su tasarrufu sağlar', 'Elektrik tasarrufu sağlar', 'Oksijen üretir'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Kalabalık ortamlarda hijyen için ne yapılmalıdır?', options: ['Maske takmak', 'Uyurken maske takmak', 'Evde yalnızken maske takmak', 'Bahçede tek başına maske takmak'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için doğru davranış hangisidir?', options: ['Yemekten önce elleri sabunla yıkamak', 'Ellerle sürekli yüzü dokunmak', 'Sabun kullanmadan yıkamak', 'Eller kuruyana kadar beklemek'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için hangi durumda maske takmak önerilir?', options: ['Kalabalık ortamlarda', 'Evde yalnızken', 'Bahçede tek başına', 'Uyurken'], correctAnswer: 0, theme: 'hijyen' }
];

// Merge additionalQuestions into the primary questions export so generator has a larger pool
// (final merged export including `moreQuestions` is declared at the end of this file)

// More user-provided questions (41 items)
export const moreQuestions = [
  { question: 'Çöplerin doğada bırakılması hangi canlılara en çok zarar verir?', options: ['Balıklar', 'Kuşlar', 'İnsanlar', 'Ağaçlar'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Orman yangınlarının en büyük nedeni nedir?', options: ['İnsan faaliyetleri', 'Güneş ışığı', 'Depremler', 'Yağmur'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Geri dönüşüm kutularının renkli olması neyi kolaylaştırır?', options: ['Atıkların ayrıştırılmasını', 'Çöplerin yakılmasını', 'Çöplerin karışmasını', 'Çöplerin doğaya bırakılmasını'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Çevreyi korumak için hangi davranış yanlıştır?', options: ['Tek kullanımlık plastikleri azaltmak', 'Çöpleri geri dönüştürmek', 'Elektrikli araç kullanmak', 'Çöpleri denize atmak'], correctAnswer: 3, theme: 'çevre' },
  { question: 'Ağaç dikmenin çevreye faydası nedir?', options: ['Oksijen üretimini artırır', 'Su tüketimini artırır', 'Enerji tüketimini artırır', 'Plastik üretimini artırır'], correctAnswer: 0, theme: 'çevre' },

  { question: 'Küresel ısınmanın en büyük etkisi hangi bölgede görülür?', options: ['Kutup bölgeleri', 'Çöller', 'Ormanlar', 'Dağlar'], correctAnswer: 0, theme: 'sera' },
  { question: 'Atmosferde ısıyı hapseden gazlara ne denir?', options: ['Sera gazları', 'Oksijen', 'Azot', 'Helyum'], correctAnswer: 0, theme: 'sera' },
  { question: 'Fosil yakıtların yanması hangi gazı artırır?', options: ['Karbon dioksit', 'Oksijen', 'Helyum', 'Azot'], correctAnswer: 0, theme: 'sera' },
  { question: 'Küresel ısınmanın denizler üzerindeki etkisi nedir?', options: ['Deniz seviyesinin yükselmesi', 'Oksijen artışı', 'Depremler', 'Güneş ışığının azalması'], correctAnswer: 0, theme: 'sera' },
  { question: 'Küresel ısınmayı azaltmak için hangi davranış yanlıştır?', options: ['Yenilenebilir enerji kullanmak', 'Fosil yakıt tüketimini artırmak', 'Enerji tasarrufu yapmak', 'Geri dönüşüm yapmak'], correctAnswer: 1, theme: 'sera' },

  { question: 'Evde su tasarrufu için hangi cihaz kullanılabilir?', options: ['Su tasarruflu musluk başlığı', 'Elektrikli soba', 'Ampul', 'Televizyon'], correctAnswer: 0, theme: 'su' },
  { question: 'Bahçeyi sularken su tasarrufu için en uygun yöntem hangisidir?', options: ['Damlama sistemi', 'Hortumla sulamak', 'Musluğu açık bırakmak', 'Her gün uzun süre sulamak'], correctAnswer: 0, theme: 'su' },
  { question: 'Damlayan musluk neden zararlıdır?', options: ['Su israfına yol açar', 'Elektrik tüketimini artırır', 'Oksijen üretimini azaltır', 'Güneş ışığını engeller'], correctAnswer: 0, theme: 'su' },
  { question: 'Diş fırçalarken su tasarrufu için ne yapılmalıdır?', options: ['Musluğu kapatmak', 'Musluğu açık bırakmak', 'Daha fazla su kullanmak', 'Musluğu sürekli akıtmak'], correctAnswer: 0, theme: 'su' },
  { question: 'Su tasarrufu için yanlış davranış hangisidir?', options: ['Kısa süre duş almak', 'Musluğu kapatmak', 'Bahçeyi damlama sistemiyle sulamak', 'Musluğu sürekli açık bırakmak'], correctAnswer: 3, theme: 'su' },

  { question: 'Elektrik tasarrufu için hangi ampul tercih edilmelidir?', options: ['LED', 'Halojen', 'Akkor', 'Floresan'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Kullanılmayan ışıkları kapatmak neden önemlidir?', options: ['Elektrik tasarrufu sağlar', 'Su tasarrufu sağlar', 'Oksijen üretir', 'Güneş ışığını artırır'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Bilgisayar kullanılmadığında ne yapılmalıdır?', options: ['Uyku moduna alınmalı', 'Sürekli açık bırakılmalı', 'Şarjda tutulmalı', 'Parlaklığı artırılmalı'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Enerji sınıfı yüksek buzdolabı seçmenin avantajı nedir?', options: ['Daha az enerji tüketir', 'Daha fazla su harcar', 'Daha fazla plastik üretir', 'Daha çok ısı yayar'], correctAnswer: 0, theme: 'elektrik' },
  { question: 'Elektrikli cihazları prizde bırakmak neden yanlıştır?', options: ['Enerji tüketimini artırır', 'Su tüketimini artırır', 'Oksijen üretimini azaltır', 'Güneş ışığını engeller'], correctAnswer: 0, theme: 'elektrik' },

  { question: 'Aşağıdakilerden hangisi yenilenebilir enerji kaynağı değildir?', options: ['Güneş', 'Rüzgar', 'Kömür', 'Jeotermal'], correctAnswer: 2, theme: 'enerji' },
  { question: 'Rüzgar türbinleri hangi enerjiyi üretir?', options: ['Elektrik', 'Su', 'Isı', 'Oksijen'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Jeotermal enerji hangi kaynağı kullanır?', options: ['Yer altı sıcaklığı', 'Güneş ışığı', 'Rüzgar', 'Dalga'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Hidroelektrik enerji hangi kaynağı kullanır?', options: ['Su', 'Rüzgar', 'Güneş', 'Jeotermal'], correctAnswer: 0, theme: 'enerji' },
  { question: 'Dalga enerjisi hangi kaynağı kullanır?', options: ['Okyanus', 'Çöl', 'Dağ', 'Orman'], correctAnswer: 0, theme: 'enerji' },

  { question: 'Hijyen için eller ne zaman yıkanmalıdır?', options: ['Yemekten önce', 'Yemekten sonra', 'Uyurken', 'Televizyon izlerken'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için sabun kullanmak neden önemlidir?', options: ['Mikropları öldürür', 'Su tasarrufu sağlar', 'Elektrik tasarrufu sağlar', 'Oksijen üretir'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Kalabalık ortamlarda hijyen için ne yapılmalıdır?', options: ['Maske takmak', 'Uyurken maske takmak', 'Evde yalnızken maske takmak', 'Bahçede tek başına maske takmak'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için doğru davranış hangisidir?', options: ['Yemekten önce elleri sabunla yıkamak', 'Ellerle sürekli yüzü dokunmak', 'Sabun kullanmadan yıkamak', 'Eller kuruyana kadar beklemek'], correctAnswer: 0, theme: 'hijyen' },

  { question: 'Çöplerin doğaya bırakılması hangi sonucu doğurur?', options: ['Toprağın verimliliğini artırır', 'Hayvanların yaşamını tehdit eder', 'Oksijen üretimini artırır', 'Su kaynaklarını temizler'], correctAnswer: 1, theme: 'çevre' },
  { question: 'Aşağıdakilerden hangisi çevre dostu ulaşım yöntemidir?', options: ['Bisiklet', 'Araba', 'Uçak', 'Kamyon'], correctAnswer: 0, theme: 'çevre' },
  { question: 'Evde enerji tasarrufu için hangi davranış doğrudur?', options: ['Kullanılmayan cihazları kapatmak', 'Ampulleri sürekli açık bırakmak', 'Televizyonu prizde bırakmak', 'Buzdolabını açık tutmak'], correctAnswer: 0, theme: 'tasarruf' },
  { question: 'Su tasarrufu için en uygun davranış hangisidir?', options: ['Bahçeyi damlama sistemiyle sulamak', 'Hortumla sürekli sulamak', 'Musluğu açık bırakmak', 'Uzun süre duş almak'], correctAnswer: 0, theme: 'su' },
  { question: 'Aşağıdakilerden hangisi yenilenebilir enerji kaynağıdır?', options: ['Kömür', 'Petrol', 'Rüzgar', 'Doğalgaz'], correctAnswer: 2, theme: 'enerji' },

  { question: 'Hijyen için hangi durumda eller yıkanmalıdır?', options: ['Yemek hazırlamadan önce', 'Televizyon izlerken', 'Kitap okurken', 'Uyurken'], correctAnswer: 0, theme: 'hijyen' },
  { question: 'Hijyen için maske takmanın en önemli faydası nedir?', options: ['Virüslerin yayılmasını azaltır', 'Su tasarrufu sağlar', 'Elektrik tasarrufu sağlar', 'Oksijen üretir'], correctAnswer: 0, theme: 'hijyen' }
];

export const allQuestions = [...questions, ...additionalQuestions, ...moreQuestions];
