import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaWrapper } from '../../components/SafeAreaWrapper';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

export default function TabFiveScreen() {
  const { typography, textConstraints } = useResponsive();

  return (
    <SafeAreaWrapper
      className="flex-1"
      edges={[]}
      style={{
        backgroundColor: Colors.background.primary,
      }}
    >
      {/* Content */}
      <View className="flex-1 justify-center items-center px-6">
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: typography.h1,
            color: Colors.text.primary,
            ...textConstraints.flexible, // Text expansion handling
          }}
        >
          Profil
        </Text>
      </View>
    </SafeAreaWrapper>
  );
}
