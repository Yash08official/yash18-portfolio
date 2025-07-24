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
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Learning & Growth
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Learning Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development milestones
          </p>
        </div>

        {/* Professional Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${cert.color}`}>
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
                  <CardTitle className="text-xl">{cert.title}</CardTitle>
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
            ))}
          </div>
        </div>

        {/* Trailhead Stats */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Salesforce Trailhead Journey</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {trailheadStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className={`inline-flex p-4 rounded-full bg-primary/10 ${stat.color} mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Educational Journey</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {learningPath.map((item, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
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
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <Card className="max-w-3xl mx-auto border-0 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
            <CardContent className="p-8">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Continuous Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground">
                "In the rapidly evolving world of technology, learning never stops. Every challenge 
                is an opportunity to grow, every certification is a step forward, and every project 
                is a chance to apply new knowledge."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;