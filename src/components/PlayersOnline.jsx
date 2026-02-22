import React, { useEffect, useState } from 'react';
import { Users, User } from 'lucide-react';
import { serverData } from '../serverData';
import axios from 'axios';

export const PlayersOnline = () => {
  const [ getServerInfo, setServerInfo ] = useState({});

  useEffect(() => {
    axios({
      url: `https://api.mcstatus.io/v2/status/java/${ serverData.ip }:${ serverData.port }`,
      method: 'GET'
    }).then(({ data }) => {
      console.log(data)
      setServerInfo(data);
    }).catch((err) => { throw err });
  }, []);

  const percentage = (getServerInfo.players?.online / getServerInfo.players?.max * 100).toFixed(0);

  return (
    <section id="players" className="section-container">
      <div className="section-header">
        <Users className="section-icon" size={32} />
        <h2 className="section-title">Players Online</h2>
      </div>

      <div className="players-container">
        <div className="players-stats-card">
          <div className="players-count">
            <span className="count-current">{ getServerInfo.players?.online ?? 0 }</span>
            <span className="count-separator">/</span>
            <span className="count-max">{ getServerInfo.players?.max ?? 0 }</span>
          </div>
          <div className="players-label">Pemain Aktif</div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${ !isNaN(percentage) ? percentage : 0 }%` }}
            ></div>
          </div>
          <div className="progress-label">{ !isNaN(percentage) ? percentage : 0 }% Kapasitas</div>
        </div>

        <div className="players-list-card">
          <h3 className="players-list-title">
            <User size={20} />
            Pemain Saat Ini
          </h3>
          <div className="players-grid">
            {
              getServerInfo.online && getServerInfo.players?.online > 0 && Array.isArray(getServerInfo.players?.list) ? getServerInfo.players?.list?.map((player, index) => (
                <div key={index} className="player-item">
                  <div className="player-avatar">
                    <img 
                      src={`https://minotar.net/avatar/${player.name_clean}/32`}
                      alt={ player.name_clean }
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/32/1B8483/ffffff?text=?';
                      }}
                    />
                  </div>
                  <span className="player-name">{player.name_clean}</span>
                </div>
              )) : (
                <div className="player-empty">
                  <span className="player-empty-text">Tidak Ada Player</span>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
};
