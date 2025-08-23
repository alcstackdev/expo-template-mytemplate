import React from 'react';
import { Home, Search, Plus, Heart, User, Settings } from 'lucide-react-native';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Colors } from '@/constants/Colors';

// Lucide icon component
function TabBarIcon({ color, icon: IconComponent }: { color: string; icon: any }) {
  return <IconComponent size={24} color={color} />;
}

export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: '#9CA3AF',
        headerShown: true,
        headerStyle: {
          backgroundColor: Colors.background.primary,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 1,
          borderBottomColor: '#E5E7EB',
        },
        headerTitleStyle: {
          fontSize: 16,
          fontWeight: '600',
          color: Colors.text.primary,
        },
        headerTitleAlign: 'center',
        headerTitleContainerStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: Colors.background.primary,
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          paddingBottom: 4 + insets.bottom,
          paddingTop: 4,
          height: 60 + insets.bottom,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
          marginTop: 2,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          headerTitle: 'Ana Sayfa',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} icon={Home} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Keşfet',
          headerTitle: 'Keşfet',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} icon={Search} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Ekle',
          headerTitle: 'Ekle',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} icon={Plus} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: 'Favoriler',
          headerTitle: 'Favoriler',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} icon={Heart} />,
        }}
      />
      <Tabs.Screen
        name="five"
        options={{
          title: 'Profil',
          headerTitle: 'Profil',
          tabBarIcon: ({ color }) => <TabBarIcon color={color} icon={User} />,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push('/(settings)/settings')}
              style={{ marginRight: 16 }}
            >
              <Settings
                size={24}
                color={Colors.text.primary}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}
