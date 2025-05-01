import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Terminal size={28} className="text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">
              Core War <span className="text-emerald-400">Ghost</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mechanics" className="hover:text-emerald-400 transition-colors">
              Game Mechanics
            </a>
            <a href="#howtoplay" className="hover:text-emerald-400 transition-colors">
              How to Play
            </a>
            <a href="#strategies" className="hover:text-emerald-400 transition-colors">
              Strategies
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors">
              Join the Battle
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <a 
              href="#mechanics" 
              className="py-3 border-b border-gray-700 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Game Mechanics
            </a>
            <a 
              href="#howtoplay" 
              className="py-3 border-b border-gray-700 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Play
            </a>
            <a 
              href="#strategies" 
              className="py-3 border-b border-gray-700 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Strategies
            </a>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-medium py-2 px-4 rounded-md transition-colors mt-2">
              Join the Battle
            </button>
          </div>
        </div>
      )}
    </header>
  );
};