import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Server, 
  Palette, 
  Cloud, 
  Shield, 
  Cpu,
  Smartphone
} from "lucide-react";
import { useEffect, useState } from "react";

const Skills = () => {
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({});

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML5", level: 95, icon: "🔶" },
        { name: "CSS3", level: 88, icon: "🎨" },
        { name: "Tailwind CSS", level: 85, icon: "💨" }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      color: "text-secondary",
      skills: [
        { name: "Node.js", level: 80, icon: "🟢" },
        { name: "Express.js", level: 78, icon: "🚂" },
        { name: "Java", level: 75, icon: "☕" },
        { name: "REST APIs", level: 82, icon: "🔌" },
        { name: "Authentication", level: 75, icon: "🔐" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 70, icon: "🐬" },
        { name: "Google Cloud", level: 65, icon: "☁️" },
        { name: "Azure", level: 60, icon: "🔷" },
        { name: "Firebase", level: 70, icon: "🔥" }
      ]
    },
    {
      title: "Salesforce",
      icon: <Cloud className="w-6 h-6" />,
      color: "text-primary",
      skills: [
        { name: "Salesforce Admin", level: 85, icon: "⚡" },
        { name: "Apex", level: 70, icon: "🏔️" },
        { name: "Lightning", level: 75, icon: "⚡" },
        { name: "SOQL", level: 72, icon: "🔍" },
        { name: "Flows", level: 68, icon: "🌊" }
      ]
    },
    {
      title: "Emerging Technologies",
      icon: <Cpu className="w-6 h-6" />,
      color: "text-secondary",
      skills: [
        { name: "AI/ML", level: 60, icon: "🤖" },
        { name: "Python", level: 70, icon: "🐍" },
        { name: "Cybersecurity", level: 55, icon: "🛡️" },
        { name: "Data Analysis", level: 65, icon: "📊" },
        { name: "TensorFlow", level: 58, icon: "🧠" }
      ]
    },
    {
      title: "Tools & Others",
      icon: <Palette className="w-6 h-6" />,
      color: "text-accent",
      skills: [
        { name: "Git & GitHub", level: 85, icon: "📚" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Postman", level: 80, icon: "📮" },
        { name: "Figma", level: 65, icon: "🎨" },
        { name: "Docker", level: 60, icon: "🐳" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const progress: Record<string, number> = {};
      skillCategories.forEach(category => {
        category.skills.forEach(skill => {
          progress[skill.name] = skill.level;
        });
      });
      setAnimatedProgress(progress);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Technical Expertise
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-lg bg-primary/10 ${category.color}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2 font-medium">
                        <span className="text-lg">{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress h-2"
                        style={{ 
                          width: `${animatedProgress[skill.name] || 0}%`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Highlights */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">6+</div>
            <p className="text-muted-foreground">Major Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">15+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">3+</div>
            <p className="text-muted-foreground">Domains</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">GitHub Commits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;