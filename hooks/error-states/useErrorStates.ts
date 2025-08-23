import { Platform, Alert } from 'react-native';
import { useHaptics } from '../useHaptics';

// Error severity levels
export enum ErrorSeverity {
  LOW = 'low',           // Warning, info
  MEDIUM = 'medium',     // Validation, form errors
  HIGH = 'high',         // Network, auth errors
  CRITICAL = 'critical', // System, data loss errors
}

// Error categories
export enum ErrorCategory {
  VALIDATION = 'validation',     // Form validation errors
  NETWORK = 'network',           // Connection, API errors
  AUTHENTICATION = 'auth',       // Login, permission errors
  SYSTEM = 'system',             // App, device errors
  USER_INPUT = 'user_input',     // User action errors
  DATA = 'data',                 // Data processing errors
}

// Error action types
export enum ErrorAction {
  RETRY = 'retry',
  CANCEL = 'cancel',
  OK = 'ok',
  SETTINGS = 'settings',
  HELP = 'help',
  BACK = 'back',
}

// Error action interface
export interface ErrorActionItem {
  text: string;
  action: ErrorAction;
  onPress?: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

// Error state interface
export interface ErrorState {
  id: string;
  title: string;
  message: string;
  severity: ErrorSeverity;
  category: ErrorCategory;
  actions?: ErrorActionItem[];
  autoDismiss?: boolean;
  dismissTimeout?: number;
  showIcon?: boolean;
  showHaptics?: boolean;
}

// Platform-specific error UI types
export enum ErrorUIType {
  // iOS specific
  ALERT = 'alert',           // iOS Alert
  INLINE = 'inline',         // Inline text

  // Android specific
  DIALOG = 'dialog',         // Material Dialog
  SNACKBAR = 'snackbar',     // Material Snackbar
  BANNER = 'banner',         // Material Banner

  // Cross-platform
  MODAL = 'modal',           // Custom modal
  TOAST = 'toast',           // Toast notification
}

// Error UI mapping based on platform and severity
const ERROR_UI_MAPPING = {
  [Platform.OS]: {
    [ErrorSeverity.LOW]: {
      [ErrorCategory.VALIDATION]: ErrorUIType.INLINE,
      [ErrorCategory.USER_INPUT]: ErrorUIType.INLINE,
      [ErrorCategory.NETWORK]: ErrorUIType.SNACKBAR,
      [ErrorCategory.AUTHENTICATION]: ErrorUIType.INLINE,
      [ErrorCategory.SYSTEM]: ErrorUIType.SNACKBAR,
      [ErrorCategory.DATA]: ErrorUIType.INLINE,
    },
    [ErrorSeverity.MEDIUM]: {
      [ErrorCategory.VALIDATION]: ErrorUIType.INLINE,
      [ErrorCategory.USER_INPUT]: ErrorUIType.INLINE,
      [ErrorCategory.NETWORK]: ErrorUIType.SNACKBAR,
      [ErrorCategory.AUTHENTICATION]: ErrorUIType.INLINE,
      [ErrorCategory.SYSTEM]: ErrorUIType.SNACKBAR,
      [ErrorCategory.DATA]: ErrorUIType.INLINE,
    },
    [ErrorSeverity.HIGH]: {
      [ErrorCategory.VALIDATION]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.USER_INPUT]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.NETWORK]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.AUTHENTICATION]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.SYSTEM]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.DATA]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
    },
    [ErrorSeverity.CRITICAL]: {
      [ErrorCategory.VALIDATION]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.USER_INPUT]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.NETWORK]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.AUTHENTICATION]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.SYSTEM]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
      [ErrorCategory.DATA]: Platform.OS === 'ios' ? ErrorUIType.ALERT : ErrorUIType.DIALOG,
    },
  },
};

