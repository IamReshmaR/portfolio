import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import TypeWriter from './TypeWriter';
import Transition from './Transition';

const Hero: React.FC = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Main Content */}
        <div className="max-w-3xl mx-auto">
          <Transition animation="fade">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              <TypeWriter
                text="Data Scientist"
                delay={50}
                onComplete={() => setShowDescription(true)}
              />
            </h1>
          </Transition>

          {showDescription && (
            <Transition animation="slide-up">
              <div className="text-lg sm:text-xl text-gray-300 mb-12">
                <TypeWriter
                  text="Welcome to My Data Science Portfolio"
                  delay={30}
                  onComplete={() => {
                    setShowButtons(true);
                    setShowSocial(true);
                  }}
                />
                <br />
                <TypeWriter
                  text="I'm a Data Scientist and Analyst with a focus on building robust data pipelines, performing advanced analytics, and delivering actionable insights."
                  delay={25}
                />
                <br />
                <TypeWriter
                  text="I work across the data lifecycle—from exploration and preprocessing to modeling and visualization—with a strong grasp of statistical reasoning, machine learning, and workflow automation. I also explore generative AI to enhance analytical capabilities where relevant."
                  delay={25}
                />
              </div>
            </Transition>
          )}

          {/* Navigation Buttons */}
          {showButtons && (
            <Transition animation="slide-up" delay={100}>
              <div className="flex flex-wrap gap-4 mb-12">
                {/* About Me button removed */}
              </div>
            </Transition>
          )}
          
          {/* Social Links */}
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
