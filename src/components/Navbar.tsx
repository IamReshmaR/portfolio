
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "skills", "contact"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" }
  ];
  
  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-4 px-6 transition-all duration-300 ease-apple",
          isScrolled 
            ? "bg-background/80 backdrop-blur-lg border-b border-border/50 py-3" 
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold cursor-pointer"
          >
            Portfolio
          </h1>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "nav-link text-sm font-medium",
                  activeSection === link.id ? "active" : ""
                )}
              >
                {link.name}
              </button>
            ))}
          </nav>
          
          {/* Mobile Navigation Trigger */}
          <button 
            className="block md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu />
          </button>
        </div>
      </header>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background flex flex-col transition-all duration-500 ease-apple",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex justify-between items-center p-6">
          <h1 className="text-xl font-bold">Portfolio</h1>
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X />
          </button>
        </div>
        
        <div className="flex flex-col items-center justify-center flex-1 space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-2xl font-medium"
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
