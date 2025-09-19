import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = useMemo(() => [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 glass-card border-b border-white/10 mt-4 w-[calc(100%-20px)] max-w-sm sm:max-w-lg md:w-auto md:max-w-none rounded-full">
      <div className="px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between md:justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 md:flex-shrink-0 mx-auto md:mx-0">
            <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent" style={{WebkitTextStroke: '.3px white'}}>
              YONO
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-white/20 backdrop-blur-sm'
                      : 'text-gray-300 hover:text-white hover:bg-white/10 backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden absolute right-2 sm:right-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="glass-card p-3 rounded-full text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2">
            <div className="mx-0 px-4 py-4 space-y-2 bg-black/80 backdrop-blur-2xl rounded-3xl border border-white/30 shadow-2xl">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-center px-6 py-4 rounded-2xl text-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-purple-500/40 to-teal-500/40 border border-white/40'
                      : 'text-gray-300 hover:text-white hover:bg-white/20 hover:scale-[1.02]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;