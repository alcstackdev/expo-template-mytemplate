# 📄 JSON Veri Dosyaları

Statik veriler ve konfigürasyon dosyaları.

## 📂 Dosya Kategorileri

### **`config/`** - Konfigürasyon Dosyaları
- `app-config.json` - App ayarları
- `api-config.json` - API konfigürasyonu
- `theme-config.json` - Tema ayarları

### **`data/`** - Veri Dosyaları
- `countries.json` - Ülke listesi
- `cities.json` - Şehir listesi
- `currencies.json` - Para birimi listesi

### **`mock/`** - Mock Veriler
- `mock-users.json` - Test kullanıcıları
- `mock-products.json` - Test ürünleri
- `mock-posts.json` - Test gönderileri

## 📝 Kullanım

```typescript
// JSON dosyası import etme
import countries from '@/assets/json/data/countries.json';
import config from '@/assets/json/config/app-config.json';

// Kullanma
const countryList = countries.map(country => country.name);
const apiUrl = config.api.baseUrl;
```

## 🔧 Dosya Yapısı

```json
{
  "name": "Dosya Adı",
  "version": "1.0.0",
  "description": "Dosya açıklaması",
  "data": [
    {
      "id": 1,
      "name": "Örnek Veri"
    }
  ]
}
```

## 📋 Örnek Dosyalar

- `countries.json` - Ülke listesi
- `languages.json` - Dil listesi
- `timezones.json` - Saat dilimi listesi
- `categories.json` - Kategori listesi
