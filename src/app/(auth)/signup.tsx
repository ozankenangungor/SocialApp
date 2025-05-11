import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignUpScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            // TODO: Add proper error handling
            return;
        }

        try {
            setIsLoading(true);
            // TODO: Implement actual login logic here
            console.log('Login attempt with:', { email });
        } catch (error) {
            console.error('Login error:', error);
            // TODO: Add proper error handling
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <View className='flex-1 items-center justify-center bg-neutral-900 px-6'>
            <View className='w-full max-w-sm'>
                <Text className='text-3xl font-bold text-center mb-8 text-white'>
                    Create an account
                </Text>

                <View className='gap-4'>
                    <View>
                        <Text className='text-sm font-medium text-gray-300 mb-1'>
                            Email
                        </Text>
                        <TextInput
                            className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
                            placeholder='Enter your email'
                            placeholderTextColor='#6B7280'
                            keyboardType='email-address'
                            autoCapitalize='none'
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>

                    <View>
                        <Text className='text-sm font-medium text-gray-300 mb-1'>
                            Password
                        </Text>
                        <TextInput
                            className='w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder:text-gray-500 focus:border-blue-500'
                            placeholder='Enter your password'
                            placeholderTextColor='#6B7280'
                            secureTextEntry
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>

                    <TouchableOpacity
                        className='w-full bg-white py-3 rounded-lg mt-6'
                        activeOpacity={0.8}
                        onPress={handleLogin}
                        disabled={isLoading}
                    >
                        <Text className='text-black text-center font-semibold'>
                            {isLoading ? 'Logging in...' : 'Sign up'}
                        </Text>
                    </TouchableOpacity>

                    <View className='flex-row justify-center mt-4'>
                        <Text className='text-gray-400'>Already have an account? </Text>
                        <Link href='/login' asChild>
                            <Pressable>
                                <Text className='text-blue-400 font-medium'>Sign in</Text>
                            </Pressable>
                        </Link>
                    </View>
                </View>
            </View>
        </View>
    );
}