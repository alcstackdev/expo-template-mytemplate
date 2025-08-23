import React from 'react';
import { View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaWrapper } from '../../../components/SafeAreaWrapper';
import { useResponsive } from '../../../hooks/useResponsive';
import { Colors } from '../../../constants/Colors';

export default function RateUsScreen() {
  const { typography, spacing, components, textConstraints } = useResponsive();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Uygulamayı Değerlendir',
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
          <View style={{
            ...components.card,
            padding: spacing.xl,
            alignItems: 'center',
            maxWidth: 400,
          }}>
            <Text
              style={{
                fontSize: typography.h1,
                fontWeight: 'bold',
                color: Colors.text.primary,
                textAlign: 'center',
                marginBottom: spacing.md,
                ...textConstraints.flexible,
              }}
            >
              Uygulamayı Değerlendir
            </Text>
            <Text
              style={{
                fontSize: typography.body,
                color: Colors.text.secondary,
                textAlign: 'center',
                lineHeight: typography.lineHeight.body,
                ...textConstraints.flexible,
              }}
            >
              Uygulamamızı beğendiyseniz, App Store'da değerlendirmenizi bekliyoruz.
            </Text>
          </View>
        </View>
      </SafeAreaWrapper>
    </>
  );
}
