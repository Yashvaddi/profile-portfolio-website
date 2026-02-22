"use client";
import { Globe, Sparkles, Trophy, Code2, Layers, ShieldCheck } from "lucide-react";
import Image from "next/image";
import avatarImage from "@/assets/avatar-illustration.webp";

const STATS = [
  { label: "Enterprise Apps", value: "10+", icon: <Code2 className="w-5 h-5" /> },
  { label: "Years Experience", value: "3.2+", icon: <Trophy className="w-5 h-5" /> },
  { label: "Global Clients", value: "USA, UK, EU", icon: <Globe className="w-5 h-5" /> },
  { label: "Compliance", value: "HIPAA / SOC2", icon: <ShieldCheck className="w-5 h-5" /> },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative bg-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 hero-grid opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <span className="section-subheading text-sm">About Me</span>
        <h2 className="section-heading mb-10">
          Engineering Solutions That Scale
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative">
              {/* Profile image */}
              <div className="w-72 h-72 rounded-3xl overflow-hidden border-4 border-white"
                style={{ boxShadow: "0 20px 50px rgba(30,58,138,0.12), 0 4px 16px rgba(0,0,0,0.06)" }}>
                <Image
                  src={avatarImage}
                  alt="Yash Vaddi - Senior Frontend Engineer"
                  className="w-full h-full object-cover"
                  width={300}
                  height={300}
                />
              </div>

              {/* Floating badge: Clients */}
              <div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl flex items-center gap-3 animate-float"
                style={{ boxShadow: "0 8px 24px rgba(30,58,138,0.12)", animationDelay: "1s" }}
              >
                <div className="p-2 bg-primary/10 rounded-full">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-semibold">Clients in</p>
                  <p className="text-sm font-bold text-foreground">USA, UK & Europe</p>
                </div>
              </div>

              {/* Floating badge: Experience */}
              <div
                className="absolute -top-4 -left-4 bg-foreground p-4 rounded-2xl flex items-center gap-3 animate-float"
                style={{ boxShadow: "0 8px 28px rgba(0,0,0,0.2)" }}
              >
                <div className="p-2 bg-white/20 rounded-full">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white/80 font-semibold">Experience</p>
                  <p className="text-sm font-bold text-white">3.2+ Years</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                I am a{" "}
                <span className="text-primary">Senior Frontend Engineer</span>{" "}
                specializing in Micro Frontend (MFE) Architecture and
                high-performance Next.js/React applications.
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base">
                With over 3.2 years of experience, I have delivered{" "}
                <strong className="text-foreground">10+ enterprise-grade applications</strong> focusing
                on developer autonomy, sub-second performance, and strict security
                compliance (HIPAA/SOC2).
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                My expertise lies in designing <strong className="text-foreground">Module Federation hosts</strong> and
                remote modules for massive scale, integrating multi-gateway payment systems, and building
                real-time dashboards using <strong className="text-foreground">WebRTC and custom Web Workers</strong>.
              </p>
            </div>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border border-gray-100 bg-white hover:border-primary/30 hover:shadow-md transition-all duration-300 flex items-center gap-3"
                >
                  <div className="p-2 bg-primary/8 rounded-lg text-primary">{stat.icon}</div>
                  <div>
                    <p className="text-base font-bold stat-number">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Highlight */}
            <div className="pt-2 flex flex-wrap gap-2">
              {["Next.js 14", "React", "TypeScript", "Module Federation", "Micro Frontends", "AWS", "HIPAA"].map((t) => (
                <span key={t} className="tech-chip">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
