
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  return (
    <footer className="py-8 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-muted-foreground text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>
        
        <div className="flex items-center space-x-6">
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
