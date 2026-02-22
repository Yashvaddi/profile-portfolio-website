import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk", weight: ["300", "400", "500", "600", "700"] });

const siteConfig = {
  name: "Yash Vaddi | Senior Frontend Engineer & Micro Frontend Architect",
  description: "Architecting scalable Micro Frontend (MFE) ecosystems & high-performance enterprise solutions. Expert in Module Federation, Next.js 14, and polyglot backend orchestration with 3.2+ years of experience.",
  url: "https://yashvaddi.com",
  ogImage: "https://yashvaddi.com/og-image.png", // Ensure this exists or update later
  links: {
    github: "https://github.com/Yashvaddi",
    linkedin: "https://www.linkedin.com/in/yash-vaddi-86a54b22a/",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Senior Frontend Engineer",
    "Micro Frontend Architect",
    "Module Federation Expert",
    "Next.js Developer",
    "React Architect",
    "Enterprise Software Solutions",
    "Yash Vaddi",
    "Frontend Specialist India",
    "Scalable Web Architecture",
    "Remote Frontend Lead",
    "Full Stack Orchestration",
  ],
  authors: [{ name: "Yash Vaddi", url: siteConfig.url }],
  creator: "Yash Vaddi",
  openGraph: {
    url: "https://yashvaddi.com",
    siteName: "Yash Vaddi - Personal Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Frontend Engineer | Micro Frontend & Next.js Expert",
    description: "Senior Frontend Engineer specializing in Micro Frontend (MFE) Architecture and high-performance React/Next.js applications.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Yash Vaddi",
                "jobTitle": "Senior Frontend Engineer | Micro Frontend Specialist",
                "url": "https://yashvaddi.com",
                "sameAs": ["https://www.linkedin.com/in/yash-vaddi-86a54b22a/", "https://github.com/Yashvaddi"],
                "knowsAbout": ["Micro Frontends", "Module Federation", "React.js", "Next.js", "System Architecture"],
                "image": "https://yashvaddi.com/assets/profile-photo.jpg",
                "description": "Senior Frontend Engineer specializing in architecting scalable Micro Frontend ecosystems and high-performance enterprise solutions."
              }),
            }}
          />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${spaceGrotesk.variable} font-sans antialiased text-foreground bg-background`}>
        <Providers>
           {children}
           <Toaster />
           <Sonner />
        </Providers>
      </body>
    </html>
  );
}
