import React from 'react';
import './SideMenu.css';

interface SideMenuProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="side-menu">
      <button
        className={activePage === 'apps' ? 'menu-item active' : 'menu-item'}
        onClick={() => setActivePage('apps')}
      >
        Apps
      </button>
      <button
        className={activePage === 'documents' ? 'menu-item active' : 'menu-item'}
        onClick={() => setActivePage('documents')}
      >
        Documents
      </button>
    </div>
  );
};

export default SideMenu;
