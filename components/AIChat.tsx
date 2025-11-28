
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, MapPin, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { createChatSession } from '../services/gemini';
import { ChatMessage } from '../types';
import { Chat, GenerateContentResponse } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Bonjour ! Je suis l\'assistant virtuel de Paul. Je peux vous parler de son parcours, de ses compétences ou vous localiser ses bureaux. Que souhaitez-vous savoir ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
        chatSessionRef.current = createChatSession();
    } catch (e) {
        console.error("Failed to init chat", e);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatSessionRef.current.sendMessageStream({ message: userMsg });
      
      let fullText = "";
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of response) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
             fullText += c.text;
             setMessages(prev => {
                const newArr = [...prev];
                newArr[newArr.length - 1] = { role: 'model', text: fullText };
                return newArr;
             });
        }
        
        if (c.candidates?.[0]?.groundingMetadata?.groundingChunks) {
            const chunks = c.candidates[0].groundingMetadata.groundingChunks;
            const mapLinks = chunks
                .filter((chunk: any) => chunk.maps?.uri)
                .map((chunk: any) => `\n\n[Voir sur la carte](${chunk.maps.uri})`)
                .join('');
            
            if (mapLinks) {
                 fullText += mapLinks;
                 setMessages(prev => {
                    const newArr = [...prev];
                    newArr[newArr.length - 1] = { role: 'model', text: fullText };
                    return newArr;
                 });
            }
        }
      }
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, j'ai rencontré une erreur. Veuillez réessayer.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: -180 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(true)}
              className="relative bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:shadow-sky-500/50 transition-all group"
            >
              <div className="absolute inset-0 bg-sky-500 rounded-full blur opacity-0 group-hover:opacity-40 animate-pulse transition-opacity"></div>
              <div className="relative">
                <MessageCircle size={32} />
                <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-slate-900"></span>
              </div>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 w-96 max-w-[calc(100vw-2rem)] bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden flex flex-col h-[600px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 p-6 flex justify-between items-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500 rounded-full blur-[50px] opacity-20"></div>
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                  <Sparkles size={20} className="text-sky-400" />
                </div>
                <div>
                    <h3 className="font-bold text-lg">Assistant IA</h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        En ligne
                    </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors relative z-10">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50/50 scroll-smooth">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-sky-600 text-white rounded-tr-sm'
                        : 'bg-white text-slate-700 rounded-tl-sm border border-slate-100'
                    }`}
                  >
                    {msg.text.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/);
                        if (linkMatch) {
                            return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sky-500 underline font-bold hover:text-sky-700 bg-sky-50 px-2 py-0.5 rounded mt-2"><MapPin size={12}/> {linkMatch[1]}</a>
                        }
                        return <span key={i}>{part}</span>
                    })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-100 shadow-sm flex items-center gap-3">
                    <Loader2 size={16} className="animate-spin text-sky-500" />
                    <span className="text-xs text-slate-400 font-medium">L'IA réfléchit...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="relative flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Posez une question..."
                  className="w-full bg-slate-100 text-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:bg-white transition-all"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 p-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 disabled:opacity-50 disabled:hover:bg-sky-600 transition-all shadow-md"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChat;
