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
      title: "🌧️ Rainfall Forecasting Model",
      description: `Developed and optimized logistic regression and random forest models to predict next-day rainfall in Australia. 
      Implemented extensive data collection and preprocessing of meteorological data, achieving significant improvements in forecasting reliability. 
      The random forest model was selected for its superior accuracy in reducing false positives, setting a new industry standard.`,
      image: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/Rainfall-Forecasting-Model",
      tags: ["Python", "Machine Learning", "Random Forest", "Data Analysis"]
    },
    {
      title: "🍴 Restaurant Recommender System",
      description: `Built sophisticated content-based and collaborative recommender systems using the Yelp dataset. 
      Implemented PCA and SVD techniques to analyze user preferences and restaurant features. 
      Enhanced personalization for various cuisine types, particularly Korean and Asian restaurants.`,
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/Restaurant-Recommeder-System",
      tags: ["Python", "Machine Learning", "PCA", "SVD", "Recommender Systems"]
    },
    {
      title: "🏡 Airbnb Price Prediction Model",
      description: `Developed predictive models using Lasso and Ridge regression to determine Airbnb listing prices. 
      Created classification models (Logistic Regression, Decision Tree, Random Forest) to identify high-value listings. 
      Successfully enhanced price prediction accuracy and optimized value identification.`,
      image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      link: "https://github.com/IamReshmaR/Airbnb-Price-Prediction-and-Value-Identification-Model",
      tags: ["Python", "Machine Learning", "Regression", "Classification"]
    },
    {
      title: "📊 SQL Data Analysis",
      description: `Comprehensive SQL data analysis project showcasing advanced querying techniques, data manipulation, 
      and business insights generation. Demonstrated expertise in complex SQL operations and data-driven decision making.`,
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
            A showcase of my data science projects, demonstrating expertise in machine learning, data analysis, and predictive modeling.
          </p>
        </Transition>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
