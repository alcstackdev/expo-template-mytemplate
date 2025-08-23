import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaWrapper } from '../../components/SafeAreaWrapper';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

export default function TabTwoScreen() {
  const { typography, textConstraints } = useResponsive();

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
        Keşfet
      </Text>
    </SafeAreaWrapper>
  );
}
