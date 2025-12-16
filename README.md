<<<<<<< HEAD
# hijyen-oyunu
=======
# Hijyen Oyunu — Hugging Face Integration Guide

Bu proje yerel olarak çalışan bir soru oyunu içerir ve isteğe bağlı olarak Hugging Face (HF) Inference API üzerinden dinamik soru çekebilir. Aşağıda adım adım ne yapmanız gerektiği ve nasıl test edeceğiniz anlatılmıştır.

## 1) Hugging Face hesabı ve token oluşturma
1. https://huggingface.co adresine gidin ve kaydolun.
2. Sağ üstten profil > `Settings` > `Access Tokens` bölümüne gidin.
3. `New token` butonuna basın. İsim verin (ör. `hijyen-oyunu`) ve yetki olarak `Read` / `Inference` seçin.
4. Oluşturduğunuz token'ı kopyalayın — bu token'ı asla istemci tarafına koymayın.

## 2) Deploy önerisi (Vercel)
1. Repo'yu GitHub'a push edin.
2. https://vercel.com adresinde oturum açın ve "Import Project" ile GitHub reposunu seçin.
3. Deploy ayarlarında `Environment Variables` bölümüne şu secret'ı ekleyin:
   - Key: `HF_API_KEY`
   - Value: (Hugging Face tarafından oluşturduğunuz token)
4. Opsiyonel: `HF_MODEL` environment variable ekleyebilirsiniz (default: `google/flan-t5-small`).
5. Deploy edin. Serverless fonksiyonumuz `api/generate-question` endpoint'i olarak kullanılacaktır.

### Vercel hızlı kurulum
1. Eğer henüz Vercel CLI yoksa kurun:
```bash
npm i -g vercel
```
2. Proje kökünde aşağıdaki komutla oturum açın ve deploy edin:
```bash
vercel login
vercel
```
3. Vercel deploy sırasında `HF_API_KEY` environment variable'ını ekleyebilirsiniz, veya Vercel dashboard > Project > Settings > Environment Variables kısmından `HF_API_KEY` ekleyin.

### Yerel geliştirme ile test
- `.env.example` dosyası eklendi; kopyalayın `.env` yapıp `VITE_USE_HF=true` ekleyin.
- Serverless fonksiyonları yerelde çalıştırmak için:
```bash
HF_API_KEY=hf_xxx vercel dev
```
Bu komut hem frontendi hem de `api/` fonksiyonunu taklit ederek lokal endpoint sağlar.

## 3) İstemci tarafı: HF kullanımını etkinleştirme
- Projede HF çağrısını istemci tarafında denemek için Vite env değişkenini aktif edin.
  - `.env` dosyasına ekleyin:
    ```
    VITE_USE_HF=true
    ```
  - Bu sadece istemci kullanımını etkinleştirir; HF anahtarı sunucu tarafında `HF_API_KEY` olarak kalmalıdır.

## 4) Yerel test (serverless fonksiyonları çalıştırma)
- Vercel CLI ile lokal geliştirme yapabilirsiniz. Terminalde:
```bash
npm i -g vercel
HF_API_KEY=hf_xxx vercel dev
```
- Bu şekilde `api/generate-question` endpoint'i lokal olarak `http://localhost:3000/api/generate-question` altında çalışır ve HF çağrılarını yapar.

## 5) Kullanım ve hata toleransı
- Uygulama ilk açılışta ve yeniden başlatmada HF proxy'yi dener; başarısız olursa otomatik olarak yerel jeneratöre döner.
- HF çağrısı başarısız olduğunda UI üstünde bir uyarı (dismissible) gösterilir.

## 6) Maliyet ve limitler
- Hugging Face ücretsiz planı sınırlı çağrı hakkı sunabilir. Çok yoğun kullanım bekliyorsanız HF ücretli planlarına bakın veya çağrı oranını sınırlayın.
- Maliyet azaltma önerileri: küçük model (`flan-t5-small`), düşük `temperature`, caching ve istek başına birden çok soru isteği.

## 7) Eğer istersem ben deploy ederim
- İsterseniz ben repo içindeki fonksiyonları Vercel ile deploy edebilirim;  sizin sadece `HF_API_KEY` secret'ını Vercel projesine eklemeniz yeterli.

---

Eğer devam etmemi isterseniz, hangi adımı yapayım:
- A) `vercel.json` ekleyip deploy yardımcı script'leri ekleyeyim.
- B) UI'da hata bildirimi stilini değiştirip daha görünür yapayım.
- C) Size adım adım ekran görüntülü rehber (veya kısa komutlar) vereyim.

Seçiminizi söyleyin, ben devam edeyim.
>>>>>>> 1292087 (Enable FORCE_LOCAL fallback for questions API)
