"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, MessageSquare, Users, Send, Twitter, Instagram, Linkedin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: MessageSquare, href: "#", label: "Discord" },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Create Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to bring your vision to life? Get in touch with our team and let's discuss how we can collaborate on
            your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Company (Optional)</label>
                  <Input
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Get in touch</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">hello@xcarta.sg</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-secondary to-accent rounded-lg flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Business Inquiries</p>
                      <p className="text-muted-foreground">partnerships@xcarta.sg</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">Follow our journey</h3>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Stay connected with XCARTA Interactive on social media for the latest updates, behind-the-scenes
                  content, and community highlights.
                </p>

                <div className="flex space-x-3">
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
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Newsletter</Badge>
                <h3 className="text-xl font-bold mb-2 text-foreground">Stay Updated</h3>
                <p className="text-muted-foreground mb-4 text-pretty">
                  Get the latest news about our games, updates, and exclusive content delivered to your inbox.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" className="flex-1" />
                  <Button className="bg-gradient-to-r from-primary to-secondary">Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
