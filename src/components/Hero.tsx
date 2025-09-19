import React, { useState } from 'react';
import { Play, Instagram, Music2, X } from 'lucide-react';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleListenNow = () => {
    // Scroll vers la section portfolio ou ouvrir le music player
    const musicPlayer = document.querySelector('[data-music-player]');
    if (musicPlayer) {
      // Si le music player existe, on peut le déclencher
      (musicPlayer as HTMLElement).click();
    } else {
      // Sinon on scroll vers le portfolio
      scrollToSection('portfolio');
    }
  };
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image with Social Icons */}
        <div className="mb-14 relative mt-16">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Instagram Icon - Left */}
            <a
              href="https://www.instagram.com/yogeshyono"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full border border-white/20 hover:border-purple-400/60 transition-all duration-300 group hover:scale-110"
            >
              <Instagram size={28} className="text-purple-400 group-hover:text-pink-400 transition-colors" />
            </a>

            {/* Profile Image */}
            <div className="absolute bottom-2 left-1/2 transform translate-x-16 sm:translate-x-20 md:translate-x-20 lg:translate-x-14 w-6 h-6 bg-green-400 rounded-full animate-pulse border-2 border-white z-[9999] " style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.6), 0 0 40px rgba(74, 222, 128, 0.3)'}}></div>

            <div 
              className="w-48 h-48 glass-card rounded-full p-2 overflow-hidden relative cursor-pointer transition-transform duration-300 hover:scale-110 group"
              onClick={() => setIsModalOpen(true)}
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://i1.sndcdn.com/avatars-yvE7sAbKlVFahbFW-UtCRng-t1080x1080.jpg"
                  alt="YONO Artist Photo"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            
            {/* SoundCloud Icon - Right */}
            <a
              href="https://soundcloud.com/yogeshyono"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full border border-white/20 hover:border-orange-400/60 transition-all duration-300 group hover:scale-110"
            >
              <Music2 size={28} className="text-orange-400 group-hover:text-red-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Main Content */}
        <div className="glass-card p-8 md:p-12 rounded-3xl border border-white/20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-orange-400 bg-clip-text text-transparent animate-gradient" style={{WebkitTextStroke: '0.5px white'}}>
              YOGESH
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-2 font-light">
            Music Producer & Artist
          </p>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creating immersive soundscapes and pushing the boundaries of electronic music. 
            <br />
            Explore my journey through beats, melodies, and sonic innovation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleListenNow}
              className="group glass-card px-8 py-4 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <Play size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold">Listen Now</span>
            </button>
            
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="glass-card px-8 py-4 rounded-full border border-white/10 hover:border-teal-400/50 transition-all duration-300 text-gray-300 hover:text-white hover:scale-105"
            >
              View Portfolio
            </button>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Modal pour la photo en grand */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-2xl max-h-[90vh] p-4">
            {/* Bouton de fermeture */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-2 -right-2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-[10001]"
            >
              <X size={24} />
            </button>
            
            {/* Photo en grand */}
            <div className="glass-card rounded-3xl p-4 border border-white/20">
              <img
                src="https://i1.sndcdn.com/avatars-yvE7sAbKlVFahbFW-UtCRng-t1080x1080.jpg"
                alt="YONO Artist Photo - Full Size"
                className="w-full h-full object-cover rounded-2xl max-w-lg max-h-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            {/* Point vert sur la photo en grand */}
            <div className="absolute bottom-8 right-8 w-8 h-8 bg-green-400 rounded-full animate-pulse border-3 border-white z-[10001]" style={{boxShadow: '0 0 30px rgba(74, 222, 128, 0.8), 0 0 60px rgba(74, 222, 128, 0.4)'}}></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;