import React from 'react';
import { Play, Instagram, Music2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Image with Social Icons */}
        <div className="mb-14 relative mt-16">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Instagram Icon - Left */}
            <a
              href="https://www.instagram.com/yonoyono"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full border border-white/20 hover:border-purple-400/60 transition-all duration-300 group hover:scale-110"
            >
              <Instagram size={28} className="text-purple-400 group-hover:text-pink-400 transition-colors" />
            </a>

            {/* Profile Image */}

            <div className="absolute bottom-5 left-[400px] w-6 h-6 bg-green-400 rounded-full animate-pulse border-2 border-white z-[9999]" style={{boxShadow: '0 0 20px rgba(74, 222, 128, 0.6), 0 0 40px rgba(74, 222, 128, 0.3)'}}></div>

            <div className="w-48 h-48 glass-card rounded-full p-2 overflow-hidden relative">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img
                  src="https://i1.sndcdn.com/avatars-yvE7sAbKlVFahbFW-UtCRng-t1080x1080.jpg"
                  alt="YONO Artist Photo"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
            
            {/* SoundCloud Icon - Right */}
            <a
              href="https://soundcloud.com/yonoyono"
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
              YONO
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
            <button className="group glass-card px-8 py-4 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center gap-3">
              <Play size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-white font-semibold">Listen Now</span>
            </button>
            
            <button className="glass-card px-8 py-4 rounded-full border border-white/10 hover:border-teal-400/50 transition-all duration-300 text-gray-300 hover:text-white">
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
    </section>
  );
};

export default Hero;