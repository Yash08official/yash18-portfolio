import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Code, Target } from "lucide-react";
import { motion } from "framer-motion";
import codeBg from "@/assets/code-bg.jpg";

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Specialized in MERN stack with expertise in modern web technologies"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Computer Science Graduate",
      description: "Bachelor's degree from Sipna College of Engineering and Technology (2024)"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Multi-Domain Explorer",
      description: "Currently exploring Cybersecurity, AI/ML, and Cloud Technologies"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Passionate about solving real-world problems through innovative software solutions"
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden glow-orbs">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${codeBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      {/* Additional Glowing Elements */}
      <div className="glow-orbs-center" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Know <span className="text-gradient">Yash Wasankar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for technology, clean code, and innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
                alt="Modern development workspace"
                className="rounded-2xl shadow-elegant hover-lift w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-secondary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg p-3 float">
                <p className="text-sm font-medium">💻 TypeScript & Blockchain Developer</p>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-lg">⚡</span>
              </div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="prose prose-lg max-w-none text-foreground">
              <p className="text-lg leading-relaxed">
                Hello! I'm <span className="text-primary font-semibold">Yash Wasankar</span>, 
                a passionate Full Stack MERN Developer with a strong foundation in computer science 
                and an insatiable curiosity for emerging technologies.
              </p>
              
              <p className="text-lg leading-relaxed">
                My journey in technology began during my Computer Science Engineering studies at 
                <span className="text-secondary font-semibold"> Sipna College of Engineering and Technology</span>, 
                where I graduated in 2024. Since then, I've been on an exciting path of continuous learning 
                and growth.
              </p>

              <p className="text-lg leading-relaxed">
                What drives me is the ability to transform ideas into reality through code. I believe in 
                writing clean, efficient, and maintainable code that not only solves problems but also 
                creates meaningful user experiences. My expertise spans across the MERN stack, Java, 
                and Salesforce, while I'm actively exploring the fascinating worlds of 
                <span className="text-accent font-semibold"> Cybersecurity, AI/ML, and Cloud Computing</span>.
              </p>

              <div className="flex flex-wrap gap-2 mt-6">
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">MERN Stack</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">TypeScript</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Java</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Salesforce</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Blockchain</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Smart Contracts</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Cybersecurity</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">AI/ML</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors hover:scale-105">Cloud Computing</Badge>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift enhanced-card border-0 shadow-md glass-morphism backdrop-blur-sm group magic-hover shimmer">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 floating-icon">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{highlight.title}</h3>
                        <p className="text-muted-foreground">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Personal Philosophy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto border-0 glass-morphism backdrop-blur-sm particles-bg hover-lift magic-hover animated-gradient">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                "Technology is best when it brings people together and solves real problems. 
                Every line of code I write is a step towards creating a better digital world."
              </blockquote>
              <cite className="text-muted-foreground">— Yash Wasankar</cite>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;