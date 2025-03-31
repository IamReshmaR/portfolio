
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

interface SkillTagProps {
  name: string;
  className?: string;
  link?: string;
  isHighlighted?: boolean;
}

const SkillTag = ({ name, className, link, isHighlighted = false }: SkillTagProps) => {
  const baseClasses = "px-3 py-1.5 rounded-md text-sm font-medium flex items-center gap-1.5 transition-all duration-300";
  
  // Customize colors based on skill type
  let styleClasses = "";
  
  if (isHighlighted) {
    if (name === "Python") {
      styleClasses = "bg-green-500/15 text-green-600 hover:bg-green-500/25 border border-green-500/30";
    } else if (name === "SQL") {
      styleClasses = "bg-blue-500/15 text-blue-600 hover:bg-blue-500/25 border border-blue-500/30";
    } else if (name === "Tableau") {
      styleClasses = "bg-blue-400/15 text-blue-500 hover:bg-blue-400/25 border border-blue-400/30";
    } else if (name === "Statistical Analysis" || name === "Machine Learning") {
      styleClasses = "bg-purple-500/15 text-purple-600 hover:bg-purple-500/25 border border-purple-500/30";
    } else {
      styleClasses = "bg-primary/15 text-primary hover:bg-primary/25 border border-primary/30";
    }
  } else {
    styleClasses = "bg-card border border-border/50 text-foreground/80 hover:border-primary/30 hover:text-primary";
  }
  
  const content = (
    <>
      {name}
      {link && <ExternalLink size={14} className="ml-1 opacity-70" />}
    </>
  );

  if (link) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(baseClasses, styleClasses, className)}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cn(baseClasses, styleClasses, className)}>
      {content}
    </div>
  );
};

export default SkillTag;
