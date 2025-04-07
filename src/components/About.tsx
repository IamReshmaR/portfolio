import React from 'react';
import Transition from './Transition';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tools: string[];
}

const About = () => {
  const experiences: Experience[] = [
    {
      title: "AI Research",
      company: "Middle Tennessee State University",
      period: "Dec 2023 – Present",
      achievements: [
        "Built an AI pipeline using Whisper and GPT-4 to analyze 100+ videos and 27,000+ user comments, leading to a 4.4× increase in engagement",
        "Applied statistical methods (ANOVA, A/B testing) to evaluate content performance",
        "Automated NLP workflows to cut analysis time by 90%",
        "Enabled faster iteration and improved adoption of AI-driven strategies across research teams"
      ],
      tools: ["OpenAI Whisper", "GPT-4", "Python", "NLP", "Statistical Analysis", "ANOVA", "A/B Testing"]
    },
    {
      title: "ASL Recognition Project",
      company: "DawnSign Press (Remote)",
      period: "Jul 2024 – Aug 2024",
      achievements: [
        "Trained AutoML models on ASL video data using OpenCV and temporal augmentation, reaching 95% accuracy (F1 = 0.93)",
        "Reduced model training time by 30% via hyperparameter tuning",
        "Deployed a gamified ASL learning tool using Streamlit",
        "Streamlined data preprocessing and improved model reliability for scalable deployment"
      ],
      tools: ["OpenCV", "AutoML", "Streamlit", "Python", "Machine Learning", "Computer Vision"]
    }
  ];

  return (
    <section id="about" className="section bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-white/10 text-white mb-4">
            About Me
          </span>
        </Transition>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Transition animation="slide-up" delay={200}>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  My name is Reshma Rajan, and I'm a data professional driven by the challenge of uncovering insights from complex datasets. 
                  I specialize in <span className="highlight-text">data analysis</span>, <span className="highlight-text">statistical modeling</span>, and building efficient data workflows that support decision-making and business growth.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  With a strong background in <span className="highlight-text">Python</span>, <span className="highlight-text">SQL</span>, and <span className="highlight-text">data visualization</span>, I bring both technical precision and analytical depth to every project. 
                  I'm passionate about using data not just to explain what happened, but to predict what's next—and I'm continuously exploring how technologies 
                  like <span className="highlight-text">generative AI</span> can elevate modern analytics.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  As a proud member of <span className="highlight-text">Golden Phi Kappa Phi</span>, I embody academic excellence and leadership in the field of data science.
                </p>
              </div>
            </Transition>
            
            <Transition animation="fade" delay={1000}>
              <div className="relative max-w-[280px] mx-auto opacity-0 animate-fade-in">
                <div className="aspect-square rounded-full overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] transform hover:scale-105 transition-all duration-700">
                  <img 
                    src="/profile.jpg" 
                    alt="Reshma Rajan"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
              </div>
            </Transition>
          </div>

          <Transition animation="slide-up" delay={400}>
            <h2 className="text-2xl font-bold mb-8">Professional Experience</h2>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <Transition
                  key={`${exp.company}-${exp.period}`}
                  animation="slide-up"
                  delay={600 + index * 200}
                >
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-gray-400">{exp.company}</p>
                      </div>
                      <p className="text-gray-500 text-sm mt-2 sm:mt-0">{exp.period}</p>
                    </div>
                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-green-400 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors duration-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </Transition>
              ))}
            </div>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default About;
