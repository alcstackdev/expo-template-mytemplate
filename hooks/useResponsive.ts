import { Dimensions, Platform, PixelRatio } from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import * as Device from 'expo-device';
import { Colors } from '../constants/Colors';

// 1. DEVICE DETECTION SYSTEM
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// Material Design Breakpoints (Official)
const BREAKPOINTS = {
  COMPACT: 600,    // Small phones (320-600dp)
  MEDIUM: 840,     // Large phones (600-840dp)
  EXPANDED: 1200,  // Tablets (840-1200dp)
  LARGE: 1200,     // Large tablets/desktop (1200dp+)
};

// Device type detection based on Material Design
const getDeviceType = () => {
  const screenWidth = width;

  if (screenWidth < BREAKPOINTS.COMPACT) return 'compact';
  if (screenWidth < BREAKPOINTS.MEDIUM) return 'medium';
  if (screenWidth < BREAKPOINTS.EXPANDED) return 'expanded';
  return 'large';
};

// Platform detection
const getPlatform = () => {
  return Platform.OS;
};

// Device category detection
const getDeviceCategory = () => {
  const deviceType = getDeviceType();
  const platform = getPlatform();

  if (deviceType === 'expanded' || deviceType === 'large') {
    return platform === 'ios' ? 'ipad' : 'tablet';
  }

  return platform === 'ios' ? 'iphone' : 'android-phone';
};

// 2. MATERIAL DESIGN TYPOGRAPHY SCALE (Official)
const MATERIAL_TYPOGRAPHY = {
  // Material Design 3 Type Scale
  displayLarge: 57,
  displayMedium: 45,
  displaySmall: 36,
  headlineLarge: 32,
  headlineMedium: 28,
  headlineSmall: 24,
  titleLarge: 22,
  titleMedium: 16,
  titleSmall: 14,
  bodyLarge: 16,
  bodyMedium: 14,
  bodySmall: 12,
  labelLarge: 14,
  labelMedium: 12,
  labelSmall: 11,
};

// 3. APPLE HIG TYPOGRAPHY SCALE (Official)
const APPLE_TYPOGRAPHY = {
  // iOS Default Sizes (Apple HIG)
  largeTitle: 34,
  title1: 28,
  title2: 22,
  title3: 20,
  headline: 17,
  body: 17,
  callout: 16,
  subheadline: 15,
  footnote: 13,
  caption1: 12,
  caption2: 11,
};

// 4. DENSITY MANAGEMENT (Material Design Official)
const getDensity = () => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case 'compact': return 'compact';
    case 'medium': return 'default';
    case 'expanded': return 'comfortable';
    case 'large': return 'comfortable';
    default: return 'default';
  }
};

// 5. ADAPTIVE FONT SCALING (Correct RFValue Implementation)
const getAdaptiveFontSize = (baseSize: number, variant: string = 'body') => {
  const platform = getPlatform();
  const density = getDensity();
  const deviceType = getDeviceType();

  // Use RFValue with Pixel 9a as standard (modern phone)
  // Pixel 9a height is 1080px, so we use it as reference
  let adaptiveSize = RFValue(baseSize, 1080); // Pixel 9a as standard

  // Apply Material Design density scaling (minimal for modern devices)
  switch (density) {
    case 'compact':
      adaptiveSize *= 0.9; // Only reduce for very small screens
      break;
    case 'default':
      adaptiveSize *= 1.0; // Keep original size for modern phones
      break;
    case 'comfortable':
      adaptiveSize *= 1.1; // Only increase for tablets
      break;
  }

  // Platform-specific adjustments (minimal)
  if (platform === 'ios') {
    adaptiveSize *= 1.0; // Keep same size for iOS
  }

  // Variant-specific scaling (Material Design Type Scale ratios)
  switch (variant) {
    case 'h1':
    case 'headlineLarge':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.headlineLarge / 16);
      break;
    case 'h2':
    case 'headlineMedium':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.headlineMedium / 16);
      break;
    case 'h3':
    case 'headlineSmall':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.headlineSmall / 16);
      break;
    case 'body':
    case 'bodyLarge':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.bodyLarge / 16);
      break;
    case 'caption':
    case 'bodySmall':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.bodySmall / 16);
      break;
    case 'button':
    case 'labelLarge':
      adaptiveSize *= (MATERIAL_TYPOGRAPHY.labelLarge / 16);
      break;
  }

  // Apply reasonable minimum and maximum constraints
  const minFontSize = platform === 'ios' ? 11 : 12; // Standard minimums
  const maxFontSize = platform === 'ios' ? 34 : 32; // Standard maximums

  return Math.max(minFontSize, Math.min(adaptiveSize, maxFontSize));
};

