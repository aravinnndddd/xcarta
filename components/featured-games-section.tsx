import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, ExternalLink } from "lucide-react";
import CircularGallery from "./CircularGallery";

export function FeaturedGamesSection() {
  const games = [
    {
      title: "Mystic Horizons",
      genre: "Fantasy RPG",
      description:
        "Embark on an epic journey through mystical realms filled with ancient magic, legendary creatures, and untold adventures.",
      image: "/fantasy-rpg-game-with-mystical-landscapes-and-magi.jpg",
      status: "Coming Soon",
      features: ["Open World", "Character Customization", "Multiplayer Co-op"],
    },
    {
      title: "Builders Unite",
      genre: "UGC World-Builder",
      description:
        "Create, share, and explore infinite worlds with our revolutionary user-generated content platform and building tools.",
      image: "/creative-building-game-with-colorful-blocks-and-co.jpg",
      status: "Early Access",
      features: ["Infinite Creativity", "Community Sharing", "Cross-Platform"],
    },
    {
      title: "Dragon's Legacy",
      genre: "Fantasy Saga",
      description:
        "A transmedia fantasy saga spanning games, animation, and collectibles, following the ancient dragon riders.",
      image: "/epic-dragon-fantasy-with-riders-and-ancient-kingdo.jpg",
      status: "In Development",
      features: ["Transmedia IP", "Collectibles", "Animated Series"],
    },
    {
      title: "Pixel Beats",
      genre: "Music Rhythm",
      description:
        "Experience music like never before in this innovative rhythm game that blends beats, visuals, and interactive storytelling.",
      image: "/colorful-music-rhythm-game-with-neon-beats-and-sou.jpg",
      status: "Beta Testing",
      features: [
        "Original Soundtrack",
        "Visual Storytelling",
        "Community Tracks",
      ],
    },
  ];

  return (
    <section id="games" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Games & IPs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Discover our portfolio of innovative games and transmedia
            intellectual properties that are shaping the future of interactive
            entertainment.
          </p>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
}
