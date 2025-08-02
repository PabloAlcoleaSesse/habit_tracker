import { icons } from '@/constants/icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Image, View } from 'react-native';

const tabBarIconWithBg = (icon: any, focused: boolean) => (
    <View
        className={
            (focused
                ? 'bg-[#D9D9D947]' // 28% opacity in hex is 47
                : 'bg-transparent') +
            ' rounded-2xl p-1.5 flex items-center justify-center'
        }
    >
        <Image
            source={icon}
            className="w-9 h-9"
            resizeMode="contain"
        />
    </View>
);

const _Layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                },
                tabBarStyle: {
                    backgroundColor: '#333333',
                    borderRadius: 50,
                    marginHorizontal: 30,
                    marginBottom: 20,
                    height: 54,
                    position: 'absolute',
                    overflow: 'hidden',
                    alignItems: 'center',
                    paddingTop: 5,
                }
            }}
        >
            <Tabs.Screen
                name="stats"
                options={{
                    title: 'Stats',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        tabBarIconWithBg(icons.statIcon, focused),
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        tabBarIconWithBg(icons.habitIcon, focused),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) =>
                        tabBarIconWithBg(icons.profileIcon, focused),
                }}
            />
        </Tabs>
    );
};

export default _Layout;