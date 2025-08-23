# MyTemplate

Modern React Native template projesi - Expo Router ile geliştirilmiş, light/dark tema desteği ve tablet uyumlu.

## 📱 Platform Desteği

- ✅ **iOS** (iPhone & iPad)
- ✅ **Android** (Phone & Tablet)
- ❌ **Web** (Desteklenmiyor)

## 🚀 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# iOS için başlat
npm run ios

# Android için başlat
npm run android

# Geliştirme sunucusu başlat
npm start
```

## 📦 Kullanılan Paketler

### **Core Dependencies**

#### **lucide-react-native** (^0.263.1)
- **Amaç**: Modern icon kütüphanesi
- **Kullanım**: Tab bar ve genel iconlar
- **Dosya**: `app/(tabs)/_layout.tsx`
- **Örnek**: `import { Home, Settings } from 'lucide-react-native'`

#### **expo** (~53.0.20)
- **Amaç**: Expo SDK ana paketi
- **Kullanım**: Tüm Expo özellikleri için temel

#### **expo-font** (~13.3.2)
- **Amaç**: Custom font yükleme
- **Kullanım**: Geist font ailesi
- **Dosya**: `app/_layout.tsx`

#### **@expo-google-fonts/geist** (^0.0.1)
- **Amaç**: Geist font ailesi
- **Kullanım**: Proje genelinde varsayılan font
- **Dosya**: `app/_layout.tsx`, `global.css`, `tailwind.config.js`
- **Örnek**: `font-geist`, `font-geist-bold`

#### **Diğer Kullanılabilecek Fontlar**
```bash
# Manrope font ailesi
npx expo install @expo-google-fonts/manrope expo-font

# Figtree font ailesi
npx expo install @expo-google-fonts/figtree expo-font

