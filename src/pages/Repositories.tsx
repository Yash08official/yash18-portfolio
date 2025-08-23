import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Star, GitFork, Calendar, MapPin, Users, UserPlus } from "lucide-react";
import { useState } from "react";

const Repositories = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");

  const languages = ["All", "TypeScript", "JavaScript", "Java", "HTML", "CSS", "C++", "SQL"];

  const profileStats = {
    name: "Yash Wasankar",
    username: "Yash08official",
    bio: "I am Web Developer",
    location: "Amravati, Maharashtra",
    followers: 2,
    following: 1,
    linkedin: "in/yash-wasankar-842886219",
    naukri: "https://www.naukri.com/mnjuser/profile"
  };

  const repositories = [
    {
      name: "yash18-portfolio",
      description: "Modern, interactive portfolio website showcasing full-stack development skills with 3D animations, built using React, TypeScript, Tailwind CSS, and Three.js.",
      language: "TypeScript",
      license: "MIT License",
      updatedAt: "2 minutes ago",
      isPublic: true,
      technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js", "3D Animation"],
      featured: true
    },
    {
      name: "weather-app",
      description: "A responsive and modern weather forecast application built using HTML, CSS, and JavaScript. This app fetches real-time weather data using the OpenWeatherMap API and displays temperature, humidity, ...",
      language: "CSS",
      updatedAt: "May 8",
      isPublic: true,
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
      featured: true
    },
    {
      name: "task-manager",
      description: "A stylish and responsive to-do list web app built with HTML, CSS, and JavaScript. The app allows users to add, mark as completed, and delete tasks with persistent storage using localStorage.",
      language: "HTML",
      updatedAt: "May 8",
      isPublic: true,
      technologies: ["HTML", "CSS", "JavaScript", "localStorage"],
      featured: true
    },
    {
      name: "GFG-21-days-Challenge",
      description: "This repository contains daily solutions for the #geekstreak2024 challenge, with problems solved in both Java and JavaScript to enhance consistency and problem-solving skills.",
      language: "Java",
      updatedAt: "Nov 12, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["Java", "JavaScript", "DSA", "Problem Solving"]
    },
    {
      name: "LeetCode-Daily-Solutions",
      description: "This repository contains my daily solutions to LeetCode problems, all written in Java and also JavaScript, to improve my coding skills and prepare for technical interviews.",
      language: "Java",
      updatedAt: "Nov 12, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["Java", "JavaScript", "LeetCode", "Algorithms"]
    },
    {
      name: "Vk-ai-assistant",
      description: "Meet Vk, your sleek and interactive virtual assistant built using HTML, CSS, and JavaScript. Vk responds to user queries, opens applications, and provides real-time information.",
      language: "JavaScript",
      updatedAt: "Oct 9, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["JavaScript", "CSS", "HTML", "AI Assistant"]
    },
    {
      name: "Java-Course-Updated-2024-",
      description: "This repository serves as a personal knowledge base, where I collect notes, code examples, and projects that I've worked on during my Java learning journey. I'm excited to share my progress and exp...",
      language: "Java",
      updatedAt: "Oct 9, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["Java", "Learning", "Notes", "Examples"]
    },
    {
      name: "Book-Website",
      description: "Explore a curated selection of books and authors on our responsive book-themed website.",
      language: "CSS",
      updatedAt: "Oct 4, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["JavaScript", "CSS", "HTML", "Responsive Design"]
    },
    {
      name: "JavaScript-part-2_DSA",
      description: "This repository contains my notes, implementations, and projects related to Data Structures and Algorithms (DSA) in JavaScript.",
      language: "JavaScript",
      updatedAt: "Oct 2, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["JavaScript", "DSA", "Algorithms", "Data Structures"]
    },
    {
      name: "Lagunitas-Website",
      description: "A modern promotional website for Lagunitas beer brand featuring smooth scrolling, animations, and interactive elements.",
      language: "CSS",
      updatedAt: "Oct 1, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["JavaScript", "CSS", "HTML", "Animations"]
    },
    {
      name: "Career-Sync-Integrated-Training-and-Placement-Platform",
      description: "Career-Sync A web app for career development and synchronization.",
      language: "JavaScript",
      updatedAt: "Sep 25, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["JavaScript", "HTML", "Tailwind CSS", "Career Platform"]
    },
    {
      name: "Weather-Forecast-Application",
      description: "A responsive Weather Forecast Application built with JavaScript, HTML, and CSS. It allows users to search weather by city name, view current conditions, and access a 5-day forecast.",
      language: "JavaScript",
      updatedAt: "Sep 24, 2024",
      isPublic: true,
      technologies: ["JavaScript", "Tailwind CSS", "Weather API"]
    },
    {
      name: "My-SQL-Solutions",
      description: "A collection of my daily SQL solutions to 50 LeetCode problems, covering query optimization, database design, and data analysis, to improve my coding skills and showcase my progress.",
      language: "SQL",
      updatedAt: "Sep 19, 2024",
      isPublic: true,
      stars: 1,
      technologies: ["SQL", "Database", "LeetCode", "Query Optimization"]
    },
    {
      name: "data-structures-algorithms",
      description: "Data structures and algorithms are fundamental concepts in computer science and programming.Data structures are ways of organizing and storing data, and algorithms are step-by-step procedures for s...",
      language: "C++",
      updatedAt: "Nov 4, 2024",
      isPublic: true,
      isForked: true,
      technologies: ["C++", "DSA", "Algorithms", "Data Structures"]
    }
  ];

  const filteredRepos = selectedLanguage === "All" 
    ? repositories 
    : repositories.filter(repo => repo.language === selectedLanguage);

  const featuredRepos = repositories.filter(repo => repo.featured);

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
            GitHub Repositories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my open-source projects and development journey across various technologies and domains.
          </p>
        </motion.div>

        {/* Profile Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="mb-12 p-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">YW</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold mb-2">{profileStats.name}</h2>
                <p className="text-muted-foreground mb-2">@{profileStats.username}</p>
                <p className="text-muted-foreground mb-4">{profileStats.bio}</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {profileStats.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {profileStats.followers} followers
                  </div>
                  <div className="flex items-center gap-1">
                    <UserPlus className="w-4 h-4" />
                    {profileStats.following} following
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a href={`https://linkedin.com/${profileStats.linkedin}`} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com/Yash08official" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Featured Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Repositories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRepos.map((repo, index) => (
              <Card key={repo.name} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {repo.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {repo.language}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm line-clamp-3">
                    {repo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      {repo.stars && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stars}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {repo.updatedAt}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={`https://github.com/Yash08official/${repo.name}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Language Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {languages.map((language) => (
            <Button
              key={language}
              variant={selectedLanguage === language ? "default" : "outline"}
              onClick={() => setSelectedLanguage(language)}
              size="sm"
            >
              {language}
            </Button>
          ))}
        </motion.div>

        {/* All Repositories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">All Repositories</h2>
          <div className="grid gap-6">
            {filteredRepos.map((repo, index) => (
              <Card key={repo.name} className="p-6 hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {repo.language}
                        </Badge>
                        {repo.isForked && (
                          <Badge variant="secondary" className="text-xs">
                            <GitFork className="w-3 h-3 mr-1" />
                            Forked
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-3 line-clamp-2">
                      {repo.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {repo.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    {repo.stars && (
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {repo.stars}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {repo.updatedAt}
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={`https://github.com/Yash08official/${repo.name}`} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Repositories;