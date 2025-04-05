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
      title: "Restaurant Recommender System",
      description: "Built a sophisticated recommender system using the Yelp dataset, implementing both content-based and collaborative filtering approaches with PCA and SVD for enhanced personalization.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/Restaurant-Recommeder-System",
      tags: ["Python", "Machine Learning", "NLP", "Collaborative Filtering"]
    },
    {
      title: "Airbnb Price Prediction Model",
      description: "Developed a comprehensive price prediction and value identification model for Airbnb listings using Lasso, Ridge regression and Random Forest classification models.",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/Airbnb-Price-Prediction-and-Value-Identification-Model",
      tags: ["Python", "Machine Learning", "Regression", "Classification"]
    },
    {
      title: "SQL Data Analysis Portfolio",
      description: "A collection of advanced SQL queries and data analysis projects showcasing complex database operations, window functions, and business intelligence solutions using real-world datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/SQL-Data-Analysis",
      tags: ["SQL", "Data Analysis", "Business Intelligence"]
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