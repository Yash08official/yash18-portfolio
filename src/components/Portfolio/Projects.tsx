import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, BookOpen, Zap, Brain, Hospital, Calculator, Cloud, Shield } from "lucide-react";
import { motion } from "framer-motion";
import projectsBg from "@/assets/projects-bg.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Career Sync",
      description: "A comprehensive MERN stack application for career guidance and job matching. Published in IJRASET journal, featuring advanced algorithms for career recommendations.",
      icon: <Zap className="w-6 h-6" />,
      tech: ["React", "Node.js", "MongoDB", "Express.js", "JWT"],
      category: "Full Stack",
      status: "Published",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather application with interactive maps, detailed forecasts, and location-based services. Features beautiful UI with smooth animations.",
      icon: <Cloud className="w-6 h-6" />,
      tech: ["React", "API Integration", "Tailwind CSS", "Chart.js"],
      category: "Frontend",
      status: "Live",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Social Media Sentiment Analysis",
      description: "AI/ML project that analyzes social media posts to determine sentiment patterns. Uses NLP techniques and machine learning algorithms for accurate predictions.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "TensorFlow", "NLP", "Pandas", "Scikit-learn"],
      category: "AI/ML",
      status: "Completed",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Virtual Assistant (VK)",
      description: "Personal AI assistant with voice recognition, task automation, and smart responses. Integrated with various APIs for enhanced functionality.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "Speech Recognition", "API Integration", "AI"],
      category: "AI/Python",
      status: "Active",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Hospital Management System",
      description: "Salesforce-based comprehensive hospital management solution with patient records, appointment scheduling, and staff management features.",
      icon: <Hospital className="w-6 h-6" />,
      tech: ["Salesforce", "Apex", "Lightning", "SOQL", "Flows"],
      category: "Salesforce",
      status: "Enterprise",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Book Discovery Website",
      description: "Interactive book discovery platform with search functionality, reviews, and reading recommendations. Features clean design and smooth user experience.",
      icon: <BookOpen className="w-6 h-6" />,
      tech: ["HTML", "CSS", "JavaScript", "API", "Bootstrap"],
      category: "Frontend",
      status: "Live",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Java Calculator & Games",
      description: "Collection of Java applications including advanced calculator with scientific functions and interactive games with swing GUI components.",
      icon: <Calculator className="w-6 h-6" />,
      tech: ["Java", "Swing", "AWT", "OOP", "Data Structures"],
      category: "Desktop",
      status: "Completed",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Blockchain Portfolio Tracker",
      description: "Decentralized application for tracking cryptocurrency portfolios with real-time price updates and smart contract integration.",
      icon: <Zap className="w-6 h-6" />,
      tech: ["Solidity", "Web3.js", "React", "TypeScript", "Ethereum"],
      category: "Blockchain",
      status: "Development",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "TypeScript Task Manager",
      description: "Modern task management application built with TypeScript, featuring advanced type safety and clean architecture patterns.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["TypeScript", "React", "Node.js", "Prisma", "PostgreSQL"],
      category: "Full Stack",
      status: "Live",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Smart Contract Voting System",
      description: "Transparent voting system using blockchain technology with smart contracts for secure and immutable vote recording.",
      icon: <Shield className="w-6 h-6" />,
      tech: ["Solidity", "Hardhat", "React", "Web3.js", "IPFS"],
      category: "Blockchain",
      status: "Completed",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      icon: <Cloud className="w-6 h-6" />,
      tech: ["MERN", "TypeScript", "Stripe", "Redux", "AWS"],
      category: "Full Stack",
      status: "Enterprise",
      github: "https://github.com/Yash08official",
      live: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Scalable chat application with real-time messaging, file sharing, and video call functionality using WebRTC.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Socket.io", "TypeScript", "WebRTC", "Redis", "Docker"],
      category: "Full Stack",
      status: "Live",
      github: "https://github.com/Yash08official",
      live: "#"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-success/10 text-success border-success/20";
      case "Published": return "bg-primary/10 text-primary border-primary/20";
      case "Active": return "bg-accent/10 text-accent border-accent/20";
      case "Development": return "bg-orange-500/10 text-orange-500 border-orange-500/20";
      case "Enterprise": return "bg-secondary/10 text-secondary border-secondary/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${projectsBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/95 to-background/90" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and passion for creating innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group hover-lift card-glow border-0 shadow-lg bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/photo-${
                    index % 6 === 0 ? '1488590528505-98d2b5aba04b' : 
                    index % 6 === 1 ? '1487058792275-0ad4aaf24ca7' : 
                    index % 6 === 2 ? '1483058712412-4245e9b90334' :
                    index % 6 === 3 ? '1498050108023-c5249f4df085' :
                    index % 6 === 4 ? '1581090464777-f3220bbe1b8b' :
                    '1519389950473-47ba0277781c'
                  }?auto=format&fit=crop&w=400&q=80`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white">
                    {project.icon}
                  </div>
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 group/btn border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary-dark hover:to-secondary border-0"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="group px-8 py-6 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <a href="https://github.com/Yash08official" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;