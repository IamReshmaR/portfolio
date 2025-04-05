import ProjectCard from "./ProjectCard";
import Transition from "./Transition";

const Projects = () => {
  const projects = [
    {
      title: "Restaurant Recommender System",
      description: "Built a sophisticated recommender system using the Yelp dataset, implementing both content-based and collaborative filtering approaches. Utilized PCA and SVD for feature extraction, and developed personalized recommendation algorithms.",
      link: "https://github.com/IamReshmaR/Restaurant-Recommeder-System",
      tags: ["Python", "Machine Learning", "NLP", "Collaborative Filtering"]
    },
    {
      title: "Airbnb Price Prediction Model",
      description: "Developed a comprehensive price prediction and value identification model for Airbnb listings using advanced regression techniques (Lasso, Ridge) and classification models. Achieved high accuracy in price predictions.",
      link: "https://github.com/IamReshmaR/Airbnb-Price-Prediction-and-Value-Identification-Model",
      tags: ["Python", "Machine Learning", "Regression", "Classification"]
    },
    {
      title: "SQL Data Analysis Portfolio",
      description: "A collection of advanced SQL queries and data analysis projects showcasing complex database operations, window functions, and business intelligence solutions using real-world datasets.",
      link: "https://github.com/IamReshmaR/SQL-Data-Analysis",
      tags: ["SQL", "Data Analysis", "Business Intelligence"]
    },
    {
      title: "Rainfall Forecasting Model",
      description: "Developed predictive models using logistic regression and random forest to forecast next-day rainfall in Australia. Optimized for accuracy and reduced false positives, setting new standards in weather forecasting reliability.",
      link: "https://github.com/IamReshmaR/",
      tags: ["Python", "Machine Learning", "Random Forest", "Time Series"]
    }
  ];
  
  return (
    <section id="projects" className="section bg-black text-white">
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
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