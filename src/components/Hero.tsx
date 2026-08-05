"use client";
import { Download, Github, Linkedin, Mail, ArrowRight, Code2, Layers, Zap, Shield } from "lucide-react";
import Image from "next/image";
import profilePhoto from "@/assets/profile-photo.webp";
import { useEffect, useRef, useState } from "react";

const TITLES = [
  "Micro Frontend Architect",
  "Next.js Expert",
  "System Design Lead",
  "Performance Engineer",
  "Full Stack Orchestrator",
];

const HARD_THINGS = [
  { icon: <Layers className="w-5 h-5" />, label: "Module Federation", detail: "Multi-team MFE at scale" },
  { icon: <Zap className="w-5 h-5" />, label: "WASM + Web Workers", detail: "Sub-second encryption engine" },
  { icon: <Shield className="w-5 h-5" />, label: "HIPAA / SOC2", detail: "Enterprise compliance" },
  { icon: <Code2 className="w-5 h-5" />, label: "WebRTC + Socket.IO", detail: "Real-time collaboration" },
];

const Hero = () => {
  const [titleIdx, setTitleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIdx];
    const speed = isDeleting ? 45 : 85;

    timerRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % TITLES.length);
        }
      }
    }, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [displayed, isDeleting, titleIdx]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-4 relative overflow-hidden hero-grid"
    >
      {/* Background Blobs */}
      <div className="absolute top-[-8rem] right-[-8rem] w-[40rem] h-[40rem] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(215 12% 82% / 0.6) 0%, transparent 70%)" }} />
      <div className="absolute bottom-[-4rem] left-[-6rem] w-[32rem] h-[32rem] rounded-full opacity-15 pointer-events-none animate-spin-slow"
        style={{ background: "conic-gradient(from 0deg, hsl(215 10% 78% / 0.4), hsl(215 8% 85% / 0.2), transparent)" }} />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="text-left space-y-8 order-2 lg:order-1 relative z-10">

          {/* Badge */}
          <div className="animate-fadeUp-delay-1">
            <div className="badge-yellow">
              👋 Senior Frontend Engineer · Open to Work
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-3 animate-fadeUp-delay-2">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-foreground">
              I Build{" "}
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, hsl(215 12% 12%), hsl(215 18% 22%))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hard Things
              </span>{" "}
              <br className="hidden sm:block" />
              on the Web.
            </h1>

            {/* Typewriter subtitle */}
            <div className="flex items-center gap-2 text-xl md:text-2xl font-semibold text-muted-foreground h-9">
              <span className="text-primary">&gt;</span>
              <span className="text-foreground">{displayed}</span>
              <span className="animate-blink text-primary font-light">|</span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed pt-2">
              Architecting scalable Micro Frontend ecosystems &amp; high-performance enterprise
              solutions with <strong className="text-foreground">3.5+ years</strong> of experience,
              based in <strong className="text-foreground">Ahmedabad, India</strong>, serving global clients.
            </p>
          </div>

          {/* Hard Things Grid */}
          <div className="grid grid-cols-2 gap-3 animate-fadeUp-delay-3">
            {HARD_THINGS.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 rounded-xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-1.5 rounded-lg bg-primary/8 text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fadeUp-delay-4">
            <a href="#contact" className="hero-button shadow-lg">
              Let&apos;s Build Together <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/resume" className="hero-button secondary">
              Download CV <Download className="w-4 h-4" />
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 animate-fadeUp-delay-5">
            <a
              href="https://github.com/Yashvaddi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-gray-100 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yash-vaddi-86a54b22a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white border border-gray-100 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yashvaddi@gmail.com"
              className="p-3 bg-white border border-gray-100 rounded-full text-muted-foreground hover:text-primary hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Content - Profile */}
        <div className="flex justify-center lg:justify-end animate-slideRight order-1 lg:order-2 relative">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-gray-200 animate-spin-slow" />
            <div className="absolute inset-8 rounded-full border border-gray-100" />

            {/* Gradient Blob Behind Image */}
            <div
              className="absolute inset-4 shape-blob animate-float opacity-70"
              style={{ background: "linear-gradient(135deg, hsl(215 10% 88% / 0.8), hsl(215 8% 92% / 0.5))" }}
            />

            {/* Photo Container */}
            <div className="relative z-10 w-[82%] h-[82%] overflow-hidden rounded-[2.5rem] bg-white border-4 border-white"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.06)" }}>
              <Image
                src={profilePhoto}
                alt="Yash Vaddi - Senior Frontend Engineer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                priority
                width={500}
                height={500}
              />
            </div>

            {/* Floating Badge: Open to Work */}
            <div
              className="absolute bottom-10 -left-6 z-20 bg-white px-5 py-3 rounded-2xl flex items-center gap-3 animate-float"
              style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1)" }}
            >
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="font-bold text-sm text-foreground">Open to Work</span>
            </div>

            {/* Floating Badge: Experience */}
            <div
              className="absolute top-6 -right-6 z-20 bg-foreground px-5 py-3 rounded-2xl flex items-center gap-3 animate-float"
              style={{ animationDelay: "1s", boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}
            >
              <Zap className="w-4 h-4 text-white" />
              <span className="font-bold text-sm text-white">3.5+ Yrs Exp</span>
            </div>

            {/* Floating Badge: Projects */}
            <div
              className="absolute bottom-24 -right-10 z-20 bg-white px-4 py-2.5 rounded-2xl flex items-center gap-2 animate-float"
              style={{ animationDelay: "2s", boxShadow: "0 6px 24px rgba(0,0,0,0.1)" }}
            >
              <Code2 className="w-4 h-4 text-primary" />
              <span className="font-bold text-xs text-foreground">10+ Enterprise Apps</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white/60 backdrop-blur-sm py-4 px-8 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {[
            { value: "10+", label: "Enterprise Apps" },
            { value: "3.5+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "5+", label: "Technologies Mastered" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-bold stat-number">{stat.value}</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
          <div className="h-8 w-px bg-gray-200 hidden lg:block" />
          <div className="flex gap-3 items-center">
            {["Next.js", "React", "TypeScript", "MFE"].map((t) => (
              <span key={t} className="tech-chip">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
