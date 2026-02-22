"use client";
import { Server, Globe, Cpu, ShieldCheck, Zap } from "lucide-react";

const Architecture = () => {
  const mfeData = [
    { project: "Wellness", frontend: "Next.js", backend: "Node.js (NestJS)", integration: "HIPAA Compliance" },
    { project: "Sales CRM", frontend: "React", backend: "Python (FastAPI)", integration: "WhatsApp Business API" },
    { project: "Discover Equestrian", frontend: "Next.js", backend: "Go (Golang)", integration: "Three.js 3D Engine" },
    { project: "BoatDox", frontend: "React", backend: "Java & Spring Boot", integration: "Secure PDFs & Stripe" },
    { project: "CandidSuite", frontend: "Next.js", backend: "Laravel (PHP)", integration: "Gmail UI Bridge" },
    { project: "Nuway Roofing", frontend: "React", backend: ".NET (C# Core)", integration: "Konva.js Canvas" },
    { project: "Core Utilities", frontend: "WASM", backend: "Rust", integration: "Encryption Engine" },
  ];

  return (
    <section id="architecture" className="py-24 px-4 bg-section-bg/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Deep Micro Frontend Architecture</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A polyglot ecosystem designed for massive scale, dynamic module federation, and diverse backend orchestration.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="portfolio-card flex flex-col items-center text-center p-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Module Federation</h3>
            <p className="text-muted-foreground">Dynamic runtime injection of remote modules with zero-downtime updates.</p>
          </div>
          <div className="portfolio-card flex flex-col items-center text-center p-10">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Polyglot Backends</h3>
            <p className="text-muted-foreground">Seamlessly orchestrating Node.js, Python, Go, Java, and .NET services.</p>
          </div>
          <div className="portfolio-card flex flex-col items-center text-center p-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Security</h3>
            <p className="text-muted-foreground">HIPAA/SOC2 compliant architectures with AES-256 end-to-end encryption.</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-border/50 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-secondary border-b border-border/50">
                  <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider text-sm">MFE Project</th>
                  <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider text-sm">Frontend</th>
                  <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider text-sm">Backend (API)</th>
                  <th className="px-6 py-4 font-bold text-accent uppercase tracking-wider text-sm">Core Integration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/30">
                {mfeData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-secondary/40 transition-colors">
                    <td className="px-6 py-4 font-bold text-foreground/90">{row.project}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest">{row.frontend}</span>
                    </td>
                    <td className="px-6 py-4 text-foreground/80 font-bold">{row.backend}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-accent font-bold text-sm">
                        <Zap className="w-4 h-4" />
                        {row.integration}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Cloud-Native <span className="text-primary">Orchestration</span> & Continuous Delivery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My architectural approach extends beyond the frontend, leveraging <strong>AWS Cloud</strong> and <strong>Docker Containerization</strong> to ensure seamless deployment and horizontal scalability of independent Micro Frontend modules.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-primary/10 rounded-lg mt-1">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Containerized Ecosystem</h4>
                  <p className="text-sm text-muted-foreground">Each MFE remote is isolated in a Docker container, ensuring consistent environments across dev, staging, and production.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="p-2 bg-accent/10 rounded-lg mt-1">
                  <Server className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">AWS Infrastructure</h4>
                  <p className="text-sm text-muted-foreground">Utilizing S3 for static assets, CloudFront for global CDN distribution, and EC2/ECS for backend microservices orchestration.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-[1.5rem] border border-border/50 p-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-primary/20 transition-all" />
            <h4 className="text-xl font-bold mb-6 text-primary flex items-center gap-2">
              <Cpu className="w-5 h-5" /> Orchestration Stack
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Docker Desktop",
                "Docker Compose",
                "Kubernetes (K8s)",
                "AWS ECS/Fargate",
                "GitHub Actions",
                "Nginx Ingress",
                "Terraform (IaC)",
                "Helm Charts",
              ].map((tool) => (
                <div key={tool} className="flex items-center gap-2 p-3 bg-secondary/30 rounded-xl border border-border/20">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-xs font-bold text-foreground/90">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
