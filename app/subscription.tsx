import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Stack } from 'expo-router';
import { SafeAreaWrapper } from '../components/SafeAreaWrapper';
import { useResponsive } from '../hooks/useResponsive';
import { Colors } from '../constants/Colors';
import { CheckCircle } from 'lucide-react-native';

export default function SubscriptionScreen() {
    const {
        responsive,
        spacing,
        typography,
        components,
        layout,
        responsiveLayout,
        density,
        textConstraints,
        deviceInfo
    } = useResponsive();

    const { isTablet } = deviceInfo;

    const [selectedPlan, setSelectedPlan] = useState(0); // 0 for yearly, 1 for monthly

    const handleContinue = () => {
        router.push('/(tabs)');
    };

    const handleTerms = () => {
        router.push('/(settings)/legal/terms-of-service');
    };

    const handlePrivacy = () => {
        router.push('/(settings)/legal/privacy-policy');
    };

    const handleRestore = () => {
        router.push('/(settings)/subscription/restore-purchase');
    };

    const subscriptionPlans = [
        {
            title: 'Yearly',
            trialText: '3 days free / then $49.99 / year',
            priceText: '$4.17 / month',
            selected: true,
        },
        {
            title: 'Monthly',
            trialText: '3 days free / then $9.99 / month',
            priceText: '$9.99 / month',
            selected: false,
        },
    ];

    const features = [
        'Scan Documents & Photos',
        'Print Your Photos',
        'Print Your Saved Files',
        'Multiple Printer Support',
    ];

    return (
        <>
            <Stack.Screen
                options={{
                    title: 'Subscription',
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
                edges={['top', 'bottom']}
                style={{
                    backgroundColor: Colors.background.primary,
                }}
            >
                <View style={{ flex: 1 }}>
                    {/* Header Section */}
                    <View style={{
                        alignItems: 'center',
                        paddingTop: spacing.xl,
                        paddingBottom: spacing.lg,
                        paddingHorizontal: layout.screen.paddingHorizontal,
                    }}>
                        {/* App Icon */}
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: spacing.lg,
                                width: responsive.image(isTablet ? 120 : 100),
                                height: responsive.image(isTablet ? 120 : 100),
                                borderRadius: responsive.image(isTablet ? 60 : 50),
                                backgroundColor: '#3b82f6', // Blue background
                                overflow: 'hidden',
                            }}
                        >
                            <Image
                                source={require('../assets/images/placeholder.png')}
                                style={{
                                    width: responsive.image(isTablet ? 60 : 50),
                                    height: responsive.image(isTablet ? 60 : 50),
                                    tintColor: Colors.background.primary, // White tint
                                }}
                                resizeMode="contain"
                            />
                        </View>

                        <Text
                            style={{
                                textAlign: 'center',
                                marginBottom: spacing.sm,
                                fontWeight: typography.fontWeight.h1,
                                fontSize: typography.h1,
                                color: Colors.text.primary,
                                lineHeight: typography.lineHeight.h1,
                                ...textConstraints.flexible,
                            }}
                        >
                            Printer App & Scanner Premium
                        </Text>

                        <Text
                            style={{
                                textAlign: 'center',
                                fontSize: typography.body,
                                color: Colors.text.secondary,
                                lineHeight: typography.lineHeight.body,
                                ...textConstraints.flexible,
                            }}
                        >
                            3-day trial, then simple pricing
                        </Text>
                    </View>

                    {/* Features List */}
                    <View style={{
                        paddingHorizontal: layout.screen.paddingHorizontal,
                        marginBottom: spacing.xl,
                    }}>
                        <View style={{ gap: spacing.md }}>
                            {features.map((feature, index) => (
                                <View
                                    key={index}
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <CheckCircle
                                        size={responsive.image(20)}
                                        color="#3b82f6" // Blue checkmark
                                    />
                                    <Text
                                        style={{
                                            marginLeft: spacing.sm,
                                            fontSize: typography.body,
                                            color: Colors.text.primary,
                                            lineHeight: typography.lineHeight.body,
                                            ...textConstraints.flexible,
                                        }}
                                    >
                                        {feature}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </View>

                    {/* Pricing Options */}
                    <View style={{
                        paddingHorizontal: layout.screen.paddingHorizontal,
                        marginBottom: spacing.xl,
                    }}>
                        <View style={{ gap: spacing.md }}>
                            {subscriptionPlans.map((plan, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedPlan(index)}
                                    style={{
                                        backgroundColor: Colors.background.primary,
                                        paddingVertical: spacing.lg,
                                        paddingHorizontal: spacing.lg,
                                        borderRadius: responsive.image(12),
                                        borderWidth: 2,
                                        borderColor: selectedPlan === index ? '#3b82f6' : Colors.border.primary,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        shadowColor: Colors.overlay.primary,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.1,
                                        shadowRadius: 4,
                                        elevation: 2,
                                    }}
                                >
                                    {/* Left side - Trial and price info */}
                                    <View style={{ flex: 1 }}>
                                        <Text
                                            style={{
                                                fontSize: typography.body,
                                                color: Colors.text.primary,
                                                fontWeight: typography.fontWeight.body,
                                                lineHeight: typography.lineHeight.body,
                                                ...textConstraints.flexible,
                                            }}
                                        >
                                            {plan.trialText}
                                        </Text>
                                    </View>

                                    {/* Divider */}
                                    <View style={{
                                        width: 1,
                                        height: responsive.image(40),
                                        backgroundColor: Colors.border.primary,
                                        marginHorizontal: spacing.md,
                                    }} />

                                    {/* Right side - Monthly price */}
                                    <View style={{ alignItems: 'flex-end' }}>
                                        <Text
                                            style={{
                                                fontSize: typography.body,
                                                color: Colors.text.primary,
                                                fontWeight: typography.fontWeight.body,
                                                lineHeight: typography.lineHeight.body,
                                            }}
                                        >
                                            {plan.priceText}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    {/* Continue Button */}
                    <View style={{
                        paddingHorizontal: layout.screen.paddingHorizontal,
                        marginBottom: spacing.xl,
                    }}>
                        <TouchableOpacity
                            onPress={handleContinue}
                            style={{
                                backgroundColor: '#3b82f6', // Blue background
                                paddingVertical: spacing.lg,
                                paddingHorizontal: spacing.xl,
                                borderRadius: responsive.image(12),
                                alignItems: 'center',
                                justifyContent: 'center',
                                shadowColor: Colors.overlay.primary,
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4,
                                elevation: 3,
                            }}
                        >
                            <Text
                                style={{
                                    color: Colors.background.primary, // White text
                                    fontSize: typography.button,
                                    fontWeight: typography.fontWeight.button,
                                    lineHeight: typography.lineHeight.button,
                                    letterSpacing: typography.letterSpacing.button,
                                }}
                            >
                                Continue
                            </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Bottom Links */}
                    <View style={{
                        paddingHorizontal: layout.screen.paddingHorizontal,
                        paddingBottom: spacing.xl,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: spacing.lg,
                    }}>
                        <TouchableOpacity onPress={handleTerms}>
                            <Text
                                style={{
                                    fontSize: typography.caption,
                                    color: '#1e40af', // Dark blue
                                    textDecorationLine: 'underline',
                                    fontWeight: typography.fontWeight.caption,
                                    lineHeight: typography.lineHeight.caption,
                                }}
                            >
                                Terms
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handlePrivacy}>
                            <Text
                                style={{
                                    fontSize: typography.caption,
                                    color: '#1e40af', // Dark blue
                                    textDecorationLine: 'underline',
                                    fontWeight: typography.fontWeight.caption,
                                    lineHeight: typography.lineHeight.caption,
                                }}
                            >
                                Privacy Policy
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleRestore}>
                            <Text
                                style={{
                                    fontSize: typography.caption,
                                    color: '#1e40af', // Dark blue
                                    textDecorationLine: 'underline',
                                    fontWeight: typography.fontWeight.caption,
                                    lineHeight: typography.lineHeight.caption,
                                }}
                            >
                                Restore
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaWrapper>
        </>
    );
}
