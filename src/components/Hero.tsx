import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Typed from 'typed.js';
import Transition from './Transition';

const Hero: React.FC = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Reshma Rajan – Data Scientist & Analyst",
        "Machine Learning Specialist",
        "Analytics Professional",
        "Bridging Data, Technology, and Business Insights"
      ],
      typeSpeed: 45,
      backSpeed: 25,
      backDelay: 1800,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-[70vh] flex flex-col justify-center bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 font-mono">
            <span ref={typedRef}></span>
          </h1>

          <Transition animation="slide-up">
            <p className="text-lg sm:text-xl text-gray-300 mb-12 font-mono leading-relaxed">
              I specialize in turning complex data into actionable insights through data analysis, machine learning, and strategic analytics.
            </p>
          </Transition>
          
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
