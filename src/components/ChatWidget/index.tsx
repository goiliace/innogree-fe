import React from "react";
import { useEffect, useRef } from "react";
import useChatState from "~/lib/hooks/useChatState";
import TextMessage from "./TextMessage";
import { RiSendPlaneFill } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "~/store";
import { fetchChat, fetchChatHistory } from "~/features/Chat/thunks";
import type { BaseChat } from "~/features/Chat/types";
interface ChatHeaderProps {
    title: string;
    onClose: () => void;
}
const ChatHeader: React.FC<ChatHeaderProps> = ({ title, onClose }) => {
    return (
        <div className="flex items-center justify-between">
            <img src="https://via.placeholder.com/150" alt="Chat" className="w-10 h-10 rounded-full" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <button onClick={onClose}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 6.707a1 1 0 0 1 1.414-1.414L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
};

const ChatInput: React.FC<{ handleSendMessage: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ handleSendMessage }) => {
    return (
        <form className="flex items-center gap-2" action='#' onSubmit={handleSendMessage}>
            <input type="text" placeholder="Type a message" className="flex-1 p-2 border rounded-lg" id="input_message" name="input_message" />
            <button type="submit" className=" flex items-center gap-1 p-2 bg-blue-500 rounded-lg text-white p-3 rounded-full">
                <RiSendPlaneFill />
            </button>
        </form>
    );

}

function ChatWidget() {
    const { isOpen, openChat, closeChat } = useChatState();
    const token = useAppSelector(state => state.auth.token);
    const user = useAppSelector(state => state.auth.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (user) {
            dispatch(fetchChatHistory({ user, token: token as string }));
        }
    }, [user, token, dispatch]);
    const historyChat = useAppSelector(state => state.chat.chats[user?.id || '']?.history);
    // console.log(historyChat);


    const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = e.currentTarget.input_message.value;
        if (user) {
            dispatch(fetchChat({ user, token: token as string, message }));
        }
        e.currentTarget.input_message.value = '';
    }

    // Auto scroll to the bottom of the chat container whenever historyChat changes
    const chatContainerRef = useRef<HTMLDivElement>(null);

    // Auto scroll to the bottom of the chat container whenever historyChat changes
    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [historyChat]);
    return (
        <div className={`fixed bottom-0 right-0 m-4 border  bg-white overflow-hidden ${isOpen ? 'w-100 rounded-lg' : 'w-18 rounded-full'}`}>
            <div onClick={openChat} className={`${isOpen ? 'p-3' : ''}`}>
                {isOpen ? ChatHeader({ title: "Chat", onClose: closeChat }) : <img src="https://via.placeholder.com/150" alt="Chat" className="w-10 h-10 rounded-full" />}
            </div>
            {isOpen && (
                <div className={`p-2 flex flex-col space-y-3 justify-end ${isOpen && 'h-[600px]'} `}>
                    <div className="flex flex-col space-y-4 scroll-smooth focus:scroll-auto overflow-y-scroll h-full " ref={chatContainerRef}>
                        {
                            historyChat && Object.values(historyChat).map((chat: BaseChat) => {
                                return <TextMessage message={chat.message} time={chat.time} user={chat.user} />
                            })
                        }
                    </div>
                    <div>
                        <ChatInput handleSendMessage={handleSendMessage} />
                    </div>
                </div>
            )
            }
        </div >
    );
}

export default ChatWidget;
