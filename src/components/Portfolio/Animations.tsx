import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThreeJsScene from "@/components/animations/ThreeJsScene";
import LottieAnimation from "@/components/animations/LottieAnimation";
import BabylonJsScene from "@/components/animations/BabylonJsScene";
import { Sparkles, Zap, Cpu } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
};

const Animations = () => {
  const animations = [
    {
      title: "Three.js Animation",
      description: "Interactive 3D graphics with React Three Fiber",
      icon: <Cpu className="w-6 h-6" />,
      component: <ThreeJsScene />,
      technologies: ["Three.js", "React Three Fiber", "React Three Drei"],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Lottie Animation",
      description: "Smooth vector animations for web interfaces",
      icon: <Sparkles className="w-6 h-6" />,
      component: <LottieAnimation />,
      technologies: ["Lottie", "After Effects", "JSON"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Babylon.js Scene",
      description: "Advanced 3D rendering engine for immersive experiences",
      icon: <Zap className="w-6 h-6" />,
      component: <BabylonJsScene />,
      technologies: ["Babylon.js", "WebGL", "3D Graphics"],
      color: "from-green-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="animations" className="py-20 relative">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants}>
            <Badge variant="outline" className="mb-4 hover:bg-primary hover:text-primary-foreground transition-colors">
              Animation Showcase
            </Badge>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Interactive Animations
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the boundaries of web animation with cutting-edge libraries and frameworks. 
            From 3D graphics to smooth vector animations, bringing interfaces to life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {animations.map((animation, index) => (
            <motion.div key={animation.title} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader className="text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-r ${animation.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {animation.icon}
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                    {animation.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {animation.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Animation Component */}
                  <div className="group-hover:scale-[1.02] transition-transform duration-300">
                    {animation.component}
                  </div>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {animation.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 backdrop-blur-sm border">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Ready to Animate Your Ideas?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with stunning animations and interactive experiences.
            </p>
            <div className="flex justify-center gap-4">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Animations;