import React from 'react';

interface ChatHeaderProps {
  onReset: () => void;
  onClose: () => void;
  timer: number;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ onReset, onClose, timer }) => {
  return (
    <div className="chat-header">
      <button onClick={onReset}>Reset</button>
      <button onClick={onClose}>Close</button>
      <div className="timer">{timer} seconds</div>
    </div>
  );
};

export default ChatHeader;
