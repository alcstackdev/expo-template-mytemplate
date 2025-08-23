# 📚 UX/UI Glossary - Kapsamlı Terim Rehberi

## 🎯 Genel Bakış

Bu rehber, UX/UI tasarımında kullanılan temel terimleri, kavramları ve uygulamamızda nasıl kullanabileceğimizi açıklar. Her terim için pratik uygulama örnekleri ve kontrol listeleri içerir.

---

## 📋 İçindekiler

1. [A - B](#a---b)
2. [C - D](#c---d)
3. [E - F](#e---f)
4. [G - H](#g---h)
5. [I - J](#i---j)
6. [K - L](#k---l)
7. [M - N](#m---n)
8. [O - P](#o---p)
9. [Q - R](#q---r)
10. [S - T](#s---t)
11. [U - V](#u---v)
12. [W - Z](#w---z)
13. [Uygulama Kontrol Listeleri](#uygulama-kontrol-listeleri)

---

## A - B

### **Accessibility (Erişilebilirlik)**
**Tanım:** Tüm kullanıcıların, engelli olanlar dahil, ürünü kullanabilmesini sağlayan tasarım yaklaşımı.

**Uygulamamızda:**
- ✅ Kontrast oranları (4.5:1 minimum)
- ✅ Screen reader desteği
- ✅ Klavye navigasyonu
- ✅ Touch target boyutları (44px minimum)
- ✅ Renk körlüğü dostu renkler

**Kontrol:**
```typescript
// useResponsive.ts'de erişilebilirlik kontrolleri
const accessibilityChecks = {
  contrastRatio: (foreground: string, background: string) => number,
  touchTargetSize: (element: HTMLElement) => boolean,
  keyboardNavigation: () => boolean,
  screenReaderSupport: () => boolean
};
```

### **Affordance (Kullanılabilirlik İpucu)**
**Tanım:** Bir nesnenin nasıl kullanılacağını gösteren görsel ipuçları.

**Uygulamamızda:**
- ✅ Butonlar için hover/active states
- ✅ Tıklanabilir elementler için cursor pointer
- ✅ Form alanları için focus states
- ✅ Swipe gestures için visual cues

**Örnek:**
```typescript
// Buton affordance örneği
const buttonStyles = {
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': { transform: 'scale(1.05)' },
  '&:active': { transform: 'scale(0.95)' }
};
```

### **Atomic Design**
**Tanım:** Tasarım sistemlerini atom, molekül, organizma, şablon ve sayfa olarak organize eden metodoloji.

**Uygulamamızda:**
- **Atoms:** Buton, Input, Icon
- **Molecules:** SearchBar, FormField
- **Organisms:** Header, Footer, Navigation
- **Templates:** Page layouts
- **Pages:** Specific implementations

### **Breadcrumbs (Gezinti İzleri)**
**Tanım:** Kullanıcının mevcut konumunu gösteren navigasyon elementi.

**Uygulamamızda:**
```typescript
// Breadcrumb component örneği
interface BreadcrumbItem {
  label: string;
  path: string;
  isActive?: boolean;
}

const Breadcrumb = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <View style={styles.breadcrumb}>
      {items.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => router.push(item.path)}>
          <Text style={[styles.breadcrumbItem, item.isActive && styles.active]}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
```

---

## C - D

### **Card (Kart)**
**Tanım:** İçeriği gruplamak için kullanılan container elementi.

**Uygulamamızda:**
```typescript
// Card component örneği
const Card = ({ children, style, onPress }: CardProps) => {
  return (
    <TouchableOpacity 
      style={[styles.card, style]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      {children}
    </TouchableOpacity>
  );
};
```

### **Cognitive Load (Bilişsel Yük)**
**Tanım:** Kullanıcının bir görevi tamamlamak için harcadığı zihinsel çaba.

**Uygulamamızda:**
- ✅ Progressive disclosure (aşamalı açıklama)
- ✅ Chunking (bilgi gruplandırma)
- ✅ Clear visual hierarchy
- ✅ Minimal distractions

### **Color Contrast (Renk Kontrastı)**
**Tanım:** Metin ve arka plan arasındaki renk farkı.

**Uygulamamızda:**
```typescript
// Kontrast hesaplama fonksiyonu
const calculateContrastRatio = (color1: string, color2: string): number => {
  // WCAG 2.1 kontrast hesaplama algoritması
  const luminance1 = getLuminance(color1);
  const luminance2 = getLuminance(color2);
  
  const lighter = Math.max(luminance1, luminance2);
  const darker = Math.min(luminance1, luminance2);
  
  return (lighter + 0.05) / (darker + 0.05);
};
```

### **Dark Pattern (Karanlık Desen)**
**Tanım:** Kullanıcıyı yanıltmak için tasarlanmış manipülatif UI desenleri.

**Uygulamamızda Kaçınılacaklar:**
- ❌ Hidden costs
- ❌ Misdirection
- ❌ Forced continuity
- ❌ Sneak into basket
- ❌ Confirm shaming

---

## E - F

### **Empty State (Boş Durum)**
**Tanım:** İçerik olmadığında gösterilen durum.

**Uygulamamızda:**
```typescript
// Empty state component örneği
const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionText, 
  onAction 
}: EmptyStateProps) => {
  return (
    <View style={styles.emptyState}>
      <Icon name={icon} size={64} color={Colors.text.secondary} />
      <Text style={styles.emptyTitle}>{title}</Text>
      <Text style={styles.emptyDescription}>{description}</Text>
      {actionText && (
        <TouchableOpacity style={styles.actionButton} onPress={onAction}>
          <Text style={styles.actionText}>{actionText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
```

### **Error State (Hata Durumu)**
**Tanım:** Bir hata oluştuğunda gösterilen durum.

**Uygulamamızda:**
```typescript
// Error state hook'umuz zaten mevcut
const { showValidationError, showNetworkError, showSystemError } = useErrorStates();

// Kullanım örnekleri:
showValidationError('email', 'Geçerli bir email adresi girin');
showNetworkError('Bağlantı hatası', retryFunction);
showSystemError('Beklenmeyen bir hata oluştu');
```

### **Fitts's Law (Fitts Kanunu)**
**Tanım:** Hedef boyutu ve mesafesine göre tıklama süresini hesaplayan yasa.

**Uygulamamızda:**
- ✅ Büyük touch targets (44px minimum)
- ✅ Sık kullanılan elementleri kolay erişilebilir yerde
- ✅ Thumb-friendly navigation

### **Form Design (Form Tasarımı)**
**Tanım:** Veri girişi için kullanılan form elementlerinin tasarımı.

**Uygulamamızda:**
```typescript
// Form validation örneği
const validateForm = (data: FormData) => {
  const errors: Record<string, string> = {};
  
  if (!data.email) {
    errors.email = 'Email adresi gerekli';
  } else if (!isValidEmail(data.email)) {
    errors.email = 'Geçerli bir email adresi girin';
  }
  
  if (!data.password) {
    errors.password = 'Şifre gerekli';
  } else if (data.password.length < 8) {
    errors.password = 'Şifre en az 8 karakter olmalı';
  }
  
  return errors;
};
```

---

## G - H

### **Grid System (Grid Sistemi)**
**Tanım:** Layout için kullanılan düzenli ızgara sistemi.

**Uygulamamızda:**
```typescript
// useResponsive.ts'de grid sistemi
const gridSystem = {
  columns: 12,
  gutter: spacing.md,
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024
  }
};
```

### **Haptic Feedback (Dokunsal Geri Bildirim)**
**Tanım:** Kullanıcıya dokunsal geri bildirim veren teknoloji.

**Uygulamamızda:**
```typescript
// useHaptics.ts hook'umuz zaten mevcut
const { form, notification, game } = useHaptics();

// Kullanım örnekleri:
form.buttonSuccess(); // Başarılı işlem
form.buttonError();   // Hata durumu
notification.newMessage(); // Yeni mesaj
game.reward();        // Ödül kazanma
```

### **Heuristic Evaluation (Heuristik Değerlendirme)**
**Tanım:** Nielsen'in 10 heuristiğine göre kullanılabilirlik değerlendirmesi.

**Uygulamamızda Kontrol Listesi:**
- ✅ Sistem durumu görünürlüğü
- ✅ Gerçek dünya uyumu
- ✅ Kullanıcı kontrolü ve özgürlüğü
- ✅ Tutarlılık ve standartlar
- ✅ Hata önleme
- ✅ Hatırlama yerine görünürlük
- ✅ Kullanım esnekliği
- ✅ Estetik ve minimalist tasarım
- ✅ Hata tanıma ve düzeltme
- ✅ Yardım ve dokümantasyon

---

## I - J

### **Information Architecture (Bilgi Mimarisi)**
**Tanım:** Bilgilerin organize edilmesi ve yapılandırılması.

**Uygulamamızda:**
- ✅ Mantıklı navigasyon yapısı
- ✅ Tutarlı etiketleme
- ✅ Arama fonksiyonu
- ✅ Breadcrumbs
- ✅ Sitemap

### **Interaction Design (Etkileşim Tasarımı)**
**Tanım:** Kullanıcı ve sistem arasındaki etkileşimlerin tasarımı.

**Uygulamamızda:**
```typescript
// Interaction states örneği
const interactionStates = {
  default: { opacity: 1, scale: 1 },
  hover: { opacity: 0.8, scale: 1.05 },
  active: { opacity: 0.6, scale: 0.95 },
  disabled: { opacity: 0.5, scale: 1 }
};
```

---

## K - L

### **KPI (Key Performance Indicator)**
**Tanım:** Performansı ölçmek için kullanılan anahtar göstergeler.

**Uygulamamızda:**
- 📊 Task completion rate
- 📊 Error rate
- 📊 Time on task
- 📊 User satisfaction score
- 📊 Conversion rate

### **Loading State (Yükleme Durumu)**
**Tanım:** İşlem devam ederken gösterilen durum.

**Uygulamamızda:**
```typescript
// Loading component örneği
const LoadingState = ({ message = 'Yükleniyor...' }: LoadingProps) => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color={Colors.primary} />
      <Text style={styles.loadingText}>{message}</Text>
    </View>
  );
};
```

---

## M - N

### **Micro-interactions (Mikro Etkileşimler)**
**Tanım:** Küçük, anlamlı kullanıcı etkileşimleri.

**Uygulamamızda:**
- ✅ Button hover effects
- ✅ Form validation feedback
- ✅ Success/error animations
- ✅ Loading spinners
- ✅ Pull-to-refresh

### **Navigation (Navigasyon)**
**Tanım:** Kullanıcının uygulama içinde gezinmesini sağlayan sistem.

**Uygulamamızda:**
```typescript
// Navigation patterns
const navigationPatterns = {
  tabNavigation: 'Bottom tabs',
  stackNavigation: 'Screen stack',
  drawerNavigation: 'Side drawer',
  breadcrumbNavigation: 'Breadcrumbs'
};
```

---

## O - P

### **Onboarding (Tanıtım)**
**Tanım:** Yeni kullanıcıları uygulamaya tanıtma süreci.

**Uygulamamızda:**
- ✅ Welcome screens
- ✅ Feature highlights
- ✅ Interactive tutorials
- ✅ Progress indicators
- ✅ Skip options

### **Persona (Kullanıcı Profili)**
**Tanım:** Hedef kullanıcı grubunu temsil eden hayali karakter.

**Uygulamamızda:**
```typescript
// Persona örneği
interface Persona {
  name: string;
  age: number;
  occupation: string;
  goals: string[];
  painPoints: string[];
  techSavvy: 'low' | 'medium' | 'high';
}
```

### **Prototype (Prototip)**
**Tanım:** Tasarımın etkileşimli versiyonu.

**Uygulamamızda:**
- ✅ Low-fidelity wireframes
- ✅ High-fidelity mockups
- ✅ Interactive prototypes
- ✅ User testing

---

## Q - R

### **Qualitative Research (Niteliksel Araştırma)**
**Tanım:** Kullanıcı davranışlarını anlamak için yapılan araştırma.

**Uygulamamızda:**
- 📝 User interviews
- 📝 Usability testing
- 📝 Focus groups
- 📝 Ethnographic studies

### **Quantitative Research (Niceliksel Araştırma)**
**Tanım:** Sayısal verilerle yapılan araştırma.

**Uygulamamızda:**
- 📊 Analytics data
- 📊 A/B testing
- 📊 Surveys
- 📊 Heatmaps

### **Responsive Design (Duyarlı Tasarım)**
**Tanım:** Farklı ekran boyutlarına uyum sağlayan tasarım.

**Uygulamamızda:**
```typescript
// useResponsive.ts hook'umuz zaten mevcut
const { typography, spacing, components } = useResponsive();

// Breakpoint'ler
const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  large: 1440
};
```

---

## S - T

### **Skeuomorphism (Skeuomorfizm)**
**Tanım:** Dijital elementlerin gerçek dünya nesnelerini taklit etmesi.

**Uygulamamızda:**
- ✅ Subtle shadows
- ✅ Realistic textures
- ✅ Depth perception
- ✅ Natural interactions

### **Storyboard (Hikaye Panosu)**
**Tanım:** Kullanıcı yolculuğunu görsel olarak anlatan çizimler.

**Uygulamamızda:**
- 📋 User journey mapping
- 📋 Task flow diagrams
- 📋 Screen sequences
- 📋 Interaction flows

### **Typography (Tipografi)**
**Tanım:** Metin tasarımı ve düzenlemesi.

**Uygulamamızda:**
```typescript
// Typography system
const typography = {
  h1: { fontSize: 32, fontWeight: 'bold', lineHeight: 40 },
  h2: { fontSize: 24, fontWeight: 'bold', lineHeight: 32 },
  h3: { fontSize: 20, fontWeight: 'semibold', lineHeight: 28 },
  body: { fontSize: 16, fontWeight: 'normal', lineHeight: 24 },
  caption: { fontSize: 14, fontWeight: 'normal', lineHeight: 20 }
};
```

---

## U - V

### **Usability (Kullanılabilirlik)**
**Tanım:** Bir ürünün ne kadar kolay kullanıldığının ölçüsü.

**Uygulamamızda:**
- ✅ Learnability (öğrenilebilirlik)
- ✅ Efficiency (verimlilik)
- ✅ Memorability (hatırlanabilirlik)
- ✅ Error prevention (hata önleme)
- ✅ Satisfaction (memnuniyet)

### **User Experience (UX)**
**Tanım:** Kullanıcının bir ürünle etkileşim kurarken yaşadığı deneyim.

**Uygulamamızda:**
- 🎯 User-centered design
- 🎯 Emotional design
- 🎯 Accessibility
- 🎯 Performance
- 🎯 Consistency

### **User Interface (UI)**
**Tanım:** Kullanıcının etkileşim kurduğu görsel arayüz.

**Uygulamamızda:**
```typescript
// UI component library
const uiComponents = {
  Button: ButtonComponent,
  Input: InputComponent,
  Card: CardComponent,
  Modal: ModalComponent,
  Navigation: NavigationComponent
};
```

### **User Journey (Kullanıcı Yolculuğu)**
**Tanım:** Kullanıcının ürünle etkileşim kurarken geçtiği aşamalar.

**Uygulamamızda:**
- 🗺️ Awareness (farkındalık)
- 🗺️ Consideration (değerlendirme)
- 🗺️ Decision (karar)
- 🗺️ Purchase (satın alma)
- 🗺️ Retention (sadakat)

---

## W - Z

### **Wireframe (İskelet)**
**Tanım:** Sayfa düzeninin basit, detaysız çizimi.

**Uygulamamızda:**
- 📐 Layout structure
- 📐 Content hierarchy
- 📐 Navigation flow
- 📐 User interactions

### **White Space (Beyaz Alan)**
**Tanım:** Tasarımda boş bırakılan alanlar.

**Uygulamamızda:**
```typescript
// Spacing system
const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48
};
```

---

## 🎯 Uygulama Kontrol Listeleri

### **Sayfa Tasarımı Kontrol Listesi**

#### **Layout & Structure**
- [ ] Responsive design uygulandı mı?
- [ ] Grid sistemi kullanıldı mı?
- [ ] Visual hierarchy net mi?
- [ ] White space yeterli mi?

#### **Typography**
- [ ] Font boyutları okunabilir mi?
- [ ] Line height uygun mu?
- [ ] Contrast ratio yeterli mi?
- [ ] Font family tutarlı mı?

#### **Color & Contrast**
- [ ] WCAG 2.1 AA standartlarına uygun mu?
- [ ] Color blind friendly mi?
- [ ] Brand colors tutarlı mı?
- [ ] Error/success states net mi?

#### **Interaction Design**
- [ ] Touch targets yeterli büyüklükte mi?
- [ ] Hover/active states var mı?
- [ ] Loading states uygun mu?
- [ ] Error handling mevcut mu?

#### **Accessibility**
- [ ] Screen reader desteği var mı?
- [ ] Keyboard navigation çalışıyor mu?
- [ ] Focus indicators görünür mü?
- [ ] Alt text'ler mevcut mu?

### **Component Kontrol Listesi**

#### **Buttons**
- [ ] Minimum 44px touch target
- [ ] Clear visual feedback
- [ ] Consistent styling
- [ ] Accessible labels

#### **Forms**
- [ ] Clear labels
- [ ] Validation feedback
- [ ] Error messages
- [ ] Success states

#### **Navigation**
- [ ] Intuitive structure
- [ ] Breadcrumbs (gerekirse)
- [ ] Search functionality
- [ ] Mobile-friendly

#### **Cards**
- [ ] Consistent spacing
- [ ] Clear hierarchy
- [ ] Touch feedback
- [ ] Loading states

### **Performance Kontrol Listesi**

#### **Loading**
- [ ] Skeleton screens
- [ ] Progress indicators
- [ ] Optimistic updates
- [ ] Error boundaries

#### **Animations**
- [ ] Smooth transitions
- [ ] Performance optimized
- [ ] Reduced motion support
- [ ] Meaningful feedback

#### **Images**
- [ ] Optimized file sizes
- [ ] Lazy loading
- [ ] Alt text
- [ ] Responsive images

---

## 📚 Kaynaklar

### **Referans Dokümanlar**
- [Material Design Guidelines](https://m3.material.io/foundations)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)
- [Android Developers UI](https://developer.android.com/develop/ui)
- [Growth.Design Psychology](https://growth.design/psychology)

### **Araçlar**
- **Design:** Figma, Sketch, Adobe XD
- **Prototyping:** InVision, Framer
- **Testing:** UserTesting, Hotjar
- **Analytics:** Google Analytics, Mixpanel

---

*Bu glossary, UX/UI tasarımında kullanılan temel terimleri ve uygulamamızda nasıl kullanabileceğimizi kapsamlı bir şekilde ele alır. Her terim için pratik uygulama örnekleri ve kontrol listeleri sağlar.*
