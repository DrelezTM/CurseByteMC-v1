import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img width={ 30 } src="/assets/cursebyte.svg" alt="CurseByte Logo" />
          <h1 className="brand-text">CurseByte</h1>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('status')} className="nav-link">Server Status</button>
          <button onClick={() => scrollToSection('players')} className="nav-link">Players Online</button>
          <button onClick={() => scrollToSection('rules')} className="nav-link">Rules</button>
          <a href="https://dsc.gg/cursebyte" className="nav-link discord-link">Discord</a>
        </div>
      </div>
    </nav>
  );
};
