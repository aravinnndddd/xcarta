import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Twitter, Instagram, Linkedin, MessageSquare, Mail, MapPin } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Company: [
      { label: "About Us", href: "#about" },
      { label: "Our Team", href: "#team" },
      { label: "Careers", href: "#careers" },
      { label: "Press Kit", href: "#press" },
    ],
    Games: [
      { label: "Mystic Horizons", href: "#games" },
      { label: "Builders Unite", href: "#games" },
      { label: "Dragon's Legacy", href: "#games" },
      { label: "Pixel Beats", href: "#games" },
    ],
    Developers: [
      { label: "Publishing", href: "#developers" },
      { label: "UGC Tools", href: "#ugc" },
      { label: "Documentation", href: "#docs" },
      { label: "Support", href: "#support" },
    ],
    Community: [
      { label: "Blog", href: "#blog" },
      { label: "Discord", href: "#discord" },
      { label: "Forums", href: "#forums" },
      { label: "Events", href: "#events" },
    ],
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageSquare, href: "#", label: "Discord" },
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">X</span>
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                XCARTA
              </span>
            </Link>

            <p className="text-muted-foreground mb-6 text-pretty max-w-md">
              Empowering creativity and redefining immersion through innovative game development, UGC ecosystems, and
              transmedia experiences.
            </p>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
              <MapPin className="h-4 w-4" />
              <span>Singapore</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
              <Mail className="h-4 w-4" />
              <span>hello@xcarta.sg</span>
            </div>

            <div className="flex space-x-2">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  className="hover:bg-primary/10 hover:border-primary/50 bg-transparent"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">© 2024 XCARTA Interactive. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#cookies" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
