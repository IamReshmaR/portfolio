
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?: 'fade' | 'slide-up' | 'slide-down' | 'blur' | 'scale';
}

const Transition = ({ 
  children, 
  className,
  delay = 0,
  duration = 700,
  animation = 'fade'
}: TransitionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);
  
  const getAnimationClass = () => {
    if (!isVisible) return "opacity-0";
    
    switch (animation) {
      case 'fade':
        return "animate-fade-in";
      case 'slide-up':
        return "animate-slide-up";
      case 'slide-down':
        return "animate-slide-down";
      case 'blur':
        return "animate-blur-in";
      case 'scale':
        return "animate-scale-in";
      default:
        return "animate-fade-in";
    }
  };
  
  return (
    <div
      className={cn(
        "transition-all",
        getAnimationClass(),
        className
      )}
      style={{ 
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards' 
      }}
    >
      {children}
    </div>
  );
};

export default Transition;
