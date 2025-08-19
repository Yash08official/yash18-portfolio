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

      {/* Dynamic Tech-Inspired Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Morphing Gradient Waves */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-secondary/8 animate-[morphWave_12s_ease-in-out_infinite]" />
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-accent/8 via-transparent to-primary/6 animate-[morphWave_15s_ease-in-out_infinite_reverse]" />
        </div>
        
        {/* Floating Code Elements */}
        <div className="absolute inset-0">
          {['<', '>', '{', '}', '(', ')', '[', ']', '/>', '::'].map((symbol, i) => (
            <div
              key={i}
              className="absolute text-primary/20 dark:text-primary/40 font-mono text-2xl font-bold animate-[codeFloat_20s_linear_infinite]"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}
            >
              {symbol}
            </div>
          ))}
        </div>
        
        {/* Constellation Network */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-secondary to-primary rounded-full animate-[constellation_18s_ease-in-out_infinite]"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 1.5}s`,
                boxShadow: '0 0 10px hsl(var(--primary) / 0.5)'
              }}
            >
              {/* Connection Lines */}
              {i < 7 && (
                <div 
                  className="absolute w-20 h-0.5 bg-gradient-to-r from-primary/30 to-transparent animate-[pulse_3s_ease-in-out_infinite]"
                  style={{
                    left: '100%',
                    top: '50%',
                    transformOrigin: 'left center',
                    transform: `rotate(${(i * 30) % 360}deg)`
                  }}
                />
              )}
            </div>
          ))}
        </div>
        
        {/* Floating Tech Cards */}
        <div className="absolute inset-0">
          {['AI', 'ML', 'JS', 'TS', 'DB', 'API'].map((tech, i) => (
            <div
              key={tech}
              className="absolute px-3 py-1 bg-card/30 dark:bg-card/20 backdrop-blur-sm border border-primary/20 rounded-lg text-xs font-semibold text-primary animate-[techCard_25s_linear_infinite]"
              style={{
                left: `${10 + i * 15}%`,
                bottom: `${20 + (i % 2) * 40}%`,
                animationDelay: `${i * 3}s`
              }}
            >
              {tech}
            </div>
          ))}
        </div>
        
        {/* Ambient Glow Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_70%)] animate-[ambientGlow_8s_ease-in-out_infinite]" />
      </div>

      <div className="relative z-20 container mx-auto px-6 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left flex flex-col justify-center"
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
          <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
            <div className="absolute inset-0 bg-transparent rounded-2xl overflow-hidden">
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
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;