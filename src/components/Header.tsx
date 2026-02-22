"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home", type: "anchor" },
    { name: "About", href: "#about", type: "anchor" },
    { name: "Skills", href: "#skills", type: "anchor" },
    { name: "Architecture", href: "#architecture", type: "anchor" },
    { name: "Projects", href: "#projects", type: "anchor" },
    { name: "Resume", href: "/resume", type: "link" },
    { name: "Contact", href: "#contact", type: "anchor" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-400 ${
        isScrolled ? "glass-header" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity text-foreground"
          >
            Yash Vaddi
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.slice(0, menuItems.length - 1).map((item) =>
              item.type === "anchor" ? (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 font-semibold hover:text-primary transition-colors duration-300 relative group text-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 font-semibold hover:text-primary transition-colors duration-300 relative group text-sm"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full" />
                </Link>
              )
            )}
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-foreground text-white font-bold text-sm hover:bg-primary hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-foreground shadow-sm"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-2xl border border-gray-100 shadow-xl animate-scaleUp">
            <div className="flex flex-col space-y-1 px-3">
              {menuItems.map((item) =>
                item.type === "anchor" ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/70 hover:text-primary font-semibold transition-all duration-200 py-2.5 px-4 hover:bg-primary/5 rounded-xl text-sm"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-foreground/70 hover:text-primary font-semibold transition-all duration-200 py-2.5 px-4 hover:bg-primary/5 rounded-xl text-sm"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <div className="pt-2 px-1">
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center py-2.5 px-4 bg-primary text-white font-bold rounded-xl text-sm"
                >
                  Let's Connect
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;