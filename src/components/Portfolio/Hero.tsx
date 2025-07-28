import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-dots cosmic-orbs">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/85 to-background/95 dark:from-background/98 dark:via-background/95 dark:to-background/98" />
      </div>

      {/* Enhanced Crystalline Glass Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 crystalline rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 crystalline rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-24 h-24 crystalline rounded-full animate-pulse delay-2000" />
        <div className="absolute bottom-40 right-10 w-16 h-16 crystalline rounded-full animate-pulse delay-500" />
        
        {/* Additional Colorful Orbs */}
        <div className="absolute top-1/4 left-1/4 w-6 h-6 rounded-full bg-tertiary/60 animate-bounce delay-700" />
        <div className="absolute top-3/4 right-1/4 w-8 h-8 rounded-full bg-gold/60 animate-bounce delay-1200" />
        <div className="absolute top-1/2 left-3/4 w-4 h-4 rounded-full bg-rose/60 animate-bounce delay-300" />
        
        {/* Central Glow Orb */}
        <div className="glow-orbs-center" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="text-sm px-6 py-3 crystalline text-primary border-0 hover:scale-105 transition-transform duration-300">
              <span className="mr-2 text-lg">👋</span>
              <span className="holographic font-semibold">Hello, I'm Yash Wasankar</span>
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="holographic">Full Stack</span>
            <br />
            <span className="liquid-gradient bg-clip-text text-transparent">MERN Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with clean code. 
            Exploring the realms of <span className="text-primary font-bold">Cybersecurity</span>, 
            <span className="text-tertiary font-bold"> AI/ML</span>, 
            <span className="text-gold font-bold"> Cloud Technologies</span>, and 
            <span className="text-rose font-bold"> Modern UI/UX</span>.
          </motion.p>

          {/* Personal Quote */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-xl font-bold holographic italic">
              "Code. Create. Connect."
            </p>
          </motion.div>

          {/* Location */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center gap-2 mb-8 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>Pune, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg font-semibold liquid-gradient border-0 shadow-lg hover:shadow-xl transition-all duration-300 shimmer magic-hover text-white"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group px-8 py-6 text-lg font-semibold neomorphism border-0 text-primary hover:text-primary-foreground transition-all duration-300 magic-hover"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            <a
              href="https://github.com/Yash08official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-morphism border border-border hover:border-primary transition-all duration-300 group hover:scale-110 magic-hover"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/yash-wasankar-842886219/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-morphism border border-border hover:border-primary transition-all duration-300 group hover:scale-110 magic-hover"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="mailto:yashwasankar008@gmail.com"
              className="p-3 rounded-full glass-morphism border border-border hover:border-primary transition-all duration-300 group hover:scale-110 magic-hover"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="https://leetcode.com/yash08official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass-morphism border border-border hover:border-primary transition-all duration-300 group hover:scale-110 magic-hover"
            >
              <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;