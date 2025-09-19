import React from 'react';
import { Headphones, Zap, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Audio Production',
      description: 'Crafting immersive soundscapes with cutting-edge production techniques and innovative sound design.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Electronic Innovation',
      description: 'Pushing the boundaries of electronic music through experimental synthesis and creative composition.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Emotional Depth',
      description: 'Creating music that resonates deeply with listeners and evokes powerful emotional responses.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Professional Quality',
      description: 'Delivering studio-grade productions with meticulous attention to detail and sonic clarity.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent" style={{WebkitTextStroke: '1px white'}}>
              About YONO
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Bio Section */}
          <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-white">My Journey</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                As a passionate music producer and artist, I've dedicated my craft to exploring the infinite 
                possibilities within electronic music. My journey began with a fascination for how technology 
                can amplify human emotion through sound.
              </p>
              <p>
                Each track I create is a carefully constructed narrative, blending organic elements with 
                digital precision to create something uniquely expressive. I believe music should transport 
                listeners to new dimensions of experience.
              </p>
              <p>
                My work spans various electronic subgenres, always with a focus on innovation, emotional 
                depth, and sonic excellence. I'm constantly pushing myself to discover new ways to connect 
                with audiences through the universal language of music.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 text-sm">Tracks Produced</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">10K+</div>
              <div className="text-gray-300 text-sm">Monthly Listeners</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
              <div className="text-gray-300 text-sm">Collaborations</div>
            </div>
            <div className="glass-card p-6 rounded-2xl border border-white/10 text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">5+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;