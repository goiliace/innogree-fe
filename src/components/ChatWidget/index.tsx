import React from "react";
import useChatState from "~/lib/hooks/useChatState";
import TextMessage from "./TextMessage";
import { RiSendPlaneFill } from "react-icons/ri";

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

const ChatInput: React.FC = () => {
    return (
        <form className="flex items-center gap-2">
            <input type="text" placeholder="Type a message" className="flex-1 p-2 border rounded-lg" />
            <button type="submit" className=" flex items-center gap-1 p-2 bg-blue-500 rounded-lg text-white p-3 rounded-full">
                <RiSendPlaneFill />
            </button>
        </form>
    );

}

function ChatWidget() {
    const { isOpen, openChat, closeChat } = useChatState();

    return (
        <div className={`fixed bottom-0 right-0 m-4 border  overflow-hidden ${isOpen ? 'w-100 rounded-lg' : 'w-18 rounded-full'}`}>
            <div onClick={openChat} className={`${isOpen ? 'p-3' : ''}`}>
                {isOpen ? ChatHeader({ title: "Chat", onClose: closeChat }) : <img src="https://via.placeholder.com/150" alt="Chat" className="w-10 h-10 rounded-full" />}
            </div>
            {isOpen && (
                <div className="p-2 flex flex-col space-y-3">
                    <div className="flex flex-col space-y-4">
                        <TextMessage role="user" />
                        <TextMessage role="assistant" />
                        <TextMessage role="user" />

                        {/* Add more TextMessage components as needed */}
                    </div>
                    <div>
                        <ChatInput />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatWidget;
