"use client";
import { ExternalLink, Github, Code2, ShieldCheck, Cpu, Layout, Microscope, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import crmProject from "@/assets/crm-project.webp";
import sahiSaathiProject from "@/assets/sahi-saathi-project.webp";
import candidSuiteProject from "@/assets/candidsuite-project.webp";

interface Project {
  title: string;
  image?: any;
  demoVideoLink?: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  icon?: any;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Wellness - Healthcare Portal",
      description:
        "Secure Patient Health Portal with encrypted document management and real-time health scoring. Engineered PHI-safe systems with end-to-end AES-256 encryption and HIPAA-compliant API interceptors.",
      technologies: [
        "Next.js 14",
        "Node.js (NestJS)",
        "PostgreSQL",
        "HIPAA Compliance",
        "AES-256",
      ],
      icon: <Microscope className="w-12 h-12 text-foreground/40" />,
    },
    {
      title: "Sahi Saathi - Matrimonial Platform",
      image: sahiSaathiProject,
      description:
        "High-performance matrimonial matchmaking engine for religious communities. Features complex filtering, real-time notifications, and high-concurrency member matching algorithms.",
      technologies: [
        "Next.js",
        "ASP.NET",
        "SQL Server",
        "ElasticSearch",
        "Redis",
      ],
    },
    {
      title: "BoatDox - Maritime Transactions",
      demoVideoLink:
        "https://www.youtube.com/embed/PKrwlmEoOIg?si=bAsm8MRiTU4dnckU",
      description:
        "Multi-gateway payment system for high-value vessel deposits and maritime legal documentation. Integrated Stripe and Authorize.net for $1M+ yacht transactions.",
      technologies: [
        "React",
        "Java (Spring Boot)",
        "Stripe",
        "Authorize.net",
        "Docker",
      ],
      demoLink: "https://boatdox.org/",
      icon: <ShieldCheck className="w-12 h-12 text-foreground/40" />,
    },
    {
      title: "Discover Equestrian - 3D Real Estate",
      demoVideoLink:
        "https://www.youtube.com/embed/ubdxx9U9UIQ?si=cH6o2-VrtMhr1OSj",
      description:
        "Immersive 3D estate visualization and high-performance geospatial property search. Leveraged Three.js for interactive 3D property viewports.",
      technologies: [
        "Next.js",
        "Go (Golang)",
        "Three.js",
        "Google Maps API",
        "AWS",
      ],
      demoLink: "https://discover-equestrian.com/home",
      icon: <Layout className="w-12 h-12 text-foreground/40" />,
    },
    {
      title: "Sales CRM - Real-Time Communications",
      image: crmProject,
      description:
        "Drag-and-drop lead pipeline with optimistic UI updates and real-time WhatsApp Business API synchronization using Socket.IO and Python FastAPI.",
      technologies: [
        "Next.js",
        "Python (FastAPI)",
        "Socket.IO",
        "WhatsApp API",
        "Tailwind CSS",
      ],
    },
    {
      title: "CandidSuite - Enterprise ATS",
      image: candidSuiteProject,
      description:
        "Advanced interview pipeline orchestrator with ROI tracking and cross-platform email synchronization via Gmail Bridge and PHP Laravel backend.",
      technologies: [
        "Next.js",
        "PHP (Laravel)",
        "PostgreSQL",
        "Gmail API Integration",
        "Docker",
      ],
      demoLink: "https://candidsuite.com",
    },
    {
      title: "Nuway Roofing - Structural Builder",
      description:
        "Real-time canvas-based structural builder for insurance claim estimation using Konva.js and .NET Core 8. Optimized for complex structural visualizations.",
      technologies: [
        "React",
        ".NET (C# Core 8)",
        "Konva.js",
        "Azure",
      ],
      icon: <Code2 className="w-12 h-12 text-foreground/40" />,
    },
    {
      title: "Core Utilities - WASM Engine",
      description:
        "High-performance client-side encryption and image compression engine using Rust (WASM) and Web Workers for sub-second processing speeds.",
      technologies: [
        "Next.js",
        "Rust (WebAssembly)",
        "Web Workers",
        "Encryption",
      ],
      icon: <Cpu className="w-12 h-12 text-foreground/40" />,
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-section-bg relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="section-heading">Featured Engineering Projects</h2>
          <p className="text-muted-foreground text-lg">
            High-performance web ecosystems and enterprise-grade solutions built for global leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-card group flex flex-col h-full bg-white border border-gray-100/50"
            >
              {/* Project Media Area */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-500">
                {project.image ? (
                   <div className="w-full h-full relative cursor-pointer overflow-hidden">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        width={800}
                        height={450}
                        priority={index < 2}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                   </div>
                ) : project.demoVideoLink ? (
                  <iframe
                      className="w-full h-full object-cover"
                      src={project.demoVideoLink}
                      title={project.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
                    {/* Animated Geometric Background */}
                    <div className="absolute inset-0 opacity-5">
                       <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center animate-float">
                      {project.icon || <Code2 className="w-12 h-12 text-foreground/40" />}
                      <span className="mt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30">System Architecture</span>
                    </div>
                    
                    {/* Glass Overlay Tag */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/60 backdrop-blur-md border border-white/40 text-[10px] font-bold text-foreground/60 uppercase">
                      In Production
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow space-y-4">
                <div className="flex justify-between items-start">
                   <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.demoLink && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-secondary rounded-full hover:bg-accent hover:text-white transition-all transform hover:rotate-[-45deg]"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                     <span className="px-3 py-1 bg-secondary/80 text-muted-foreground border border-border/50 rounded-full text-xs font-bold">
                       +{project.technologies.length - 5}
                     </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to Action at bottom of projects */}
        <div className="mt-16 text-center">
            <a href="https://github.com/Yashvaddi" target="_blank" rel="noopener noreferrer" className="hero-button inline-flex items-center shadow-lg hover:shadow-xl">
               <Github className="w-5 h-5 mr-2"/>
               View More on GitHub
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
