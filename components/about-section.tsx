"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";
import { motion } from "framer-motion";

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="about"
      className="py-20 w-[100vw] px-4 sm:px-6 lg:px-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // trigger when 20% visible
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            Who We Are
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          >
            Singapore-based studio blending creativity and technology to create
            extraordinary interactive experiences that push the boundaries of
            gaming.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "1",
              title: "Our Mission",
              desc: "Empower creators, inspire players, and connect communities through innovative gaming experiences and cutting-edge technology.",
              color: "from-primary to-secondary",
            },
            {
              icon: "2",
              title: "Our Vision",
              desc: "Become a global leader in interactive entertainment, setting new standards for immersive gaming experiences worldwide.",
              color: "from-secondary to-primary",
            },
            {
              icon: "3",
              title: "Our Values",
              desc: "Innovation, creativity, and community-first approach drive everything we do in the interactive entertainment space.",
              color: "from-accent to-primary",
            },
          ].map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col items-center justify-center border-2 border-white/10 bg-gradient-to-b from-white/5 to-white/0 hover:from-white/10 hover:to-white/5 transition-all h-fit">
                <CardContent className="px-2 text-center ">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty border-b border-b-white h-[150px]">
                    {item.desc}
                  </p>
                  <h1
                    className={`md:text-[150px] px-5 m-0 text-white font-extrabold flex `}
                  >
                    {item.icon}
                  </h1>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
