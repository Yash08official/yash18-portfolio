import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink,
  Heart,
  ArrowUp,
  Code,
  Coffee
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Yash08official",
      icon: <Github className="w-5 h-5" />
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/yash-wasankar-842886219/",
      icon: <Linkedin className="w-5 h-5" />
    },
    {
      name: "Email",
      href: "mailto:yashwasankar008@gmail.com",
      icon: <Mail className="w-5 h-5" />
    },
    {
      name: "LeetCode",
      href: "https://leetcode.com/yash08official",
      icon: <ExternalLink className="w-5 h-5" />
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Journey", href: "#journey" },
    { name: "Contact", href: "#contact" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gradient">YW</span>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Full Stack Developer
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Passionate MERN stack developer creating innovative solutions with clean code. 
                Currently exploring Cybersecurity, AI/ML, and Cloud technologies while building 
                meaningful digital experiences.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <Code className="w-4 h-4" />
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500" />
                <span>and lots of</span>
                <Coffee className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">
                Built with React, TypeScript, Tailwind CSS, and Framer Motion
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 animated-underline"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                    {social.name}
                  </a>
                ))}
              </div>

              {/* Current Status */}
              <div className="mt-6 p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Yash Wasankar. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Designed and developed with passion in Pune, India
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-xs text-muted-foreground">
                "Code. Create. Connect."
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground border-primary/20"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 rounded-full p-3 shadow-lg bg-primary hover:bg-primary-dark z-40 md:hidden"
        size="sm"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;