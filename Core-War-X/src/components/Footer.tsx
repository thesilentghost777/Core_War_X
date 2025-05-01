import React from 'react';
import { Terminal, Github, Twitter, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Terminal size={28} className="text-emerald-400" />
            <span className="text-xl font-bold tracking-tight">
              Core War <span className="text-emerald-400">Ghost</span>
            </span>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Github size={20} className="text-gray-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Twitter size={20} className="text-gray-400" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
              <Globe size={20} className="text-gray-400" />
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Core War Ghost</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Community</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Example Code</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">License</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Discord Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">GitHub</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Core War Ghost. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};