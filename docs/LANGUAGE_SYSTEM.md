# 🌍 Dil Sistemi (i18n) Dokümantasyonu

## 📋 İçindekiler

1. [Genel Bakış](#genel-bakış)
2. [Dosya Yapısı](#dosya-yapısı)
3. [Hızlı Başlangıç](#hızlı-başlangıç)
4. [Desteklenen Diller](#desteklenen-diller)
5. [Platform Özel Stiller](#platform-özel-stiller)
6. [Hook'lar](#hooklar)
7. [Bileşenler](#bileşenler)
8. [Çeviri Dosyaları](#çeviri-dosyaları)
9. [Kullanım Örnekleri](#kullanım-örnekleri)
10. [En İyi Uygulamalar](#en-iyi-uygulamalar)
11. [Hata Ayıklama](#hata-ayıklama)
12. [Ek Kaynaklar](#ek-kaynaklar)

## 🎯 Genel Bakış

Bu proje, React Native uygulamaları için kapsamlı bir çoklu dil desteği sistemi sağlar. i18next kütüphanesi kullanılarak geliştirilmiş olup, otomatik dil algılama ve dinamik dil değiştirme özelliklerini içerir.

### ✨ Özellikler

- **10+ Dil Desteği**: Türkçe, İngilizce, Arapça, Almanca, Fransızca, İspanyolca, Rusça, Çince, Japonca, Korece
- **Platform Özel Stiller**: iOS ve Android için optimize edilmiş tasarım
- **Otomatik Dil Algılama**: Cihaz dilini otomatik olarak algılar
- **Kalıcı Dil Tercihi**: AsyncStorage ile dil tercihi kaydedilir
- **Dinamik Dil Değiştirme**: Uygulama çalışırken dil değiştirilebilir
- **Tarih/Sayı Formatı**: Her dil için uygun tarih ve sayı formatları
- **Para Birimi Desteği**: Yerel para birimi formatları

## 📁 Dosya Yapısı

```
├── stores/
│   └── languageStore.ts          # Dil durumu yönetimi (Zustand)
├── hooks/
│   └── useLanguage.ts            # Dil hook'u
├── components/
│   └── LanguageSelector.tsx      # Dil seçimi bileşeni
├── lib/
│   └── i18n.ts                   # i18next konfigürasyonu
├── locales/
│   ├── tr.json                   # Türkçe çeviriler
│   ├── en.json                   # İngilizce çeviriler
│   ├── ar.json                   # Arapça çeviriler
│   └── ...                       # Diğer diller
├── utils/
│   └── platformStyles.ts         # Platform özel stilleri
└── app/(settings)/
    └── language.tsx              # Dil ayarları sayfası
```

## 🚀 Hızlı Başlangıç

### 1. Temel Kullanım

```typescript
import { useLanguage } from '../hooks/useLanguage';

function MyComponent() {
  const { t, currentLanguage, changeLanguage } = useLanguage();

  return (
    <View>
      <Text>{t('common.hello')}</Text>
      <Text>Mevcut Dil: {currentLanguage}</Text>
      <Button onPress={() => changeLanguage('en')} title="İngilizce" />
    </View>
  );
}
```

### 2. Dil Seçici Bileşeni

```typescript
import { LanguageSelector } from '../components/LanguageSelector';

function SettingsScreen() {
  return (
    <View>
      <LanguageSelector variant="modal" />
    </View>
  );
}
```

### 3. Platform Özel Stiller

```typescript
import { platformStyles } from '../utils/platformStyles';

function PlatformComponent() {
  return (
    <View style={platformStyles.select(
      platformStyles.ios.card,    // iOS stil
      platformStyles.android.card // Android stil
    )}>
      <Text>Platform Özel İçerik</Text>
    </View>
  );
}
```

## 🌐 Desteklenen Diller

| Dil | Kodu | Yerel Adı | Bayrak | Tarih Formatı |
|-----|------|-----------|--------|---------------|
| Türkçe | `tr` | Türkçe | 🇹🇷 | DD.MM.YYYY |
| İngilizce | `en` | English | 🇺🇸 | MM/DD/YYYY |
| Almanca | `de` | Deutsch | 🇩🇪 | DD.MM.YYYY |
| Fransızca | `fr` | Français | 🇫🇷 | DD/MM/YYYY |
| İspanyolca | `es` | Español | 🇪🇸 | DD/MM/YYYY |
| Rusça | `ru` | Русский | 🇷🇺 | DD.MM.YYYY |
| Çince | `zh` | 中文 | 🇨🇳 | YYYY-MM-DD |
| Japonca | `ja` | 日本語 | 🇯🇵 | YYYY-MM-DD |
| Korece | `ko` | 한국어 | 🇰🇷 | YYYY-MM-DD |

## 🔄 Platform Özel Stiller

### Desteklenen Platformlar
- iOS - Apple Design Guidelines
- Android - Material Design Guidelines

### Platform Stil Yardımcıları

```typescript
import { platformStyles } from '../utils/platformStyles';

function PlatformExample() {
  return (
    <View style={platformStyles.select(
      platformStyles.ios.card,    // iOS kart stili
      platformStyles.android.card // Android kart stili
    )}>
      <Text>Platform Özel İçerik</Text>
    </View>
  );
}

```

## 🎣 Hook'lar

### useLanguage Hook'u

```typescript
const {
  // Temel özellikler
  currentLanguage,        // Mevcut dil kodu
  currentLanguageInfo,    // Dil bilgileri
  supportedLanguages,     // Desteklenen diller listesi

  
  // Dil değiştirme
  changeLanguage,        // Dil değiştirme fonksiyonu
  detectDeviceLanguage,  // Cihaz dilini algılama
  
  // Çeviri
  t,                    // Çeviri fonksiyonu
  hasTranslation,       // Çeviri var mı kontrolü
  
  // Format fonksiyonları
  formatDate,           // Tarih formatı
  formatNumber,         // Sayı formatı
  formatCurrency,       // Para formatı
  
  // Dil bilgileri
  getLanguageCode,      // Dil kodu
  getLanguageName,      // Dil adı
  getLanguageFlag,      // Dil bayrağı
  getDateFormat,        // Tarih formatı
  getNumberFormat,      // Sayı formatı
  
  // Event listener
  onLanguageChange,     // Dil değişikliği dinleyicisi
  
  // i18n instance
  i18n,                 // i18next instance
} = useLanguage();
```

## 🧩 Bileşenler

### LanguageSelector

```typescript
import { LanguageSelector } from '../components/LanguageSelector';

// Farklı varyantlar
<LanguageSelector variant="button" />
<LanguageSelector variant="dropdown" />
<LanguageSelector variant="modal" />

// Özelleştirme
<LanguageSelector 
  variant="modal"
  showFlag={true}
  showNativeName={true}
  onLanguageChange={(language) => console.log('Dil değişti:', language)}
/>
```

## 📝 Çeviri Dosyaları

### Çeviri Yapısı

```json
{
  "common": {
    "loading": "Yükleniyor...",
    "error": "Hata",
    "success": "Başarılı"
  },
  "navigation": {
    "home": "Ana Sayfa",
    "settings": "Ayarlar"
  },
  "auth": {
    "login": "Giriş Yap",
    "register": "Kayıt Ol"
  }
}
```

### Çeviri Ekleme

1. `locales/tr.json` dosyasına yeni çeviri ekleyin
2. Diğer dil dosyalarına da aynı anahtarı ekleyin
3. Bileşende `t('yeni.anahtar')` şeklinde kullanın

### Interpolasyon

```json
{
  "welcome": "Merhaba {{name}}!",
  "items": "{{count}} öğe bulundu"
}
```

```typescript
t('welcome', { name: 'Ahmet' }) // "Merhaba Ahmet!"
t('items', { count: 5 }) // "5 öğe bulundu"
```

## 💡 Kullanım Örnekleri

### 1. Basit Çeviri

```typescript
function WelcomeScreen() {
  const { t } = useLanguage();
  
  return (
    <View>
      <Text>{t('common.welcome')}</Text>
      <Text>{t('common.description')}</Text>
    </View>
  );
}
```

### 2. Dinamik İçerik

```typescript
function UserProfile({ user }) {
  const { t, formatDate } = useLanguage();
  
  return (
    <View>
      <Text>{t('profile.welcome', { name: user.name })}</Text>
      <Text>{t('profile.joined', { date: formatDate(user.joinDate) })}</Text>
    </View>
  );
}
```

### 3. Platform Özel Layout

```typescript
function PlatformFriendlyLayout() {
  return (
    <View style={platformStyles.select(
      platformStyles.ios.card,
      platformStyles.android.card
    )}>
      <Text>Platform Özel İçerik</Text>
    </View>
  );
}
```

### 4. Dil Değiştirme

```typescript
function LanguageSettings() {
  const { currentLanguage, changeLanguage, supportedLanguages } = useLanguage();
  
  return (
    <View>
      {supportedLanguages.map(lang => (
        <TouchableOpacity
          key={lang.code}
          onPress={() => changeLanguage(lang.code)}
          style={{ opacity: currentLanguage === lang.code ? 1 : 0.6 }}
        >
          <Text>{lang.flag} {lang.nativeName}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
```

## ✅ En İyi Uygulamalar

### 1. Çeviri Anahtarları

```typescript
// ✅ İyi
t('user.profile.name')
t('settings.language.title')

// ❌ Kötü
t('name')
t('title')
```

### 2. Interpolasyon

```typescript
// ✅ İyi
t('welcome', { name: userName })
t('items', { count: itemCount, total: totalItems })

// ❌ Kötü
t('welcome') + ' ' + userName
```

### 3. Platform Özel Stiller

```typescript
// ✅ İyi
import { platformStyles } from '../utils/platformStyles';
<View style={platformStyles.select(iosStyle, androidStyle)}>

// ❌ Kötü
<View style={{ borderRadius: 8 }}>
```

### 4. Dil Kontrolü

```typescript
// ✅ İyi
const { hasTranslation } = useLanguage();
if (hasTranslation('key')) {
  return t('key');
}

// ❌ Kötü
try {
  return t('key');
} catch (error) {
  return 'Fallback';
}
```

## 🐛 Hata Ayıklama

### Yaygın Sorunlar

1. **Çeviri Bulunamadı**
   ```typescript
   // Çözüm: Çeviri anahtarını kontrol edin
   console.log(i18n.exists('missing.key')); // false
   ```

2. **Platform Stilleri Çalışmıyor**
   ```typescript
   // Çözüm: Platform styles'ı kullanın
   import { platformStyles } from '../utils/platformStyles';
   console.log('Platform:', Platform.OS);
   ```

3. **Dil Değişmiyor**
   ```typescript
   // Çözüm: Store'u kontrol edin
   const { currentLanguage } = useLanguageStore();
   console.log('Current:', currentLanguage);
   ```

### Debug Modu

```typescript
// i18n.ts dosyasında
i18n.init({
  debug: __DEV__, // Geliştirme modunda debug aktif
  // ...
});
```

## 📚 Ek Kaynaklar

### Dokümantasyon
- [i18next Dokümantasyonu](https://www.i18next.com/)
- [react-i18next Dokümantasyonu](https://react.i18next.com/)
- [react-native-localize](https://github.com/zoontek/react-native-localize)

### Araçlar
- [i18next-parser](https://github.com/i18next/i18next-parser) - Çeviri dosyalarını otomatik oluşturur
- [i18next-browser-languagedetector](https://github.com/i18next/i18next-browser-languagedetector) - Tarayıcı dil algılama

### Örnekler
- [i18next Örnekleri](https://github.com/i18next/react-i18next/tree/master/example)
- [Platform Özel Stiller](https://reactnative.dev/docs/platform-specific-code)

---

## 🔄 Güncelleme Geçmişi

- **v1.0.0**: İlk sürüm - Temel i18n desteği
- **v1.1.0**: Platform özel stiller eklendi
- **v1.2.0**: Dil algılama ve format fonksiyonları eklendi
- **v1.3.0**: LanguageSelector bileşeni eklendi

## 📞 Destek

Dil sistemi ile ilgili sorularınız için:
- GitHub Issues
- Dokümantasyon
- Örnek kodlar