// 6. RESPONSIVE LAYOUT DECISIONS (Material Design Official)
const getLayoutType = () => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case 'compact': return 'single-column';
    case 'medium': return 'single-column';
    case 'expanded': return 'two-column';
    case 'large': return 'three-column';
    default: return 'single-column';
  }
};

const shouldUseScroll = () => {
  const deviceType = getDeviceType();
  return deviceType === 'compact' || deviceType === 'medium';
};

const getGridColumns = () => {
  const deviceType = getDeviceType();

  switch (deviceType) {
    case 'compact': return 1;
    case 'medium': return 1;
    case 'expanded': return 2;
    case 'large': return 3;
    default: return 1;
  }
};

// 7. RESPONSIVE SPACING SYSTEM (Material Design 8dp Grid)
const getResponsiveSpacing = (baseSpacing: number) => {
  const density = getDensity();

  // Material Design density spacing (Official)
  switch (density) {
    case 'compact':
      return moderateVerticalScale(baseSpacing * 0.8);
    case 'default':
      return moderateVerticalScale(baseSpacing);
    case 'comfortable':
      return moderateVerticalScale(baseSpacing * 1.2);
  }

};

// 8. TOUCH TARGET SYSTEM (Apple HIG & Material Design)
const getTouchTargetSize = (baseSize: number = 44) => {
  const platform = getPlatform();

  // Official minimum touch targets
  const minTouchTarget = platform === 'ios' ? 44 : 48;
  const targetSize = Math.max(baseSize, minTouchTarget);

  return moderateScale(targetSize);
};

// 9. COMPONENT ADAPTATION SYSTEM (Material Design Official)
const getComponentStyle = (componentType: string) => {
  const density = getDensity();

  switch (componentType) {
    case 'card':
      return {
        borderRadius: moderateScale(12),
        padding: getResponsiveSpacing(16),
        marginVertical: getResponsiveSpacing(8),
        shadowColor: Colors.overlay.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
      };

    case 'button':
      return {
        borderRadius: moderateScale(8),
        paddingVertical: getResponsiveSpacing(12),
        paddingHorizontal: getResponsiveSpacing(16),
        minHeight: getTouchTargetSize(48),
        justifyContent: 'center' as const,
        alignItems: 'center' as const,
      };

    case 'input':
      return {
        borderRadius: moderateScale(8),
        paddingVertical: getResponsiveSpacing(8),
        paddingHorizontal: getResponsiveSpacing(12),
        minHeight: getTouchTargetSize(48),
        fontSize: getAdaptiveFontSize(16, 'body'),
      };

    default:
      return {};
  }
};

// 10. MAIN RESPONSIVE SYSTEM
export const responsive = {
  // Device detection
  device: {
    type: getDeviceType(),
    category: getDeviceCategory(),
    platform: getPlatform(),
    width,
    height,
    shortDimension,
    longDimension,
    aspectRatio: width / height,
  },

  // Layout decisions
  layout: {
    type: getLayoutType(),
    shouldUseScroll: shouldUseScroll(),
    gridColumns: getGridColumns(),
    density: getDensity(),
  },

  // Scaling functions
  scale: (size: number) => scale(size),
  verticalScale: (size: number) => verticalScale(size),
  moderateScale: (size: number, factor: number = 0.5) => moderateScale(size, factor),
  moderateVerticalScale: (size: number, factor: number = 0.5) => moderateVerticalScale(size, factor),

  // Enhanced scaling
  fontSize: (baseSize: number, variant: string = 'body') => getAdaptiveFontSize(baseSize, variant),
  spacing: (size: number) => getResponsiveSpacing(size),
  touchTarget: (size: number = 44) => getTouchTargetSize(size),
  image: (size: number) => moderateScale(size),
  borderRadius: (size: number) => moderateScale(size),

  // RFValue functions for direct use
  rfValue: (value: number, standardScreenHeight?: number) => RFValue(value, standardScreenHeight),
  rfPercentage: (percent: number) => RFPercentage(percent),

  // Aliases
  s: scale,
  vs: verticalScale,
  ms: moderateScale,
  mvs: moderateVerticalScale,
  rf: RFValue,
  rfp: RFPercentage,
};

