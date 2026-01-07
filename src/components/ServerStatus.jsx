import React, { useEffect, useState } from 'react';
import { Server, Copy, Check, Wifi } from 'lucide-react';
import { serverData } from '../serverData';
import axios from 'axios';

export const ServerStatus = () => {
  const [copied, setCopied] = useState(false);
  const [ getServerInfo, setServerInfo ] = useState({});
  const [ getMOTD, setMOTD ] = useState({});

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverData.ipport);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    axios({
      url: `https://api.mcstatus.io/v2/status/java/${ serverData.ip }:${ serverData.port }`,
      method: 'GET'
    }).then(({ data }) => {
      setServerInfo(data);
      setMOTD(data.motd);
    }).catch((err) => { throw err });
  }, []);

  return (
    <section id="status" className="section-container">
      <div className="section-header">
        <Server className="section-icon" size={32} />
        <h2 className="section-title">Server Status</h2>
      </div>

      <div className="status-grid">
        <div className="status-card main-status">
          <div className="status-indicator">
            <div className={`status-dot ${getServerInfo.online ? 'online' : 'offline'}`}>
              <span className="status-pulse"></span>
            </div>
            <div>
              <h3 className="status-title">
                {getServerInfo.online ? 'Server Online' : 'Server Offline'}
              </h3>
              <p className="status-subtitle">{getMOTD.clean}</p>
            </div>
          </div>
        </div>

        <div className="status-card">
          <div className="card-label">Server IP</div>
          <div className="ip-container">
            <code className="ip-text">{serverData.ipport}</code>
            <button 
              onClick={copyToClipboard}
              className="copy-btn"
              title="Copy IP"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        <div className="status-card">
          <div className="card-label">Versi Minecraft</div>
          <div className="version-badge">
            <Wifi size={18} />
            <span>{serverData.version}</span>
          </div>
        </div>

        <div className="status-card">
          <div className="card-label">Mode</div>
          <div className="mode-badge">Vanilla Survival</div>
        </div>
      </div>
    </section>
  );
};
