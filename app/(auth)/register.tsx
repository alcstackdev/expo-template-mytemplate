import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Stack } from 'expo-router';
import { SafeAreaWrapper } from '../../components/SafeAreaWrapper';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

export default function RegisterScreen() {
  const { typography, spacing, components, textConstraints } = useResponsive();

  const handleLogin = () => {
    router.push('/(auth)/login');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Kayıt Ol',
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
            Kayıt Ol
          </Text>

          <TouchableOpacity
            onPress={handleLogin}
            style={{
              ...components.button.primary,
              paddingVertical: spacing.lg,
              paddingHorizontal: spacing.xl,
              minWidth: 200,
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
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaWrapper>
    </>
  );
}