// 11. TYPOGRAPHY SYSTEM (Material Design Official)
export const typography = {
  // Material Design Type Scale
  h1: getAdaptiveFontSize(32, 'h1'),
  h2: getAdaptiveFontSize(28, 'h2'),
  h3: getAdaptiveFontSize(24, 'h3'),
  h4: getAdaptiveFontSize(22, 'h4'), // Fixed: Material Design Title Large (22px)
  h5: getAdaptiveFontSize(18, 'h5'),
  h6: getAdaptiveFontSize(16, 'h6'),
  body: getAdaptiveFontSize(16, 'body'),
  caption: getAdaptiveFontSize(12, 'caption'),
  button: getAdaptiveFontSize(14, 'button'), // Material Design Label Large (14px)

  // Line heights (Material Design ratios)
  lineHeight: {
    h1: getAdaptiveFontSize(32, 'h1') * 1.2,
    h2: getAdaptiveFontSize(28, 'h2') * 1.2,
    h3: getAdaptiveFontSize(24, 'h3') * 1.2,
    h4: getAdaptiveFontSize(22, 'h4') * 1.2, // Updated to match h4
    h5: getAdaptiveFontSize(18, 'h5') * 1.2,
    h6: getAdaptiveFontSize(16, 'h6') * 1.2,
    body: getAdaptiveFontSize(16, 'body') * 1.4,
    caption: getAdaptiveFontSize(12, 'caption') * 1.2,
    button: getAdaptiveFontSize(14, 'button') * 1.2, // Material Design button line height
  },

  // Font weights (Material Design)
  fontWeight: {
    h1: 'bold' as const,
    h2: 'bold' as const,
    h3: '600' as const,
    h4: '600' as const, // Updated: Material Design Title Large weight
    h5: '500' as const,
    h6: '500' as const,
    body: 'normal' as const,
    caption: 'normal' as const,
    button: '600' as const, // Material Design button weight
  },

  // Letter spacing (Material Design)
  letterSpacing: {
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    h5: 0,
    h6: 0,
    body: 0,
    caption: 0,
    button: 0.5, // Material Design button letter spacing
  },
};

// 12. SPACING SYSTEM (Material Design 8dp Grid)
export const spacing = {
  xs: getResponsiveSpacing(4),
  sm: getResponsiveSpacing(8),
  md: getResponsiveSpacing(16),
  lg: getResponsiveSpacing(24),
  xl: getResponsiveSpacing(32),
  xxl: getResponsiveSpacing(48),
};

