import { useLocalSearchParams } from "expo-router";
import {View, Text } from "react-native";
import chatHistory from '@assets/data/chatHistory.json'
import ChatInput from "@/components/ChatInput";
export default function ChatScreen(){
    const {id} = useLocalSearchParams(); 

    const chat = chatHistory.find((chat) => chat.id === id)

    if(!chat){
        return <View>
            <Text>chat {id} not found</Text>
        </View>
    }
    const handleSend=(message: any)=>{
        console.log("sending:",message)
    }
    return (
        <View className="flex-1">
            <Text className="text-white flex-1">Chat Screen:{chat.title}</Text>
            <View className="flex-1">
                <Text>Messages</Text>
            </View>
            <ChatInput onSend={handleSend} isLoading={false}/>
        </View>
    )
}