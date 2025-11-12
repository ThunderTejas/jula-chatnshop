
import React from 'react';
import { ChatIcon } from './icons';

interface ChatBubbleProps {
    onNavigate: (page: string) => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ onNavigate }) => {
    return (
        <button 
            onClick={() => onNavigate('chat')}
            className="fixed bottom-6 right-6 bg-[#d41f26] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-red-700 transition-all transform hover:scale-110 z-50"
            aria-label="Open Chat & Shop"
        >
            <ChatIcon className="w-8 h-8"/>
        </button>
    );
}

export default ChatBubble;