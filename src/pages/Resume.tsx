import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: "Led development of enterprise web applications using React, Node.js, and cloud technologies. Managed a team of 5 developers and improved application performance by 40%.",
      achievements: [
        "Architected and delivered 3 major client projects",
        "Reduced deployment time by 60% through CI/CD implementation",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      period: "2020 - 2022",
      description: "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      achievements: [
        "Built 15+ responsive websites and web applications",
        "Improved page load speeds by 35% through optimization",
        "Implemented modern CSS frameworks and design systems"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      period: "2016 - 2020",
      details: "Graduated with honors. Specialized in web technologies and software engineering."
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "Java",
    "HTML5", "CSS3", "Tailwind CSS", "MongoDB", "PostgreSQL", "MySQL",
    "AWS", "Docker", "Git", "Agile/Scrum", "REST APIs", "GraphQL"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Resume
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Download my complete resume or view the highlights below
          </p>
          <Button size="lg" className="gap-2">
            <Download className="w-4 h-4" />
            Download PDF Resume
          </Button>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>yash@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Professional Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {experience.map((job, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="mb-2">
                    <h3 className="text-lg font-semibold">{job.title}</h3>
                    <p className="text-primary font-medium">{job.company}</p>
                    <p className="text-sm text-muted-foreground">{job.period}</p>
                  </div>
                  <p className="text-muted-foreground mb-3">{job.description}</p>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <h3 className="text-lg font-semibold">{edu.degree}</h3>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-muted-foreground">{edu.details}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;