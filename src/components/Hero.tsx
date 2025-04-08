import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Transition from './Transition';

const Hero: React.FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [welcomeText, setWelcomeText] = useState('');
  const [lifecycleDisplayText, setLifecycleDisplayText] = useState('');

  const fullText = "Data Scientist";
  const welcomeFullText = "My name is Reshma Rajan, and I'm a data professional driven by the challenge of uncovering insights from complex datasets. I specialize in building robust data pipelines, conducting advanced analytics, and delivering actionable insights that drive informed business decisions.";
  const lifecycleFullText = "I work across the entire data lifecycle—from data exploration and preprocessing to modeling and visualization—bringing a strong foundation in statistical reasoning, machine learning, and workflow automation. I also actively explore the use of generative AI to augment analytical capabilities where appropriate.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      setShowDescription(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (showDescription) {
      let welcomeIndex = 0;
      let lifecycleIndex = 0;

      const welcomeInterval = setInterval(() => {
        if (welcomeIndex < welcomeFullText.length) {
          setWelcomeText(prev => prev + welcomeFullText[welcomeIndex]);
          welcomeIndex++;
        } else {
          clearInterval(welcomeInterval);
        }
      }, 30);

      const lifecycleInterval = setInterval(() => {
        if (lifecycleIndex < lifecycleFullText.length) {
          setLifecycleDisplayText(prev => prev + lifecycleFullText[lifecycleIndex]);
          lifecycleIndex++;
        } else {
          clearInterval(lifecycleInterval);
        }
      }, 30);

      return () => {
        clearInterval(welcomeInterval);
        clearInterval(lifecycleInterval);
      };
    }
  }, [showDescription]);

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
              {currentIndex < fullText.length && <span className="typewriter-cursor">|</span>}
            </h1>
          </Transition>

          {showDescription && (
            <Transition animation="slide-up">
              <div className="text-lg sm:text-xl text-gray-300 mb-12 space-y-4">
                <p className="font-mono">
                  {welcomeText}
                  {welcomeText.length < welcomeFullText.length && <span className="typewriter-cursor">|</span>}
                </p>
                <p className="font-mono">
                  {lifecycleDisplayText}
                  {lifecycleDisplayText.length < lifecycleFullText.length && <span className="typewriter-cursor">|</span>}
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
