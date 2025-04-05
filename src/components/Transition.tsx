import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TransitionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade' | 'slide-up' | 'scale';
  delay?: number;
}

const Transition: React.FC<TransitionProps> = ({
  children,
  className,
  animation = 'fade',
  delay = 0
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-700 opacity-0',
        animation === 'fade' && 'fade-in',
        animation === 'slide-up' && 'slide-up',
        animation === 'scale' && 'scale-95',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Transition; 