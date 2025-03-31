import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import Transition from "./Transition";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
  className?: string;
  index?: number;
}

const ProjectCard = ({ 
  title, 
  description, 
  image, 
  link, 
  tags = [],
  className,
  index = 0
}: ProjectCardProps) => {
  const isTableau = link.includes("tableau.com");
  const isGithub = link.includes("github.com");
  
  return (
    <Transition 
      animation="scale" 
      delay={100 * index}
      className={cn(
        "project-card group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black z-10" />
      
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 ease-apple group-hover:scale-105"
        loading="lazy"
      />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-all duration-500 ease-apple">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">
              {title}
              {isTableau && (
                <span className="ml-2 text-xs py-0.5 px-2 bg-blue-500/20 text-blue-300 rounded-full">
                  Tableau
                </span>
              )}
              {isGithub && (
                <span className="ml-2 text-xs py-0.5 px-2 bg-purple-500/20 text-purple-300 rounded-full">
                  GitHub
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-200 mb-4 max-w-md">{description}</p>
            
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={cn(
                      "text-xs px-3 py-1 rounded-full backdrop-blur-sm",
                      tag === "Tableau" 
                        ? "bg-blue-500/20 text-blue-300" 
                        : tag === "Python"
                        ? "bg-green-500/20 text-green-300"
                        : tag === "Machine Learning" || tag === "TensorFlow" || tag === "K-Means"
                        ? "bg-purple-500/20 text-purple-300"
                        : "bg-white/20 text-white"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white text-black transition-all duration-300 ease-apple transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-gray-200"
            aria-label={`View ${title} project`}
          >
            {isTableau ? <ExternalLink size={20} /> : <ArrowUpRight size={20} />}
          </a>
        </div>
      </div>
    </Transition>
  );
};

export default ProjectCard;
