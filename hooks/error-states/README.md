# 🚨 Error States Sistemi

## 🎯 Genel Bakış

Bu sistem, platform-specific error handling sağlar. iOS ve Android için farklı UI patterns kullanır ve haptics feedback ile entegre çalışır.

## 🚀 Kurulum

```typescript
import { useErrorStates } from '../hooks/error-states';

const { showValidationError, showNetworkError } = useErrorStates();
```

## 📱 Platform-Specific Error Handling

### 🍎 iOS Error States

| **Error Türü** | **UI Bileşeni** | **Kullanım Alanı** | **Haptics** | **Özellikler** |
|----------------|------------------|-------------------|-------------|----------------|
| **Critical Errors** | Alert | Kritik hatalar, veri kaybı | `form.buttonError()` | Modal, aksiyon gerektirir |
| **Validation Errors** | Inline Text | Form doğrulama | `form.fieldInvalid()` | Gömülü, hızlı düzeltme |
| **Network Errors** | Alert | Ağ hataları | `form.buttonError()` | Tekrar deneme seçeneği |
| **Auth Errors** | Alert | Kimlik doğrulama | `form.buttonError()` | Güvenlik odaklı |
| **System Errors** | Alert | Sistem hataları | `notification.criticalAlert()` | Kritik durumlar |

### 🤖 Android Error States

| **Error Türü** | **UI Bileşeni** | **Kullanım Alanı** | **Haptics** | **Özellikler** |
|----------------|------------------|-------------------|-------------|----------------|
| **Critical Errors** | Dialog/Modal | Kritik hatalar | `form.buttonError()` | Material Dialog |
| **Validation Errors** | Text Fields | Form doğrulama | `form.fieldInvalid()` | Floating labels |
| **Network Errors** | Snackbar | Ağ hataları | `notification.criticalAlert()` | Otomatik kaybolur |
| **Auth Errors** | Dialog | Kimlik doğrulama | `form.buttonError()` | Güvenlik odaklı |
| **System Errors** | Snackbar | Sistem hataları | `notification.criticalAlert()` | Geçici bildirim |

## 🎯 Error Severity Levels

### 1. LOW (Düşük)
- **Haptics:** `form.buttonPress()`
- **UI:** Inline/Snackbar
- **Örnek:** Uyarı mesajları, bilgi notları

### 2. MEDIUM (Orta)
- **Haptics:** `form.fieldInvalid()`
- **UI:** Inline/Snackbar
- **Örnek:** Form validasyonu, kullanıcı giriş hataları

### 3. HIGH (Yüksek)
- **Haptics:** `form.buttonError()`
- **UI:** Alert/Dialog
- **Örnek:** Ağ hataları, kimlik doğrulama hataları

### 4. CRITICAL (Kritik)
- **Haptics:** `notification.criticalAlert()`
- **UI:** Alert/Dialog
- **Örnek:** Sistem hataları, veri kaybı

## 📝 Kullanım Örnekleri

### Form Validasyonu
```typescript
const { showValidationError } = useErrorStates();

const validateEmail = (email: string) => {
  if (!email.includes('@')) {
    showValidationError('email', 'Geçerli bir email adresi girin');
    return false;
  }
  return true;
};
```

### Ağ Hatası
```typescript
const { showNetworkError } = useErrorStates();

const handleApiCall = async () => {
  try {
    await apiCall();
  } catch (error) {
    showNetworkError('Bağlantı hatası oluştu', () => {
      handleApiCall(); // Retry action
    });
  }
};
```

### Kimlik Doğrulama Hatası
```typescript
const { showAuthError } = useErrorStates();

const handleLogin = async (credentials) => {
  try {
    await login(credentials);
  } catch (error) {
    showAuthError('Kullanıcı adı veya şifre hatalı');
  }
};
```

### Sistem Hatası
```typescript
const { showSystemError } = useErrorStates();

const handleCriticalOperation = async () => {
  try {
    await criticalOperation();
  } catch (error) {
    showSystemError('Beklenmeyen bir hata oluştu');
  }
};
```

## 🎨 Custom Error Oluşturma

### Temel Error State
```typescript
const { showError, ErrorSeverity, ErrorCategory } = useErrorStates();

const customError = {
  id: 'custom_error',
  title: 'Özel Hata',
  message: 'Bu özel bir hata mesajıdır',
  severity: ErrorSeverity.HIGH,
  category: ErrorCategory.USER_INPUT,
  showHaptics: true,
  showIcon: true,
  actions: [
    { text: 'İptal', action: 'cancel', style: 'cancel' },
    { text: 'Tamam', action: 'ok', onPress: () => console.log('OK') }
  ]
};

showError(customError);
```

### Platform-Specific Error
```typescript
const { getErrorUIType, ErrorUIType } = useErrorStates();

const error = { /* error state */ };
const uiType = getErrorUIType(error);

console.log(`Bu hata ${uiType} olarak gösterilecek`);
// iOS: 'alert' veya 'inline'
// Android: 'dialog' veya 'snackbar'
```

## ⚡ Quick Methods

### Validation Errors
```typescript
showValidationError('fieldName', 'Hata mesajı');
```

### Network Errors
```typescript
showNetworkError('Bağlantı hatası', retryFunction);
```

### Auth Errors
```typescript
showAuthError('Kimlik doğrulama hatası');
```

### System Errors
```typescript
showSystemError('Sistem hatası');
```

### User Input Errors
```typescript
showUserInputError('Kullanıcı giriş hatası');
```

## 🔧 Error Categories

### VALIDATION
- Form doğrulama hataları
- Veri format hataları
- Zorunlu alan hataları

### NETWORK
- Bağlantı hataları
- API hataları
- Timeout hataları

### AUTHENTICATION
- Giriş hataları
- Yetki hataları
- Token hataları

### SYSTEM
- Uygulama hataları
- Cihaz hataları
- Kritik sistem hataları

### USER_INPUT
- Kullanıcı giriş hataları
- Yanlış format
- Eksik bilgi

### DATA
- Veri işleme hataları
- Dosya hataları
- Veritabanı hataları

## 🎯 Best Practices

### ✅ Önerilen Kullanımlar

1. **Doğru severity seçin:**
   - LOW: Bilgi, uyarı
   - MEDIUM: Form hataları
   - HIGH: Ağ, auth hataları
   - CRITICAL: Sistem hataları

2. **Platform-specific UI kullanın:**
   - iOS: Alert, Inline
   - Android: Dialog, Snackbar

3. **Haptics ile destekleyin:**
   - Her error için uygun haptic feedback

4. **Aksiyon önerisi verin:**
   - Retry, Cancel, Help gibi seçenekler

5. **Kullanıcı dostu mesajlar:**
   - Teknik jargon kullanmayın
   - Çözüm önerisi verin

### ❌ Kaçınılması Gerekenler

1. **Çok fazla error gösterme:**
   - Kullanıcıyı rahatsız etmeyin

2. **Teknik mesajlar:**
   - Kullanıcı anlamayacak

3. **Aksiyon vermeme:**
   - Kullanıcı ne yapacağını bilmeli

4. **Platform uyumsuzluğu:**
   - Her platform'da farklı UI kullanın

## 🚀 Sonuç

Error States sistemi:
- ✅ Platform-specific UI sağlar
- ✅ Haptics ile entegre çalışır
- ✅ Kolay kullanım sunar
- ✅ Tutarlı error handling sağlar
- ✅ Kullanıcı deneyimini iyileştirir

**Önemli:** Error'ları kullanıcı dostu ve çözüm odaklı yapın!
