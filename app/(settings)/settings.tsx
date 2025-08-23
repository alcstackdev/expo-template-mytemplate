import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { useResponsive } from '../../hooks/useResponsive';
import { Colors } from '../../constants/Colors';

interface SettingsItem {
    id: string;
    title: string;
    subtitle: string;
    icon: string;
    subItems?: SubItem[];
}

interface SubItem {
    id: string;
    title: string;
    subtitle: string;
    route: string;
}

const settingsItems: SettingsItem[] = [
    {
        id: 'language',
        title: 'Dil Ayarları',
        subtitle: 'Uygulama dilini değiştir',
        icon: '🌐',
    },
    {
        id: 'notifications',
        title: 'Bildirimler',
        subtitle: 'Bildirim ayarlarını yönet',
        icon: '🔔',
    },
    {
        id: 'subscription',
        title: 'Abonelik',
        subtitle: 'Abonelik planlarını yönet',
        icon: '💎',
        subItems: [
            {
                id: 'manage-subscription',
                title: 'Aboneliği Yönet',
                subtitle: 'Abonelik ayarlarınızı yönetin',
                route: '/(settings)/subscription/manage-subscription'
            },
            {
                id: 'restore-purchase',
                title: 'Satın Alımı Geri Yükle',
                subtitle: 'Önceki satın alımlarınızı geri yükleyin',
                route: '/(settings)/subscription/restore-purchase'
            }
        ]
    },
    {
        id: 'support',
        title: 'Destek',
        subtitle: 'Yardım ve destek al',
        icon: '🆘',
        subItems: [
            {
                id: 'feedback',
                title: 'Geri Bildirim',
                subtitle: 'Uygulama hakkında görüşlerinizi paylaşın',
                route: '/(settings)/support/feedback'
            },
            {
                id: 'rate-us',
                title: 'Uygulamayı Değerlendir',
                subtitle: 'App Store\'da değerlendirmenizi bekliyoruz',
                route: '/(settings)/support/rate-us'
            },
            {
                id: 'share',
                title: 'Paylaş',
                subtitle: 'Uygulamamızı arkadaşlarınızla paylaşın',
                route: '/(settings)/support/share'
            }
        ]
    },
    {
        id: 'legal',
        title: 'Yasal',
        subtitle: 'Gizlilik ve kullanım şartları',
        icon: '📋',
        subItems: [
            {
                id: 'faq',
                title: 'SSS',
                subtitle: 'Sıkça sorulan sorular ve cevapları',
                route: '/(settings)/legal/faq'
            },
            {
                id: 'privacy-policy',
                title: 'Gizlilik Politikası',
                subtitle: 'Kişisel verilerinizin nasıl kullanıldığı',
                route: '/(settings)/legal/privacy-policy'
            },
            {
                id: 'terms-of-service',
                title: 'Kullanım Şartları',
                subtitle: 'Uygulama kullanım şartları ve koşulları',
                route: '/(settings)/legal/terms-of-service'
            }
        ]
    }
];

export default function SettingsScreen() {
    const { typography, textConstraints, spacing, components, responsive } = useResponsive();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const handleItemPress = (item: SettingsItem) => {
        if (item.subItems) {
            setSelectedCategory(selectedCategory === item.id ? null : item.id);
        } else {
            // Navigate to single page
            const route = `/(settings)/${item.id}`;
            console.log('Settings: Navigating to:', route);
            try {
                router.push(route);
            } catch (error) {
                console.error('Settings: Navigation error:', error);
            }
        }
    };

    const handleSubItemPress = (route: string) => {
        console.log('Settings: Navigating to sub-item:', route);
        try {
            router.push(route);
        } catch (error) {
            console.error('Settings: Navigation error:', error);
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: Colors.background.primary }}>
            {/* Content */}
            <ScrollView style={{ flex: 1, padding: spacing.md }}>
                {settingsItems.map((item) => (
                    <View key={item.id}>
                        <TouchableOpacity
                            onPress={() => {
                                console.log('Settings: Item pressed:', item.title);
                                handleItemPress(item);
                            }}
                            style={{
                                ...components.card,
                                padding: spacing.lg,
                                marginBottom: spacing.md,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <View style={{
                                width: responsive.touchTarget(48),
                                height: responsive.touchTarget(48),
                                borderRadius: responsive.touchTarget(24),
                                backgroundColor: Colors.surface.secondary,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginRight: spacing.md,
                            }}>
                                <Text style={{ fontSize: typography.h2 }}>{item.icon}</Text>
                            </View>

                            <View style={{ flex: 1 }}>
                                <Text style={{
                                    fontSize: typography.h4,
                                    fontWeight: typography.fontWeight.h4,
                                    color: Colors.text.primary,
                                    marginBottom: spacing.xs,
                                    ...textConstraints.flexible,
                                }}>
                                    {item.title}
                                </Text>
                                <Text style={{
                                    fontSize: typography.body,
                                    color: Colors.text.secondary,
                                    ...textConstraints.flexible,
                                }}>
                                    {item.subtitle}
                                </Text>
                            </View>

                            <Text style={{
                                fontSize: typography.h4,
                                color: Colors.text.secondary,
                                lineHeight: typography.lineHeight.h4,
                                transform: [{ rotate: selectedCategory === item.id ? '90deg' : '0deg' }],
                            }}>
                                ›
                            </Text>
                        </TouchableOpacity>

                        {/* Sub-items */}
                        {selectedCategory === item.id && item.subItems && (
                            <View style={{ marginLeft: spacing.lg, marginBottom: spacing.md }}>
                                {item.subItems.map((subItem) => (
                                    <TouchableOpacity
                                        key={subItem.id}
                                        onPress={() => handleSubItemPress(subItem.route)}
                                        style={{
                                            ...components.card,
                                            padding: spacing.md,
                                            marginBottom: spacing.sm,
                                            backgroundColor: Colors.surface.secondary,
                                            borderLeftWidth: 3,
                                            borderLeftColor: Colors.primary,
                                        }}
                                    >
                                        <Text style={{
                                            fontSize: typography.h5,
                                            fontWeight: typography.fontWeight.h5,
                                            color: Colors.text.primary,
                                            marginBottom: spacing.xs,
                                            ...textConstraints.flexible,
                                        }}>
                                            {subItem.title}
                                        </Text>
                                        <Text style={{
                                            fontSize: typography.caption,
                                            color: Colors.text.secondary,
                                            ...textConstraints.flexible,
                                        }}>
                                            {subItem.subtitle}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}
