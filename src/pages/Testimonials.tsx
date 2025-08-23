import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      image: "/placeholder.svg",
      rating: 5,
      text: "Yash delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
      project: "E-Commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      image: "/placeholder.svg",
      rating: 5,
      text: "Working with Yash was a game-changer for our startup. He built our web application from scratch and delivered it on time and within budget. Highly recommended!",
      project: "Web Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      image: "/placeholder.svg",
      rating: 5,
      text: "The website Yash created for us is not only beautiful but also performs excellently. Our page load times improved by 60% and our conversion rates increased significantly.",
      project: "Agency Website"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO",
      company: "FinTech Solutions",
      image: "/placeholder.svg",
      rating: 5,
      text: "Yash's expertise in both frontend and backend development was invaluable. He built a secure, scalable platform that handles our complex financial data with ease.",
      project: "Financial Dashboard"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Founder",
      company: "EduTech Platform",
      image: "/placeholder.svg",
      rating: 5,
      text: "The learning management system Yash built for us has transformed how we deliver online education. The user experience is intuitive and the performance is outstanding.",
      project: "LMS Platform"
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Operations Manager",
      company: "Logistics Pro",
      image: "/placeholder.svg",
      rating: 5,
      text: "Yash modernized our legacy system and improved our operational efficiency by 40%. His problem-solving skills and communication throughout the project were excellent.",
      project: "System Modernization"
    }
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
    { number: "5★", label: "Average Rating" },
    { number: "98%", label: "Client Satisfaction" }
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
            Client Testimonials
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                      <Badge variant="outline" className="mt-2 text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Them?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's work together to create something amazing and join the list of satisfied clients.
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Start Your Project
            </a>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;