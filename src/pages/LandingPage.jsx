import React from 'react';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { ServerStatus } from '../components/ServerStatus';
import { PlayersOnline } from '../components/PlayersOnline';
import { Rules } from '../components/Rules';
import { Footer } from '../components/Footer';

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main className="main-content">
        <HeroSection />
        <ServerStatus />
        <PlayersOnline />
        <Rules />
      </main>
      <Footer />
    </div>
  );
};
