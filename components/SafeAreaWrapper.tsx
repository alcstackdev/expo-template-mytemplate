import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface SafeAreaWrapperProps extends ViewProps {
  children: React.ReactNode;
  edges?: ('top' | 'bottom' | 'left' | 'right')[];
  className?: string;
  disableTop?: boolean;
  disableBottom?: boolean;
}

export const SafeAreaWrapper: React.FC<SafeAreaWrapperProps> = ({
  children,
  edges = ['top', 'bottom'],
  className = '',
  disableTop = false,
  disableBottom = false,
  style,
  ...props
}) => {
  const insets = useSafeAreaInsets();

  const paddingStyle = {
    paddingTop: (edges.includes('top') && !disableTop) ? insets.top : 0,
    paddingBottom: (edges.includes('bottom') && !disableBottom) ? insets.bottom : 0,
    paddingLeft: edges.includes('left') ? insets.left : 0,
    paddingRight: edges.includes('right') ? insets.right : 0,
  };

  return (
    <View
      className={`flex-1 ${className}`}
      style={[paddingStyle, style]}
      {...props}
    >
      {children}
    </View>
  );
};
