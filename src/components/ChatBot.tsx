import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, GripVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getGeminiResponse } from '../utils/gemini';

interface Message {
  content: string;
  isBot: boolean;
}

interface ChatBotProps {
  isSidebarOpen: boolean;
}

const MIN_WIDTH = 280; // Largeur minimale en pixels
const MAX_WIDTH = 600; // Largeur maximale en pixels

const ChatBot: React.FC<ChatBotProps> = ({ isSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [width, setWidth] = useState(320); // Largeur par défaut
  const [isResizing, setIsResizing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const resizeRef = useRef<{ startX: number; startWidth: number } | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Gestionnaires de redimensionnement
  const handleResizeStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
    resizeRef.current = {
      startX: e.clientX,
      startWidth: width
    };
  };

  const handleResizeMove = (e: MouseEvent) => {
    if (!isResizing || !resizeRef.current) return;

    const deltaX = resizeRef.current.startX - e.clientX;
    const newWidth = Math.min(
      Math.max(resizeRef.current.startWidth + deltaX, MIN_WIDTH),
      MAX_WIDTH
    );
    setWidth(newWidth);
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
    resizeRef.current = null;
  };

  useEffect(() => {
    if (isResizing) {
      window.addEventListener('mousemove', handleResizeMove);
      window.addEventListener('mouseup', handleResizeEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleResizeMove);
      window.removeEventListener('mouseup', handleResizeEnd);
    };
  }, [isResizing]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { content: userMessage, isBot: false }]);
    setIsLoading(true);

    try {
      const response = await getGeminiResponse(userMessage);
      setMessages(prev => [...prev, { content: response, isBot: true }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        content: "Désolé, je ne peux pas répondre pour le moment. Veuillez réessayer plus tard.",
        isBot: true 
      }]);
    }

    setIsLoading(false);
  };

  const rightPosition = isSidebarOpen ? '320px' : '1rem';

  return (
    <div 
      className="fixed bottom-4 z-50" 
      style={{ right: rightPosition }}
      ref={chatRef}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-xl mb-4 relative"
            style={{ width: `${width}px` }}
          >
            {/* Poignée de redimensionnement */}
            <div
              className="absolute left-0 top-0 bottom-0 w-1 cursor-ew-resize flex items-center group"
              onMouseDown={handleResizeStart}
            >
              <div className="w-4 h-12 -ml-2 flex items-center justify-center rounded hover:bg-gray-200 dark:hover:bg-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical size={16} className="text-gray-400" />
              </div>
            </div>

            <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Assistant Médical</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="h-96 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${message.isBot ? 'text-left' : 'text-right'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                        : 'bg-blue-500 text-white'
                    } max-w-[90%]`}
                    dangerouslySetInnerHTML={
                      message.isBot 
                        ? { __html: message.content }
                        : { __html: message.content.replace(/</g, '&lt;').replace(/>/g, '&gt;') }
                    }
                  />
                </div>
              ))}
              {isLoading && (
                <div className="text-left mb-4">
                  <div className="inline-block p-3 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100" />
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t dark:border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question médicale..."
                  className="flex-1 p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg"
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
};

export default ChatBot;
