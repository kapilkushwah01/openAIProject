import { useLocalSearchParams } from "expo-router";
import {View, Text,FlatList } from "react-native";
import chatHistory from '@assets/data/chatHistory.json'
import ChatInput from "@/components/ChatInput";
import MessageListItem from "@/components/MessageListItem";
export default function ChatScreen(){
    const {id} = useLocalSearchParams(); 

    const chat = chatHistory.find((chat) => chat.id === id)

    if(!chat){
        return <View>
            <Text>chat {id} not found</Text>
        </View>
    }
    const handleSend=async(message: string)=>{
        console.log("sending:",message)
    }
    return (
        <View className="flex-1">
            <FlatList
                data={chat.messages}
                renderItem={({item})=> <MessageListItem messageItem={item}/>}
            />
           
            <ChatInput onSend={handleSend} isLoading={false}/>
        </View>
    )
}