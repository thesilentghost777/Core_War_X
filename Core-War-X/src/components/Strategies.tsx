import React from 'react';
import { ShieldAlert, Bomb, Zap, Lightbulb } from 'lucide-react';

export const Strategies: React.FC = () => {
  return (
    <section id="strategies" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Survival Strategies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master these techniques to outwit your opponents and the Policier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Defense Strategies */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <ShieldAlert size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Defense</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Hide your files in dot-directories to make them harder to find</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Create multiple backup copies with randomized names</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Set up file permissions to prevent modification</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Configure your .bashrc to restore lost files automatically</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Create scripts that detect and respond to tampering</p>
              </li>
            </ul>
          </div>
          
          {/* Offense Strategies */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Bomb size={24} className="text-red-400" />
              </div>
              <h3 className="text-xl font-bold">Offense</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Scan the Arena for suspicious files and analyze them</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Create a "virus" script that hunts and corrupts other programs</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Use pattern matching to identify file creation strategies</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Attack the restoration mechanisms of opponents</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Monitor directory changes to catch file movements</p>
              </li>
            </ul>
          </div>
          
          {/* Policier Evasion */}
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                <Zap size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Policier Evasion</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Track the Policier's schedule to time your file movements</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Create scripts that move files just before Policier scans</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Hide files in directories with special characters</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Use file extensions that might be ignored by the Policier</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-lg font-bold">•</span>
                <p className="text-gray-300">Set up automated restoration that triggers after Policier runs</p>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Pro Tips */}
        <div className="mt-12 bg-gray-900/50 border border-emerald-500/30 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb size={24} className="text-yellow-400" />
            <h3 className="text-xl font-bold">Pro Tips</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded p-4 border border-gray-700">
              <p className="font-medium text-emerald-400 mb-2">Timing is Everything</p>
              <p className="text-gray-300 text-sm">
                The Policier runs every 30 minutes. Time your actions in between scans for maximum survival odds.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded p-4 border border-gray-700">
              <p className="font-medium text-emerald-400 mb-2">Shell Customization</p>
              <p className="text-gray-300 text-sm">
                Use aliases and function overrides in your .bashrc to create powerful automated defenses.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded p-4 border border-gray-700">
              <p className="font-medium text-emerald-400 mb-2">Misdirection</p>
              <p className="text-gray-300 text-sm">
                Create decoy files to waste your opponents' time while your real file remains hidden elsewhere.
              </p>
            </div>
            
            <div className="bg-gray-800 rounded p-4 border border-gray-700">
              <p className="font-medium text-emerald-400 mb-2">Observe First</p>
              <p className="text-gray-300 text-sm">
                Watch how others play before revealing your strategy. Learn from their mistakes and successes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};