import ChatInput from "@/components/ChatInput";
import "../../global.css"
import {View,Text} from "react-native";
import { useChatStore } from "@/store/chatStore";
import { router } from "expo-router";

export default function HomePage(){
    const createNewChat = useChatStore((state)=>state.createNewChat);
    const addNewMessage = useChatStore((state) => state.addNewMessage);

    const handleSend=async(message: string)=>{
        
        const newChatId =  createNewChat(message.slice(0, 50));
        addNewMessage(newChatId, {
            id:Date.now().toString(),
            role:'user',
            message,
        });
        router.push(`/chat/${newChatId}`);
    }
    return(
        <View className="flex-1 justify-center ">
            <View className=" flex-1">
                <Text>This is homecwefefw page</Text>
            </View>
            <ChatInput onSend={handleSend} isLoading={false}/>
        </View>
    )
}