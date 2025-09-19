"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { ModeToggle } from "@/components/mode-toggle";
// import { Menu, X } from "lucide-react";
import PillNav from "./PillNav";

export function Navigation() {
  return (
    <nav className={`flex justify-center`}>
      <PillNav
        logo="/XC.svg"
        logoAlt="Company Logo"
        items={[
          { href: "#about", label: "About" },
          { href: "#games", label: "Games" },
          { href: "#developers", label: "For Developers" },
          { href: "#ugc", label: "UGC Tools" },
          { href: "#blog", label: "Blog" },
          { href: "#contact", label: "Contact" },
        ]}
        activeHref="/"
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#transparent"
        pillColor="#C11A21"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
      />
    </nav>
  );
}
