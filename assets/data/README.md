# 📊 Veri Dosyaları

CSV, XML ve diğer veri formatları.

## 📂 Dosya Kategorileri

### **`csv/`** - CSV Dosyaları
- `users.csv` - Kullanıcı verileri
- `products.csv` - Ürün verileri
- `sales.csv` - Satış verileri

### **`xml/`** - XML Dosyaları
- `config.xml` - Konfigürasyon
- `data.xml` - Veri dosyası
- `feed.xml` - RSS feed

### **`excel/`** - Excel Dosyaları
- `reports.xlsx` - Raporlar
- `data.xls` - Veri tablosu

## 📝 Kullanım

```typescript
// CSV dosyası okuma
import Papa from 'papaparse';

const readCSV = async () => {
  const response = await fetch('/assets/data/csv/users.csv');
  const csvText = await response.text();
  const data = Papa.parse(csvText, { header: true });
  return data.data;
};
```

## 🔧 Gerekli Paketler

```bash
# CSV parsing için
npm install papaparse

# Excel dosyaları için
npm install xlsx
```

## 📋 Örnek Dosyalar

- `countries.csv` - Ülke listesi
- `cities.csv` - Şehir listesi
- `currencies.csv` - Para birimi listesi
- `languages.csv` - Dil listesi

## ⚠️ Not

Bu klasör büyük veri dosyaları için. 
Küçük veriler için `assets/json/` kullanın.
