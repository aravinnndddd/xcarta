import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { WhatWeDoSection } from "@/components/what-we-do-section";
import { FeaturedGamesSection } from "@/components/featured-games-section";
import { DevelopersSection } from "@/components/developers-section";
import { UGCSection } from "@/components/ugc-section";
import { BlogSection } from "@/components/blog-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { About } from "@/components/about";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        {/* <AboutSection />
        <WhatWeDoSection /> */}
        <About />
        <FeaturedGamesSection />
        <DevelopersSection />
        <UGCSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