// Error states hook
export const useErrorStates = () => {
  const { form, notification } = useHaptics();

  // Get appropriate UI type for error
  const getErrorUIType = (error: ErrorState): ErrorUIType => {
    const platformMapping = ERROR_UI_MAPPING[Platform.OS];
    const severityMapping = platformMapping[error.severity];
    return severityMapping[error.category] || ErrorUIType.INLINE;
  };

  // Trigger appropriate haptic feedback for error
  const triggerErrorHaptics = (error: ErrorState) => {
    if (!error.showHaptics) return;

    switch (error.severity) {
      case ErrorSeverity.LOW:
        form.buttonPress();
        break;
      case ErrorSeverity.MEDIUM:
        form.fieldInvalid();
        break;
      case ErrorSeverity.HIGH:
        form.buttonError();
        break;
      case ErrorSeverity.CRITICAL:
        notification.criticalAlert();
        break;
    }
  };

  // Show error based on platform and UI type
  const showError = (error: ErrorState) => {
    const uiType = getErrorUIType(error);
    triggerErrorHaptics(error);

    switch (uiType) {
      case ErrorUIType.ALERT:
        showIOSAlert(error);
        break;
      case ErrorUIType.DIALOG:
        showAndroidDialog(error);
        break;
      case ErrorUIType.SNACKBAR:
        showSnackbar(error);
        break;
      case ErrorUIType.INLINE:
        // Return error state for inline display
        return error;
      case ErrorUIType.MODAL:
        showModal(error);
        break;
      case ErrorUIType.TOAST:
        showToast(error);
        break;
    }
  };

  // iOS Alert implementation
  const showIOSAlert = (error: ErrorState) => {
    const buttons = error.actions?.map(action => ({
      text: action.text,
      onPress: action.onPress,
      style: action.style || 'default',
    })) || [{ text: 'Tamam', style: 'default' }];

    Alert.alert(error.title, error.message, buttons);
  };

  // Android Dialog implementation (placeholder)
  const showAndroidDialog = (error: ErrorState) => {
    // This would integrate with a Material Dialog component
    console.log('Android Dialog:', error);
    // Implementation would depend on the UI library being used
  };

  // Snackbar implementation (placeholder)
  const showSnackbar = (error: ErrorState) => {
    // This would integrate with a Snackbar component
    console.log('Snackbar:', error);
    // Implementation would depend on the UI library being used
  };

  // Modal implementation (placeholder)
  const showModal = (error: ErrorState) => {
    // This would integrate with a custom Modal component
    console.log('Modal:', error);
    // Implementation would depend on the UI library being used
  };

  // Toast implementation (placeholder)
  const showToast = (error: ErrorState) => {
    // This would integrate with a Toast component
    console.log('Toast:', error);
    // Implementation would depend on the UI library being used
  };

  // Predefined error creators for common scenarios
  const createValidationError = (field: string, message: string): ErrorState => ({
    id: `validation_${field}_${Date.now()}`,
    title: 'Doğrulama Hatası',
    message,
    severity: ErrorSeverity.MEDIUM,
    category: ErrorCategory.VALIDATION,
    showHaptics: true,
    showIcon: true,
  });

  const createNetworkError = (message: string, retryAction?: () => void): ErrorState => ({
    id: `network_${Date.now()}`,
    title: 'Bağlantı Hatası',
    message,
    severity: ErrorSeverity.HIGH,
    category: ErrorCategory.NETWORK,
    actions: retryAction ? [
      { text: 'İptal', action: ErrorAction.CANCEL, style: 'cancel' },
      { text: 'Tekrar Dene', action: ErrorAction.RETRY, onPress: retryAction }
    ] : undefined,
    showHaptics: true,
    showIcon: true,
  });

  const createAuthError = (message: string): ErrorState => ({
    id: `auth_${Date.now()}`,
    title: 'Kimlik Doğrulama Hatası',
    message,
    severity: ErrorSeverity.HIGH,
    category: ErrorCategory.AUTHENTICATION,
    showHaptics: true,
    showIcon: true,
  });

  const createSystemError = (message: string): ErrorState => ({
    id: `system_${Date.now()}`,
    title: 'Sistem Hatası',
    message,
    severity: ErrorSeverity.CRITICAL,
    category: ErrorCategory.SYSTEM,
    showHaptics: true,
    showIcon: true,
  });

  const createUserInputError = (message: string): ErrorState => ({
    id: `user_input_${Date.now()}`,
    title: 'Giriş Hatası',
    message,
    severity: ErrorSeverity.MEDIUM,
    category: ErrorCategory.USER_INPUT,
    showHaptics: true,
    showIcon: false,
  });

  // Quick error methods for common use cases
  const showValidationError = (field: string, message: string) => {
    const error = createValidationError(field, message);
    return showError(error);
  };

  const showNetworkError = (message: string, retryAction?: () => void) => {
    const error = createNetworkError(message, retryAction);
    showError(error);
  };

  const showAuthError = (message: string) => {
    const error = createAuthError(message);
    showError(error);
  };

  const showSystemError = (message: string) => {
    const error = createSystemError(message);
    showError(error);
  };

  const showUserInputError = (message: string) => {
    const error = createUserInputError(message);
    return showError(error);
  };

  return {
    // Core functions
    showError,
    getErrorUIType,
    triggerErrorHaptics,

    // Error creators
    createValidationError,
    createNetworkError,
    createAuthError,
    createSystemError,
    createUserInputError,

    // Quick methods
    showValidationError,
    showNetworkError,
    showAuthError,
    showSystemError,
    showUserInputError,

    // Constants
    ErrorSeverity,
    ErrorCategory,
    ErrorAction,
    ErrorUIType,
  };
};
