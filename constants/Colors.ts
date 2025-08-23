// Basit renk sistemi - platform bağımsız
export const Colors = {
  // Primary Colors
  primary: '#010103',      // Kullanıcının istediği buton rengi
  secondary: '#5856D6',    // Purple
  success: '#34C759',      // Green
  warning: '#FF9500',      // Orange
  error: '#FF3B30',        // Red
  info: '#007AFF',         // Blue

  // Surface Colors
  surface: {
    primary: '#fdfdfd',    // Kullanıcının istediği uygulama rengi
    secondary: '#F8F9FA',  // Light Gray
    tertiary: '#E9ECEF',   // Medium Gray
  },

  // Text Colors
  text: {
    primary: '#000000',    // Black
    secondary: '#6C757D',  // Gray
    tertiary: '#ADB5BD',   // Light Gray
    inverse: '#FFFFFF',    // White (for dark backgrounds)
  },

  // Background Colors
  background: {
    primary: '#fdfdfd',    // Kullanıcının istediği uygulama rengi
    secondary: '#F8F9FA',  // Light Gray
    gradient: {
      primary: ['#fdfdfd', '#f0f0f0', '#e8e8e8'],  // Kullanıcının rengi ile gradient
      secondary: ['#010103', '#1a1a1a', '#333333'], // Buton rengi ile gradient
    },
  },

  // Border Colors
  border: {
    primary: '#DEE2E6',    // Light Gray
    secondary: '#CED4DA',  // Medium Gray
    focus: '#010103',      // Primary color
  },

  // Shadow Colors
  shadow: {
    primary: 'rgba(0, 0, 0, 0.1)',
    secondary: 'rgba(0, 0, 0, 0.05)',
    tertiary: 'rgba(0, 0, 0, 0.02)',
  },

  // Overlay Colors
  overlay: {
    primary: 'rgba(0, 0, 0, 0.5)',
    secondary: 'rgba(0, 0, 0, 0.3)',
    tertiary: 'rgba(0, 0, 0, 0.1)',
  },

  // Status Colors
  status: {
    online: '#34C759',     // Green
    offline: '#FF3B30',    // Red
    away: '#FF9500',       // Orange
    busy: '#5856D6',       // Purple
  },

  // Social Colors
  social: {
    facebook: '#1877F2',
    twitter: '#1DA1F2',
    instagram: '#E4405F',
    linkedin: '#0A66C2',
    youtube: '#FF0000',
  },

  // Utility Functions
  getPlatformColor: (iosColor: string, androidColor: string) => {
    // Platform bağımsız - ilk rengi kullan
    return iosColor;
  },

  // Opacity variations
  withOpacity: (color: string, opacity: number) => {
    // Convert hex to rgba
    const hex = color.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  },

  // Lighten/Darken functions
  lighten: (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.min(255, parseInt(hex.substr(0, 2), 16) + amount);
    const g = Math.min(255, parseInt(hex.substr(2, 2), 16) + amount);
    const b = Math.min(255, parseInt(hex.substr(4, 2), 16) + amount);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  },

  darken: (color: string, amount: number) => {
    const hex = color.replace('#', '');
    const r = Math.max(0, parseInt(hex.substr(0, 2), 16) - amount);
    const g = Math.max(0, parseInt(hex.substr(2, 2), 16) - amount);
    const b = Math.max(0, parseInt(hex.substr(4, 2), 16) - amount);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  },

  // Contrast calculation for automatic text color
  getContrastTextColor: (backgroundColor: string) => {
    // Convert hex to RGB
    const hex = backgroundColor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);

    // Calculate luminance
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

    // Return white text for dark backgrounds, black text for light backgrounds
    return luminance > 0.5 ? Colors.text.primary : Colors.text.inverse;
  },
};

// Type definitions for better TypeScript support
export type ColorKey = keyof typeof Colors;
export type SurfaceColorKey = keyof typeof Colors.surface;
export type TextColorKey = keyof typeof Colors.text;
export type BackgroundColorKey = keyof typeof Colors.background;
export type BorderColorKey = keyof typeof Colors.border;
export type ShadowColorKey = keyof typeof Colors.shadow;
export type OverlayColorKey = keyof typeof Colors.overlay;
export type StatusColorKey = keyof typeof Colors.status;
export type SocialColorKey = keyof typeof Colors.social;
