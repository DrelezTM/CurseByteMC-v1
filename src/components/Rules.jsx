import React, { useEffect, useState } from 'react';
import { Shield, AlertTriangle } from 'lucide-react';
import { serverRules } from '../serverData';

export const Rules = () => {
  return (
    <section id="rules" className="section-container">
      <div className="section-header">
        <Shield className="section-icon" size={32} />
        <h2 className="section-title">Server Rules</h2>
        <p className="section-description">
          Patuhi peraturan berikut agar server tetap nyaman untuk semua pemain
        </p>
      </div>

      <div className="rules-grid">
        {serverRules.map((category) => (
          <div key={category.id} className="rules-card">
            <div className="rules-card-header">
              <AlertTriangle size={24} className="rules-icon" />
              <h3 className="rules-category">{category.title}</h3>
            </div>
            <ul className="rules-list">
              {category.rules.map((rule, index) => (
                <li key={index} className="rule-item">
                  <span className="rule-bullet"></span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rules-footer">
        <div className="warning-box">
          <AlertTriangle size={20} />
          <p>
            <strong>Peringatan:</strong> Pelanggaran rules dapat mengakibatkan 
            kick, ban sementara, atau ban permanen tergantung tingkat pelanggaran.
          </p>
        </div>
      </div>
    </section>
  );
};
