import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, DollarSign, Heart, Code, ArrowRight } from "lucide-react"

export function UGCSection() {
  const features = [
    {
      icon: Palette,
      title: "Easy Creation",
      description:
        "Intuitive tools that make content creation accessible to everyone, regardless of technical skill level.",
    },
    {
      icon: DollarSign,
      title: "Monetization",
      description: "Built-in systems to help creators earn from their content through various revenue streams.",
    },
    {
      icon: Heart,
      title: "Player Engagement",
      description: "Features designed to maximize player retention and community building within your creations.",
    },
    {
      icon: Code,
      title: "Advanced Tools",
      description: "Professional-grade development tools for experienced creators who want to push boundaries.",
    },
  ]

  return (
    <section id="ugc" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">UGC Ecosystem</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">UGC Tools & Ecosystem</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Empower creators with our comprehensive suite of tools for Roblox and UEFN. From simple templates to
              advanced development frameworks, we provide everything needed to build engaging experiences.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-secondary to-accent hover:opacity-90 text-lg px-8">
              Explore UGC Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <Card className="overflow-hidden border-border/50">
              <div className="relative">
                <img src="/ugc-creation-tools-interface-with-colorful-buildin.jpg" alt="UGC Tools Interface" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2">Creator Studio</h3>
                  <p className="text-white/80 text-sm">
                    Build, test, and publish your creations with our integrated development environment.
                  </p>
                </div>
              </div>
            </Card>

            {/* Floating Stats */}
            <Card className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm border-primary/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-xs text-muted-foreground">Active Creators</div>
              </CardContent>
            </Card>

            <Card className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-secondary">50M+</div>
                <div className="text-xs text-muted-foreground">Player Experiences</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