# Plus Jakarta Sans font ailesi
npx expo install @expo-google-fonts/plus-jakarta-sans expo-font
```

#### **expo-linking** (~7.1.7)
- **Amaç**: Deep linking desteği
- **Kullanım**: Expo Router ile birlikte çalışır

#### **expo-constants** (~17.1.0)
- **Amaç**: Expo sabitleri ve app bilgileri
- **Kullanım**: App version, bundle identifier, build number
- **Örnek**: `Constants.expoConfig?.version`

#### **expo-asset** (~10.0.0)
- **Amaç**: Asset yönetimi (resimler, fontlar, sesler)
- **Kullanım**: Asset'leri yükleme ve cache'leme
- **Örnek**: `Asset.loadAsync([require('./image.png')])`

#### **expo-haptics** (~14.0.0)
- **Amaç**: Haptic feedback (titreşim)
- **Kullanım**: Dokunma, başarı, hata bildirimleri
- **Örnek**: `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)`

#### **expo-linear-gradient** (~14.0.0)
- **Amaç**: Linear gradient bileşeni
- **Kullanım**: Renk geçişleri ve arka plan efektleri
- **Örnek**: `<LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} />`

#### **react-native-gesture-handler** (~2.20.0)
- **Amaç**: Gesture handling (dokunma, kaydırma, pinch)
- **Kullanım**: Pan, tap, long press gesture'ları
- **Örnek**: `PanGestureHandler`, `TapGestureHandler`

#### **@react-native-community/blur** (~4.4.0)
- **Amaç**: Blur efekti bileşeni
- **Kullanım**: Arka plan bulanıklaştırma
- **Örnek**: `<BlurView intensity={20} style={StyleSheet.absoluteFill} />`

#### **moti** (~0.27.0)
- **Amaç**: React Native animasyon kütüphanesi
- **Kullanım**: Smooth animasyonlar ve geçişler
- **Örnek**: `<MotiView animate={{ scale: 1.2 }} transition={{ type: 'timing' }} />`

#### **expo-router** (~5.1.4)
- **Amaç**: File-based routing sistemi
- **Kullanım**: Navigation, tab bar, header
- **Dosyalar**: 
  - `app/_layout.tsx` (Root layout)
  - `app/(tabs)/_layout.tsx` (Tab navigation)
  - `app/(tabs)/index.tsx` (Tab 1)
  - `app/(tabs)/two.tsx` (Tab 2)

#### **expo-splash-screen** (~0.30.10)
- **Amaç**: Splash screen kontrolü
- **Kullanım**: Uygulama başlangıcında
- **Dosya**: `app/_layout.tsx`

#### **expo-status-bar** (~2.2.3)
- **Amaç**: Status bar kontrolü
- **Kullanım**: iOS/Android status bar ayarları

#### **expo-system-ui** (~5.0.10)
- **Amaç**: Sistem UI ayarları
- **Kullanım**: Status bar, navigation bar kontrolü

#### **expo-screen-orientation** (~8.1.7)
- **Amaç**: Ekran yönü kontrolü
- **Kullanım**: Portrait mod kilitleme
- **Dosya**: `app/_layout.tsx`
- **Örnek**: `ScreenOrientation.lockAsync(PORTRAIT)`

#### **react** (19.0.0)
- **Amaç**: React temel kütüphanesi
- **Kullanım**: Tüm component'ler

#### **react-native** (0.79.5)
- **Amaç**: React Native ana kütüphanesi
- **Kullanım**: Native component'ler

#### **react-native-reanimated** (~3.17.4)
- **Amaç**: Animasyon kütüphanesi
- **Kullanım**: Expo Router performansı için

#### **react-native-safe-area-context** (5.4.0)
- **Amaç**: Safe area handling
- **Kullanım**: iPhone notch, Android status bar uyumu
- **Örnek**: Header ve bottom navigation konumlandırma

#### **react-native-screens** (~4.11.1)
- **Amaç**: Native screen optimizasyonu
- **Kullanım**: Navigation performansı

#### **react-native-svg** (~15.1.0)
- **Amaç**: SVG desteği
- **Kullanım**: Lucide iconları ve SVG dosyaları için
- **Dosya**: Tüm proje genelinde

#### **expo-network** (~7.1.0)
- **Amaç**: Network durumu kontrolü
- **Kullanım**: İnternet bağlantısı kontrolü
- **Dosya**: Network hook'ları için

#### **zustand** (~4.5.0)
- **Amaç**: Modern, hafif state management kütüphanesi
- **Kullanım**: Redux alternatifi, global state yönetimi
- **Örnek**: `useStore()`, `create()`, `subscribe()`
- **Dosya**: Store dosyaları için

#### **zustand-persist** (~1.0.0)
- **Amaç**: Zustand state'ini AsyncStorage'da kalıcı hale getirme
- **Kullanım**: State'i cihazda saklama
- **Örnek**: `persist()`, `createJSONStorage()`
- **Dosya**: Store dosyaları ile birlikte

#### **react-native-localize** (~3.0.0)
- **Amaç**: Cihaz dilini ve bölge ayarlarını algılama
- **Kullanım**: Otomatik dil algılama ve locale bilgileri
- **Örnek**: `getLocales()`, `getCountry()`, `getTimeZone()`
- **Dosya**: i18n konfigürasyonu

#### **i18next** (~23.0.0)
- **Amaç**: Güçlü çoklu dil desteği kütüphanesi
- **Kullanım**: Çeviri dosyalarını yönetme ve dil değiştirme
- **Örnek**: `i18n.init()`, `t('key')`, `changeLanguage()`
- **Dosya**: i18n konfigürasyonu

#### **react-i18next** (~14.0.0)
- **Amaç**: React/React Native için i18next entegrasyonu
- **Kullanım**: React component'lerde çeviri hook'ları
- **Örnek**: `useTranslation()`, `Trans` component
- **Dosya**: Component'lerde kullanım

#### **expo-device** (~7.1.4)
- **Amaç**: Cihaz bilgileri (model, brand, OS version)
- **Kullanım**: Cihaz özelliklerini algılama
- **Örnek**: `Device.modelName`, `Device.osVersion`, `Device.brand`
- **Dosya**: Device utility'leri

#### **@formatjs/intl-datetimeformat** (~6.18.0)
- **Amaç**: Tarih/saat formatlaması (locale-aware)
- **Kullanım**: Tarih ve saat formatlaması
- **Örnek**: `new Intl.DateTimeFormat('tr-TR').format(date)`
- **Dosya**: Date/time utility'leri

#### **@formatjs/intl-numberformat** (~8.15.4)
- **Amaç**: Sayı formatlaması (para, yüzde, vs.)
- **Kullanım**: Para birimi, yüzde, sayı formatlaması
- **Örnek**: `new Intl.NumberFormat('tr-TR').format(1234.56)`
- **Dosya**: Number utility'leri

#### **@shopify/flash-list** (~1.6.3)
- **Amaç**: Yüksek performanslı liste bileşeni
- **Kullanım**: FlatList alternatifi, büyük listeler için
- **Örnek**: `<FlashList data={items} renderItem={renderItem} />`
- **Dosya**: Liste component'leri

#### **react-native-reanimated-carousel** (~3.5.1)
- **Amaç**: Modern, performanslı carousel/slider bileşeni
- **Kullanım**: Reanimated 2 ile smooth animasyonlar
- **Örnek**: `<Carousel data={items} renderItem={renderItem} />`
- **Dosya**: Carousel component'leri

#### **keen-slider** (~6.8.6)
- **Amaç**: Universal HTML touch slider carousel
- **Kullanım**: React Native, React, Vue, Angular desteği
- **Özellikler**: Multi touch, responsive, lightweight (~5.5KB)
- **Örnek**: `useKeenSlider()`, `<div ref={sliderRef}>`
- **Dosya**: Universal slider component'leri
- **Dokümantasyon**: [React Native Docs](https://keen-slider.io/docs/react-native)
- **Örnekler**: [Keen Slider Examples](https://keen-slider.io/examples)

#### **react-native-responsive-screen** (~1.4.2)
- **Amaç**: Responsive tasarım için ekran boyutları
- **Kullanım**: Farklı cihazlarda uyumlu boyutlandırma
- **Örnek**: `widthPercentageToDP(50)`, `heightPercentageToDP(30)`
- **Dosya**: Responsive utility'leri

#### **lottie-react-native** (~6.7.0)
- **Amaç**: Lottie animasyon dosyalarını oynatma
- **Kullanım**: After Effects animasyonları
- **Örnek**: `<LottieView source={require('./animation.json')} />`
- **Dosya**: Animasyon component'leri

#### **axios** (~1.6.0)
- **Amaç**: Promise-based HTTP client
- **Kullanım**: API istekleri, request/response interceptors
- **Özellikler**: Timeout, cancellation, error handling
- **Örnek**: `axios.get('/api/users')`, `axios.post('/api/users', data)`
- **Dosya**: API service'leri

#### **@tanstack/react-query** (~5.0.0)
- **Amaç**: Server state management + HTTP client wrapper
- **Kullanım**: Caching, background updates, optimistic updates
- **Özellikler**: Infinite queries, offline support, DevTools
- **Örnek**: `useQuery()`, `useMutation()`, `QueryClient`
- **Dosya**: API hooks ve query management

#### **react-hook-form** (~7.48.0)
- **Amaç**: Performanslı form yönetimi
- **Kullanım**: Form validation, error handling, performance
- **Özellikler**: Uncontrolled components, minimal re-renders
- **Örnek**: `useForm()`, `register()`, `handleSubmit()`
- **Dosya**: Form component'leri

#### **zod** (~3.22.0)
- **Amaç**: TypeScript-first schema validation
- **Kullanım**: Form validation, API validation, type inference
- **Özellikler**: Runtime type checking, error messages
- **Örnek**: `z.string()`, `z.object()`, `z.array()`
- **Dosya**: Validation schemas

#### **@gorhom/bottom-sheet** (~5.1.8)
- **Amaç**: Modern bottom sheet bileşeni
- **Kullanım**: Modal, drawer, action sheet benzeri UI
- **Özellikler**: Gesture handling, snap points, dynamic sizing
- **Örnek**: `<BottomSheet snapPoints={['25%', '50%', '90%']}>`
- **Dosya**: Modal ve sheet component'leri
- **Dokümantasyon**: [Bottom Sheet Props](https://gorhom.dev/react-native-bottom-sheet/props)

#### **react-native-bouncy-checkbox** (~4.1.2)
- **Amaç**: Tamamen özelleştirilebilir animasyonlu bouncy checkbox
- **Kullanım**: Form checkbox'ları, seçim listeleri
- **Özellikler**: Bounce animasyonu, custom icon, synthetic press
- **Örnek**: `<BouncyCheckbox size={50} fillColor="#9342f5" onPress={isChecked => {}} />`
- **Dosya**: Form ve checkbox component'leri
- **Dokümantasyon**: [React Native Bouncy Checkbox](https://github.com/WrathChaos/react-native-bouncy-checkbox)

#### **Form Yönetimi Alternatifleri**
- **formik**: React Hook Form alternatifi, daha eski ama güçlü
- **final-form**: Performans odaklı form kütüphanesi
- **formstate**: Minimal form state yönetimi

### **Dev Dependencies**

#### **@babel/core** (^7.25.2)
- **Amaç**: Babel compiler
- **Kullanım**: JavaScript/TypeScript derleme

#### **@types/react** (~19.0.10)
- **Amaç**: React TypeScript tipleri
- **Kullanım**: TypeScript desteği

#### **jest** (^29.2.1)
- **Amaç**: Test framework
- **Kullanım**: Unit testler

#### **jest-expo** (~53.0.9)
- **Amaç**: Expo test preset'i
- **Kullanım**: Expo projeleri için test konfigürasyonu

#### **react-test-renderer** (19.0.0)
- **Amaç**: React component test renderer
- **Kullanım**: Component testleri

#### **typescript** (~5.8.3)
- **Amaç**: TypeScript compiler
- **Kullanım**: Type safety

## 🎨 Tema Sistemi

### **Light/Dark Tema Desteği**
- **Konfigürasyon**: `app.json` - `"userInterfaceStyle": "automatic"`
- **Kullanım**: Otomatik sistem temasına uyum
- **Renkler**: `constants/Colors.ts`

### **Renk Paleti**
```typescript
// constants/Colors.ts
{
  light: {
    text: '#000',
    background: '#fff',
    tint: '#2f95dc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: '#fff',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  }
}
```

## 🌍 Çoklu Dil Desteği

### **Desteklenen Diller**
- 🇹🇷 **Türkçe** (`assets/locales/tr.json`)
- 🇺🇸 **İngilizce** (`assets/locales/en.json`)

### **Konfigürasyon**
```json
// app.json
"locales": {
  "tr": "./assets/locales/tr.json",
  "en": "./assets/locales/en.json"
}
```

## 📱 Ekran Yönü

### **Portrait Mod Kilidi**
- **Konfigürasyon**: `app.json` - `"orientation": "portrait"`
- **Runtime Kilidi**: `app/_layout.tsx`
- **Kullanım**: Tüm uygulama boyunca portrait mod

```typescript
// app/_layout.tsx
useEffect(() => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}, []);
```

## 🏗️ Proje Yapısı

```
MyTemplate/
├── app/
│   ├── _layout.tsx              # Root layout
│   └── (tabs)/
│       ├── _layout.tsx          # Tab navigation
│       ├── index.tsx            # Tab 1
│       └── two.tsx              # Tab 2
├── assets/
│   ├── images/                  # App icons & images
│   └── locales/                 # Language files
├── components/
│   └── useColorScheme.ts        # Theme hook
├── constants/
│   └── Colors.ts               # Color definitions
└── app.json                    # Expo configuration
```

## ⚙️ Konfigürasyon

### **app.json Önemli Ayarlar**
```json
{
  "expo": {
    "platforms": ["ios", "android"],
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "jsEngine": "hermes",
    "newArchEnabled": true
  }
}
```

## 🧪 Test

```bash
# Test çalıştır
npm test

