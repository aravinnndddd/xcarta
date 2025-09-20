"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftNav = [
    { href: "#about", label: "About" },
    { href: "#games", label: "Games" },
    { href: "#developers", label: "Dev" },
  ];

  const rightNav = [
    { href: "#ugc", label: "Tools" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`flex  items-center justify-center gap-4  backdrop-blur-md rounded-full px-4 py-2 border border-border shadow-md transition-all duration-600 bg-background/50 ${
          isExpanded ? "w-[90vw] md:w-[550px]" : "w-[100px]"
        }`}
        onMouseEnter={() => setIsExpanded(true)}
      >
        {/* Left Navigation */}
        <div
          className={`hidden md:flex items-center space-x-5 transition-all duration-500 ${
            isExpanded
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-4 pointer-events-none"
          }`}
        >
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md  text-white hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <Link href="/" className="flex items-center justify-center">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform duration-300">
            <img src="/XC.svg" alt="logo" />
          </div>
        </Link>

        {/* Right Navigation + Mode Toggle */}
        <div
          className={`hidden md:flex items-center space-x-5 transition-all duration-500 ${
            isExpanded
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          }`}
        >
          {rightNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md  text-white hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
          {/* <ModeToggle /> */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          {/* <ModeToggle /> */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-[90vw] bg-background/95 backdrop-blur-md rounded-xl border border-border shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {[...leftNav, ...rightNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
