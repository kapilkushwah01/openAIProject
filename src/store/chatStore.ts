import { Chat,Message } from "@/types/types";
import { create } from "zustand";

interface ChatStore {
    chatHistory:Chat[];
    createNewChat:(title:string) =>string;
    addNewMessage:(chatId:string,message:Message) =>void;
}
export const useChatStore = create<ChatStore>((set) =>({
    chatHistory:[],
    createNewChat:(title:string) => {
        const newChat: Chat = {
            id: Date.now().toString(),
            title,
            messages:[]
        };
        set((state)=>({
            chatHistory:[newChat, ...state.chatHistory ]
        }));

        return newChat.id;


    },
    addNewMessage:(chatId:string, message:Message) =>{
        set((state)=>({
            chatHistory:state.chatHistory.map((chat)=>
                chat.id === chatId ? {...chat, message:[...chat.messages, message]}:chat
            )
        }))
    }
}))