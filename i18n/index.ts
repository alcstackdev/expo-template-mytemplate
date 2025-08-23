import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { create } from 'zustand';

// Safe RNLocalize import with fallback
let RNLocalize: any = null;
try {
  RNLocalize = require('react-native-localize');
} catch (error) {
  console.warn('react-native-localize not available, using fallback');
}

// Fallback for web/development
if (!RNLocalize) {
  RNLocalize = {
    getLocales: () => [{ languageCode: 'en', countryCode: 'US', languageTag: 'en-US', isRTL: false }],
    getCountry: () => 'US',
    getCurrencies: () => ['USD'],
    getNumberFormatSettings: () => ({ decimalSeparator: '.', groupingSeparator: ',' }),
    getCalendar: () => 'gregorian',
    getTemperatureUnit: () => 'celsius',
    getTimeZone: () => 'America/New_York',
    uses24HourClock: () => false,
    usesMetricSystem: () => false,
    usesAutoDateAndTime: () => undefined,
    usesAutoTimeZone: () => undefined,
    findBestLanguageTag: (languageTags: string[]) => ({ languageTag: 'en', isRTL: false }),
    openAppLanguageSettings: () => Promise.resolve(),
  };
}

// Supported languages (excluding RTL)
export const SUPPORTED_LANGUAGES = {
  en: { name: 'English', nativeName: 'English' },
  tr: { name: 'Turkish', nativeName: 'Türkçe' },
  es: { name: 'Spanish', nativeName: 'Español' },
  fr: { name: 'French', nativeName: 'Français' },
  de: { name: 'German', nativeName: 'Deutsch' },
  it: { name: 'Italian', nativeName: 'Italiano' },
  pt: { name: 'Portuguese', nativeName: 'Português' },
  ru: { name: 'Russian', nativeName: 'Русский' },
  ja: { name: 'Japanese', nativeName: '日本語' },
  ko: { name: 'Korean', nativeName: '한국어' },
  zh: { name: 'Chinese', nativeName: '中文' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी' },
  nl: { name: 'Dutch', nativeName: 'Nederlands' },
  sv: { name: 'Swedish', nativeName: 'Svenska' },
  da: { name: 'Danish', nativeName: 'Dansk' },
};

// Language store
interface LanguageStore {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLanguage: 'en',
  setLanguage: (lang) => set({ currentLanguage: lang }),
}));

// Auto-detect device language with fallback
const getDeviceLanguage = (): string => {
  try {
    if (RNLocalize) {
      const locales = RNLocalize.getLocales();
      const deviceLang = locales[0]?.languageCode || 'en';
      return SUPPORTED_LANGUAGES[deviceLang as keyof typeof SUPPORTED_LANGUAGES] ? deviceLang : 'en';
    }
  } catch (error) {
    console.warn('Failed to detect device language:', error);
  }
  return 'en'; // Fallback to English
};

// Format currency with advanced options
export const formatCurrency = (amount: number, currency = 'USD', options?: {
  showSymbol?: boolean;
  showCode?: boolean;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
}): string => {
  const lang = useLanguageStore.getState().currentLanguage;
  const {
    showSymbol = true,
    showCode = false,
    minimumFractionDigits = 2,
    maximumFractionDigits = 2
  } = options || {};

  try {
    const formatter = new Intl.NumberFormat(lang, {
      style: 'currency',
      currency,
      minimumFractionDigits,
      maximumFractionDigits,
    });

    let result = formatter.format(amount);

    // Custom formatting options
    if (!showSymbol) {
      result = result.replace(/[^\d.,\s-]/g, '').trim();
    }

    if (showCode) {
      result = `${result} (${currency})`;
    }

    return result;
  } catch (error) {
    // Enhanced fallback formatting
    const symbol = currency === 'USD' ? '$' : currency === 'EUR' ? '€' : currency === 'TRY' ? '₺' : currency;
    const formatted = new Intl.NumberFormat(lang, {
      minimumFractionDigits,
      maximumFractionDigits,
    }).format(amount);

    return showSymbol ? `${symbol}${formatted}` : formatted;
  }
};

