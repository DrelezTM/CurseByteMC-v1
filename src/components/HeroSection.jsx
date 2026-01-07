import React, { useEffect, useState } from 'react';
import { Play, Users } from 'lucide-react';
import axios from 'axios';
import { serverData } from '../serverData';

export const HeroSection = () => {
  const [ getServerInfo, setServerInfo ] = useState({});
  const [ getPlayerInfo, setPlayerInfo ] = useState({});

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    axios({
      url: `https://api.mcstatus.io/v2/status/java/${ serverData.ip }:${ serverData.port }`,
      method: 'GET'
    }).then(({ data }) => {
      setServerInfo(data);
      setPlayerInfo(data.players);
    }).catch((err) => { throw err });
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className={`hero-badge ${ getServerInfo.online ? '' : 'offline' }`}>
            <span className={`pulse-dot ${ getServerInfo.online ? '' : 'offline' }`}></span>
            <span>Server { getServerInfo.online ? 'Online' : 'Offline' }</span>
          </div>
          
          <h1 className="hero-title">
            CurseByte
            <span className="hero-subtitle">Minecraft Vanilla Server</span>
          </h1>
          
          <p className="hero-description">
            Rasakan pengalaman Minecraft murni tanpa modifikasi. 
            Bergabunglah dengan komunitas yang ramah dan kreatif.
            Survival, building, dan petualangan menunggumu!
          </p>

          <div className="hero-buttons">
            <button onClick={() => scrollToSection('status')} className="btn-primary">
              <Play size={20} />
              Join Server
            </button>
            <a href="https://chat.whatsapp.com/JMAaOKJyLsu3IsjQzswuLY" className="btn-secondary">
              <Users size={20} />
              Join Community
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value">{ getPlayerInfo.online ?? 0 }</div>
              <div className="stat-label">Players Online</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-value">Vanilla</div>
              <div className="stat-label">Pure Minecraft</div>
            </div>
          </div>
        </div>

        <div className="hero-decoration">
          <div className="decoration-cube cube-1"></div>
          <div className="decoration-cube cube-2"></div>
          <div className="decoration-cube cube-3"></div>
        </div>
      </div>
    </section>
  );
};
