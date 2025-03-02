import React from 'react';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const ChatBody: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="chat-body">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`chat-message ${msg.sender === 'user' ? 'user-message' : 'bot-message'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

export default ChatBody;
