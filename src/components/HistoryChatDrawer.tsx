import {DrawerContent,DrawerContentComponentProps,DrawerItem, DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
import {View,Text} from "react-native"
import chatHistory from "@assets/data/chatHistory.json"
import  {router, usePathname}  from "expo-router"
export default function HistoryChatDrawer(props:DrawerContentComponentProps){
    const pathname = usePathname();
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