"use client";
import { Calendar, GraduationCap, Briefcase, Trophy } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

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
      title: "Software Developer - Frontend",
      institution: "Webcodegenie Technologies Pvt. Ltd.",
      year: "Aug 2023 - Present",
      description:
        "Architected and delivered micro frontend systems using Webpack Module Federation — split monolithic React app into 6+ independently deployable modules. Led full development lifecycle on 6+ platforms, optimized Core Web Vitals achieving ~40% reduction in page load times, and built HIPAA-aligned healthcare platforms.",
    },
    {
      title: "Intern Software Developer",
      institution: "Webcodegenie Technologies Pvt. Ltd.",
      year: "Jan 2023 - Jul 2023",
      description:
        "Contributed to React.js component development for production platforms. Integrated REST APIs, built responsive UI layouts using Tailwind CSS and Bootstrap, and adopted Git branching workflows and Agile practices.",
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
            <motion.div
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="portfolio-card"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
