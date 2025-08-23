# 🌍 Dil Sistemi TODO Listesi

## ✅ Tamamlanan İşlemler

### **1. Temel Yapı**
- [x] `i18n/index.ts` - Ana i18n konfigürasyonu
- [x] `hooks/useLanguage.ts` - Dil hook'u
- [x] `app.json` - Expo plugin konfigürasyonu
- [x] 15 dil desteği (RTL hariç)
- [x] Fallback sistemleri

### **2. Test Sayfası**
- [x] `app/get-started.tsx` - Dil test sayfası
- [x] Dil seçimi dropdown'u
- [x] Format testleri (para, sayı, tarih, saat)
- [x] Dil bilgileri gösterimi

### **3. Çeviriler**
- [x] Temel çeviriler (get-started, common)
- [x] 15 dil için çeviri dosyaları

## 🔄 Devam Eden İşlemler

### **1. RNLocalize Native Modül**
- [ ] Expo Development Build oluşturma
- [ ] Native modül bağlantısı
- [ ] Cihaz dili tespiti testi

## 📋 Yapılacak İşlemler

### **1. Native Taraf Konfigürasyonu**
- [ ] **Expo Development Build**
  ```bash
  npx expo install --fix
  npx expo run:android  # veya run:ios
  ```

- [ ] **iOS Konfigürasyonu**
  - [ ] Xcode'da desteklenen dilleri ekleme
  - [ ] Info.plist güncellemesi
  - [ ] Localization klasörü oluşturma

- [ ] **Android Konfigürasyonu**
  - [ ] `android/app/src/main/res/values-*` klasörleri
  - [ ] `strings.xml` dosyaları
  - [ ] `build.gradle` güncellemesi

### **2. Dil Sistemi Geliştirmeleri**
- [ ] **Çeviri Dosyaları Genişletme**
  - [ ] Tüm sayfalar için çeviriler
  - [ ] Dinamik çeviri yükleme
  - [ ] Çeviri eksiklik kontrolü

- [ ] **Format Sistemi**
  - [ ] Daha gelişmiş para formatı
  - [ ] Özel tarih formatları
  - [ ] Sayı formatı özelleştirme

- [ ] **Dil Değiştirme Sistemi**
  - [ ] Dil değiştirme animasyonu
  - [ ] Dil tercihi kaydetme
  - [ ] Otomatik dil tespiti

### **3. UI/UX Geliştirmeleri**
- [ ] **Dil Seçici Bileşeni**
  - [ ] Gelişmiş dil seçici
  - [ ] Dil arama özelliği
  - [ ] Favori diller

- [ ] **Dil Ayarları Sayfası**
  - [ ] Detaylı dil ayarları
  - [ ] Format tercihleri
  - [ ] Dil test araçları

### **4. Test ve Doğrulama**
- [ ] **Birim Testleri**
  - [ ] Format fonksiyonları testi
  - [ ] Çeviri sistemi testi
  - [ ] Hook testleri

- [ ] **Entegrasyon Testleri**
  - [ ] Tüm dillerde UI testi
  - [ ] Format doğrulama
  - [ ] Performans testi

## 🚨 Bilinen Sorunlar

### **1. RNLocalize Hatası**
- **Sorun**: `TurboModuleRegistry.getEnforcing(...): 'RNLocalize' could not be found`
- **Çözüm**: Expo Development Build gerekli
- **Durum**: Fallback sistemi ile geçici çözüm uygulandı

### **2. Expo Go Uyumsuzluğu**
- **Sorun**: Native modüller Expo Go'da çalışmaz
- **Çözüm**: Development build kullanımı
- **Durum**: Beklemede

## 📚 Kaynaklar

### **Dokümantasyon**
- [react-native-localize GitHub](https://github.com/zoontek/react-native-localize)
- [Expo Localization](https://docs.expo.dev/versions/latest/sdk/localization/)
- [i18next Documentation](https://www.i18next.com/)

### **Örnekler**
- [react-native-localize Examples](https://github.com/zoontek/react-native-localize/tree/master/example)
- [Expo i18n Example](https://github.com/expo/examples/tree/master/with-i18n)

## 🎯 Sonraki Adımlar

1. **UI tasarımları tamamlandıktan sonra:**
   - Expo Development Build oluştur
   - Native modül bağlantısını test et
   - Cihaz dili tespitini doğrula

2. **Dil sistemi entegrasyonu:**
   - Tüm sayfalara dil desteği ekle
   - Çeviri dosyalarını genişlet
   - Format sistemini geliştir

3. **Test ve optimizasyon:**
   - Performans testleri
   - Kullanıcı deneyimi iyileştirmeleri
   - Hata yakalama sistemleri

---

**Not**: Bu liste, projenin gelişimine göre güncellenecektir.
