# 🎥 Video Dosyaları

Intro videoları ve tutorial videoları.

## 📂 Dosya Kategorileri

### **`intro/`** - Giriş Videoları
- `app-intro.mp4` - App tanıtım videosu
- `onboarding.mp4` - Onboarding videosu
- `welcome.mp4` - Hoş geldin videosu

### **`tutorial/`** - Eğitim Videoları
- `feature-tutorial.mp4` - Özellik eğitimi
- `how-to-use.mp4` - Kullanım kılavuzu
- `tips-tricks.mp4` - İpuçları

### **`background/`** - Arka Plan Videoları
- `background-loop.mp4` - Döngü arka plan
- `ambient-video.mp4` - Ortam videosu

## 📝 Kullanım

```typescript
import { Video } from 'expo-av';

// Video oynatma
<Video
  source={require('@/assets/videos/intro/app-intro.mp4')}
  style={styles.video}
  useNativeControls
  resizeMode="contain"
  shouldPlay
/>
```

## 🔧 Format Seçimi

- **MP4**: En yaygın format
- **WebM**: Modern web formatı
- **MOV**: Apple formatı

## ⚙️ Video Özellikleri

```typescript
// Video konfigürasyonu
const videoConfig = {
  useNativeControls: true,    // Native kontroller
  resizeMode: 'contain',      // Boyutlandırma
  shouldPlay: false,          // Otomatik oynatma
  isLooping: false,           // Döngü
  isMuted: true,              // Sessiz
};
```

## 📱 Optimizasyon

- **Boyut**: Mobil için sıkıştırın
- **Süre**: Kısa tutun (30s-2dk)
- **Format**: MP4 H.264 kullanın
- **Çözünürlük**: 720p yeterli
