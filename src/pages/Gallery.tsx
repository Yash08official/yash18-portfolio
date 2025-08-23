import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile", "UI/UX", "3D Graphics", "Animations"];

  const galleryItems = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      category: "Web Apps",
      image: "/placeholder.svg",
      description: "Modern admin dashboard for e-commerce management",
      tags: ["React", "TypeScript", "Charts"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile",
      image: "/placeholder.svg",
      description: "Secure and user-friendly mobile banking interface",
      tags: ["React Native", "Security", "FinTech"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "UI/UX",
      image: "/placeholder.svg",
      description: "Complete brand identity and design system",
      tags: ["Branding", "Design System", "UI/UX"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "3D Product Showcase",
      category: "3D Graphics",
      image: "/placeholder.svg",
      description: "Interactive 3D product visualization",
      tags: ["Three.js", "WebGL", "3D"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Animated Landing Page",
      category: "Animations",
      image: "/placeholder.svg",
      description: "Creative landing page with smooth animations",
      tags: ["Framer Motion", "GSAP", "CSS"],
      github: "#",
      live: "#"
    },
    {
      id: 6,
      title: "Task Management App",
      category: "Web Apps",
      image: "/placeholder.svg",
      description: "Collaborative task management platform",
      tags: ["React", "Real-time", "Collaboration"],
      github: "#",
      live: "#"
    },
    {
      id: 7,
      title: "Food Delivery App",
      category: "Mobile",
      image: "/placeholder.svg",
      description: "Modern food delivery mobile application",
      tags: ["React Native", "Maps", "Payments"],
      github: "#",
      live: "#"
    },
    {
      id: 8,
      title: "Design System",
      category: "UI/UX",
      image: "/placeholder.svg",
      description: "Comprehensive design system and component library",
      tags: ["Storybook", "Components", "Design"],
      github: "#",
      live: "#"
    },
    {
      id: 9,
      title: "VR Experience",
      category: "3D Graphics",
      image: "/placeholder.svg",
      description: "Immersive virtual reality web experience",
      tags: ["WebXR", "A-Frame", "VR"],
      github: "#",
      live: "#"
    }
  ];

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Project Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my creative work spanning web applications, mobile apps, UI/UX designs, and interactive experiences.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={item.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <ImageIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              Try selecting a different category to see more projects.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;