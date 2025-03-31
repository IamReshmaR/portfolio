
import { useEffect, useRef, useState } from "react";
import SkillTag from "./SkillTag";
import Transition from "./Transition";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const dataSkills = [
    { name: "Python", isHighlighted: true },
    { name: "SQL", isHighlighted: true },
    { name: "Excel", isHighlighted: false },
    { name: "R", isHighlighted: false },
    { name: "TensorFlow", isHighlighted: false },
    { name: "PyTorch", isHighlighted: false }
  ];
  
  const visualizationSkills = [
    { name: "Tableau", link: "https://public.tableau.com/app/profile/reshma.rajan", isHighlighted: true },
    { name: "Power BI", isHighlighted: false },
    { name: "D3.js", isHighlighted: false },
    { name: "Data Storytelling", isHighlighted: false },
    { name: "Interactive Dashboards", isHighlighted: false },
    { name: "Data Visualization", isHighlighted: false }
  ];
  
  const analyticsSkills = [
    { name: "Statistical Analysis", isHighlighted: true },
    { name: "Machine Learning", isHighlighted: true },
    { name: "Deep Learning", isHighlighted: false },
    { name: "Computer Vision", isHighlighted: false },
    { name: "API Integration", isHighlighted: false },
    { name: "Big Data", isHighlighted: false }
  ];
  
  return (
    <section id="skills" ref={sectionRef} className="section">
      <div className="text-center mb-16">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-primary/10 text-primary mb-4">
            Technical Expertise
          </span>
        </Transition>
        <Transition animation="slide-up" delay={200}>
          <h2 className="section-title">Skills & Experience</h2>
        </Transition>
        <Transition animation="fade" delay={400}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My toolkit of data science and analytics skills that enable me to derive actionable insights from complex datasets.
          </p>
        </Transition>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <Transition animation="scale" delay={200}>
          <div className="bg-card p-8 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-6">Programming & Data</h3>
            <div className="grid grid-cols-2 gap-3">
              {dataSkills.map((skill, index) => (
                <SkillTag
                  key={index}
                  name={skill.name}
                  isHighlighted={skill.isHighlighted}
                />
              ))}
            </div>
          </div>
        </Transition>
        
        <Transition animation="scale" delay={400}>
          <div className="bg-card p-8 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-6">Data Visualization</h3>
            <div className="grid grid-cols-2 gap-3">
              {visualizationSkills.map((skill, index) => (
                <SkillTag
                  key={index}
                  name={skill.name}
                  link={skill.link}
                  isHighlighted={skill.isHighlighted}
                />
              ))}
            </div>
          </div>
        </Transition>
        
        <Transition animation="scale" delay={600}>
          <div className="bg-card p-8 rounded-2xl border border-border/50">
            <h3 className="text-xl font-bold mb-6">Analytics & ML</h3>
            <div className="grid grid-cols-2 gap-3">
              {analyticsSkills.map((skill, index) => (
                <SkillTag
                  key={index}
                  name={skill.name}
                  isHighlighted={skill.isHighlighted}
                />
              ))}
            </div>
          </div>
        </Transition>
      </div>
      
      <div className="mt-20">
        <h3 className="text-xl font-bold mb-8">Educational Background</h3>
        
        <div className="space-y-10">
          <Transition animation="slide-up" delay={200} className="relative pl-8 border-l border-border/50">
            <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary" />
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">2022 - Present</span>
            </div>
            <h4 className="text-lg font-semibold mb-1">Master of Science in Data Science</h4>
            <p className="text-muted-foreground text-sm mb-3">Middle Tennessee State University, Murfreesboro TN</p>
            <p className="text-sm text-muted-foreground">In progress - Applying advanced analytical techniques to derive actionable insights from complex datasets.</p>
          </Transition>
          
          <Transition animation="slide-up" delay={400} className="relative pl-8 border-l border-border/50">
            <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary" />
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">2018 - 2022</span>
            </div>
            <h4 className="text-lg font-semibold mb-1">Master of Science in Structural Engineering</h4>
            <p className="text-muted-foreground text-sm mb-3">Abdul Kalam Technological University, India</p>
            <p className="text-sm text-muted-foreground">GPA 4.0 - Developed analytical skills and problem-solving abilities that transfer well to data science.</p>
          </Transition>
          
          <Transition animation="slide-up" delay={600} className="relative pl-8 border-l border-border/50">
            <div className="absolute top-0 left-[-8px] w-4 h-4 rounded-full bg-primary" />
            <div className="mb-2">
              <span className="text-sm text-muted-foreground">2014 - 2018</span>
            </div>
            <h4 className="text-lg font-semibold mb-1">Bachelor of Technology in Civil Engineering</h4>
            <p className="text-muted-foreground text-sm mb-3">Abdul Kalam Technological University, India</p>
            <p className="text-sm text-muted-foreground">GPA 3.85 - Built a strong foundation in quantitative analysis and technical problem-solving.</p>
          </Transition>
        </div>
      </div>
    </section>
  );
};

export default Skills;
