import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-bg.jpg";
import Avatar3DScene from "@/components/animations/Avatar3DScene";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-dots">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90 dark:from-background/95 dark:via-background/90 dark:to-background/95" />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-40 right-10 w-16 h-16 bg-primary/10 rounded-full blur-xl animate-pulse delay-500" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
          {/* Greeting Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              <span className="mr-2">👋</span>
              Hello, I'm Yash Wasankar
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">Full Stack</span>
            <br />
            <span className="text-foreground">MERN Developer</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative solutions with clean code. 
            Exploring the realms of <span className="text-primary font-semibold">Cybersecurity</span>, 
            <span className="text-secondary font-semibold"> AI/ML</span>, and 
            <span className="text-accent font-semibold"> Cloud Technologies</span>.
          </motion.p>

          {/* Personal Quote */}
          <motion.div 
            variants={itemVariants}
            className="mb-8"
          >
            <p className="text-lg font-medium text-gradient italic">
              "Code. Create. Connect."
            </p>
          </motion.div>

          {/* Location */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-2 mb-8 text-muted-foreground"
          >
            <MapPin className="w-4 h-4" />
            <span>Pune, India</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12"
          >
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group px-8 py-6 text-lg font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-6"
          >
            <a
              href="https://github.com/Yash08official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 group hover:scale-110"
            >
              <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/yash-wasankar-842886219/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 group hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="mailto:yashwasankar008@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 group hover:scale-110"
            >
              <Mail className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            
            <a
              href="https://leetcode.com/yash08official"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary transition-all duration-300 group hover:scale-110"
            >
              <ExternalLink className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </motion.div>
          </motion.div>

          {/* Right Column - 3D Avatar Scene */}
          <div className="relative h-[600px] lg:h-screen w-full">
            <div className="absolute inset-0 bg-transparent">
              <Avatar3DScene />
            </div>
          </div>
        </div>
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