import React from 'react';
import { Heart } from 'lucide-react';
import { serverData } from '../serverData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <h3 className="footer-title">CurseByte</h3>
            <p className="footer-description">
              Server Minecraft Vanilla terbaik untuk pengalaman 
              bermain yang autentik dan menyenangkan.
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#status">Server Status</a></li>
              <li><a href="#players">Players</a></li>
              <li><a href="#rules">Rules</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Server Info</h4>
            <ul className="footer-links">
              <li>IP: { serverData.ipport }</li>
              <li>Version: { serverData.version }</li>
              <li>Mode: Vanilla</li>
              <li>Location: Indonesia</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Community</h4>
            <ul className="footer-links">
              <li><a href="https://www.instagram.com/cursebyte">Instagram</a></li>
              <li><a href="https://dsc.gg/cursebyte">Discord Server</a></li>
              <li><a href="https://chat.whatsapp.com/JMAaOKJyLsu3IsjQzswuLY">WhatsApp Groups</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} CurseByte. All rights reserved.
          </p>
          <p className="footer-made">
            Made with <Heart size={16} className="heart-icon" /> by CurseByte Team
          </p>
        </div>
      </div>
    </footer>
  );
};
