import React, { useState, useRef, useEffect } from 'react';
import { allProducts, Product } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { UserIcon, BotIcon, SendIcon } from '../components/icons';
// FIX: The 'process' object should be imported from the local simulation file, not the Node.js 'process' module.
import { GoogleGenAI, FunctionDeclaration, Type, Chat, Tool, GenerateContentResponse, Part } from '@google/genai';
import { process } from '../process.env';

// In a real app, this would be an API call, but we'll simulate it here.
const findProducts = (query: string): Product[] => {
  if (!query) return [];
  const lowerCaseQuery = query.toLowerCase();
  
  return allProducts.filter(p => 
    p.name.toLowerCase().includes(lowerCaseQuery) ||
    p.brand.toLowerCase().includes(lowerCaseQuery) ||
    p.category.toLowerCase().includes(lowerCaseQuery) ||
    p.features.some(f => f.toLowerCase().includes(lowerCaseQuery))
  );
};

// Gemini Tool definition
const findProductsTool: FunctionDeclaration = {
  name: 'findProducts',
  description: 'Finds products available in the store based on a search query.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      query: {
        type: Type.STRING,
        description: 'The search term for products. For example: "treadmill", "winter jacket", or "tools".',
      },
    },
    required: ['query'],
  },
};

const tools: Tool[] = [{ functionDeclarations: [findProductsTool] }];

interface Message {
  role: 'user' | 'model';
  text: string;
  products?: Product[];
}

// Component to format chat text with markdown-like features
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
  const lines = text.split('\n');
  
  return (
    <div className="space-y-2">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        // Skip empty lines
        if (!trimmedLine) return <br key={index} />;
        
        // Handle bullet points (lines starting with * or -)
        const isBullet = trimmedLine.startsWith('*') || trimmedLine.startsWith('-');
        const content = isBullet ? trimmedLine.substring(1).trim() : trimmedLine;
        
        // Process bold text (**text**)
        const parts = content.split(/(\*\*.*?\*\*)/g);
        const formattedContent = parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-bold">{part.slice(2, -2)}</strong>;
          }
          return <span key={i}>{part}</span>;
        });
        
        if (isBullet) {
          return (
            <div key={index} className="flex items-start gap-2 ml-2">
              <span className="text-gray-600 mt-0.5">•</span>
              <span className="flex-1">{formattedContent}</span>
            </div>
          );
        }
        
        return <p key={index} className="leading-relaxed">{formattedContent}</p>;
      })}
    </div>
  );
};

const ChatAndShop: React.FC = () => {
  const [history, setHistory] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chat, setChat] = useState<Chat | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = () => {
      try {
        if (!process.env.API_KEY || process.env.API_KEY === 'YOUR_API_KEY_HERE') {
            console.error("API Key not found. Please add it to process.env.ts");
            setHistory(prev => [...prev, { role: 'model', text: 'Error: API Key is not configured. Please contact support.' }]);
            return;
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            tools: tools,
            systemInstruction: "You are a friendly shopping assistant for Jula. Your goal is to help users find products. When users ask about a product category or type (like 'office', 'lighting', 'tools', etc.), use the findProducts tool to search for relevant items - be flexible and interpret their query broadly. For example, if they say 'office', search for 'office' to show office-related products. Only decline to help if they ask about something completely unrelated to shopping or products (like weather, news, etc.).",
          },
        });
        setChat(newChat);
      } catch (error) {
        console.error("Failed to initialize chat:", error);
        setHistory(prev => [...prev, { role: 'model', text: 'There was an error initializing the chat service.' }]);
      }
    };
    initChat();
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading || !chat) return;

    const userMessage: Message = { role: 'user', text: input };
    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let response = await chat.sendMessage({ message: userMessage.text });

      // Handle function calls
      if (response.functionCalls && response.functionCalls.length > 0) {
        const fc = response.functionCalls[0];
        if (fc.name === 'findProducts' && fc.args.query) {
          const query = fc.args.query as string;
          const products = findProducts(query);

          // FIX: The property 'toolResponses' is invalid for chat.sendMessage.
          // Function call responses should be sent as a `Part` array within the 'message' property.
          const functionResponseParts: Part[] = [{
            functionResponse: {
              name: fc.name,
              response: { products: products.slice(0, 5) },
            },
          }];

          // Send tool response back to Gemini
          response = await chat.sendMessage({
            message: functionResponseParts,
          });
          
          const modelMessage: Message = { role: 'model', text: response.text, products: products };
          setHistory(prev => [...prev, modelMessage]);

        } else {
            throw new Error("Invalid function call arguments received.");
        }
      } else {
         const modelMessage: Message = { role: 'model', text: response.text };
         setHistory(prev => [...prev, modelMessage]);
      }

    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      const errorMessage: Message = { role: 'model', text: 'Sorry, I\'m having trouble connecting right now. Please try again later.' };
      setHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex-grow flex flex-col bg-white">
      <div className="flex flex-col flex-grow overflow-hidden">
        {/* Chat History */}
        <div className="flex-grow p-6 overflow-y-auto space-y-6">
          {history.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'model' && <BotIcon className="w-8 h-8 text-white bg-red-500 rounded-full p-1 flex-shrink-0" />}
              <div className={`max-w-xl p-4 rounded-2xl ${msg.role === 'user' ? 'bg-red-500 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                {msg.role === 'user' ? (
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                ) : (
                  <FormattedText text={msg.text} />
                )}
                {msg.products && msg.products.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-bold mb-2">Here are the products I found:</h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      {msg.products.map(p => <ProductCard key={p.id} product={p} showAddToCart />)}
                    </div>
                  </div>
                )}
              </div>
              {msg.role === 'user' && <UserIcon className="w-8 h-8 text-white bg-gray-400 rounded-full p-1 flex-shrink-0" />}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-4 justify-start">
               <BotIcon className="w-8 h-8 text-white bg-red-500 rounded-full p-1 flex-shrink-0" />
               <div className="max-w-xl p-4 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
                  </div>
               </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        
        {/* Input Form */}
        <div className="p-4 border-t bg-gray-50">
          <form
            className="flex items-center gap-4 max-w-screen-2xl mx-auto"
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="e.g., 'Show me some winter jackets...'"
              className="flex-grow p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 transition"
              disabled={isLoading || !chat}
            />
            <button
              type="submit"
              className="bg-[#d41f26] text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 hover:bg-red-700 disabled:bg-gray-400 transition"
              disabled={isLoading || !input.trim() || !chat}
            >
              <SendIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default ChatAndShop;