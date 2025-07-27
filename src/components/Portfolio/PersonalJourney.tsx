import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Trophy, 
  Palette, 
  Code, 
  Target,
  ExternalLink,
  Github,
  Calendar,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import journeyBg from "@/assets/journey-bg.jpg";

const PersonalJourney = () => {
  const hobbies = [
    {
      title: "Cricket Enthusiast",
      icon: <Trophy className="w-6 h-6" />,
      color: "text-accent",
      description: "Die-hard fan of Virat Kohli since U-19 WC 2008. Team captain who led the winning team in college championships.",
      achievements: ["College Team Captain", "Championship Winner", "15+ Years Following Cricket"],
      passion: "Following cricket has taught me leadership, strategy, and the importance of teamwork."
    },
    {
      title: "Sketch Artist",
      icon: <Palette className="w-6 h-6" />,
      color: "text-secondary",
      description: "Passionate about creating art through sketching. Won multiple drawing competitions and continuously developing artistic skills.",
      achievements: ["2 Competition Certificates", "Digital Art Exploration", "Portrait Specialization"],
      passion: "Art helps me see the world differently and brings creativity to my technical work."
    }
  ];

  const codingJourney = [
    {
      title: "GeekStreak 2024 Challenge",
      platform: "GeeksforGeeks",
      description: "100 days of consistent coding, solving problems in Java and JavaScript",
      status: "Active",
      progress: "65/100 days",
      icon: <Target className="w-5 h-5" />,
      color: "text-primary"
    },
    {
      title: "LeetCode Problem Solving",
      platform: "LeetCode",
      description: "Regularly solving algorithmic problems to improve problem-solving skills",
      status: "Active",
      progress: "150+ problems",
      icon: <Code className="w-5 h-5" />,
      color: "text-secondary"
    },
    {
      title: "Open Source Contributions",
      platform: "GitHub",
      description: "Contributing to open source projects and sharing solutions with the community",
      status: "Ongoing",
      progress: "Multiple repos",
      icon: <Github className="w-5 h-5" />,
      color: "text-accent"
    }
  ];

  const personalValues = [
    {
      value: "Continuous Learning",
      description: "Always striving to learn new technologies and improve existing skills",
      icon: "📚"
    },
    {
      value: "Code Quality",
      description: "Believing in writing clean, maintainable, and efficient code",
      icon: "✨"
    },
    {
      value: "Team Collaboration",
      description: "Working effectively in teams and contributing to collective success",
      icon: "🤝"
    },
    {
      value: "Problem Solving",
      description: "Approaching challenges with analytical thinking and creative solutions",
      icon: "🧩"
    }
  ];

  return (
    <section id="journey" className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${journeyBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background/95 to-muted/50" />
      
      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Personal Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beyond <span className="text-gradient">Coding</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The hobbies, interests, and values that shape who I am as a person and professional
          </p>
        </motion.div>

        {/* Hobbies & Interests */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Hobbies & Interests</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="hover-lift enhanced-card border-0 shadow-lg bg-card/50 backdrop-blur-sm group">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-primary/10 ${hobby.color} group-hover:scale-110 transition-transform duration-300`}>
                      {hobby.icon}
                    </div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">{hobby.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{hobby.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm uppercase tracking-wide">Achievements</h4>
                    <div className="flex flex-wrap gap-2">
                      {hobby.achievements.map((achievement, achIndex) => (
                        <Badge key={achIndex} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                    <p className="text-sm italic text-muted-foreground">"{hobby.passion}"</p>
                  </div>
                </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coding Journey */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Active Coding Journey</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {codingJourney.map((journey, index) => (
              <Card key={index} className="hover-lift border-0 shadow-lg bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg bg-primary/10 ${journey.color}`}>
                      {journey.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{journey.title}</h4>
                      <p className="text-sm text-muted-foreground">{journey.platform}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{journey.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <Badge className={
                      journey.status === "Active" 
                        ? "bg-success/10 text-success border-success/20"
                        : "bg-primary/10 text-primary border-primary/20"
                    }>
                      {journey.status}
                    </Badge>
                    <span className="text-sm font-medium">{journey.progress}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href="https://github.com/Yash08official" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Profile
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-secondary/20 hover:bg-secondary hover:text-secondary-foreground"
                asChild
              >
                <a href="https://leetcode.com/yash08official" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  LeetCode Profile
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Personal Values */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {personalValues.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-card/50 backdrop-blur-sm hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h4 className="font-semibold text-lg mb-2">{value.value}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Philosophy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-sm particles-bg hover-lift">
            <CardContent className="p-8">
              <motion.div
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Heart className="w-12 h-12 text-primary mx-auto mb-6 float" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "Life is a beautiful blend of passion and purpose. Whether I'm leading a cricket team, 
                creating art, or writing code, I believe in giving my best effort and learning from every 
                experience. My diverse interests help me approach problems from unique angles and bring 
                creativity to everything I do."
              </p>
              <div className="mt-6 flex justify-center">
                <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 px-6 py-2 animate-pulse">
                  Code. Create. Connect. Inspire.
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalJourney;