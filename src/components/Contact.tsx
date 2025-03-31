import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import Transition from "./Transition";

const Contact = () => {
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

  return (
    <section id="contact" ref={sectionRef} className="section bg-muted/50">
      <div className="text-center mb-16">
        <Transition animation="fade">
          <span className="inline-block py-1 px-3 text-xs rounded-full bg-primary/10 text-primary mb-4">
            Get in Touch
          </span>
        </Transition>
        <Transition animation="slide-up" delay={200}>
          <h2 className="section-title">Contact</h2>
        </Transition>
        <Transition animation="fade" delay={400}>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Interested in working together? Feel free to reach out through any of the channels below.
          </p>
        </Transition>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <Transition animation="scale" delay={200}>
          <div className="space-y-8">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <div className="flex items-start space-x-4 group">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium mb-1">Email</h4>
                <div className="flex items-center gap-2">
                  <a 
                    href="mailto:reshmarajan3590@gmail.com" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    reshmarajan3590@gmail.com
                    <ArrowRight 
                      size={16} 
                      className="text-green-500 animate-arrow-bounce group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Phone</h4>
                <a 
                  href="tel:6156389013" 
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  615-638-9013
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">
                  Nashville, TN
                </p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-bold mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label="GitHub"
                >
                  GitHub
                </a>
                <a 
                  href="#" 
                  className="p-3 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Contact;
