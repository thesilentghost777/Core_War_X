import React, { useState } from 'react';
import { Code, FileUp, UserCog, Zap } from 'lucide-react';

export const HowToPlay: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { icon: <FileUp size={20} />, title: "Initial Setup" },
    { icon: <Code size={20} />, title: "File Creation" },
    { icon: <UserCog size={20} />, title: "Shell Tactics" },
    { icon: <Zap size={20} />, title: "Attack Strategies" }
  ];
  
  const codeExamples = [
    // Initial Setup
    `# Log in to your assigned account
ssh player@corewarghost.com

# Navigate to the Arena directory
cd /arena

# Check the current state
ls -la
`,
    // File Creation
    `# Create a basic survival file
cat > survivor.py << 'EOF'
#!/usr/bin/python3
import os
import random
import time

# This file will create backups of itself
while True:
    # Generate random filename
    backup_name = f".{random.randint(1000, 9999)}"
    
    # Copy self to backup
    os.system(f"cp {__file__} /arena/{backup_name}")
    
    # Sleep for random interval
    time.sleep(random.randint(30, 120))
EOF

# Make it executable
chmod +x survivor.py
`,
    // Shell Tactics
    `# Modify your .bashrc to add protection
cat >> ~/.bashrc << 'EOF'

# Auto-restore survival file if deleted
check_file() {
  if [ ! -f /arena/survivor.py ]; then
    for backup in /arena/.*; do
      if [ -f "$backup" ] && grep -q "backup_name" "$backup"; then
        cp "$backup" /arena/survivor.py
        chmod +x /arena/survivor.py
        echo "Restored from backup"
        break
      fi
    done
  fi
}

# Run this check every time a command is executed
PROMPT_COMMAND="check_file"
EOF

# Create a trap for attackers
mkdir -p ~/.hidden
touch ~/.hidden/.fake_survivor.py
`,
    // Attack Strategies
    `# Scan for potential target files
find /arena -type f -name "*.py" | grep -v "survivor.py"

# Analyze a suspicious file
cat /arena/suspicious_file.py

# Attack another player's file
cat > /arena/opponent_file.py << 'EOF'
# File corrupted
# Original contents deleted
EOF

# Monitor the Arena for changes
watch -n 5 "ls -la /arena"
`
  ];
  
  return (
    <section id="howtoplay" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How To Play</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Master these techniques to survive and thrive in the Core War Ghost arena.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md flex items-center gap-2 transition-colors ${
                activeTab === index
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon}
              <span>{tab.title}</span>
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Code Example */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
            <div className="bg-gray-900 px-4 py-2 text-sm text-gray-400 border-b border-gray-700 flex items-center gap-2">
              <Code size={16} />
              <span>{tabs[activeTab].title} Example</span>
            </div>
            <pre className="p-4 overflow-x-auto text-sm">
              <code className="text-gray-300 font-mono">{codeExamples[activeTab]}</code>
            </pre>
          </div>
          
          {/* Instructions */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            {activeTab === 0 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Getting Started</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">1</div>
                    <p className="text-gray-300">Log in to your assigned player account via SSH to access the game server.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">2</div>
                    <p className="text-gray-300">Navigate to the Arena directory where all the action happens.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">3</div>
                    <p className="text-gray-300">Take time to observe the environment, identify other players, and plan your strategy.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">4</div>
                    <p className="text-gray-300">Remember: You can only move one file at a time, and you can't leave the Arena directory.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 1 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Creating Your Survivor File</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">1</div>
                    <p className="text-gray-300">Create a survival file using your preferred programming language (Python, Shell, C, etc.).</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">2</div>
                    <p className="text-gray-300">Program your file to create hidden backups that can restore themselves if deleted.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">3</div>
                    <p className="text-gray-300">Consider implementing randomization in file names and locations to evade detection.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">4</div>
                    <p className="text-gray-300">Make your file executable and ensure it has proper permissions to run autonomously.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 2 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Shell Manipulation Tactics</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">1</div>
                    <p className="text-gray-300">Customize your .bashrc file to create automatic restoration of your survival file.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">2</div>
                    <p className="text-gray-300">Create aliases that can mislead other players who might inspect your shell.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">3</div>
                    <p className="text-gray-300">Set up decoy files and honeypots to waste time of attackers or even counter-attack them.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">4</div>
                    <p className="text-gray-300">Implement shell scripts that run on schedule to perform maintenance and protection tasks.</p>
                  </li>
                </ul>
              </div>
            )}
            
            {activeTab === 3 && (
              <div>
                <h3 className="text-xl font-bold mb-4">Attacking Other Players</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">1</div>
                    <p className="text-gray-300">Scan the Arena directory to identify potential target files from other players.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">2</div>
                    <p className="text-gray-300">Analyze suspicious files to understand how they work before attempting to neutralize them.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">3</div>
                    <p className="text-gray-300">Attack by corrupting files, replacing their contents, or disabling their executable permissions.</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-medium">4</div>
                    <p className="text-gray-300">Set up monitoring to watch for changes in the Arena and respond quickly to threats.</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};