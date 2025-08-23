import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaWrapper } from '../components/SafeAreaWrapper';
import { useResponsive } from '../hooks/useResponsive';
import { useHaptics } from '../hooks/useHaptics';
import { useErrorStates } from '../hooks/error-states';
import { Colors } from '../constants/Colors';

export default function GetStartedScreen() {
    const {
        typography,
        spacing,
        components,
        textConstraints,
    } = useResponsive();

    const {
        triggerHaptic,
        triggerHapticPattern,
        checkIOSTapticConditions,
        checkAndroidVibrationPermission,
        form,
        navigation,
        gesture,
        game,
        notification,
        accessibility,
        custom,
        isSupported: isHapticsSupported,
    } = useHaptics();

    const {
        showValidationError,
        showNetworkError,
        showAuthError,
        showSystemError,
        showUserInputError,
        ErrorSeverity,
        ErrorCategory,
    } = useErrorStates();

    const handleGetStarted = () => {
        form.buttonSuccess();
        router.push('/(auth)/auth-options');
    };

    return (
        <SafeAreaWrapper
            className="flex-1"
            edges={['top', 'bottom']}
            style={{
                backgroundColor: Colors.background.primary,
            }}
        >
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: spacing.lg }}>
                {/* Main Content */}
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: spacing.xl,
                }}>
                    <Text style={{
                        fontSize: typography.h1,
                        fontWeight: typography.fontWeight.h1,
                        color: Colors.text.primary,
                        textAlign: 'center',
                        lineHeight: typography.lineHeight.h1,
                        marginBottom: spacing.xl,
                        ...textConstraints.flexible,
                    }}>
                        Get Started Screen
                    </Text>

                    <TouchableOpacity
                        onPress={handleGetStarted}
                        style={{
                            ...components.button.primary,
                            paddingVertical: spacing.lg,
                            paddingHorizontal: spacing.xl,
                            minWidth: 200,
                            marginBottom: spacing.lg,
                        }}
                    >
                        <Text style={{
                            color: Colors.text.inverse,
                            fontSize: typography.button,
                            fontWeight: typography.fontWeight.button,
                            lineHeight: typography.lineHeight.button,
                            letterSpacing: typography.letterSpacing.button,
                        }}>
                            Başla
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* HAPTICS TEST BÖLÜMÜ */}
                <View style={{ ...components.card, padding: spacing.md, marginBottom: spacing.md }}>
                    <Text style={{
                        fontSize: typography.h4,
                        fontWeight: typography.fontWeight.h4,
                        color: Colors.text.primary,
                        marginBottom: spacing.sm,
                    }}>
                        📳 Haptics Test ({isHapticsSupported ? 'Destekleniyor' : 'Desteklenmiyor'})
                    </Text>

                    <View style={{ gap: spacing.sm }}>
                        <TouchableOpacity
                            onPress={() => form.buttonSuccess()}
                            style={{
                                backgroundColor: Colors.primary,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                ✅ Başarı Haptics
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => form.buttonError()}
                            style={{
                                backgroundColor: Colors.error,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                ❌ Hata Haptics
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => game.reward()}
                            style={{
                                backgroundColor: Colors.warning,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                🎁 Ödül Haptics
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => notification.newMessage()}
                            style={{
                                backgroundColor: Colors.info,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                📩 Bildirim Haptics
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => game.explosion()}
                            style={{
                                backgroundColor: Colors.secondary,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                💥 Patlama Haptics
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={async () => {
                                const tapticAvailable = await checkIOSTapticConditions();
                                const vibrationAvailable = await checkAndroidVibrationPermission();
                                console.log('iOS Taptic:', tapticAvailable);
                                console.log('Android Vibration:', vibrationAvailable);
                            }}
                            style={{
                                backgroundColor: Colors.info,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                🔍 Platform Kontrol
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* ERROR STATES TEST BÖLÜMÜ */}
                <View style={{ ...components.card, padding: spacing.md }}>
                    <Text style={{
                        fontSize: typography.h4,
                        fontWeight: typography.fontWeight.h4,
                        color: Colors.text.primary,
                        marginBottom: spacing.sm,
                    }}>
                        🚨 Error States Test ({Platform.OS})
                    </Text>

                    <View style={{ gap: spacing.sm }}>
                        <TouchableOpacity
                            onPress={() => showValidationError('email', 'Geçerli bir email adresi girin')}
                            style={{
                                backgroundColor: Colors.warning,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                ⚠️ Validation Error
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showNetworkError('Bağlantı hatası oluştu', () => console.log('Retry clicked'))}
                            style={{
                                backgroundColor: Colors.error,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                🌐 Network Error
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showAuthError('Kullanıcı adı veya şifre hatalı')}
                            style={{
                                backgroundColor: Colors.error,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                🔐 Auth Error
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showSystemError('Beklenmeyen bir hata oluştu')}
                            style={{
                                backgroundColor: Colors.error,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                💥 System Error
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => showUserInputError('Lütfen tüm alanları doldurun')}
                            style={{
                                backgroundColor: Colors.warning,
                                padding: spacing.sm,
                                borderRadius: spacing.xs,
                            }}
                        >
                            <Text style={{ color: Colors.text.inverse, textAlign: 'center' }}>
                                📝 User Input Error
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaWrapper>
    );
}
