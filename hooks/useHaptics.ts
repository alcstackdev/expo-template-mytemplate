import { Platform } from 'react-native';
import * as Haptics from 'expo-haptics';
import * as Battery from 'expo-battery';

// Haptic feedback types based on Material Design and Apple HIG
export enum HapticType {
  // Success & Confirmation
  SUCCESS = 'success',
  COMPLETION = 'completion',
  UNLOCK = 'unlock',

  // Error & Warning
  ERROR = 'error',
  WARNING = 'warning',
  UNAUTHORIZED = 'unauthorized',

  // Interaction Feedback
  LIGHT = 'light',
  MEDIUM = 'medium',
  HEAVY = 'heavy',
  SELECTION = 'selection',

  // Navigation & Transitions
  NAVIGATION = 'navigation',
  TRANSITION = 'transition',

  // Form & Input
  KEYBOARD = 'keyboard',
  BUTTON = 'button',
  TOGGLE = 'toggle',

  // Gestures
  SWIPE = 'swipe',
  DRAG_START = 'drag_start',
  DRAG_END = 'drag_end',
  PINCH = 'pinch',

  // Gaming & Entertainment
  IMPACT = 'impact',
  EXPLOSION = 'explosion',
  REWARD = 'reward',

  // Notifications
  NOTIFICATION = 'notification',
  ALARM = 'alarm',
  MESSAGE = 'message',
}

// Haptic intensity levels
export enum HapticIntensity {
  LIGHT = 'light',
  MEDIUM = 'medium',
  HEAVY = 'heavy',
}

// Haptic patterns for different scenarios
export const HAPTIC_PATTERNS = {
  [HapticType.SUCCESS]: {
    pattern: [HapticType.LIGHT, HapticType.LIGHT],
    delay: 100,
    description: 'Form submission, successful completion'
  },
  [HapticType.COMPLETION]: {
    pattern: [HapticType.MEDIUM, HapticType.LIGHT],
    delay: 150,
    description: 'Task completion, achievement unlocked'
  },
  [HapticType.UNLOCK]: {
    pattern: [HapticType.HEAVY, HapticType.LIGHT],
    delay: 200,
    description: 'Authentication success, lock opened'
  },
  [HapticType.ERROR]: {
    pattern: [HapticType.HEAVY, HapticType.HEAVY],
    delay: 100,
    description: 'Wrong password, critical error'
  },
  [HapticType.WARNING]: {
    pattern: [HapticType.MEDIUM, HapticType.MEDIUM],
    delay: 120,
    description: 'Connection lost, warning message'
  },
  [HapticType.UNAUTHORIZED]: {
    pattern: [HapticType.HEAVY, HapticType.HEAVY, HapticType.HEAVY],
    delay: 80,
    description: 'Unauthorized access attempt'
  },
  [HapticType.IMPACT]: {
    pattern: [HapticType.HEAVY],
    delay: 0,
    description: 'Game collision, impact effect'
  },
  [HapticType.EXPLOSION]: {
    pattern: [HapticType.HEAVY, HapticType.MEDIUM, HapticType.LIGHT],
    delay: 50,
    description: 'Explosion effect, dramatic moment'
  },
  [HapticType.REWARD]: {
    pattern: [HapticType.LIGHT, HapticType.MEDIUM, HapticType.HEAVY],
    delay: 100,
    description: 'Reward earned, celebration'
  },
  [HapticType.NOTIFICATION]: {
    pattern: [HapticType.LIGHT, HapticType.LIGHT],
    delay: 200,
    description: 'New message, notification'
  },
  [HapticType.ALARM]: {
    pattern: [HapticType.HEAVY, HapticType.HEAVY, HapticType.HEAVY],
    delay: 300,
    description: 'Alarm, urgent reminder'
  },
};