// 13. COMPONENT STYLES (Material Design Official)
export const components = {
  card: {
    backgroundColor: Colors.surface.primary,
    ...getComponentStyle('card'),
  },

  button: {
    primary: {
      backgroundColor: Colors.primary,
      ...getComponentStyle('button'),
      shadowColor: Colors.overlay.primary,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },

    secondary: {
      backgroundColor: Colors.surface.secondary,
      ...getComponentStyle('button'),
      borderWidth: 1,
      borderColor: Colors.border.primary,
    },
  },

  input: {
    backgroundColor: Colors.surface.secondary,
    ...getComponentStyle('input'),
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
};

// 14. LAYOUT SYSTEM (Material Design Official)
export const layout = {
  screen: {
    paddingHorizontal: getResponsiveSpacing(16),
    paddingVertical: getResponsiveSpacing(16),
  },

  section: {
    paddingHorizontal: getResponsiveSpacing(16),
    paddingVertical: getResponsiveSpacing(24),
  },

  content: {
    paddingHorizontal: getResponsiveSpacing(16),
    paddingVertical: getResponsiveSpacing(8),
  },

  bottomButton: {
    paddingHorizontal: getResponsiveSpacing(16),
    paddingVertical: getResponsiveSpacing(16),
    paddingBottom: getResponsiveSpacing(24),
  },
};

// 15. SAFE AREA SYSTEM (Apple HIG)
export const safeArea = {
  top: Platform.OS === 'ios' ? 44 : 24,
  bottom: Platform.OS === 'ios' ? 34 : 24,
  horizontal: getResponsiveSpacing(16),
};

// 16. RESPONSIVE LAYOUT LOGIC
export const responsiveLayout = {
  shouldUseScroll: shouldUseScroll(),
  getLayoutType: getLayoutType(),
  getDensity: getDensity(),
  getGridColumns: getGridColumns(),
};

// 17. ACCESSIBILITY SYSTEM (Apple HIG)
export const accessibility = {
  isAccessibilityEnabled: false,
  getAccessibleFontSize: (baseSize: number) => getAdaptiveFontSize(baseSize, 'body'),
  getAccessibleTouchTarget: (baseSize: number = 44) => getTouchTargetSize(baseSize),
};

// 18. DEVICE INFO
export const deviceInfo = {
  ...responsive.device,
  isTablet: getDeviceType() === 'expanded' || getDeviceType() === 'large',
  isLargePhone: getDeviceType() === 'medium',
  isSmallPhone: getDeviceType() === 'compact',
};

// 19. DENSITY MANAGEMENT (Material Design Official)
export const density = {
  compact: {
    padding: (size: number) => getResponsiveSpacing(size * 0.8),
    margin: (size: number) => getResponsiveSpacing(size * 0.8),
    spacing: (size: number) => getResponsiveSpacing(size * 0.8),
  },
  default: {
    padding: (size: number) => getResponsiveSpacing(size),
    margin: (size: number) => getResponsiveSpacing(size),
    spacing: (size: number) => getResponsiveSpacing(size),
  },
  comfortable: {
    padding: (size: number) => getResponsiveSpacing(size * 1.2),
    margin: (size: number) => getResponsiveSpacing(size * 1.2),
    spacing: (size: number) => getResponsiveSpacing(size * 1.2),
  },
};

// 20. TEXT CONSTRAINTS (Material Design)
export const textConstraints = {
  flexible: {
    flexShrink: 1,
    flexWrap: 'wrap' as const,
  },
  fixed: {
    flexShrink: 0,
    flexWrap: 'nowrap' as const,
  },
  adaptive: {
    flexShrink: 1,
    flexWrap: 'wrap' as const,
    numberOfLines: undefined,
  },
};

// 21. COMPONENT SWAPPING (Material Design Official)
export const componentSwapping = {
  navigation: {
    compact: 'bottom-tabs',
    medium: 'bottom-tabs',
    expanded: 'navigation-rail',
    large: 'navigation-drawer',
  },
  dialog: {
    compact: 'full-screen',
    medium: 'modal',
    expanded: 'dialog',
    large: 'dialog',
  },
  layout: {
    compact: 'single-column',
    medium: 'single-column',
    expanded: 'two-column',
    large: 'three-column',
  },
};

// 22. PLATFORM UTILITIES
export const platformUtils = {
  shadow: Platform.OS === 'ios' ? {
    shadowColor: Colors.overlay.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  } : {
    elevation: 2,
  },

  statusBar: {
    height: Platform.OS === 'ios' ? 44 : 24,
  },

  select: Platform.select,

  device: {
    isIOS: Platform.OS === 'ios',
    isAndroid: Platform.OS === 'android',
  },
};

// 23. MAIN HOOK
export const useResponsive = () => {
  return {
    responsive,
    spacing,
    typography,
    components,
    layout,
    safeArea,
    responsiveLayout,
    accessibility,
    deviceInfo,
    platformUtils,
    density,
    textConstraints,
    componentSwapping,
    scale,
    verticalScale,
    moderateScale,
    moderateVerticalScale,
    s: scale,
    vs: verticalScale,
    ms: moderateScale,
    mvs: moderateVerticalScale,
  };
};

export default useResponsive;


