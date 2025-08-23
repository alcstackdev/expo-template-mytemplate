# 📁 Assets Klasörü

Bu klasör uygulamanın tüm statik dosyalarını içerir.

## 📂 Klasör Yapısı

### **🎨 `images/`**
- **Amaç**: Resim dosyaları (PNG, JPG, SVG, WebP)
- **Kullanım**: UI resimleri, arka plan resimleri, placeholder'lar
- **Örnek**: `logo.png`, `background.jpg`, `avatar-placeholder.svg`

### **🎭 `animations/`**
- **Amaç**: Animasyon dosyaları
- **Kullanım**: CSS animasyonları, keyframe'ler
- **Örnek**: `loading.css`, `fade-in.json`

### **🎬 `lottie/`**
- **Amaç**: Lottie animasyon dosyaları
- **Kullanım**: After Effects animasyonları
- **Örnek**: `loading.json`, `success.json`, `error.json`
- **Paket**: `lottie-react-native`

### **🎯 `icons/`**
- **Amaç**: Icon dosyaları (SVG, PNG)
- **Kullanım**: Custom iconlar, logo varyasyonları
- **Örnek**: `menu.svg`, `close.png`, `custom-logo.svg`
- **Not**: Lucide icons kullanıyoruz, bu klasör custom iconlar için

### **🌍 `locales/`**
- **Amaç**: Dil dosyaları
- **Kullanım**: Çeviri metinleri
- **Örnek**: `tr.json`, `en.json`
- **Paket**: `i18next`, `react-i18next`

### **📄 `json/`**
- **Amaç**: JSON veri dosyaları
- **Kullanım**: Statik veriler, konfigürasyon dosyaları
- **Örnek**: `countries.json`, `config.json`, `mock-data.json`

### **🔊 `sounds/`**
- **Amaç**: Ses dosyaları
- **Kullanım**: UI sesleri, notification sesleri
- **Örnek**: `notification.mp3`, `button-click.wav`
- **Paket**: `expo-av`

### **🎥 `videos/`**
- **Amaç**: Video dosyaları
- **Kullanım**: Intro videoları, tutorial videoları
- **Örnek**: `intro.mp4`, `tutorial.webm`
- **Paket**: `expo-av`

### **📊 `data/`**
- **Amaç**: Veri dosyaları
- **Kullanım**: CSV, XML, diğer veri formatları
- **Örnek**: `users.csv`, `products.xml`

## 📝 Kullanım Kuralları

1. **Dosya İsimlendirme**: `kebab-case` kullanın (örn: `user-avatar.png`)
2. **Boyut Optimizasyonu**: Resimleri optimize edin
3. **Format Seçimi**: 
   - Resimler: PNG (şeffaflık gerekli), WebP (performans)
   - İconlar: SVG (vektörel), PNG (piksel)
   - Animasyonlar: JSON (Lottie), CSS (basit)
4. **Organizasyon**: Alt klasörler kullanın (örn: `images/ui/`, `images/backgrounds/`)

## 🔧 Gerekli Paketler

```bash
# Lottie animasyonları için
npm install lottie-react-native

# Ses ve video için
npx expo install expo-av

# SVG desteği için (zaten kurulu)
npm install react-native-svg
```
