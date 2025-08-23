import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications with TypeScript, including component architecture and state management.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      tags: ["React", "TypeScript", "Architecture"],
    },
    {
      id: 2,
      title: "Modern CSS Techniques for Better Performance",
      excerpt: "Explore advanced CSS features like container queries, cascade layers, and modern layout techniques for optimal performance.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "CSS",
      tags: ["CSS", "Performance", "Web Development"],
    },
    {
      id: 3,
      title: "Introduction to Three.js and WebGL",
      excerpt: "Getting started with 3D graphics on the web using Three.js, from basic concepts to interactive experiences.",
      date: "2024-01-01",
      readTime: "12 min read",
      category: "3D Graphics",
      tags: ["Three.js", "WebGL", "3D"],
    },
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
            Blog & Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on web development, technology, and career growth.
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.readTime}
                    </div>
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                  <CardTitle className="text-2xl hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="ghost" className="group">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;