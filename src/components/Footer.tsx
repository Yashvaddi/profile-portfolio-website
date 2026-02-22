"use client";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gray-100 bg-white py-12 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="text-xl font-bold tracking-tight text-foreground">
            Yash Vaddi
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Resume", href: "/resume" },
              { label: "Contact", href: "#contact" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="hover:text-primary transition-colors font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Yashvaddi"
              className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 text-muted-foreground"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/yash-vaddi-86a54b22a/"
              className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 text-muted-foreground"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${"yashvaddi" + "@" + "gmail.com"}?subject=Senior%20Frontend%20Engineer%20Inquiry`}
              className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:scale-110 text-muted-foreground"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* SEO Text */}
          <div className="max-w-2xl mx-auto text-sm text-muted-foreground leading-relaxed">
            Architecting next-generation web ecosystems. Specializing in Micro Frontends and
            polyglot backend orchestration for global enterprise leaders.
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Yash Vaddi. Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>using Next.js, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/80 transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: "0 4px 16px hsl(220 85% 45% / 0.3)" }}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
};

export default Footer;
