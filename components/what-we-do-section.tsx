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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Three core pillars that define our approach to interactive
            entertainment and creative empowerment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="flex flex-col items-center justify-center border-2 border-white/10 bg-gradient-to-b from-white/5 to-white/0 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02] transition-all">
                <CardContent className="p-8 group">
                  {/* Icon with hover animation */}
                  <motion.div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 text-pretty">
                    {service.description}
                  </p>

                  {/* Feature List */}
                  <motion.ul
                    className="space-y-2 mb-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.15 },
                      },
                    }}
                  >
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 },
                        }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="group/btn hover:bg-primary/10 w-full justify-between transition-colors"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
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
