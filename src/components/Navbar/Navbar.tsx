import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Chatbot website</div>
      <input
        className="navbar-search"
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleSearchChange}
      />
    </nav>
  );
};

export default Navbar;