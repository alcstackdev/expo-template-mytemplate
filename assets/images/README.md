# 🎨 Images Klasörü

UI resimleri, arka plan resimleri ve placeholder'lar için.

## 📂 Alt Klasörler

### **`ui/`** - UI Elementleri
- Button resimleri
- Icon varyasyonları
- UI component resimleri

### **`backgrounds/`** - Arka Plan Resimleri
- Sayfa arka planları
- Gradient resimleri
- Pattern'lar

### **`avatars/`** - Profil Resimleri
- Kullanıcı avatar'ları
- Default avatar'lar
- Avatar placeholder'ları

### **`logos/`** - Logo Dosyaları
- App logo varyasyonları
- Brand logo'ları
- Logo farklı boyutları

## 📝 Kullanım

```typescript
// Resim import etme
import logo from '@/assets/images/logos/logo.png';
import background from '@/assets/images/backgrounds/gradient.jpg';

// Component'te kullanma
<Image source={logo} style={styles.logo} />
<Image source={background} style={styles.background} />
```

## 🔧 Optimizasyon

- **PNG**: Şeffaflık gereken resimler
- **WebP**: Performans odaklı resimler
- **SVG**: Vektörel resimler
- **Boyut**: Mobil için optimize edin
