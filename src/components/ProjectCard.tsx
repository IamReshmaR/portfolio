import { ArrowUpRight } from "lucide-react";
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
  const isGithub = link.includes("github.com");
  
  return (
    <Transition 
      animation="scale" 
      delay={100 * index}
      className={cn(
        "group relative h-[400px] rounded-3xl overflow-hidden",
        className
      )}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-black" />
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col p-8 z-10">
        {/* Header */}
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                {title}
                {isGithub && (
                  <span className="text-xs py-1 px-2 bg-[#238636] text-white rounded-full">
                    GitHub
                  </span>
                )}
              </h3>
              <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className={cn(
                  "text-xs px-3 py-1 rounded-full",
                  tag === "Python" 
                    ? "bg-[#3572A5]/20 text-[#3572A5]" 
                    : tag === "Machine Learning"
                    ? "bg-[#6B46C1]/20 text-[#9F7AEA]"
                    : tag === "SQL"
                    ? "bg-[#00758F]/20 text-[#00A6CF]"
                    : "bg-[#2D3748]/20 text-gray-300"
                )}
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* View Project Link */}
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-white hover:text-blue-400 transition-colors"
          >
            View Project <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </Transition>
  );
};

export default ProjectCard; 