import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  BookOpen, 
  TrendingUp, 
  ExternalLink,
  GraduationCap,
  Star,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";
import certificationsBg from "@/assets/certifications-bg.jpg";

const Certifications = () => {
  const certifications = [
    {
      title: "Salesforce Administrator",
      issuer: "Salesforce",
      type: "Professional Certification",
      status: "Certified",
      icon: <Award className="w-6 h-6" />,
      color: "text-primary",
      description: "Comprehensive certification covering all aspects of Salesforce administration",
      skills: ["User Management", "Data Management", "Security", "Automation"],
      link: "#"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Internshala",
      type: "Course Certification",
      status: "In Progress",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-secondary",
      description: "Complete full-stack development course covering MERN stack",
      skills: ["React", "Node.js", "MongoDB", "Express.js"],
      link: "#"
    }
  ];

  const trailheadStats = [
    {
      label: "Trails Completed",
      value: "46",
      icon: <TrendingUp className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      label: "Badges Earned",
      value: "203",
      icon: <Trophy className="w-5 h-5" />,
      color: "text-secondary"
    },
    {
      label: "Points Earned",
      value: "116,825",
      icon: <Star className="w-5 h-5" />,
      color: "text-accent"
    }
  ];

  const learningPath = [
    {
      title: "Computer Science Engineering",
      institution: "Sipna College of Engineering and Technology",
      year: "2024",
      type: "Bachelor's Degree",
      status: "Completed",
      description: "Comprehensive study of computer science fundamentals, programming, and software engineering"
    },
    {
      title: "GeekStreak 2024 Challenge",
      institution: "GeeksforGeeks",
      year: "2024",
      type: "100 Days Challenge",
      status: "Active",
      description: "Daily coding challenge improving problem-solving skills in Java and JavaScript"
    },
    {
      title: "Cybersecurity Fundamentals",
      institution: "Self Learning",
      year: "2024",
      type: "Ongoing Education",
      status: "In Progress",
      description: "Exploring ethical hacking, network security, and cybersecurity best practices"
    },
    {
      title: "AI/ML Specialization",
      institution: "Various Platforms",
      year: "2024",
      type: "Skill Development",
      status: "In Progress",
      description: "Learning machine learning algorithms, neural networks, and AI applications"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${certificationsBg})` }}
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
            Learning & Growth
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </motion.div>

        {/* Professional Certifications */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift enhanced-card border-0 shadow-lg bg-card/50 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${cert.color} group-hover:scale-110 transition-transform duration-300`}>
                      {cert.icon}
                    </div>
                    <Badge className={
                      cert.status === "Certified" 
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-accent/10 text-accent border-accent/20"
                    }>
                      {cert.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">{cert.title}</CardTitle>
                  <p className="text-muted-foreground">
                    {cert.issuer} • {cert.type}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cert.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Certificate
                    </a>
                  </Button>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trailhead Stats */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Salesforce Trailhead Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trailheadStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm hover-lift particles-bg">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full bg-primary/10 ${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Educational Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {learningPath.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift enhanced-card border-0 shadow-lg bg-card/50 backdrop-blur-sm group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">
                        {item.institution} • {item.year}
                      </p>
                      <Badge 
                        variant="secondary" 
                        className={
                          item.status === "Completed" 
                            ? "bg-success/10 text-success border-success/20"
                            : item.status === "Active"
                            ? "bg-primary/10 text-primary border-primary/20"
                            : "bg-accent/10 text-accent border-accent/20"
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="ml-4">
                      {item.type}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm particles-bg hover-lift">
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4 float" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground">
                "In the rapidly evolving world of technology, learning never stops. Every challenge 
                is an opportunity to grow, every certification is a step forward, and every project 
                is a chance to apply new knowledge."
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;