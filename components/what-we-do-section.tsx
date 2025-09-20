"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Wrench, Film, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function WhatWeDoSection() {
  const services = [
    {
      icon: Gamepad2,
      title: "Game Development & Publishing",
      description:
        "Story-driven, innovative games that captivate players and push creative boundaries.",
      features: [
        "AAA Quality Production",
        "Cross-Platform Development",
        "Live Operations Support",
      ],
      gradient: "from-primary to-secondary",
    },
    {
      icon: Wrench,
      title: "UGC Ecosystems",
      description:
        "Comprehensive tools and templates for Roblox & UEFN creators to build amazing experiences.",
      features: ["Creator Tools", "Monetization Systems", "Community Building"],
      gradient: "from-secondary to-accent",
    },
    {
      icon: Film,
      title: "Transmedia IP Creation",
      description:
        "Expanding intellectual properties into animation, collectibles, music, and beyond.",
      features: [
        "IP Development",
        "Cross-Media Expansion",
        "Brand Partnerships",
      ],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="relative py-24 px-6 w-[100vw]">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Three core pillars that define our approach to interactive
            entertainment and creative empowerment.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card className="relative border border-white/10 bg-white/5 backdrop-blur-md hover:scale-[1.02] hover:shadow-lg transition-all duration-300 rounded-xl">
                <CardContent className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 text-sm mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:bg-primary/10"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
