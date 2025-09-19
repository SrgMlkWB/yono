import React, { useState } from 'react';
import { Play, ExternalLink, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Singles', 'Remixes', 'Collaborations', 'Albums'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Ethereal Dreams',
      category: 'Singles',
      date: '2024',
      description: 'A mesmerizing journey through ambient soundscapes and ethereal melodies.',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Ambient', 'Electronic', 'Experimental']
    },
    {
      id: 2,
      title: 'Neon Nights',
      category: 'Singles',
      date: '2024',
      description: 'High-energy electronic track with pulsating beats and neon-soaked atmosphere.',
      image: 'https://images.pexels.com/photos/2693212/pexels-photo-2693212.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Synthwave', 'Electronic', 'Upbeat']
    },
    {
      id: 3,
      title: 'Digital Horizon (Remix)',
      category: 'Remixes',
      date: '2023',
      description: 'A reimagined take on the classic, blending modern production with nostalgic elements.',
      image: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Remix', 'Electronic', 'Progressive']
    },
    {
      id: 4,
      title: 'Synth Waves Collective',
      category: 'Collaborations',
      date: '2023',
      description: 'Collaborative effort with various artists exploring the depths of synthesized music.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Collaboration', 'Synth', 'Electronic']
    },
    {
      id: 5,
      title: 'Cosmic Journey',
      category: 'Albums',
      date: '2023',
      description: 'A complete sonic exploration of space and time through electronic composition.',
      image: 'https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Album', 'Cosmic', 'Ambient', 'Electronic']
    },
    {
      id: 6,
      title: 'Midnight Pulse',
      category: 'Singles',
      date: '2022',
      description: 'Dark and mysterious electronic track perfect for late-night listening sessions.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      tags: ['Dark Electronic', 'Minimal', 'Atmospheric']
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent" style={{WebkitTextStroke: '1px white'}}>
              Portfolio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-100 max-w-2xl mx-auto">
            Explore my latest musical creations, collaborations, and sonic experiments that push the boundaries of electronic music.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-teal-500 text-white'
                  : 'glass-card border border-white/20 text-gray-300 hover:text-white hover:border-white/40'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar size={14} />
                    <span className="text-sm">{project.date}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Play size={20} className="text-white ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-3xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-gray-400">{selectedProject.date}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedProject.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full text-white font-semibold hover:scale-105 transition-transform">
                  <Play size={20} />
                  Listen Now
                </button>
                <button className="flex items-center gap-2 px-6 py-3 glass-card border border-white/20 rounded-full text-white hover:border-white/40 transition-colors">
                  <ExternalLink size={20} />
                  External Link
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;