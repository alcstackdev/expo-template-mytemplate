import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaWrapper } from '../../components/SafeAreaWrapper';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

export default function TabOneScreen() {
  const { typography, textConstraints, deviceInfo } = useResponsive();

  // Responsive test bilgileri
  console.log('📱 Responsive Test:', {
    isTablet: deviceInfo.isTablet,
    width: deviceInfo.width,
    height: deviceInfo.height,
  });

  return (
    <SafeAreaWrapper
      className="justify-center items-center px-6"
      edges={[]}
      style={{
        backgroundColor: Colors.background.primary,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: typography.h1,
          color: Colors.text.primary,
          ...textConstraints.flexible, // Text expansion handling
        }}
      >
        Ana Sayfa
      </Text>

      {/* Responsive Test Bilgileri */}
      <View className="mt-8 p-4 bg-gray-100 rounded-lg">
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 8,
            fontSize: typography.body,
            color: Colors.text.secondary,
            ...textConstraints.flexible, // Text expansion handling
          }}
        >
          📱 Responsive Test
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: typography.caption,
            color: Colors.text.secondary,
            ...textConstraints.flexible, // Text expansion handling
          }}
        >
          Tablet: {deviceInfo.isTablet ? '✅' : '❌'} |
          Boyut: {deviceInfo.width}x{deviceInfo.height}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: typography.caption,
            color: Colors.text.secondary,
            ...textConstraints.flexible, // Text expansion handling
          }}
        >
          {deviceInfo.isSmallPhone ? '📱 Küçük' : ''}
          {deviceInfo.isLargePhone ? '📱 Büyük' : ''}
          {deviceInfo.isTablet ? '📱 Tablet' : ''}
        </Text>
      </View>
    </SafeAreaWrapper>
  );
}
