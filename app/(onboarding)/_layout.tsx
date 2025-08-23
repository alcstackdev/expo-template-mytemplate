import { Stack } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function OnboardingLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.background.primary,
                },
                headerTitleStyle: {
                    color: Colors.text.primary,
                },
            }}
        >
            <Stack.Screen name="onboarding" options={{ headerShown: true, title: 'Onboarding', headerBackVisible: false }} />
            <Stack.Screen name="info" options={{ headerShown: true, title: 'Bilgi', headerBackVisible: true }} />
            <Stack.Screen name="calculating" options={{ headerShown: true, title: 'Hesaplanıyor', headerBackVisible: true }} />
            <Stack.Screen name="result" options={{ headerShown: true, title: 'Sonuçlar', headerBackVisible: true }} />
        </Stack>
    );
}
