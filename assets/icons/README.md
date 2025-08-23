# 🎯 Custom Icons

Lucide icons dışında kullanılacak custom icon dosyaları.

## 📂 Dosya Kategorileri

### **`custom/`** - Özel Iconlar
- App-specific iconlar
- Brand iconları
- Özel tasarım iconlar

### **`logos/`** - Logo Iconları
- App logo varyasyonları
- Brand logo iconları
- Logo farklı renkleri

### **`ui/`** - UI Iconları
- Custom button iconları
- Navigation iconları
- Form iconları

## 📝 Kullanım

```typescript
// SVG icon import etme
import CustomIcon from '@/assets/icons/custom/my-icon.svg';

// Component'te kullanma
<CustomIcon width={24} height={24} color="#000" />
```

## 🔧 Format Seçimi

- **SVG**: Vektörel, ölçeklenebilir
- **PNG**: Piksel tabanlı, sabit boyut
- **WebP**: Modern format, küçük boyut

## ⚠️ Not

Bu klasör sadece **custom iconlar** için. 
**Lucide React Native** iconları kullanıyoruz:

```typescript
import { Home, Settings, User } from 'lucide-react-native';
```
