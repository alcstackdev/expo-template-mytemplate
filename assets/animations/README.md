# 🎭 Animasyon Dosyaları

CSS animasyonları ve keyframe'ler.

## 📂 Dosya Kategorileri

### **`css/`** - CSS Animasyonları
- `fade-in.css` - Fade in animasyonu
- `slide-up.css` - Yukarı kayma
- `bounce.css` - Zıplama animasyonu

### **`keyframes/`** - Keyframe Animasyonları
- `loading-keyframes.css` - Yükleme keyframe'leri
- `pulse-keyframes.css` - Nabız keyframe'leri

### **`transitions/`** - Geçiş Animasyonları
- `page-transition.css` - Sayfa geçişi
- `modal-transition.css` - Modal geçişi

## 📝 Kullanım

```typescript
// CSS animasyonu import etme
import './assets/animations/css/fade-in.css';

// Component'te kullanma
<View className="fade-in-animation">
  <Text>Animasyonlu metin</Text>
</View>
```

## 🔧 CSS Örnekleri

```css
/* fade-in.css */
.fade-in-animation {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## ⚠️ Not

Bu klasör **CSS animasyonları** için.
**Lottie animasyonları** için `assets/lottie/` kullanın.
**React Native animasyonları** için `moti` kütüphanesi kullanın.
