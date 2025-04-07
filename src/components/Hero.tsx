import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Transition from './Transition';

const Hero: React.FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Data Scientist";
  const welcomeText = "Welcome to My Data Science Portfolio";
  const descriptionText = "I'm a Data Scientist and Analyst with a focus on building robust data pipelines, performing advanced analytics, and delivering actionable insights.";
  const lifecycleText = "I work across the data lifecycle—from exploration and preprocessing to modeling and visualization—with a strong grasp of statistical reasoning, machine learning, and workflow automation. I also explore generative AI to enhance analytical capabilities where relevant.";

  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval: NodeJS.Timeout;

    if (currentIndex < fullText.length) {
      interval = setInterval(() => {
        setDisplayText(prev => {
          const newText = prev.split('');
          newText[currentIndex] = letters[Math.floor(Math.random() * 26)];
          return newText.join('');
        });
      }, 30);

      setTimeout(() => {
        clearInterval(interval);
        setDisplayText(prev => {
          const newText = prev.split('');
          newText[currentIndex] = fullText[currentIndex];
          return newText.join('');
        });
        setCurrentIndex(prev => prev + 1);
      }, 200);
    } else {
      setShowDescription(true);
    }

    return () => clearInterval(interval);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <Transition animation="fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8 font-mono">
              {displayText}
            </h1>
          </Transition>

          {showDescription && (
            <Transition animation="slide-up">
              <div className="text-lg sm:text-xl text-gray-300 mb-12 space-y-4">
                <p className="font-mono animate-fade-in">
                  {welcomeText}
                </p>
                <p className="font-mono animate-fade-in">
                  {descriptionText}
                </p>
                <p className="font-mono animate-fade-in">
                  {lifecycleText}
                </p>
              </div>
            </Transition>
          )}

          {showButtons && (
            <Transition animation="slide-up" delay={100}>
              <div className="flex flex-wrap gap-4 mb-12">
                {/* Navigation buttons can be added here */}
              </div>
            </Transition>
          )}
          
          {showSocial && (
            <Transition animation="fade" delay={200}>
              <div className="flex space-x-8">
                <a 
                  href="https://github.com/IamReshmaR" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Github size={28} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/reshmarajan3590" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Linkedin size={28} />
                </a>
                <a 
                  href="mailto:reshmarajan3590@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors transform hover:scale-110"
                >
                  <Mail size={28} />
                </a>
              </div>
            </Transition>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
