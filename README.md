# MyTemplate - Modern React Native Template

A modern React Native template project built with Expo Router, featuring multi-language support and responsive design.

## 🚀 Features

### 📱 Platform Support
- **iOS & Android** full support
- **Tablet** support (iPad, Android Tablet)
- **Responsive** design
- **Edge-to-edge** Android support

### 🎨 UI/UX
- **NativeWind** with Tailwind CSS based styling
- **Geist** font family
- **Lucide** icon set
- **Dark/Light** theme support
- **Platform-specific** colors (iOS/Android)
- **Haptic feedback** support
- **Smooth animations** (Moti, Reanimated)

### 🌍 Multi-language Support
- **i18next** for internationalization
- **Turkish & English** language support
- **Dynamic language switching**
- **RTL** support ready

### 📊 State Management
- **Zustand** for state management
- **Persistent storage** support
- **React Query** for server state management

### 🔐 Authentication & Backend
- **Supabase** integration
- **AsyncStorage** for local storage
- **Form validation** (React Hook Form + Zod)

### 📱 Navigation & Routing
- **Expo Router** with file-based routing
- **Bottom tabs** navigation
- **Stack navigation** (auth, onboarding, settings)
- **Deep linking** support

### 🎯 Responsive Design
- **react-native-responsive-screen** for responsive measurements
- **react-native-size-matters** for DPI scaling
- **Platform-specific** spacing
- **Safe area** management

## 📦 Used Packages

### Core Dependencies
```json
{
  "expo": "^53.0.22",
  "expo-router": "~5.1.5",
  "react": "19.0.0",
  "react-native": "0.79.5",
  "typescript": "~5.8.3"
}
```

### UI & Styling
```json
{
  "nativewind": "^4.1.23",
  "tailwindcss": "^3.4.17",
  "tailwind-merge": "^3.3.1",
  "tailwind-variants": "^2.1.0",
  "lucide-react-native": "^0.540.0",
  "@expo-google-fonts/geist": "^0.4.0",
  "react-native-svg": "15.11.2"
}
```

### Navigation & Animations
```json
{
  "react-native-gesture-handler": "~2.24.0",
  "react-native-reanimated": "~3.17.4",
  "react-native-screens": "~4.11.1",
  "react-native-safe-area-context": "^5.4.0",
  "moti": "^0.30.0"
}
```

### State Management
```json
{
  "zustand": "^5.0.8",
  "zustand-persist": "^0.4.0",
  "@tanstack/react-query": "^5.85.5"
}
```

### Forms & Validation
```json
{
  "react-hook-form": "^7.62.0",
  "zod": "^4.0.17"
}
```

### Internationalization
```json
{
  "i18next": "^25.4.0",
  "react-i18next": "^15.7.1",
  "react-native-localize": "^3.5.2",
  "@formatjs/intl-datetimeformat": "^6.18.0",
  "@formatjs/intl-numberformat": "^8.15.4"
}
```

### Backend & Storage
```json
{
  "@supabase/supabase-js": "^2.56.0",
  "@react-native-async-storage/async-storage": "2.1.2",
  "axios": "^1.11.0"
}
```

### Device & System
```json
{
  "expo-device": "^7.1.4",
  "expo-battery": "^9.1.4",
  "expo-haptics": "~14.1.4",
  "expo-network": "~7.1.5",
  "expo-screen-orientation": "^8.1.7"
}
```

### UI Components
```json
{
  "@gorhom/bottom-sheet": "^5.2.3",
  "@react-native-community/blur": "^4.4.1",
  "react-native-bouncy-checkbox": "^4.1.2",
  "react-native-reanimated-carousel": "^4.0.3",
  "keen-slider": "^6.8.6",
  "lottie-react-native": "7.2.2"
}
```

## 📁 Project Structure

