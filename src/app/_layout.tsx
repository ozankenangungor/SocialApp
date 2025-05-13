import "../../global.css"
import { StyleSheet, Text, View } from 'react-native'

import React from 'react'
import { Slot, Stack, Tabs } from 'expo-router'

import { ThemeProvider, DarkTheme } from '@react-navigation/native'

import { AuthProvider } from '@/providers/AuthProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const myTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: 'white',
        card: '#101010'
    }
}

export default function RootLayout() {
    return (
        <ThemeProvider value={myTheme}>
            <QueryClientProvider client={queryClient}>
                <AuthProvider>
                    <Slot />
                </AuthProvider>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

const styles = StyleSheet.create({})