import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import Feather from '@expo/vector-icons/Feather';

export default function TabsLayout() {
    return <Tabs screenOptions={{ tabBarActiveTintColor: 'black', tabBarShowLabel: false }}>
        <Tabs.Screen name="index"
            options={{
                title: 'Home',
                tabBarIcon: ({ size, color }) => <Feather name="home" size={size} color={color} />
            }} />
        <Tabs.Screen name="search" options={{
            title: 'Search',
            tabBarIcon: ({ size, color }) => <Feather name="search" size={size} color={color} />
        }} />
        <Tabs.Screen name="notifications" options={{
            title: 'Notifications',
            tabBarIcon: ({ size, color }) => <Feather name="heart" size={size} color={color} />
        }} />
        <Tabs.Screen name="profile" options={{
            title: 'Profile',
            tabBarIcon: ({ size, color }) => <Feather name="user" size={size} color={color} />
        }} />
    </Tabs>
}

const styles = StyleSheet.create({})