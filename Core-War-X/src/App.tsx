import React from 'react';
import { Terminal, Ghost, Code2, ShieldAlert, Award, Zap, BookOpen, Users } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GameMechanics } from './components/GameMechanics';
import { HowToPlay } from './components/HowToPlay';
import { Strategies } from './components/Strategies';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <GameMechanics />
        <HowToPlay />
        <Strategies />
      </main>
      <Footer />
    </div>
  );
}

export default App;