// Format multiple currencies for comparison
export const formatMultipleCurrencies = (amount: number, currencies: string[] = ['USD', 'EUR', 'TRY']): string[] => {
  return currencies.map(currency => formatCurrency(amount, currency));
};

// Format currency with conversion rate
export const formatCurrencyWithRate = (amount: number, fromCurrency: string, toCurrency: string, rate: number): string => {
  const convertedAmount = amount * rate;
  return `${formatCurrency(amount, fromCurrency)} = ${formatCurrency(convertedAmount, toCurrency)}`;
};

// Format number with advanced options
export const formatNumber = (num: number, options?: {
  style?: 'decimal' | 'percent' | 'unit';
  unit?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  notation?: 'standard' | 'scientific' | 'engineering' | 'compact';
}): string => {
  const lang = useLanguageStore.getState().currentLanguage;
  const {
    style = 'decimal',
    unit,
    minimumFractionDigits,
    maximumFractionDigits,
    notation = 'standard'
  } = options || {};

  try {
    const formatterOptions: Intl.NumberFormatOptions = {
      style,
      notation,
      minimumFractionDigits,
      maximumFractionDigits,
    };

    if (style === 'unit' && unit) {
      formatterOptions.unit = unit;
    }

    return new Intl.NumberFormat(lang, formatterOptions).format(num);
  } catch (error) {
    // Enhanced fallback
    if (style === 'percent') {
      return `${(num * 100).toFixed(2)}%`;
    }
    if (style === 'unit' && unit) {
      return `${num} ${unit}`;
    }
    return num.toString();
  }
};

// Format large numbers with compact notation
export const formatCompactNumber = (num: number): string => {
  return formatNumber(num, { notation: 'compact' });
};

// Format percentage
export const formatPercentage = (num: number, decimals = 2): string => {
  return formatNumber(num, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
};

// Format file size
export const formatFileSize = (bytes: number): string => {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return formatNumber(size, {
    style: 'unit',
    unit: units[unitIndex],
    maximumFractionDigits: 2
  });
};

// Format date with multiple options
export const formatDate = (date: Date, format: 'full' | 'long' | 'medium' | 'short' | 'relative' = 'long'): string => {
  const lang = useLanguageStore.getState().currentLanguage;

  try {
    if (format === 'relative') {
      return formatRelativeDate(date, lang);
    }

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: format === 'full' || format === 'long' ? 'long' : 'short',
      day: 'numeric',
      weekday: format === 'full' ? 'long' : undefined,
    };

    return new Intl.DateTimeFormat(lang, options).format(date);
  } catch (error) {
    return date.toLocaleDateString();
  }
};

// Format relative date (e.g., "2 days ago", "yesterday")
const formatRelativeDate = (date: Date, lang: string): string => {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' });

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays === -1) return 'Tomorrow';
  if (diffDays > 0) return rtf.format(-diffDays, 'day');
  if (diffDays < 0) return rtf.format(-diffDays, 'day');

  return formatDate(date, 'medium');
};

// Format date range
export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const lang = useLanguageStore.getState().currentLanguage;

  try {
    const formatter = new Intl.DateTimeFormat(lang, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    return `${formatter.format(startDate)} - ${formatter.format(endDate)}`;
  } catch (error) {
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  }
};

