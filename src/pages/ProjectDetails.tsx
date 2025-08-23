import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const projects = {
    "1": {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL",
      longDescription: "This comprehensive e-commerce platform features user authentication, product catalog, shopping cart, payment processing, and admin dashboard. Built with modern technologies and best practices, it delivers a seamless shopping experience.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: [
        "User Authentication & Authorization",
        "Product Catalog with Search & Filters",
        "Shopping Cart & Wishlist",
        "Secure Payment Processing",
        "Admin Dashboard",
        "Order Management",
        "Responsive Design",
        "SEO Optimized"
      ],
      challenges: "Implementing real-time inventory management and ensuring secure payment processing were key challenges overcome during development.",
      github: "#",
      live: "#",
      category: "Full Stack"
    },
    "2": {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates",
      longDescription: "A modern task management solution that enables teams to collaborate effectively with real-time updates, drag-and-drop functionality, and comprehensive project tracking.",
      image: "/placeholder.svg",
      technologies: ["React", "Socket.io", "Express", "MongoDB", "Redux"],
      features: [
        "Real-time Collaboration",
        "Drag & Drop Interface",
        "Project Templates",
        "Time Tracking",
        "Team Management",
        "File Attachments",
        "Progress Analytics",
        "Mobile Responsive"
      ],
      challenges: "Implementing real-time synchronization across multiple users while maintaining data consistency was the primary technical challenge.",
      github: "#",
      live: "#",
      category: "Web App"
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button 
            onClick={() => navigate("/")} 
            variant="ghost" 
            className="mb-8"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Portfolio
          </Button>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Badge className="mb-4">{project.category}</Badge>
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.longDescription}
                </p>

                <div className="flex gap-4 mb-8">
                  <Button asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 w-4 h-4" />
                      View Code
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card>
              <CardHeader>
                <CardTitle>Technologies Used</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Development Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{project.challenges}</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;