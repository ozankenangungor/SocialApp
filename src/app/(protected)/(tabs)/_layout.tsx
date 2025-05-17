import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
            }}
        >
            <Tabs.Screen name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
                }} />
            <Tabs.Screen name="search" options={{
                title: 'Search',
                tabBarIcon: ({ size, color }) => <Feather name="search" size={size} color={color} />
            }} />
            <Tabs.Screen
                name='plus'
                options={{
                    title: 'Plus',
                    tabBarIcon: ({ size, color }) => (
                        <Feather name='plus' size={size} color={color} />
                    ),
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        router.push('/new');
                    },
                }}
            />
            <Tabs.Screen name="notifications" options={{
                title: 'Notifications',
                tabBarIcon: ({ size, color }) => <Feather name="heart" size={size} color={color} />
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Profile',
                tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />
            }} />
        </Tabs>
    );
}

const styles = StyleSheet.create({})