# 🎬 Lottie Animasyonları

After Effects animasyonları için Lottie JSON dosyaları.

## 📂 Dosya Kategorileri

### **`loading/`** - Yükleme Animasyonları
- `loading-spinner.json`
- `loading-dots.json`
- `loading-pulse.json`

### **`success/`** - Başarı Animasyonları
- `success-check.json`
- `success-star.json`
- `success-confetti.json`

### **`error/`** - Hata Animasyonları
- `error-x.json`
- `error-warning.json`
- `error-sad.json`

### **`empty/`** - Boş Durum Animasyonları
- `empty-box.json`
- `empty-list.json`
- `empty-search.json`

## 📝 Kullanım

```typescript
import LottieView from 'lottie-react-native';

// Component'te kullanma
<LottieView
  source={require('@/assets/lottie/loading/loading-spinner.json')}
  autoPlay
  loop
  style={styles.animation}
/>
```

## 🔧 Özellikler

- **autoPlay**: Otomatik oynatma
- **loop**: Sürekli tekrar
- **speed**: Oynatma hızı
- **style**: Animasyon boyutu

## 📚 Kaynaklar

- [LottieFiles](https://lottiefiles.com/) - Ücretsiz animasyonlar
- [IconScout](https://iconscout.com/) - Premium animasyonlar
