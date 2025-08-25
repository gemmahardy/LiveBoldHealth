import { useState, useRef, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { SunLogo } from "./ui/sun-logo";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

interface ChatMessage {
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export function SunbotChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      content: "Welcome! I'm SunBot, your exclusive wellness concierge for ultra-high-net-worth executives. I help Fortune 500 CEOs and billionaire entrepreneurs optimize their most valuable asset - their health and longevity. What specific wellness goals would you like to achieve?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(`session-${Date.now()}`);

  const chatMutation = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest('POST', '/api/chat', {
        sessionId: sessionId.current,
        message,
        messages
      });
      return response.json();
    },
    onSuccess: (data) => {
      setMessages(data.messages || [...messages, {
        type: 'bot',
        content: data.response,
        timestamp: new Date()
      }]);
    }
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    chatMutation.mutate(inputValue);
    setInputValue("");
  };

  const handleQuickAction = (message: string) => {
    setInputValue(message);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden">
          <div className="bg-luxury-gradient p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <SunLogo size="sm" />
              <div>
                <h6 className="font-semibold text-white" data-testid="chatbot-title">SunBot</h6>
                <p className="text-xs text-white opacity-90">Your Wellness Concierge</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
              data-testid="button-close-chatbot"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto space-y-3" data-testid="chat-messages">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`${message.type === 'user' 
                  ? 'bg-brand-orange text-white rounded-xl p-3 max-w-xs ml-auto' 
                  : 'bg-gray-100 rounded-xl p-3 max-w-xs'
                }`}
                data-testid={`chat-message-${index}`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
            {chatMutation.isPending && (
              <div className="bg-gray-100 rounded-xl p-3 max-w-xs">
                <p className="text-sm text-gray-500">SunBot is typing...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:border-brand-orange text-sm"
                data-testid="input-chat-message"
              />
              <button 
                onClick={handleSendMessage}
                disabled={chatMutation.isPending || !inputValue.trim()}
                className="bg-luxury-gradient text-white p-2 rounded-full hover:shadow-lg transition-all disabled:opacity-50"
                data-testid="button-send-message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mt-3 flex flex-wrap gap-2">
              <Button
                onClick={() => handleQuickAction("I want to increase my energy")}
                variant="outline"
                size="sm"
                className="text-xs"
                data-testid="quick-action-energy"
              >
                Increase Energy
              </Button>
              <Button
                onClick={() => handleQuickAction("I'm interested in executive coaching")}
                variant="outline"
                size="sm"
                className="text-xs"
                data-testid="quick-action-coaching"
              >
                Executive Coaching
              </Button>
              <Button
                onClick={() => handleQuickAction("Tell me about membership options")}
                variant="outline"
                size="sm"
                className="text-xs"
                data-testid="quick-action-membership"
              >
                Membership Info
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-luxury-gradient text-white rounded-full shadow-2xl hover:scale-105 transition-all flex items-center justify-center"
        data-testid="button-toggle-chatbot"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
