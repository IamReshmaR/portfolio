import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TableauPortfolio from "@/components/TableauPortfolio";
import AIAnalysis from "@/components/AIAnalysis";
import "../styles/animations.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set document title to match the portfolio
    document.title = "Reshma Rajan | Data Science Portfolio";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <AIAnalysis />
      <TableauPortfolio />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
