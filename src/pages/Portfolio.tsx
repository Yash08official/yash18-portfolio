import Navigation from "@/components/Portfolio/Navigation";
import Hero from "@/components/Portfolio/Hero";
import About from "@/components/Portfolio/About";
import Projects from "@/components/Portfolio/Projects";
import Skills from "@/components/Portfolio/Skills";
import Certifications from "@/components/Portfolio/Certifications";
import PersonalJourney from "@/components/Portfolio/PersonalJourney";
import Animations from "@/components/Portfolio/Animations";
import Contact from "@/components/Portfolio/Contact";
import Footer from "@/components/Portfolio/Footer";
import BackgroundThreeJs from "@/components/animations/BackgroundThreeJs";
import { ThemeProvider } from "@/components/ThemeProvider";

const Portfolio = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background relative">
        <BackgroundThreeJs />
        <Navigation />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <PersonalJourney />
          <Animations />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;