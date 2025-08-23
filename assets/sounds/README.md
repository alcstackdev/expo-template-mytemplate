# 🔊 Ses Dosyaları

UI sesleri ve notification sesleri.

## 📂 Dosya Kategorileri

### **`ui/`** - UI Sesleri
- `button-click.wav` - Buton tıklama sesi
- `toggle-switch.wav` - Switch sesi
- `notification.wav` - Bildirim sesi

### **`feedback/`** - Geri Bildirim Sesleri
- `success.wav` - Başarı sesi
- `error.wav` - Hata sesi
- `warning.wav` - Uyarı sesi

### **`ambient/`** - Ortam Sesleri
- `background-music.mp3` - Arka plan müziği
- `nature-sounds.wav` - Doğa sesleri

## 📝 Kullanım

```typescript
import { Audio } from 'expo-av';

// Ses çalma
const playSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('@/assets/sounds/ui/button-click.wav')
  );
  await sound.playAsync();
};
```

## 🔧 Format Seçimi

- **WAV**: Kısa UI sesleri
- **MP3**: Uzun müzik dosyaları
- **OGG**: Alternatif format

## ⚙️ Konfigürasyon

```typescript
// Ses ayarları
await Audio.setAudioModeAsync({
  allowsRecordingIOS: false,
  staysActiveInBackground: false,
  playsInSilentModeIOS: true,
  shouldDuckAndroid: true,
});
```

## 📱 Platform Notları

- **iOS**: Silent mode'da çalışabilir
- **Android**: Ducking desteği
- **Boyut**: Mobil için optimize edin
