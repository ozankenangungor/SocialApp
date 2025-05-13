import { Text, View } from 'react-native';
import { supabase } from '@/lib/supabase';

export default function ProfileScreen() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text
                onPress={() => supabase.auth.signOut()}
                className='text-2xl font-bold text-white'
            >
                Sign out
            </Text>
        </View>
    );
}