import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Globe, Database, Zap, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full Stack Web Development",
      description: "Complete web application development from frontend to backend, including database design and API development.",
      features: ["React/Next.js Development", "Node.js Backend", "Database Design", "API Integration"],
      price: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Frontend Development",
      description: "Modern, responsive user interfaces that work seamlessly across all devices and browsers.",
      features: ["React/Vue.js", "Mobile-First Design", "Performance Optimization", "Cross-Browser Testing"],
      price: "Starting at $3,000",
      timeline: "2-4 weeks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend & API Development",
      description: "Robust backend solutions with RESTful APIs, authentication, and database management.",
      features: ["REST/GraphQL APIs", "Authentication Systems", "Database Optimization", "Cloud Deployment"],
      price: "Starting at $4,000",
      timeline: "3-6 weeks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Improve your existing application's performance, speed, and user experience.",
      features: ["Code Optimization", "Bundle Size Reduction", "Loading Speed Improvement", "SEO Enhancement"],
      price: "Starting at $2,000",
      timeline: "1-3 weeks"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Code Review & Consulting",
      description: "Expert code review and technical consulting to improve code quality and architecture.",
      features: ["Code Audit", "Architecture Review", "Best Practices", "Team Training"],
      price: "Starting at $150/hour",
      timeline: "Flexible"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ongoing maintenance, updates, and technical support for your web applications.",
      features: ["Bug Fixes", "Security Updates", "Feature Additions", "Technical Support"],
      price: "Starting at $1,000/month",
      timeline: "Ongoing"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We discuss your requirements, goals, and timeline to create a detailed project plan."
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Create wireframes, mockups, and technical architecture for your project."
    },
    {
      step: "03",
      title: "Development",
      description: "Build your application using modern technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Thorough testing and deployment to ensure everything works perfectly."
    },
    {
      step: "05",
      title: "Launch & Support",
      description: "Launch your project and provide ongoing support and maintenance."
    }
  ];

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
            Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional web development services to bring your ideas to life with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2">
                    <Badge variant="outline" className="w-full justify-center">
                      {service.price}
                    </Badge>
                    <p className="text-sm text-muted-foreground text-center">
                      Timeline: {service.timeline}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">My Process</h2>
          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold text-lg">{step.step}</span>
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and how I can help bring your vision to life with modern web technologies.
            </p>
            <Button size="lg" asChild>
              <a href="/#contact">Get In Touch</a>
            </Button>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;