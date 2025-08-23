import { useTranslation } from 'react-i18next';
import {
  useLanguageStore,
  formatCurrency,
  formatNumber,
  formatDate,
  formatTime,
  formatMultipleCurrencies,
  formatCurrencyWithRate,
  formatDateRange,
  formatCompactNumber,
  formatPercentage,
  formatFileSize,
  getTimeFormatPreference,
  formatTimeWithAMPM,
  formatTime24Hour,
  formatPhoneNumber,
  formatEmail,
  formatURL,
  getMeasurementSystem,
  formatDistance,
  formatWeight,
  getTemperatureUnit,
  formatTemperature,
  SUPPORTED_LANGUAGES
} from '../i18n';

export const useLanguage = () => {
  const { t, i18n } = useTranslation();
  const { currentLanguage, setLanguage } = useLanguageStore();

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return {
    // Translation
    t,

    // Language management
    currentLanguage,
    setLanguage: changeLanguage,

    // Basic formatting functions
    formatCurrency,
    formatNumber,
    formatDate,
    formatTime,

    // Advanced formatting functions
    formatMultipleCurrencies,
    formatCurrencyWithRate,
    formatDateRange,
    formatCompactNumber,
    formatPercentage,
    formatFileSize,
    getTimeFormatPreference,
    formatTimeWithAMPM,
    formatTime24Hour,

    // Contact formatting functions
    formatPhoneNumber,
    formatEmail,
    formatURL,

    // Measurement functions
    getMeasurementSystem,
    formatDistance,
    formatWeight,
    getTemperatureUnit,
    formatTemperature,

    // RTL support (always false for our supported languages)
    isRTL: false,
    direction: 'ltr' as const,

    // Locale info
    locale: currentLanguage,

    // Available languages
    supportedLanguages: SUPPORTED_LANGUAGES,
  };
};