# Watch modunda test
npm run test
```

## 📝 Notlar

- **Web desteği kaldırıldı**: Sadece mobil platformlar
- **Hermes engine**: En iyi performans için
- **TypeScript**: Tam tip desteği
- **Expo Router**: Modern navigation sistemi
- **Safe Area**: Tüm cihazlarda uyumlu layout

## 🚧 Yapılacaklar

### **Icon Sistemi**
- [ ] **Responsive Icon Wrapper**: Android/iOS standartlarına uygun boyutlar
- [ ] **Platform-specific Icon Sizes**: iOS/Android farklı boyutlar
- [ ] **Color System**: Tema renklerine uygun icon renkleri
- [ ] **Accessibility**: Icon accessibility desteği
- [ ] **Performance**: Icon caching ve optimizasyon

### **Responsive Tasarım**
- [x] **Breakpoint System**: Tablet/Phone responsive tasarım (react-native-responsive-screen)
- [x] **Dynamic Sizing**: Ekran boyutuna göre otomatik boyutlandırma
- [ ] **Safe Area**: Tüm cihazlarda güvenli alan kullanımı

### **Carousel/Slider Paketleri**
- [x] **react-native-reanimated-carousel**: Modern, performanslı carousel (KURULDU)
- [x] **keen-slider**: Universal HTML touch slider (KURULDU)
- [ ] **react-native-snap-carousel**: Eski ama güçlü carousel
- [ ] **react-native-swiper**: Basit ama eski swiper

### **HTTP Client Paketleri**
- [x] **axios**: Promise-based HTTP client (KURULDU)
- [x] **@tanstack/react-query**: Server state management (KURULDU)
- [ ] **wretch**: Minimal HTTP client
- [ ] **ky**: Modern fetch wrapper

### **Form Yönetimi Paketleri**
- [x] **react-hook-form**: Performanslı form yönetimi (KURULDU)
- [x] **zod**: TypeScript schema validation (KURULDU)
- [ ] **formik**: Alternatif form yönetimi kütüphanesi

### **UI Component Paketleri**
- [x] **@gorhom/bottom-sheet**: Modern bottom sheet bileşeni (KURULDU)
- [x] **react-native-bouncy-checkbox**: Animasyonlu bouncy checkbox (KURULDU)
- [ ] **react-native-modal**: Basit modal bileşeni
- [ ] **react-native-action-sheet**: Action sheet bileşeni

### **Offline-First Uygulama Paketleri**
- [ ] **react-native-offline**: Kapsamlı offline yönetimi (queue, retry, UI)
- [ ] **@react-native-async-storage/async-storage**: Basit offline storage
- [ ] **react-native-sqlite-storage**: SQLite veritabanı
- [ ] **@nozbe/watermelondb**: Modern offline-first database
- [ ] **react-query + AsyncStorage**: Custom offline çözüm

#### **Offline Paket Karşılaştırması:**
| Paket | Karmaşıklık | Özellikler | Bundle Size | Öğrenme |
|-------|-------------|------------|-------------|---------|
| **react-native-offline** | Orta | Kapsamlı | Büyük | Kolay |
| **AsyncStorage** | Basit | Temel | Küçük | Çok Kolay |
| **SQLite** | Orta | Güçlü | Orta | Orta |
| **WatermelonDB** | Yüksek | En Güçlü | Büyük | Zor |

#### **Kurulum Komutları:**
```bash
# Basit offline (AsyncStorage)
npm install @react-native-async-storage/async-storage

