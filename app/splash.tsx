import React, { useEffect } from 'react';
import { Image, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { SafeAreaWrapper } from '../components/SafeAreaWrapper';
import { useResponsive } from '../hooks/useResponsive';
import { Colors } from '../constants/Colors';
import { supabase } from '../services/supabase/client';

export default function SplashScreen() {
    const { responsive, deviceInfo } = useResponsive();
    const { isTablet } = deviceInfo;

    useEffect(() => {
        // Supabase bağlantısını test et
        const testConnection = async () => {
            try {
                const { data, error } = await supabase.auth.getSession();
                if (!error) {
                    console.log('✅ Supabase bağlantısı başarılı!');
                } else {
                    console.log('❌ Supabase bağlantı hatası:', error.message);
                }
            } catch (error) {
                console.log('❌ Supabase bağlantı hatası:', error);
            }
        };
        testConnection();

        // 3 saniye sonra get-started ekranına yönlendir
        const navigationTimer = setTimeout(() => {
            router.replace('/get-started');
        }, 3000);

        return () => {
            clearTimeout(navigationTimer);
        };
    }, []);

    // Logo boyutu responsive olarak hesapla
    const logoSize = responsive.image(isTablet ? 120 : 100);

    return (
        <>
            {/* Status Bar - Light content (beyaz arka plan için) */}
            <StatusBar style="dark" />

            <SafeAreaWrapper
                className="justify-center items-center"
                disableTop={true}
                disableBottom={true}
                style={{
                    backgroundColor: Colors.surface.primary,
                }}
            >
                <View className="items-center">
                    {/* PNG Logo */}
                    <Image
                        source={require('../assets/images/placeholder.png')}
                        className="rounded-lg"
                        style={{
                            width: logoSize,
                            height: logoSize,
                        }}
                        resizeMode="contain"
                        accessible={true}
                        accessibilityLabel="App logo"
                        accessibilityRole="image"
                    />
                </View>
            </SafeAreaWrapper>
        </>
    );
}
