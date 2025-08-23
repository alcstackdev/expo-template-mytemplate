import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Stack } from 'expo-router';
import { SafeAreaWrapper } from '../../components/SafeAreaWrapper';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

export default function AuthOptionsScreen() {
    const { typography, spacing, components, textConstraints } = useResponsive();

    const handleRegister = () => {
        router.push('/(auth)/register');
    };

    const handleLogin = () => {
        router.push('/(auth)/login');
    };

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Giriş Seçenekleri',
                    headerStyle: {
                        backgroundColor: Colors.background.primary,
                    },
                    headerTitleStyle: {
                        color: Colors.text.primary,
                    },
                }}
            />
            <SafeAreaWrapper
                className="flex-1"
                edges={['bottom']}
                style={{
                    backgroundColor: Colors.background.primary,
                }}
            >
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: spacing.lg,
                }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: typography.h1,
                            color: Colors.text.primary,
                            marginBottom: spacing.xl,
                            ...textConstraints.flexible,
                        }}
                    >
                        Giriş Seçenekleri
                    </Text>

                    <View style={{ gap: spacing.md, width: '100%', maxWidth: 300 }}>
                        <TouchableOpacity
                            onPress={handleRegister}
                            style={{
                                ...components.button.primary,
                                paddingVertical: spacing.lg,
                                paddingHorizontal: spacing.xl,
                            }}
                        >
                            <Text style={{
                                color: Colors.text.inverse,
                                fontSize: typography.button,
                                fontWeight: typography.fontWeight.button,
                                lineHeight: typography.lineHeight.button,
                                letterSpacing: typography.letterSpacing.button,
                                textAlign: 'center',
                            }}>
                                Kayıt Ol
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleLogin}
                            style={{
                                ...components.button.secondary,
                                paddingVertical: spacing.lg,
                                paddingHorizontal: spacing.xl,
                            }}
                        >
                            <Text style={{
                                color: Colors.text.primary,
                                fontSize: typography.button,
                                fontWeight: typography.fontWeight.button,
                                lineHeight: typography.lineHeight.button,
                                letterSpacing: typography.letterSpacing.button,
                                textAlign: 'center',
                            }}>
                                Giriş Yap
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaWrapper>
        </>
    );
}