# Orta seviye offline (react-native-offline)
npm install react-native-offline

# Kompleks offline (WatermelonDB)
npm install @nozbe/watermelondb @react-native-async-storage/async-storage
```

### **Arka Plan İşlemleri Paketleri**
- [ ] **expo-background-fetch**: Arka plan veri güncelleme
- [ ] **expo-task-manager**: Arka plan görev yönetimi
- [ ] **expo-location**: Konum takibi ve geolocation
- [ ] **expo-notifications**: Push notifications
- [ ] **expo-secure-store**: Güvenli veri saklama (şifreler, token'lar)
- [ ] **expo-crypto**: Kriptografi işlemleri (hash, encryption, decryption)
- [ ] **expo-random**: Güvenli rastgele sayı üretimi
- [ ] **@notifee/react-native**: Modern push notification alternatifi

#### **Arka Plan Paketleri Kurulum Komutları:**
```bash
# Expo arka plan paketleri
npx expo install expo-background-fetch expo-task-manager expo-location expo-notifications expo-secure-store expo-crypto expo-random

# Modern notification alternatifi
npm install @notifee/react-native
```

### **Chart/Grafik Paketleri**
- [ ] **react-native-chart-kit**: SVG tabanlı chart kütüphanesi
- [ ] **react-native-gifted-charts**: Modern ve performanslı chart bileşenleri

### **Storage & Persistence Paketleri**
- [ ] **react-native-mmkv**: Yüksek performanslı native key-value store
- [ ] **expo-secure-store**: Hassas veri saklama (token, şifre)
- [ ] **mmkv-flipper-plugin**: MMKV debug eklentisi
- [ ] **@tanstack/react-query-persist-client**: React Query persistence

### **State Management & Selectors**
- [x] **zustand**: Modern state management (KURULDU)
- [x] **zustand-persist**: State persistence (KURULDU)
- [x] **@tanstack/react-query**: Server state management (KURULDU)
- [ ] **reselect**: Selector memoization kütüphanesi
- [ ] **zustand/middleware**: Zustand middleware'leri

### **Background & Sync Paketleri**
- [ ] **expo-task-manager**: Arka plan görev yönetimi
- [ ] **expo-background-fetch**: Arka plan veri senkronizasyonu
- [ ] **@react-native-async-storage/async-storage**: Basit local storage

### **Database & Backend Servisleri**
- [ ] **@supabase/supabase-js**: Supabase JavaScript client
- [ ] **@supabase/auth-ui-react**: Supabase Auth UI components
- [ ] **@supabase/storage-js**: Supabase Storage client
- [ ] **@supabase/realtime-js**: Supabase Realtime client
- [ ] **@supabase/functions-js**: Supabase Edge Functions client

### **Supabase Servisleri**
- [ ] **Authentication**: Kullanıcı girişi, kayıt, sosyal login
- [ ] **Database**: PostgreSQL tabanlı realtime database
- [ ] **Storage**: Dosya yükleme ve yönetimi
- [ ] **Edge Functions**: Serverless functions
- [ ] **Realtime**: Gerçek zamanlı veri senkronizasyonu
- [ ] **Row Level Security (RLS)**: Güvenlik politikaları

### **Keyboard Yönetimi Paketleri**
- [ ] **react-native-keyboard-controller**: Gelişmiş keyboard yönetimi

#### **Chart ve Keyboard Paketleri Kurulum Komutları:**
```bash
# Chart paketleri
npm install react-native-chart-kit react-native-gifted-charts

