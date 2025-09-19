import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight, User } from "lucide-react"

export function BlogSection() {
  const posts = [
    {
      title: "How We Built Mystic Horizons' Vibrant World",
      excerpt:
        "Dive deep into our world-building process and the technical innovations that brought our fantasy realm to life.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      category: "Development",
      image: "/fantasy-game-world-development-with-mystical-lands.jpg",
      readTime: "8 min read",
    },
    {
      title: "Empowering Creators on Roblox & UEFN",
      excerpt:
        "Learn about our comprehensive creator program and the tools we've developed to support the next generation of game makers.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      category: "UGC",
      image: "/game-development-tools-and-creator-workspace.jpg",
      readTime: "6 min read",
    },
    {
      title: "The Story Behind Dragon's Legacy",
      excerpt:
        "From concept to transmedia franchise - discover how we're expanding our IP across games, animation, and collectibles.",
      author: "Elena Nakamura",
      date: "Dec 10, 2024",
      category: "IP Development",
      image: "/dragon-fantasy-concept-art-and-storyboard-developm.jpg",
      readTime: "10 min read",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Latest News & Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Stay updated with our latest developments, behind-the-scenes stories, and industry insights from the XCARTA
            Interactive team.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 border-border/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary/90 text-white">{post.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm line-clamp-3 text-pretty">{post.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  <Button variant="ghost" size="sm" className="group/btn hover:bg-primary/10">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10 bg-transparent">
            View All Posts
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