```
MyTemplate/
├── app/                          # Expo Router pages
│   ├── (tabs)/                   # Bottom tab pages
│   │   ├── index.tsx            # Home page
│   │   ├── two.tsx              # Second tab
│   │   ├── three.tsx            # Third tab
│   │   ├── four.tsx             # Fourth tab
│   │   ├── five.tsx             # Fifth tab
│   │   └── _layout.tsx          # Tab layout
│   ├── (auth)/                   # Authentication pages
│   │   ├── login.tsx            # Login page
│   │   ├── register.tsx         # Register page
│   │   ├── auth-options.tsx     # Auth options
│   │   └── _layout.tsx          # Auth layout
│   ├── (onboarding)/             # Onboarding pages
│   │   ├── onboarding.tsx       # Onboarding start
│   │   ├── info.tsx             # Info page
│   │   ├── calculating.tsx      # Calculating page
│   │   ├── result.tsx           # Result page
│   │   └── _layout.tsx          # Onboarding layout
│   ├── (settings)/               # Settings pages
│   │   ├── settings.tsx         # Main settings
│   │   ├── language.tsx         # Language settings
│   │   ├── notifications.tsx    # Notification settings
│   │   ├── support/             # Support pages
│   │   ├── subscription/        # Subscription pages
│   │   ├── legal/               # Legal pages
│   │   └── _layout.tsx          # Settings layout
│   ├── get-started.tsx          # Get started page
│   ├── subscription.tsx         # Subscription page
│   ├── splash.tsx               # Splash screen
│   └── _layout.tsx              # Main layout
├── components/                   # Reusable components
│   └── SafeAreaWrapper.tsx      # Safe area wrapper
├── constants/                    # Constants
│   └── Colors.ts                # Color definitions
├── hooks/                        # Custom hooks
│   ├── useHaptics.ts            # Haptic feedback hook
│   ├── useLanguage.ts           # Language management hook
│   ├── useResponsive.ts         # Responsive design hook
│   └── error-states/            # Error state hooks
├── i18n/                         # Internationalization
│   └── index.ts                 # i18n configuration
├── services/                     # Services
│   └── supabase/                # Supabase services
├── assets/                       # Static files
│   ├── images/                  # Images
│   └── locales/                 # Language files
├── docs/                         # Documentation
├── global.css                    # Global CSS
├── tailwind.config.js           # Tailwind configuration
├── app.json                     # Expo configuration
└── package.json                 # Package dependencies
```

## 🎨 Design System

### Color Palette
- **Platform-specific** colors (iOS/Android)
- **Light/Dark** theme support
- **Primary, Secondary, Success, Warning, Error** colors
- **Background, Text, Border** colors

### Typography
- **Geist** font family
- **Responsive** font sizes
- **Platform-specific** font weights

### Spacing
- **Responsive** spacing system
- **Platform-specific** padding/margin
- **Safe area** compatible spacing

## 🚀 Installation

### Requirements
- Node.js 18+
- Expo CLI
- iOS Simulator (macOS) or Android Studio

### Installation Steps

1. **Clone the project**
```bash
git clone https://github.com/your-username/MyTemplate.git
cd MyTemplate
```

2. **Install dependencies**
```bash
npm install
```

3. **Start with Expo CLI**
```bash
npx expo start
```

4. **Choose platform**
- iOS: Press `i`
- Android: Press `a`
- Web: Press `w`

## 📱 Usage

### Adding New Pages
1. Create new file in `app/` directory
2. Use Expo Router file-based routing
3. Style with NativeWind

### Adding Languages
1. Add new language file to `assets/locales/` directory
2. Configure language in `i18n/index.ts` file
3. Define locale in `app.json` file

### Customizing Theme
1. Update colors in `tailwind.config.js` file
2. Adjust platform colors in `constants/Colors.ts` file

## 🔧 Configuration

### Expo Configuration
- **Hermes** JavaScript engine
- **New Architecture** enabled
- **Edge-to-edge** Android support
- **Tablet** support

### Tailwind Configuration
- **Responsive breakpoints**
- **Platform-specific** colors
- **Custom spacing** system
- **Dark mode** support

### TypeScript Configuration
- **Strict mode** enabled
- **Path mapping** configured
- **Expo Router** type support

## 📋 Scripts

```json
{
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "test": "jest --watchAll"
}
```

## 🧪 Testing

```bash
npm test
```

## 📦 Build

### iOS
```bash
npx expo build:ios
```

### Android
```bash
npx expo build:android
```

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) - React Native development platform
- [NativeWind](https://www.nativewind.dev/) - Tailwind CSS for React Native
- [Lucide](https://lucide.dev/) - Beautiful & consistent icon toolkit
- [Zustand](https://github.com/pmndrs/zustand) - State management
- [i18next](https://www.i18next.com/) - Internationalization framework
