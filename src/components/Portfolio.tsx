import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  artist: string;
  bpm: string;
  key: string;
  category: string;
  audioPath: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const categories = ['All', 'Solo', 'Collaborations', 'Remixes'];

  // Vraies musiques du dossier BEATS
  const tracks: Track[] = [
    {
      id: 1,
      title: 'All I Want',
      artist: 'YOGESH YONO',
      bpm: '95 BPM',
      key: 'Dm',
      category: 'Solo',
      audioPath: '/BEATS/All I Want - YOGESH YONO - 95BPM, Dm.mp3',
      tags: ['Emotional', 'Melodic', 'Slow']
    },
    {
      id: 2,
      title: 'Angels',
      artist: 'YOGESH YONO',
      bpm: '150 BPM',
      key: 'Bm',
      category: 'Solo',
      audioPath: '/BEATS/Angels - YOGESH YONO - 150BPM, Bm.mp3',
      tags: ['Uplifting', 'Electronic', 'Fast']
    },
    {
      id: 3,
      title: 'Are You Feelin',
      artist: 'YOGESH YONO',
      bpm: '136 BPM',
      key: 'Am',
      category: 'Solo',
      audioPath: '/BEATS/Are You Feelin - YOGESH YONO - 136bpm, Am.mp3',
      tags: ['Groovy', 'Electronic', 'Mid-tempo']
    },
    {
      id: 4,
      title: 'Believer',
      artist: 'YOGESH YONO & Tinna',
      bpm: '161 BPM',
      key: 'Em',
      category: 'Collaborations',
      audioPath: '/BEATS/Believer - YOGESH YONO & Tinna - 161BPM, Emin.mp3',
      tags: ['Collaboration', 'High Energy', 'Electronic']
    },
    {
      id: 5,
      title: 'Clean Dishes',
      artist: 'YOGESH YONO',
      bpm: '98 BPM',
      key: 'Cm',
      category: 'Solo',
      audioPath: '/BEATS/Clean Dishes - YOGESH YONO - 98bpm, Cm.mp3',
      tags: ['Chill', 'Lo-fi', 'Relaxed']
    },
    {
      id: 6,
      title: 'Dark Side Of High School',
      artist: 'YOGESH YONO',
      bpm: '90 BPM',
      key: 'Dm',
      category: 'Solo',
      audioPath: '/BEATS/Dark Side Of High School - YOGESH YONO - 90BPM, Dm.mp3',
      tags: ['Dark', 'Atmospheric', 'Storytelling']
    },
    {
      id: 7,
      title: 'Die',
      artist: 'YOGESH YONO X Tinna',
      bpm: '136 BPM',
      key: 'F',
      category: 'Collaborations',
      audioPath: '/BEATS/Die - YOGESH YONO X Tinna - 136bpm, Fmajor.mp3',
      tags: ['Collaboration', 'Intense', 'Electronic']
    },
    {
      id: 8,
      title: 'Drive',
      artist: 'YOGESH YONO & Tinna',
      bpm: '93 BPM',
      key: 'Fm',
      category: 'Collaborations',
      audioPath: '/BEATS/Drive - YOGESH YONO & Tinna, 93BPM, Fmin.mp3',
      tags: ['Collaboration', 'Smooth', 'Chill']
    },
    {
      id: 9,
      title: 'First Time',
      artist: 'YOGESH YONO',
      bpm: '141 BPM',
      key: 'G#',
      category: 'Solo',
      audioPath: '/BEATS/First Time - YOGESH YONO - 141bpm, G#.mp3',
      tags: ['Energetic', 'Electronic', 'Upbeat']
    },
    {
      id: 10,
      title: "I'ts Been A Week",
      artist: 'YOGESH YONO X Tinna',
      bpm: '88 BPM',
      key: 'D#',
      category: 'Collaborations',
      audioPath: '/BEATS/I\'ts Been A Week - YOGESH YONO X Tinna - 88bpm, D#.mp3',
      tags: ['Collaboration', 'Emotional', 'Slow']
    },
    {
      id: 11,
      title: 'LA Girl',
      artist: 'YOGESH YONO',
      bpm: '90 BPM',
      key: 'F#',
      category: 'Solo',
      audioPath: '/BEATS/LA Girl - YOGESH YONO - 90BPM, F#.mp3',
      tags: ['Chill', 'West Coast', 'Smooth']
    },
    {
      id: 12,
      title: 'Mommy',
      artist: 'YOGESH YONO',
      bpm: '116 BPM',
      key: 'G#',
      category: 'Solo',
      audioPath: '/BEATS/Mommy - YOGESH YONO - 116BPM, G#.mp3',
      tags: ['Personal', 'Emotional', 'Mid-tempo']
    },
    {
      id: 13,
      title: 'Race',
      artist: 'YOGESH YONO',
      bpm: '169 BPM',
      key: 'Gm',
      category: 'Solo',
      audioPath: '/BEATS/Race - YOGESH YONO - 169BPM, Gmin.mp3',
      tags: ['Fast', 'High Energy', 'Intense']
    },
    {
      id: 14,
      title: 'Remember',
      artist: 'YOGESH YONO',
      bpm: '132 BPM',
      key: 'F#',
      category: 'Solo',
      audioPath: '/BEATS/Remember - YOGESH YONO - 132BPM, F#.mp3',
      tags: ['Nostalgic', 'Melodic', 'Electronic']
    },
    {
      id: 15,
      title: 'Symphony',
      artist: 'YOGESH YONO',
      bpm: '147 BPM',
      key: 'D#',
      category: 'Solo',
      audioPath: '/BEATS/Symphony - YOGESH YONO - 147bpm, D#.mp3',
      tags: ['Orchestral', 'Epic', 'Cinematic']
    },
    {
      id: 16,
      title: 'Things',
      artist: 'YOGESH YONO & Tinna',
      bpm: '169 BPM',
      key: 'G#',
      category: 'Collaborations',
      audioPath: '/BEATS/Things - YOGESH YONO & Tinna - 169BPM, G#.mp3',
      tags: ['Collaboration', 'Fast', 'Electronic']
    },
    {
      id: 17,
      title: 'Zone Zone',
      artist: 'YOGESH YONO',
      bpm: '152 BPM',
      key: 'Dm',
      category: 'Solo',
      audioPath: '/BEATS/Zone Zone - YOGESH YONO - 152BPM, Dm.mp3',
      tags: ['Hypnotic', 'Electronic', 'Energetic']
    }
  ];

  const playTrack = async (track: Track) => {
    if (audioRef.current) {
      if (currentlyPlaying === track.id && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        try {
          // Arrêter la lecture en cours
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
          
          // Charger la nouvelle piste
          audioRef.current.src = track.audioPath;
          audioRef.current.load();
          
          // Jouer la piste
          await audioRef.current.play();
          setCurrentlyPlaying(track.id);
          setIsPlaying(true);
        } catch (error) {
          console.error('Erreur lors de la lecture audio:', error);
          console.log('Tentative de lecture du fichier:', track.audioPath);
          setIsPlaying(false);
          setCurrentlyPlaying(null);
        }
      }
    }
  };

  const stopAllTracks = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrentlyPlaying(null);
    }
  };

  const filteredTracks = selectedCategory === 'All' 
    ? tracks 
    : tracks.filter(track => track.category === selectedCategory);

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

        {/* Tracks Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="glass-card rounded-2xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedTrack(track)}
            >
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-purple-500/20 to-teal-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Volume2 size={24} className="text-white" />
                  </div>
                  <div className="text-white font-semibold text-lg">{track.bpm}</div>
                  <div className="text-gray-300 text-sm">{track.key}</div>
                </div>
                <div 
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    playTrack(track);
                  }}
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    {currentlyPlaying === track.id && isPlaying ? (
                      <Pause size={20} className="text-white" />
                    ) : (
                      <Play size={20} className="text-white ml-1" />
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-purple-400 font-semibold uppercase tracking-wide">
                    {track.category}
                  </span>
                  <span className="text-xs text-gray-400">{track.bpm}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {track.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {track.artist}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {track.tags.map((tag) => (
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
        
        {/* Audio Element */}
        <audio 
          ref={audioRef} 
          onEnded={() => {
            setIsPlaying(false);
            setCurrentlyPlaying(null);
          }}
          onError={(e) => {
            console.error('Erreur audio:', e);
            setIsPlaying(false);
            setCurrentlyPlaying(null);
          }}
          preload="none"
        />
      </div>

      {/* Track Modal */}
      {selectedTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="glass-card rounded-3xl border border-white/20 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-64 bg-gradient-to-br from-purple-500/30 to-teal-500/30 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-teal-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Volume2 size={32} className="text-white" />
                </div>
                <div className="text-white font-bold text-2xl">{selectedTrack.bpm}</div>
                <div className="text-gray-300 text-lg">{selectedTrack.key}</div>
              </div>
              <button
                onClick={() => setSelectedTrack(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 text-xs bg-purple-500/20 text-purple-400 rounded-full font-semibold">
                  {selectedTrack.category}
                </span>
                <span className="text-gray-400">{selectedTrack.bpm} • {selectedTrack.key}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">{selectedTrack.title}</h2>
              <p className="text-gray-300 text-lg mb-6">{selectedTrack.artist}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedTrack.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-white/10 text-gray-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <button 
                  onClick={() => playTrack(selectedTrack)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full text-white font-semibold hover:scale-105 transition-transform"
                >
                  {currentlyPlaying === selectedTrack.id && isPlaying ? (
                    <Pause size={20} />
                  ) : (
                    <Play size={20} />
                  )}
                  {currentlyPlaying === selectedTrack.id && isPlaying ? 'Pause' : 'Play Track'}
                </button>
                <button 
                  onClick={stopAllTracks}
                  className="flex items-center gap-2 px-6 py-3 glass-card border border-white/20 rounded-full text-white hover:border-white/40 transition-colors"
                >
                  Stop
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