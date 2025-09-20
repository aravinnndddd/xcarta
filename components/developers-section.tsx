import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, TrendingUp, Users, Shield, ArrowRight } from "lucide-react";

export function DevelopersSection() {
  const services = [
    {
      icon: Rocket,
      title: "Publishing Support",
      description:
        "End-to-end publishing services from concept to launch and beyond.",
    },
    {
      icon: TrendingUp,
      title: "Live Operations",
      description:
        "Ongoing support to keep your game thriving with updates and events.",
    },
    {
      icon: Users,
      title: "Marketing & Community",
      description:
        "Build and engage your player community with proven strategies.",
    },
    {
      icon: Shield,
      title: "Monetization",
      description:
        "Optimize revenue streams while maintaining player satisfaction.",
    },
  ];

  return (
    <section
      id="developers"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            For Developers
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Your Creativity, Our Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Partner with XCARTA Interactive to bring your game vision to life.
            We provide comprehensive publishing, live-ops, monetization, and
            marketing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50 hover:border-primary/30"
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Ready to Partner With Us?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Join our network of successful developers and let's create the
              next generation of gaming experiences together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:opacity-90 text-lg px-8"
              >
                Submit Your Game
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:bg-primary/10 text-lg px-8 bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