// Format time with 12/24 hour support
export const formatTime = (date: Date, options?: {
  hour12?: boolean;
  showSeconds?: boolean;
  format?: 'short' | 'medium' | 'long';
}): string => {
  const lang = useLanguageStore.getState().currentLanguage;
  const {
    hour12,
    showSeconds = false,
    format = 'short'
  } = options || {};

  try {
    // Auto-detect 12/24 hour preference based on locale
    const localeUses24Hour = RNLocalize?.uses24HourClock?.() ?? false;
    const useHour12 = hour12 !== undefined ? hour12 : !localeUses24Hour;

    const formatterOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: useHour12,
    };

    if (showSeconds) {
      formatterOptions.second = '2-digit';
    }

    // Add timezone for long format
    if (format === 'long') {
      formatterOptions.timeZoneName = 'short';
    }

    return new Intl.DateTimeFormat(lang, formatterOptions).format(date);
  } catch (error) {
    // Enhanced fallback with 12/24 hour detection
    const fallbackOptions: Intl.DateTimeFormatOptions = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: hour12 ?? true, // Default to 12-hour format
    };

    if (showSeconds) {
      fallbackOptions.second = '2-digit';
    }

    return new Intl.DateTimeFormat('en-US', fallbackOptions).format(date);
  }
};

// Get time format preference for current locale
export const getTimeFormatPreference = (): '12h' | '24h' => {
  try {
    if (RNLocalize?.uses24HourClock) {
      return RNLocalize.uses24HourClock() ? '24h' : '12h';
    }
  } catch (error) {
    console.warn('Failed to detect time format preference:', error);
  }

  // Fallback based on common preferences
  const lang = useLanguageStore.getState().currentLanguage;
  const uses24Hour = ['tr', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'hi', 'nl', 'sv', 'da'];
  return uses24Hour.includes(lang) ? '24h' : '12h';
};

// Format time with AM/PM labels
export const formatTimeWithAMPM = (date: Date): string => {
  return formatTime(date, { hour12: true });
};

// Format time in 24-hour format
export const formatTime24Hour = (date: Date): string => {
  return formatTime(date, { hour12: false });
};

// Format phone number with regional formatting
export const formatPhoneNumber = (phoneNumber: string, countryCode = 'US'): string => {
  const lang = useLanguageStore.getState().currentLanguage;

  try {
    // Remove all non-digit characters
    const digits = phoneNumber.replace(/\D/g, '');

    // Basic formatting based on country
    switch (countryCode) {
      case 'US':
        return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
      case 'TR':
        return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
      case 'DE':
        return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7, 9)} ${digits.slice(9, 11)}`;
      default:
        return digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    }
  } catch (error) {
    return phoneNumber;
  }
};

// Format email with localization
export const formatEmail = (email: string): string => {
  // Email format is generally universal, but we can add locale-specific validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) ? email : email;
};

// Format URL with localization
export const formatURL = (url: string): string => {
  // Ensure URL has protocol
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    return `https://${url}`;
  }
  return url;
};

// Get measurement system preference
export const getMeasurementSystem = (): 'metric' | 'imperial' => {
  try {
    if (RNLocalize?.usesMetricSystem) {
      return RNLocalize.usesMetricSystem() ? 'metric' : 'imperial';
    }
  } catch (error) {
    console.warn('Failed to detect measurement system:', error);
  }

  // Fallback based on common preferences
  const lang = useLanguageStore.getState().currentLanguage;
  const usesMetric = ['tr', 'de', 'fr', 'es', 'it', 'pt', 'ru', 'ja', 'ko', 'zh', 'hi', 'nl', 'sv', 'da'];
  return usesMetric.includes(lang) ? 'metric' : 'imperial';
};

// Format distance with measurement system
export const formatDistance = (meters: number): string => {
  const system = getMeasurementSystem();

  if (system === 'metric') {
    if (meters >= 1000) {
      return formatNumber(meters / 1000, { style: 'unit', unit: 'km' });
    }
    return formatNumber(meters, { style: 'unit', unit: 'm' });
  } else {
    const feet = meters * 3.28084;
    if (feet >= 5280) {
      return formatNumber(feet / 5280, { style: 'unit', unit: 'mi' });
    }
    return formatNumber(feet, { style: 'unit', unit: 'ft' });
  }
};

// Format weight with measurement system
export const formatWeight = (grams: number): string => {
  const system = getMeasurementSystem();

  if (system === 'metric') {
    if (grams >= 1000) {
      return formatNumber(grams / 1000, { style: 'unit', unit: 'kg' });
    }
    return formatNumber(grams, { style: 'unit', unit: 'g' });
  } else {
    const pounds = grams * 0.00220462;
    return formatNumber(pounds, { style: 'unit', unit: 'lb' });
  }
};

