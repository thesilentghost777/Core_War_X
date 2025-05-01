import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight } from 'lucide-react';
import { TypewriterEffect } from './TypewriterEffect';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="matrix-bg"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 bg-gray-800/70 px-4 py-2 rounded-full mb-6">
            <Terminal size={18} className="text-emerald-400" />
            <span className="text-emerald-400 font-medium">A Coding Battle Royale</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-white">Core War</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Ghost</span>
          </h1>
          
          <div className="bg-gray-800/70 p-4 rounded-lg mb-8 font-mono text-gray-300 text-sm md:text-base">
            <TypewriterEffect text="Last programmer standing wins. Hack, protect, survive." />
          </div>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            A virtual battlefield for developers. Create programs, hack others, protect your files, 
            and be the last one standing in this programming survival game.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-md transition-colors border border-gray-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};