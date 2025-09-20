"use client";

import { useEffect, useRef } from "react";
import { AboutSection } from "./about-section";
import { WhatWeDoSection } from "./what-we-do-section";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CircularText from "./CircularText";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = container.querySelectorAll(".panel");

    const totalWidth = container.scrollWidth;
    const scrollDistance = totalWidth - window.innerWidth;

    gsap.to(container, {
      x: () => `-${scrollDistance}px`, // translate X while scrolling
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollDistance}`, // length of scroll
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
      <div className="panel w-screen h-screen flex-shrink-0">
        <AboutSection />
      </div>

      <div className="panel w-screen h-screen  flex-shrink-0">
        <WhatWeDoSection />
      </div>
    </div>
  );
};