// Get temperature unit preference
export const getTemperatureUnit = (): 'celsius' | 'fahrenheit' => {
  try {
    if (RNLocalize?.getTemperatureUnit) {
      return RNLocalize.getTemperatureUnit();
    }
  } catch (error) {
    console.warn('Failed to detect temperature unit:', error);
  }

  // Fallback based on measurement system
  const system = getMeasurementSystem();
  return system === 'metric' ? 'celsius' : 'fahrenheit';
};

// Format temperature with unit preference
export const formatTemperature = (celsius: number): string => {
  const unit = getTemperatureUnit();

  if (unit === 'fahrenheit') {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return formatNumber(fahrenheit, { style: 'unit', unit: '°F' });
  } else {
    return formatNumber(celsius, { style: 'unit', unit: '°C' });
  }
};

// Translations
const resources = {
  en: {
    translation: {
      'get-started.title': 'Get Started',
      'get-started.button': 'Start',
      'common.continue': 'Continue',
      'common.back': 'Back',
    },
  },
  tr: {
    translation: {
      'get-started.title': 'Başlayın',
      'get-started.button': 'Başla',
      'common.continue': 'Devam Et',
      'common.back': 'Geri',
    },
  },
  es: {
    translation: {
      'get-started.title': 'Comenzar',
      'get-started.button': 'Empezar',
      'common.continue': 'Continuar',
      'common.back': 'Atrás',
    },
  },
  fr: {
    translation: {
      'get-started.title': 'Commencer',
      'get-started.button': 'Démarrer',
      'common.continue': 'Continuer',
      'common.back': 'Retour',
    },
  },
  de: {
    translation: {
      'get-started.title': 'Loslegen',
      'get-started.button': 'Starten',
      'common.continue': 'Weiter',
      'common.back': 'Zurück',
    },
  },
  it: {
    translation: {
      'get-started.title': 'Inizia',
      'get-started.button': 'Avvia',
      'common.continue': 'Continua',
      'common.back': 'Indietro',
    },
  },
  pt: {
    translation: {
      'get-started.title': 'Começar',
      'get-started.button': 'Iniciar',
      'common.continue': 'Continuar',
      'common.back': 'Voltar',
    },
  },
  ru: {
    translation: {
      'get-started.title': 'Начать',
      'get-started.button': 'Старт',
      'common.continue': 'Продолжить',
      'common.back': 'Назад',
    },
  },
  ja: {
    translation: {
      'get-started.title': '始める',
      'get-started.button': '開始',
      'common.continue': '続行',
      'common.back': '戻る',
    },
  },
  ko: {
    translation: {
      'get-started.title': '시작하기',
      'get-started.button': '시작',
      'common.continue': '계속',
      'common.back': '뒤로',
    },
  },
  zh: {
    translation: {
      'get-started.title': '开始',
      'get-started.button': '启动',
      'common.continue': '继续',
      'common.back': '返回',
    },
  },
  hi: {
    translation: {
      'get-started.title': 'शुरू करें',
      'get-started.button': 'शुरू',
      'common.continue': 'जारी रखें',
      'common.back': 'वापस',
    },
  },
  nl: {
    translation: {
      'get-started.title': 'Beginnen',
      'get-started.button': 'Start',
      'common.continue': 'Doorgaan',
      'common.back': 'Terug',
    },
  },
  sv: {
    translation: {
      'get-started.title': 'Kom igång',
      'get-started.button': 'Starta',
      'common.continue': 'Fortsätt',
      'common.back': 'Tillbaka',
    },
  },
  da: {
    translation: {
      'get-started.title': 'Kom i gang',
      'get-started.button': 'Start',
      'common.continue': 'Fortsæt',
      'common.back': 'Tilbage',
    },
  },
};

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
