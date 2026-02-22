"use client";
import { useEffect, useRef, useState } from "react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  emoji: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Orchestration & MFE",
    emoji: "🏗️",
    skills: [
      { name: "Module Federation", level: 95 },
      { name: "Micro Frontends", level: 98 },
      { name: "Docker & Containerization", level: 92 },
      { name: "Kubernetes (K8s)", level: 85 },
      { name: "Nginx Reverse Proxy", level: 90 },
    ],
  },
  {
    title: "Cloud & Infrastructure",
    emoji: "☁️",
    skills: [
      { name: "AWS (S3, EC2, CloudFront)", level: 88 },
      { name: "Cloud Architecture", level: 90 },
      { name: "CI/CD (GitHub Actions)", level: 92 },
      { name: "Vercel / Netlify", level: 95 },
      { name: "Firebase / Supabase", level: 90 },
    ],
  },
  {
    title: "Frontend Mastery",
    emoji: "⚛️",
    skills: [
      { name: "Next.js 14", level: 96 },
      { name: "React (Advanced)", level: 95 },
      { name: "TypeScript", level: 91 },
      { name: "Redux Toolkit", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    title: "Backend Sync",
    emoji: "⚙️",
    skills: [
      { name: "Node.js (NestJS)", level: 90 },
      { name: "Python (FastAPI)", level: 85 },
      { name: "Go (Golang)", level: 80 },
      { name: ".NET Core", level: 85 },
      { name: "PHP (Laravel)", level: 80 },
    ],
  },
  {
    title: "Real-Time & Performance",
    emoji: "⚡",
    skills: [
      { name: "Socket.IO", level: 90 },
      { name: "WebRTC", level: 85 },
      { name: "Web Workers", level: 90 },
      { name: "WASM (Rust)", level: 80 },
      { name: "SSE", level: 85 },
    ],
  },
  {
    title: "Testing & QA",
    emoji: "🧪",
    skills: [
      { name: "Jest", level: 90 },
      { name: "React Testing Library", level: 90 },
      { name: "Playwright", level: 85 },
      { name: "Cypress", level: 80 },
    ],
  },
];

function SkillCard({ category, animate }: { category: SkillCategory; animate: boolean }) {
  return (
    <div className="portfolio-card group flex flex-col gap-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{category.emoji}</span>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
          {category.title}
        </h3>
      </div>
      <div className="space-y-4">
        {category.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="text-sm font-semibold text-foreground/80">{skill.name}</span>
              <span className="text-xs font-bold text-primary">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: animate ? `${skill.level}%` : "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-4 section-gray relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/4 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/4 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <span className="section-subheading text-sm">Technical Expertise</span>
        <h2 className="section-heading mb-2">
          Skills That Handle the Hard Stuff
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-base max-w-xl mx-auto">
          From Micro Frontend architecture to WASM engines — I specialize in solving
          complex engineering challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.title} category={category} animate={animate} />
          ))}
        </div>

        {/* Bottom highlight bar */}
        <div className="mt-16 p-6 rounded-2xl border border-primary/15 bg-white flex flex-wrap gap-4 items-center justify-center"
          style={{ boxShadow: "0 4px 24px hsl(220 85% 45% / 0.07)" }}>
          <span className="text-sm font-semibold text-muted-foreground">Also experienced with:</span>
          {["Three.js", "Konva.js", "Rust (WASM)", "WebAssembly", "Webpack 5", "Turborepo", "Nx Monorepo", "GraphQL", "Redis", "ElasticSearch"].map((t) => (
            <span key={t} className="tech-chip">{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;