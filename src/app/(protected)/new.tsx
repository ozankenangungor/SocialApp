import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    Pressable,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewPostScreen() {
    const [text, setText] = useState('');

    return (
        <SafeAreaView edges={['bottom']} className='p-4 flex-1'>
            <KeyboardAvoidingView
                className='flex-1'
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 140 : 0}
            >
                <Text className='text-white text-lg font-bold'>username</Text>

                <TextInput
                    value={text}
                    onChangeText={setText}
                    placeholder='What is on your mind?'
                    placeholderTextColor='gray'
                    className='text-white text-lg'
                    multiline
                    numberOfLines={4}
                />

                <View className='mt-auto'>
                    <Pressable
                        onPress={() => console.log('post: ', text)}
                        className='bg-white p-3 px-6 self-end rounded-full'
                    >
                        <Text className='text-black font-bold'>Post</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}