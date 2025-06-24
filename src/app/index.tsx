import ChatInput from "@/components/ChatInput";
import "../../global.css"
import {View,Text} from "react-native";

export default function HomePage(){
    const handleSend=(message: any)=>{
        console.log("sending:",message)
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