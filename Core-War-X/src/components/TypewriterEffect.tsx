import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay?: number;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  delay = 70 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="inline">
      {displayText}
      <span 
        className={`inline-block w-2 h-4 ml-1 bg-emerald-400 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
      ></span>
    </div>
  );
};