# Keyboard paketleri
npm install react-native-keyboard-controller
```

#### **Storage & State Management Kurulum Komutları:**
```bash
# Storage paketleri
npm install react-native-mmkv mmkv-flipper-plugin
npx expo install expo-secure-store

# Background & Sync paketleri
npx expo install expo-task-manager expo-background-fetch

# Selector & Memoization paketleri
npm install reselect

# React Query persistence
npm install @tanstack/react-query-persist-client
```

#### **Supabase Kurulum Komutları:**
```bash
# Supabase core client
npm install @supabase/supabase-js

# Supabase Auth UI (opsiyonel)
npm install @supabase/auth-ui-react

# Supabase ile React Query entegrasyonu
npm install @supabase/auth-helpers-react

# Supabase ile TypeScript desteği
npm install @supabase/supabase-js @types/supabase
```

## 🔄 Güncelleme

Bu README dosyası yeni paketler eklendikçe güncellenir.

## 🤖 AI/ML Paketleri

### **Chat LLM API**
*(Large Language Model sağlayıcıları – inference API üzerinden çalışan modeller)*

#### **OpenRouter.ai**
- **Amaç**: Ücretsiz LLM modelleri erişimi
- **URL**: https://openrouter.ai/models?max_price=0
- **Özellikler**: Ücretsiz modeller listesi, API erişimi
- **Kullanım**: Chatbot, metin üretimi, kod tamamlama

#### **Together.ai**
- **Amaç**: Ücretsiz LLM modelleri
- **URL**: https://api.together.ai/models
- **Özellikler**: Together.ai'nin ücretsiz LLM modelleri
- **Kullanım**: AI destekli özellikler, metin analizi

#### **Core ML**
- **Amaç**: iOS cihazda offline LLM kullanımı
- **Kullanım**: Yerel AI modelleri, offline çalışma
- **Platform**: iOS

### **⚙️ Prompt Handling / LLM Orkestrasyonu**
*(LLM ile etkileşimi yöneten framework'ler)*

#### **LangChain.js**
- **Amaç**: Prompt zinciri oluşturma, bellek yönetimi, tool çağırma
- **Özellikler**: 
  - Prompt zinciri oluşturma
  - Bellek yönetimi
  - Tool çağırma
  - LLM orkestrasyonu
- **Kullanım**: Karmaşık AI iş akışları, chatbot geliştirme

### **🧠 Intent Parsing / Komut Tanıma / Doğal Dil Anlama (NLU)**
*(Kullanıcının ne demek istediğini algılama – genellikle chatbotlarda kullanılır)*

#### **Wit.ai**
- **Amaç**: Niyet tanıma, entity çıkarımı, komut eşleştirme
- **Özellikler**:
  - Niyet tanıma
  - Entity çıkarımı
  - Komut eşleştirme
  - Doğal dil anlama
- **Kullanım**: Chatbot, sesli komutlar, akıllı asistanlar

### **📱 On-Device ML / Edge AI Kitaplıkları**
*(Mobil cihazda yerel çalışan makine öğrenimi sistemleri)*

#### **TensorFlow Lite**
- **Amaç**: Android/iOS cihazlar için optimize edilmiş ML çalıştırma motoru
- **Özellikler**:
  - Mobil optimizasyon
  - Hızlı inference
  - Küçük model boyutu
- **Platform**: Android, iOS
- **Kullanım**: Görüntü işleme, metin analizi, ses tanıma

#### **Core ML**
- **Amaç**: Apple cihazlarında yerel ML modellerini çalıştırmak için
- **Özellikler**:
  - Apple optimizasyonu
  - Neural Engine desteği
  - Yüksek performans
- **Platform**: iOS, macOS
- **Kullanım**: Görüntü işleme, ses analizi, metin tanıma

#### **Google ML Kit**
- **Amaç**: Android (ve sınırlı şekilde iOS) için hazır ML çözümleri
- **Özellikler**:
  - Yüz algılama
  - Metin tanıma (OCR)
  - Barcode tarama
  - Pose detection
- **Platform**: Android, iOS (sınırlı)
- **Kullanım**: Kamera uygulamaları, belge tarama, AR

### **📦 Pretrained Model Kütüphaneleri / Model Ailesi**
*(ML modeli seçimi, özellikle mobilde hızlı inference için)*

#### **MobileNetV3**
- **Amaç**: Görüntü sınıflandırma için mobilde optimize CNN
- **Özellikler**:
  - Mobil optimizasyon
  - Hızlı inference
  - Küçük model boyutu
- **Kullanım**: Görüntü sınıflandırma, nesne tanıma

#### **EfficientNet-Lite**
- **Amaç**: Daha yüksek doğruluk için optimize CNN ailesi
- **Özellikler**:
  - Yüksek doğruluk
  - Mobil optimizasyon
  - Çeşitli model boyutları
- **Kullanım**: Görüntü analizi, nesne tanıma

#### **MediaPipe**
- **Amaç**: Pose, hand tracking, yüz mesh gibi optimize edilmiş ML pipeline'ları
- **Geliştirici**: Google
- **Özellikler**:
  - Pose detection
  - Hand tracking
  - Yüz mesh
  - TFLite ile çalışır
- **Kullanım**: AR uygulamaları, fitness tracking, gesture recognition

#### **Teachable Machine**
- **Amaç**: Teknik bilmeden web arayüzüyle model eğitmek
- **Özellikler**:
  - Web arayüzü
  - Kolay model eğitimi
  - TFLite/CoreML export
- **Kullanım**: Özel model eğitimi, prototip geliştirme

### **🤖 AI/ML Kurulum Komutları**

```bash
# LangChain.js
npm install langchain

# TensorFlow Lite
npm install @tensorflow/tfjs-react-native
npx expo install expo-gl expo-camera

# Google ML Kit
npm install @react-native-ml-kit/text-recognition
npm install @react-native-ml-kit/face-detection

# MediaPipe
npm install @mediapipe/camera_utils
npm install @mediapipe/pose

# Wit.ai (REST API kullanımı)
npm install axios
```

### **📋 AI/ML Kullanım Senaryoları**

#### **Chatbot Geliştirme**
```bash
# LangChain + OpenRouter
npm install langchain
# OpenRouter API key ile LLM entegrasyonu
```

#### **Görüntü İşleme**
```bash
# TensorFlow Lite + MobileNetV3
npm install @tensorflow/tfjs-react-native
# Kamera ile görüntü sınıflandırma
```

#### **Sesli Komutlar**
```bash
# Wit.ai + Speech Recognition
npm install @react-native-voice/voice
# Sesli komut tanıma ve işleme
```

#### **AR Uygulamaları**
```bash
# MediaPipe + Expo Camera
npm install @mediapipe/pose
# Pose detection ve AR overlay
```
