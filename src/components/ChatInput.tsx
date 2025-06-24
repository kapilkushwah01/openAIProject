import { Text, TextInput, View, KeyboardAvoidingView, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { useState } from "react";
export default function ChatInput({onSend, isLoading}){
    const insets = useSafeAreaInsets();
    const [message, setMessage] = useState('');

    const handleSend=async()=>{
        setMessage('')
        try{
           await onSend(message)
        }catch(error){
            console.log(error)
        }
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios'? 'padding':undefined}
            keyboardVerticalOffset={Platform.OS === 'ios'? 100:0} 
        >
            <View className="bg-[#262626] rounded-t-2xl" style={{paddingBottom: insets.bottom}}>
                <TextInput
                    className="pt-6 pb-2 px-4 text-white"
                    value={message}
                    placeholder="Ask Anything....."
                    placeholderTextColor='grey'
                    multiline
                    onChangeText={setMessage}
                />
                <View className="flex-row justify-between items-center  px-4">
                    <MaterialCommunityIcons name='plus' size={24} color='white'/>
                    {
                        !!message ? (
                            <MaterialCommunityIcons
                                name="arrow-up-circle"
                                size={29}
                                color={'white'}
                                className="ml-auto"
                                disabled={isLoading}
                                onPress={handleSend}
                            />
                        ):(
                        <View className="bg-white p-2 rounded-full flex-row gap-2">
                            <MaterialCommunityIcons
                                name='account-voice'
                                size={15}
                                color='black'    
                            />
                            <Text className="text-black text-sm font-bold">Voice</Text>
                        </View>
                        )
                    }
                    
                    
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}