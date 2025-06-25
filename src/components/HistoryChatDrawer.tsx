import {DrawerContent,DrawerContentComponentProps,DrawerItem, DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
import {View,Text} from "react-native"
import  {router, usePathname}  from "expo-router"
import { useChatStore } from "@/store/chatStore";
export default function HistoryChatDrawer(props:DrawerContentComponentProps){
    const pathname = usePathname();
    const chatHistory= useChatStore((state)=>state.chatHistory);
    return(
      <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}/>
            {
                chatHistory.map((item)=>(
                    <DrawerItem 
                        key={item.id}
                        label={item.title}
                        onPress={()=>router.push(`/chat/${item.id}`)}
                        focused={pathname === `/chat/${item.id}`}
                        inactiveTintColor="white"
                    />
                ))
            }
            
      </DrawerContentScrollView>  
    ) 
}