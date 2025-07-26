import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Heart, Code, Target } from "lucide-react";

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get to Know <span className="text-gradient">Yash Wasankar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with a love for technology, clean code, and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
                alt="Modern development workspace"
                className="rounded-2xl shadow-elegant hover-lift w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-lg p-3">
                <p className="text-sm font-medium">💻 Clean Code Enthusiast</p>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="space-y-6 order-1 lg:order-2">
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
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">MERN Stack</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Java</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Salesforce</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Blockchain</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Cybersecurity</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">AI/ML</Badge>
                <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors">Cloud Computing</Badge>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover-lift border-0 shadow-md bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {highlight.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <blockquote className="text-xl md:text-2xl font-medium text-foreground italic mb-4">
                "Technology is best when it brings people together and solves real problems. 
                Every line of code I write is a step towards creating a better digital world."
              </blockquote>
              <cite className="text-muted-foreground">— Yash Wasankar</cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;