"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import LightRays from "./LightRays";
import GradientText from "./GradientText";
import TextPressure from "./TextPressure";
import CircularText from "./CircularText";

// import { Button } from "@/components/ui/moving-border";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex  justify-center overflow-hidden">
      {/* Animated Background */}

      {/* Background Image */}
      <div className="absolute ">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>
      </div>

      {/* Content */}
      <div className="items-center z-10 text-center px-4 sm:px-6 flex lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <div style={{ position: "relative" }}>
              <TextPressure
                text="XCARTA-Interactive"
                flex={true}
                alpha={false}
                stroke={false}
                width={true}
                weight={true}
                italic={true}
                textColor="#2C5AB0"
                strokeColor="#ff0000"
                minFontSize={36}
              />
            </div>
          </h1>

          <GradientText
            colors={["#868686", "#ffffff", "#868686", "#ffffff", "#868686"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class text-[1.5rem] "
          >
            Empowering Creativity, Redefining Immersion
          </GradientText>

          <p className="text-xl mt-2 sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            XCARTA Interactive crafts immersive games, UGC ecosystems, and
            transmedia IPs that inspire the next generation of creators and
            players.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white/20 rounded-4xl  transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              Discover Our Worlds
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-primary/50  rounded-4xl  hover:bg-primary/10 text-lg px-8 py-6 bg-transparent"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Showcase
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 ">
        <CircularText
          text="*XCARTA"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class w-[80px] h-[80px] md:w-[100px] md:h-[100px] text-[10px] "
        />
      </div>
    </section>
  );
}
