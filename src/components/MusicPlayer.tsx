import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Shuffle, Repeat } from 'lucide-react';

interface Track {
  id: number;
  title: string;
  duration: string;
  url: string; // In a real app, these would be actual audio URLs
}

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);

  const playlist: Track[] = [
    { id: 1, title: 'Ethereal Dreams', duration: '3:42', url: '' },
    { id: 2, title: 'Neon Nights', duration: '4:15', url: '' },
    { id: 3, title: 'Digital Horizon', duration: '3:28', url: '' },
    { id: 4, title: 'Synth Waves', duration: '5:02', url: '' },
    { id: 5, title: 'Cosmic Journey', duration: '4:33', url: '' },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', nextTrack);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', nextTrack);
    };
  }, [currentTrack]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // Since we don't have actual audio files, we'll simulate playback
      setTimeout(() => setIsPlaying(true), 100);
    }
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    setCurrentTrack((prev) => (prev + 1) % playlist.length);
    setProgress(0);
  };

  const prevTrack = () => {
    setCurrentTrack((prev) => (prev - 1 + playlist.length) % playlist.length);
    setProgress(0);
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = parseInt(e.target.value);
    setProgress(newProgress);
    
    const audio = audioRef.current;
    if (audio && audio.duration) {
      audio.currentTime = (newProgress / 100) * audio.duration;
    }
  };

  // Simulate progress for demo
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextTrack();
            return 0;
          }
          return prev + 0.5;
        });
      }, 200);

      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <>
      {/* Floating Player Toggle */}
      <button
        onClick={() => setIsPlayerOpen(!isPlayerOpen)}
        data-music-player
        className="fixed bottom-6 right-6 z-50 glass-card p-4 rounded-full border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
      >
        <Play size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
      </button>

      {/* Main Player */}
      <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${
        isPlayerOpen ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="glass-card border-t border-white/20">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Progress Bar */}
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleProgressChange}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>

            <div className="flex items-center justify-between">
              {/* Track Info */}
              <div className="flex items-center space-x-4 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-teal-400 rounded-2xl flex items-center justify-center">
                  <Play size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">{playlist[currentTrack].title}</h4>
                  <p className="text-gray-400 text-sm">YONO</p>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Shuffle size={20} />
                </button>
                <button onClick={prevTrack} className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack size={20} />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                >
                  {isPlaying ? <Pause size={20} className="text-white" /> : <Play size={20} className="text-white ml-1" />}
                </button>
                <button onClick={nextTrack} className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward size={20} />
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Repeat size={20} />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center space-x-2 flex-1 justify-end">
                <Volume2 size={20} className="text-gray-400" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(parseInt(e.target.value))}
                  className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Playlist */}
        <div className="glass-card border-t border-white/10 max-h-60 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 py-2">
            {playlist.map((track, index) => (
              <div
                key={track.id}
                onClick={() => setCurrentTrack(index)}
                className={`flex items-center justify-between p-3 rounded-2xl cursor-pointer transition-all duration-200 ${
                  index === currentTrack
                    ? 'bg-white/10 border border-white/20'
                    : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${
                    index === currentTrack ? 'bg-purple-500' : 'bg-white/20'
                  }`}>
                    <span className="text-xs text-white font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{track.title}</p>
                    <p className="text-gray-400 text-xs">YONO</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm">{track.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <audio ref={audioRef} preload="metadata" />
    </>
  );
};

export default MusicPlayer;