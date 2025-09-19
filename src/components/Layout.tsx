import React from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import MusicPlayer from './MusicPlayer';
import Portfolio from './Portfolio';
import Contact from './Contact';
import AnimatedBackground from './AnimatedBackground';

const Layout: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <About />
        <Contact />
      </main>
      <MusicPlayer />
    </div>
  );
};

export default Layout;