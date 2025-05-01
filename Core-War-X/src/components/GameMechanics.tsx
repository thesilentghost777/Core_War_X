import React from 'react';
import { FileCode, Shield, Ghost, Trash2 } from 'lucide-react';

export const GameMechanics: React.FC = () => {
  return (
    <section id="mechanics" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Game Mechanics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Core War Ghost is a survival game where your programming skills are put to the test.
            Here's how the battle unfolds:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* The Arena */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <FileCode size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Arena</h3>
            <p className="text-gray-400">
              A virtual directory where all players upload their survival programs. 
              Navigate, hack, and outmaneuver your opponents in this contained battlefield.
            </p>
          </div>
          
          {/* Your Mission */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <Shield size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Your Mission</h3>
            <p className="text-gray-400">
              Protect your survival file at all costs while seeking out and destroying your 
              opponents' files. Last player with an intact file wins the game.
            </p>
          </div>
          
          {/* The Policier */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <Ghost size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">The Policier</h3>
            <p className="text-gray-400">
              Every 30 minutes, an antivirus script hunts through the Arena, deleting files with 
              70% probability. You must outsmart both players and this ruthless algorithm.
            </p>
          </div>
          
          {/* Shell Access */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors group">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
              <Trash2 size={24} className="text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Shell Access</h3>
            <p className="text-gray-400">
              Maintain access to your Linux shell as long as your file survives. Use it to 
              create scripts, set traps, and execute attacks on your opponents.
            </p>
          </div>
        </div>
        
        {/* Game Flow Diagram */}
        <div className="mt-16 bg-gray-900 rounded-lg p-8 border border-gray-700">
          <h3 className="text-2xl font-bold mb-6 text-center">Game Flow</h3>
          <div className="relative max-w-3xl mx-auto">
            {/* Timeline */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2"></div>
            
            {/* Steps */}
            <div className="relative flex justify-between">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">1</div>
                <div className="mt-4 text-center max-w-[150px]">
                  <h4 className="font-bold">Upload File</h4>
                  <p className="text-sm text-gray-400">Deploy your survival program</p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">2</div>
                <div className="mt-4 text-center max-w-[150px]">
                  <h4 className="font-bold">Protect & Attack</h4>
                  <p className="text-sm text-gray-400">Hide your file, attack others</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">3</div>
                <div className="mt-4 text-center max-w-[150px]">
                  <h4 className="font-bold">Evade Policier</h4>
                  <p className="text-sm text-gray-400">Survive the antivirus scan</p>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center z-10 shadow-lg shadow-emerald-500/20">4</div>
                <div className="mt-4 text-center max-w-[150px]">
                  <h4 className="font-bold">Last Standing</h4>
                  <p className="text-sm text-gray-400">Be the final survivor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};