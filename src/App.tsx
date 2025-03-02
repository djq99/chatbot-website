import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import AppsPage from './pages/AppsPage';
import DocumentsPage from './pages/DocumentsPage';
import Chatbot from './components/Chatbot/Chatbot';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('apps');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="app-container">
      {/* Navbar at the top */}
      <Navbar onSearch={handleSearch} />

      {/* Side Menu */}
      <div className="main-content">
        <SideMenu activePage={activePage} setActivePage={page => setActivePage(page as 'apps' | 'documents')} />

        {/* Content Area */}
        <div className="content-area">
          {activePage === 'apps' ? (
            <AppsPage searchQuery={searchQuery} />
          ) : (
            <DocumentsPage searchQuery={searchQuery} />
          )}
        </div>
      </div>

      {/* Chatbot Icon Button */}
      {!isChatbotOpen && (
        <button
          className="chatbot-toggle-button"
          onClick={() => setIsChatbotOpen(true)}
        >
          Open Chatbot
        </button>
      )}

      {/* Chatbot Window */}
      {isChatbotOpen && (
        <Chatbot
          onClose={() => setIsChatbotOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
