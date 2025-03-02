import React, { useState, useEffect } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatInput from './ChatInput';
import './Chatbot.css';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [timer, setTimer] = useState(0);

  // Increase timer by 1 second every second
  useEffect(() => {
    const interval = setInterval(() => setTimer(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle sending a message
  const handleSend = (userMessage: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    // Mock bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'bot', text: 'This is a placeholder bot response.' }]);
    }, 1000);
  };

  // Reset conversation
  const handleReset = () => {
    setMessages([]);
    setTimer(0);
  };

  // Close chatbot
  const handleClose = () => {
    handleReset();
    onClose();
  };

  return (
    <div className="chatbot-container">
      <ChatHeader onReset={handleReset} onClose={handleClose} timer={timer} />
      <ChatBody messages={messages} />
      <ChatInput onSend={handleSend} />
    </div>
  );
};

export default Chatbot;
