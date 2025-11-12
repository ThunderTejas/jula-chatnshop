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
  const lowerCaseQuery = query.toLowerCase().trim();
  
  // // Define search term synonyms and expansions
  // const synonyms: Record<string, string[]> = {
  //   'light': ['light', 'lighting', 'lamp', 'led', 'luminaire', 'lights'],
  //   'bike': ['bike', 'bicycle', 'cycling','biking'],
  //   'chair': ['chair', 'seat', 'stool'],
  //   'desk': ['desk', 'table', 'workstation'],
  //   'tool': ['tool', 'equipment'],
    
  // };
  const synonyms: Record<string, string[]> = {
    // 🔦 Lighting & Electrical
    'light': ['light', 'lighting', 'lamp', 'led', 'luminaire', 'garland', 'illumination', 'string light', 'bulb'],
    'christmas': ['christmas', 'xmas', 'holiday', 'tree', 'decor', 'festive', 'decoration', 'ornament'],
    'tree': ['tree', 'christmas tree', 'pine', 'artificial tree', 'decor tree'],

    // 💪 Training & Fitness
    'training': ['training', 'workout', 'exercise', 'fitness', 'gym', 'home gym'],
    'dumbbell': ['dumbbell', 'weight', 'barbell', 'lifting', 'weights', 'strength'],
    'treadmill': ['treadmill', 'running machine', 'runner', 'cardio', 'jogging', 'fitness machine'],
    'multigym': ['multigym', 'gym station', 'workout station', 'fitness machine'],
    
    // 🚲 Leisure & Bikes
    'bike': ['bike', 'bicycle', 'cycling', 'mountain bike', 'bmx', 'ride', 'scooter'],
    'scooter': ['scooter', 'kick scooter', 'trick scooter', 'ride-on'],

    // 🎣 Fishing & Outdoor
    'fishing': ['fishing', 'angling', 'fish', 'bait', 'fisherman', 'rod', 'reel'],
    'wader': ['wader', 'wading trousers', 'boots', 'gear', 'outdoor wear'],
    'jig': ['jig', 'lure', 'bait', 'fishing tackle'],
    'sled': ['sled', 'sledge', 'ice fishing sled', 'gear carrier'],
    'bag': ['bag', 'carry bag', 'fishing bag', 'storage'],

    // 🏢 Office Supplies
    'office': ['office', 'workspace', 'work', 'stationery', 'supplies'],
    'paper': ['paper', 'copy paper', 'sheet', 'a4'],
    'whiteboard': ['whiteboard', 'board', 'marker board', 'dry erase'],
    'magnet': ['magnet', 'magnetic', 'magnetic accessory'],
    'desk': ['desk', 'table', 'workstation', 'mat'],
    'marker': ['marker', 'pen', 'write', 'notepad'],

    // 🧰 Tools & Car Accessories
    'tool': ['tool', 'equipment', 'meec', 'jack', 'hand tool', 'machine'],
    'jack': ['jack', 'car jack', 'hydraulic jack', 'lifting'],
    'car': ['car', 'automotive', 'vehicle', 'auto', 'accessory'],
    'lamp': ['lamp', 'led lamp', 'light bar', 'headlamp', 'beam'],


    // 🧾 General keywords
    'new': ['new', 'latest', 'fresh', 'newness'],
    'sale': ['sale', 'discount', 'offer', 'deal', 'bargain'],
    'smart': ['smart', 'choice', 'recommended', 'best pick'],
    'brand': ['brand', 'make', 'manufacturer'],
    'rating': ['rating', 'reviews', 'stars', 'feedback'],
    'online': ['online', 'store', 'shop', 'buy', 'purchase']
  };

  
  // Find which synonym group matches (if any)
  let searchTerms = [lowerCaseQuery];
  for (const [key, values] of Object.entries(synonyms)) {
    if (lowerCaseQuery.includes(key) || values.some(v => lowerCaseQuery.includes(v))) {
      searchTerms = values;
      break;
    }
  }
  
  return allProducts.filter(p => 
    searchTerms.some(term => 
      p.name.toLowerCase().includes(term) ||
      p.brand.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term) ||
      p.features.some(f => f.toLowerCase().includes(term))
    )
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
            systemInstruction: "You are a friendly shopping assistant for Jula. ALWAYS use the findProducts tool to search and display products - never just describe them in text. When users ask for products (even with filters like 'latest', 'new', 'best'), extract the main product category and search for it. For example: 'latest office products' → search 'office', 'new bikes' → search 'bike', 'best jackets' → search 'jacket'. Ignore filters like 'latest', 'new', 'popular' since we can't filter by those - just show all products in that category. CRITICAL: You must call findProducts tool for every product request, never just list products in text format. Only decline if the request is completely unrelated to products.",
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
              placeholder="What do you have on your mind today?"
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