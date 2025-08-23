import React from 'react';
import { Stack } from 'expo-router';

export default function SettingsLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
                contentStyle: {
                    backgroundColor: 'white',
                },
                animation: 'slide_from_right',
            }}
        >
            <Stack.Screen
                name="settings"
                options={{
                    title: 'Ayarlar',
                }}
            />
            <Stack.Screen
                name="language"
                options={{
                    title: 'Dil Ayarları',
                }}
            />
            <Stack.Screen
                name="notifications"
                options={{
                    title: 'Bildirimler',
                }}
            />

            <Stack.Screen
                name="support"
                options={{
                    title: 'Destek',
                }}
            />
            <Stack.Screen
                name="legal"
                options={{
                    title: 'Yasal',
                }}
            />
        </Stack>
    );
}
