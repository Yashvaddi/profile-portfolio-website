"use client";
import { Calendar, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { useState } from "react";

const Qualification = () => {
  const [activeTab, setActiveTab] = useState<
    "education" | "work" | "certifications"
  >("education");

  const educationData = [
    {
      title: "Bachelor of Engineering (BEng), Computer Science",
      institution: "Gujarat Technological University",
      year: "2019 - 2023",
      description:
        "Focused on computer science fundamentals and software development",
    },
    {
      title: "Web Development Bootcamp",
      institution: "Vnurture Technologies",
      year: "2022",
      description: "Intensive program focusing on modern web technologies",
    },
  ];

  const workData = [
    {
      title: "Software Engineer",
      institution: "Webcodegenie Technologies PVT LTD",
      year: "Jan 2023 - Present",
      description:
        "Builds complete web applications covering front-end (HTML, CSS, JavaScript, React) and back-end (Node.js, Python, databases like PostgreSQL). Handles end-to-end tasks such as API development, UI/UX design, deployment with CI/CD.",
    },
    {
      title: "Senior Frontend Engineer",
      institution: "Enterprise Solutions",
      year: "June 2022 - Present",
      description:
        "Architecting scalable Micro Frontend ecosystems and high-performance React applications. Specializing in Module Federation, real-time engines, and secure enterprise-grade integrations.",
    },
    {
      title: "Trainee Software Developer",
      institution: "Webcodegenie Technologies PVT LTD",
      year: "Jan 2023", // Assuming start of 2023 was trainee period, or overlaps
      description:
        "Completed training focused on building demo projects and code reviews.",
    },
  ];

  const certificationsData = [
    {
      title: "JavaScript (Basic) Certification",
      institution: "Hacker Rank",
      year: "September 2024",
      description: "Certification ID: 0OA394968A71",
    },
  ];

  const getData = () => {
    switch (activeTab) {
      case "education":
        return educationData;
      case "work":
        return workData;
      case "certifications":
        return certificationsData;
      default:
        return educationData;
    }
  };

  return (
    <section id="qualification" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-heading mb-16">Qualification</h2>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary/30 rounded-xl p-1 overflow-x-auto">
            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === "education"
                  ? "bg-accent text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </button>
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === "work"
                  ? "bg-accent text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Briefcase className="w-5 h-5" />
              Work
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 whitespace-nowrap ${
                activeTab === "certifications"
                  ? "bg-accent text-background font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Trophy className="w-5 h-5" /> {/* Reusing Trophy for Certs */}
              Certifications
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {getData().map((item, index) => (
            <div
              key={index}
              className="portfolio-card animate-in slide-in-from-bottom duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  {activeTab === "education" ? (
                    <GraduationCap className="w-6 h-6 text-accent" />
                  ) : activeTab === "work" ? (
                    <Briefcase className="w-6 h-6 text-accent" />
                  ) : (
                    <Trophy className="w-6 h-6 text-accent" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-primary font-semibold mb-1">
                    {item.institution}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4" />
                    {item.year}
                  </div>
                  <p className="text-muted-foreground italic leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
