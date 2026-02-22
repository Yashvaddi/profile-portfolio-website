"use client";

import { Download, MoveLeft, Printer } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react"; // Added Globe import

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-4 print:bg-white print:py-0 print:px-0 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Navigation / Actions (Hidden on Print) */}
        <div className="mb-8 flex justify-between items-center print:hidden">
          <Button asChild variant="ghost" className="rounded-full text-foreground hover:bg-secondary">
            <Link href="/" className="flex items-center gap-2">
              <MoveLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
          <Button 
            onClick={() => typeof window !== 'undefined' && window.print()} 
            className="rounded-xl bg-primary text-primary-foreground font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-all"
          >
            <Printer className="w-4 h-4 mr-2" />
            Print / Save as PDF
          </Button>
        </div>

        {/* Resume Content */}
        <div className="bg-card shadow-2xl rounded-[1.5rem] p-8 md:p-16 border border-border/50 text-foreground print:shadow-none print:rounded-none print:p-0 print:text-slate-900 print:bg-white transition-all">
          {/* Header */}
          <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-border/50 pb-12">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-primary">
                Yash Vaddi
              </h1>
              <h2 className="text-xl md:text-2xl font-bold text-accent mt-2">
                Senior Frontend Engineer | Micro Frontend Specialist
              </h2>
            </div>
            <div className="text-left md:text-right space-y-1 text-sm font-medium text-muted-foreground">
              <p className="flex items-center md:justify-end gap-2"><Globe className="w-4 h-4" /> Ahmedabad, Gujarat, India</p>
              <p>+91 (760) 015-8762</p>
              <p className="text-primary font-bold">yashvaddi@gmail.com</p>
              <p>linkedin.com/in/yash-vaddi-86a54b22a/</p>
              <p>github.com/Yashvaddi</p>
            </div>
          </header>

          <div className="grid grid-cols-1 gap-12">
            {/* Summary */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest text-accent border-b border-border/30 pb-2 mb-6 flex items-center gap-3">
                Summary
              </h3>
              <p className="text-foreground/90 leading-relaxed text-lg italic">
                Senior Frontend Engineer with 3.2+ years of experience specializing in Micro Frontend (MFE) Architecture, high-performance Next.js/React applications, and polyglot backend orchestration. Proven track record of architecting scalable Module Federation ecosystems and delivering 10+ enterprise-grade applications with a focus on developer autonomy, sub-second performance, and strict security compliance (HIPAA/SOC2).
              </p>
            </section>

            {/* Skills */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest text-accent border-b border-border/30 pb-2 mb-6">
                Technical Mastery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-primary mb-3">Frontend & Arch</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Module Federation, Micro Frontends, Next.js 14, React, TypeScript, Redux Toolkit, Framer Motion, Three.js, Konva.js
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-primary mb-3">Backend Sync</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Node.js (NestJS), Python (FastAPI), Go, Laravel, .NET Core, PostgreSQL, Socket.IO, WebRTC, WebAssembly (WASM)
                  </p>
                </div>
                <div className="p-6 bg-secondary/50 rounded-xl border border-border/30 hover:border-primary/50 transition-colors">
                  <h4 className="font-bold text-primary mb-3">Cloud & DevOps</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    AWS (S3, EC2, CloudFront), Docker & Containerization, Kubernetes (K8s), Parallel CI/CD (GitHub Actions), Nginx Ingress, HIPAA/SOC2 Compliance
                  </p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest text-accent border-b border-border/30 pb-2 mb-6">
                Professional Experience
              </h3>
              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                    <h4 className="text-2xl font-bold text-foreground">Senior Frontend Engineer</h4>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-4 py-1 rounded-full">Jan 2023 - Present</span>
                  </div>
                  <p className="text-lg font-bold text-primary mb-4 uppercase tracking-tighter">Webcodegenie Technologies PVT LTD</p>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-foreground/80 leading-relaxed font-medium">
                    <li>Architected and implemented a high-scale Micro Frontend ecosystem using Module Federation, allowing independent deployment of 7+ project-specific remotes.</li>
                    <li>Designed HIPAA-compliant healthcare portals with patient health scoring and AES-256 encrypted document management.</li>
                    <li>Integrated multi-gateway payment systems (Stripe & Authorize.net) for high-value maritime transactions exceeding $1M+.</li>
                    <li>Built real-time communications modules using Socket.IO and Python/FastAPI for CRM lead pipeline synchronization.</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                  <div className="flex flex-col md:flex-row justify-between items-baseline mb-2">
                    <h4 className="text-2xl font-bold text-foreground">Frontend Engineer</h4>
                    <span className="text-sm font-bold text-accent bg-accent/10 px-4 py-1 rounded-full">June 2022 - Jan 2023</span>
                  </div>
                  <p className="text-lg font-bold text-primary mb-4 uppercase tracking-tighter">Enterprise Solutions</p>
                  <ul className="list-disc list-outside ml-5 space-y-3 text-foreground/80 leading-relaxed font-medium">
                    <li>Partnered with international businesses to build immersive 3D real estate visualization engines using Three.js and Geospatial property search.</li>
                    <li>Developed high-performance WASM-accelerated image compression and encryption utilities using Rust and Web Workers.</li>
                    <li>Optimized enterprise workflows for recruitment (ATS) and insurance estimation, integrating complex canvas-based structural builders.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest text-accent border-b border-border/30 pb-2 mb-6">
                Architectural Portfolio
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/30 p-6 rounded-xl border border-border/30">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-foreground">Wellness - Healthcare MFE</h4>
                    <span className="text-[10px] font-bold text-primary border border-primary/30 px-2 py-1 rounded uppercase">Next.js | HIPAA</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Secure Patient Health Portal with real-time health scoring and PHI-safe encrypted document management systems.
                  </p>
                </div>
                <div className="bg-secondary/30 p-6 rounded-xl border border-border/30">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-foreground">BoatDox - Maritime MFE</h4>
                    <span className="text-[10px] font-bold text-primary border border-primary/30 px-2 py-1 rounded uppercase">React | Spring Boot</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    High-value vessel transaction platform with multi-gateway payment integration and automated maritime legal documentation.
                  </p>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-black uppercase tracking-widest text-accent border-b border-border/30 pb-2 mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-foreground">Bachelor of Engineering, Computer Science</h4>
                  <span className="text-sm font-bold text-muted-foreground">2019 - 2023</span>
                </div>
                <p className="text-primary font-bold">Gujarat Technological University</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
