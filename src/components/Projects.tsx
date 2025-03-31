import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import Transition from "./Transition";

const Projects = () => {
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
  
  const projects = [
    {
      title: "COVID-19 Data Analysis Dashboard",
      description: "Interactive Tableau dashboard visualizing global COVID-19 data trends, vaccination rates, and regional impact analysis.",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/covid19-analysis",
      tags: ["Tableau", "Data Visualization", "COVID-19", "Healthcare"]
    },
    {
      title: "Machine Learning for Predictive Maintenance",
      description: "Applied machine learning algorithms to predict equipment failures before they occur, reducing downtime and maintenance costs.",
      image: "https://images.unsplash.com/photo-1581092921461-6484fdac3642?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/predictive-maintenance",
      tags: ["Python", "Machine Learning", "TensorFlow", "Time Series"]
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Used clustering algorithms to segment customers based on purchasing behavior and demographic data for targeted marketing campaigns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/customer-segmentation",
      tags: ["Python", "K-Means", "Tableau"]
    }
  ];
  
  return (
    <section id="projects" ref={sectionRef} className="section bg-black text-white">
      <div className="text-center mb-16">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-white/10 text-white mb-4">
            Featured Work
          </span>
        </Transition>
        <Transition animation="slide-up" delay={200}>
          <h2 className="section-title text-white">Data Science Projects</h2>
        </Transition>
        <Transition animation="fade" delay={400}>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent data science projects, showcasing my analytical skills and problem-solving abilities.
          </p>
        </Transition>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
            tags={project.tags}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
