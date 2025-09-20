"use client";

import { useEffect, useRef } from "react";
import { AboutSection } from "./about-section";
import { WhatWeDoSection } from "./what-we-do-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(container, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="flex h-screen ">
      {/* About Panel */}
      <div className="panel w-screen h-screen flex-shrink-0">
        <AboutSection />
      </div>

      {/* What We Do Panel */}
      <div className="panel w-screen h-screen flex-shrink-0">
        <WhatWeDoSection />
      </div>
    </div>
  );
};
