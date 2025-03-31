import React from 'react';
import Transition from './Transition';

interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  tools: string[];
}

const Experience = () => {
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

  const skills = {
    "Programming & Databases": [
      "Python (Pandas, NumPy, Scikit-learn, OpenAI, LangChain)",
      "SQL (Oracle, PostgreSQL, Microsoft SQL)",
      "R",
      "Snowflake",
      "SQL Optimization",
      "Data Wrangling",
      "Scripting for Automation"
    ],
    "Data Visualization & Reporting": [
      "Tableau",
      "Microsoft Power BI",
      "AWS QuickSight",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "Mode",
      "Dashboard Development",
      "Executive-level Reporting"
    ],
    "Generative AI & Language Models": [
      "OpenAI APIs",
      "Large Language Models (LLMs)",
      "Whisper",
      "Vision-Language Models (LLaVA, MiniCPM)",
      "Prompt Engineering",
      "ChatGPT Integrations",
      "NLP for Marketing and Finance",
      "Sentiment Analysis"
    ],
    "Statistical Analysis & Machine Learning": [
      "Hypothesis Testing",
      "Regression",
      "Classification",
      "Time Series Forecasting",
      "ESG-based Modeling",
      "A/B Testing",
      "ANOVA",
      "Financial Modeling",
      "Behavioral Analytics"
    ],
    "Data Engineering & Big Data": [
      "Apache Spark",
      "Apache Hadoop",
      "Kafka",
      "Azure Data Lake",
      "PySpark",
      "ETL/ELT Pipeline Development",
      "Real-time Pipelines",
      "Data Quality Checks",
      "Data Warehouse Architecture"
    ],
    "Software Development & Integration": [
      "RESTful APIs",
      "Web Services",
      "Cloud Platforms (AWS, Azure)",
      "Power Automate",
      "API Integrations",
      "CRM System Integration",
      "Process Automation",
      "Reporting System Maintenance"
    ],
    "Project & Product Tools": [
      "Jira",
      "Git",
      "Confluence",
      "Azure DevOps",
      "Agile Scrum",
      "Stakeholder Enablement",
      "Cross-functional Collaboration",
      "Business Requirement Documentation (BRD)"
    ]
  };

  return (
    <section id="experience" className="section bg-black text-white py-24">
      <div className="container mx-auto px-4">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-white/10 text-white mb-4">
            Experience & Skills
          </span>
        </Transition>

        <div className="max-w-4xl mx-auto">
          <Transition animation="slide-up" delay={200}>
            <h2 className="text-2xl font-bold mb-6">Skills & Experience</h2>
            <p className="text-gray-400 mb-8">
              My toolkit of data science and analytics skills that enable me to derive actionable insights from complex datasets.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 text-green-400">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Experience Section */}
            <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
            <div className="space-y-8">
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
                    <div className="flex flex-wrap gap-2">
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

export default Experience; 