// Haptic feedback hook
export const useHaptics = () => {
  // Check if haptics are supported (iOS and Android only)
  const isHapticsSupported = Platform.OS === 'ios' || Platform.OS === 'android';

  // Check iOS Taptic Engine conditions
  const checkIOSTapticConditions = async (): Promise<boolean> => {
    if (Platform.OS !== 'ios') return true;

    try {
      // Check Low Power Mode
      const batteryLevel = await Battery.getBatteryLevelAsync();
      const isLowPowerModeEnabled = await Battery.isLowPowerModeEnabledAsync();

      if (isLowPowerModeEnabled) {
        console.warn('Haptics disabled: Low Power Mode is enabled');
        return false;
      }

      // Note: Camera and dictation status would require additional permissions
      // These are typically handled by the system automatically

      return true;
    } catch (error) {
      console.warn('Failed to check iOS Taptic conditions:', error);
      return true; // Default to enabled if check fails
    }
  };

  // Check Android vibration permission (expo-haptics handles this automatically)
  const checkAndroidVibrationPermission = async (): Promise<boolean> => {
    // expo-haptics automatically adds VIBRATE permission to AndroidManifest.xml
    // No manual permission check needed
    return Platform.OS === 'android';
  };

  // Request Android vibration permission (not needed - handled automatically)
  const requestAndroidVibrationPermission = async (): Promise<boolean> => {
    // expo-haptics handles this automatically
    return Platform.OS === 'android';
  };

  // Trigger single haptic feedback
  const triggerHaptic = async (type: HapticType) => {
    if (!isHapticsSupported) return;

    try {
      // Check platform-specific conditions
      if (Platform.OS === 'ios') {
        const tapticAvailable = await checkIOSTapticConditions();
        if (!tapticAvailable) {
          console.warn('Haptics disabled: iOS Taptic Engine conditions not met');
          return;
        }
      }

      switch (type) {
        case HapticType.LIGHT:
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          break;
        case HapticType.MEDIUM:
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          break;
        case HapticType.HEAVY:
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          break;
        case HapticType.SELECTION:
          await Haptics.selectionAsync();
          break;
        case HapticType.SUCCESS:
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
          break;
        case HapticType.ERROR:
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
          break;
        case HapticType.WARNING:
          await Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          break;
        default:
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
    } catch (error) {
      console.warn('Haptic feedback failed:', error);
    }
  };

  // Trigger haptic pattern
  const triggerHapticPattern = async (type: HapticType) => {
    if (!isHapticsSupported) return;

    const pattern = HAPTIC_PATTERNS[type as keyof typeof HAPTIC_PATTERNS];
    if (!pattern) {
      await triggerHaptic(type);
      return;
    }

    try {
      for (let i = 0; i < pattern.pattern.length; i++) {
        await triggerHaptic(pattern.pattern[i]);
        if (i < pattern.pattern.length - 1) {
          await new Promise(resolve => setTimeout(resolve, pattern.delay));
        }
      }
    } catch (error) {
      console.warn('Haptic pattern failed:', error);
    }
  };

  // Form-specific haptics
  const formHaptics = {
    // Button interactions
    buttonPress: () => triggerHaptic(HapticType.LIGHT),
    buttonSuccess: () => triggerHapticPattern(HapticType.SUCCESS),
    buttonError: () => triggerHapticPattern(HapticType.ERROR),

    // Form validation
    fieldValid: () => triggerHaptic(HapticType.LIGHT),
    fieldInvalid: () => triggerHaptic(HapticType.MEDIUM),
    formSubmit: () => triggerHapticPattern(HapticType.SUCCESS),
    formError: () => triggerHapticPattern(HapticType.ERROR),

    // Toggle switches
    toggleOn: () => triggerHaptic(HapticType.MEDIUM),
    toggleOff: () => triggerHaptic(HapticType.LIGHT),
  };

  // Navigation haptics
  const navigationHaptics = {
    // Page transitions
    pageEnter: () => triggerHaptic(HapticType.LIGHT),
    pageExit: () => triggerHaptic(HapticType.LIGHT),

    // Tab switching
    tabSwitch: () => triggerHaptic(HapticType.SELECTION),

    // Modal interactions
    modalOpen: () => triggerHaptic(HapticType.MEDIUM),
    modalClose: () => triggerHaptic(HapticType.LIGHT),

    // Back navigation
    goBack: () => triggerHaptic(HapticType.LIGHT),
  };

  // Gesture haptics
  const gestureHaptics = {
    // Swipe gestures
    swipeStart: () => triggerHaptic(HapticType.LIGHT),
    swipeEnd: () => triggerHaptic(HapticType.MEDIUM),

    // Drag and drop
    dragStart: () => triggerHaptic(HapticType.MEDIUM),
    dragEnd: () => triggerHapticPattern(HapticType.COMPLETION),

    // Pinch gestures
    pinchStart: () => triggerHaptic(HapticType.LIGHT),
    pinchEnd: () => triggerHaptic(HapticType.MEDIUM),

    // Long press
    longPress: () => triggerHaptic(HapticType.HEAVY),
  };

  // Game haptics
  const gameHaptics = {
    // Impact effects
    collision: () => triggerHaptic(HapticType.HEAVY),
    explosion: () => triggerHapticPattern(HapticType.EXPLOSION),

    // Rewards
    reward: () => triggerHapticPattern(HapticType.REWARD),
    achievement: () => triggerHapticPattern(HapticType.COMPLETION),

    // Game states
    gameStart: () => triggerHapticPattern(HapticType.SUCCESS),
    gameOver: () => triggerHapticPattern(HapticType.ERROR),
    levelComplete: () => triggerHapticPattern(HapticType.COMPLETION),
  };

  // Notification haptics
  const notificationHaptics = {
    // Message notifications
    newMessage: () => triggerHapticPattern(HapticType.NOTIFICATION),
    messageReceived: () => triggerHaptic(HapticType.LIGHT),

    // Alarms and reminders
    alarm: () => triggerHapticPattern(HapticType.ALARM),
    reminder: () => triggerHaptic(HapticType.MEDIUM),

    // System notifications
    systemNotification: () => triggerHaptic(HapticType.LIGHT),
    criticalAlert: () => triggerHapticPattern(HapticType.ERROR),
  };

  // Accessibility haptics
  const accessibilityHaptics = {
    // Screen reader support
    focusChange: () => triggerHaptic(HapticType.LIGHT),
    elementSelected: () => triggerHaptic(HapticType.SELECTION),

    // VoiceOver/TalkBack
    voiceOverFocus: () => triggerHaptic(HapticType.LIGHT),
    voiceOverAction: () => triggerHaptic(HapticType.MEDIUM),
  };

  // Custom haptic patterns
  const customHaptics = {
    // Create custom pattern
    pattern: (types: HapticType[], delays: number[] = []) => {
      return async () => {
        if (!isHapticsSupported) return;

        try {
          for (let i = 0; i < types.length; i++) {
            await triggerHaptic(types[i]);
            if (i < types.length - 1 && delays[i]) {
              await new Promise(resolve => setTimeout(resolve, delays[i]));
            }
          }
        } catch (error) {
          console.warn('Custom haptic pattern failed:', error);
        }
      };
    },

    // Intensity-based feedback
    intensity: (intensity: HapticIntensity) => {
      return async () => {
        switch (intensity) {
          case HapticIntensity.LIGHT:
            await triggerHaptic(HapticType.LIGHT);
            break;
          case HapticIntensity.MEDIUM:
            await triggerHaptic(HapticType.MEDIUM);
            break;
          case HapticIntensity.HEAVY:
            await triggerHaptic(HapticType.HEAVY);
            break;
        }
      };
    },
  };

  return {
    // Core functions
    triggerHaptic,
    triggerHapticPattern,

    // Platform-specific checks
    checkIOSTapticConditions,
    checkAndroidVibrationPermission,
    requestAndroidVibrationPermission,

    // Specialized haptic groups
    form: formHaptics,
    navigation: navigationHaptics,
    gesture: gestureHaptics,
    game: gameHaptics,
    notification: notificationHaptics,
    accessibility: accessibilityHaptics,
    custom: customHaptics,

    // Utility
    isSupported: isHapticsSupported,
    patterns: HAPTIC_PATTERNS,
  };
};

// Haptic feedback constants for easy access
export const HAPTICS = {
  // Success feedback
  SUCCESS: HapticType.SUCCESS,
  COMPLETION: HapticType.COMPLETION,
  UNLOCK: HapticType.UNLOCK,

  // Error feedback
  ERROR: HapticType.ERROR,
  WARNING: HapticType.WARNING,
  UNAUTHORIZED: HapticType.UNAUTHORIZED,

  // Interaction feedback
  LIGHT: HapticType.LIGHT,
  MEDIUM: HapticType.MEDIUM,
  HEAVY: HapticType.HEAVY,
  SELECTION: HapticType.SELECTION,

  // Game feedback
  IMPACT: HapticType.IMPACT,
  EXPLOSION: HapticType.EXPLOSION,
  REWARD: HapticType.REWARD,

  // Notification feedback
  NOTIFICATION: HapticType.NOTIFICATION,
  ALARM: HapticType.ALARM,
  MESSAGE: HapticType.MESSAGE,
};

// Usage examples and best practices
export const HAPTIC_GUIDELINES = {
  // When to use haptics
  RECOMMENDED: [
    'Button presses and form submissions',
    'Success/error feedback',
    'Navigation transitions',
    'Game interactions',
    'Critical notifications',
    'Accessibility features',
  ],

  // When to avoid haptics
  AVOID: [
    'Continuous background events',
    'Every single tap (can be annoying)',
    'Battery-intensive scenarios',
    'Quiet environments',
    'Rapid successive interactions',
  ],

  // Best practices
  BEST_PRACTICES: [
    'Use light haptics for common interactions',
    'Reserve heavy haptics for important events',
    'Consider user preferences and accessibility',
    'Test on different devices and platforms',
    'Provide haptic feedback consistently',
    'Don\'t rely solely on haptics for feedback',
  ],
};
