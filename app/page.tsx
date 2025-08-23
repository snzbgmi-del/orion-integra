"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Zap,
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  MousePointer,
  Smartphone,
  Monitor,
  Globe,
  Code,
  Palette,
  Eye,
  Heart,
  Target,
  Rocket,
  Shield,
  Lightbulb,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentFeature, setCurrentFeature] = useState(0)

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Blazing performance with optimized animations"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Smooth Transitions",
      description: "Fluid motion that respects user preferences"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Theme Switching",
      description: "One-tap Dark/Light mode transformation"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Accessible Design",
      description: "Built with accessibility in mind"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
    
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [features.length])

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl animate-rotate-glow" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center animate-pulse-glow">
                  <Sparkles className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                Futuristic
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-primary transition-colors duration-300">Features</a>
              <a href="#demo" className="hover:text-primary transition-colors duration-300">Demo</a>
              <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button 
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
                size="sm"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge 
              className="mb-6 bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/50 text-primary animate-slide-in-bottom"
              style={{ animationDelay: '0.2s' }}
            >
              Next-Generation Interface
            </Badge>
            
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent animate-slide-in-bottom"
              style={{ animationDelay: '0.4s' }}
            >
              Experience the Future
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed animate-slide-in-bottom"
              style={{ animationDelay: '0.6s' }}
            >
              A sleek, futuristic interface with fluid motion and a one-tap Dark/Light switch that transforms the entire UI.
            </p>
            
            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-bottom"
              style={{ animationDelay: '0.8s' }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground text-lg px-8 py-6 neon-glow"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built with modern technologies and accessibility in mind
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className={`glass hover:neon-glow transition-all duration-300 hover:scale-105 cursor-pointer ${
                  currentFeature === index ? 'ring-2 ring-primary/50' : ''
                }`}
                onClick={() => setCurrentFeature(index)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              See It In Action
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch how the theme toggle transforms the entire interface
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="glass p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Theme Toggle Demo</h3>
                  <p className="text-muted-foreground mb-6">
                    Click the theme toggle button in the navigation to see the smooth transition between Dark and Light modes. The entire UI transforms with beautiful animations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Smooth color transitions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Persistent user preference</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>System theme detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Accessible design</span>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-muted to-muted/50 rounded-lg p-6 border border-border/50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <ThemeToggle />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-background rounded"></div>
                      <div className="h-4 bg-background rounded w-3/4"></div>
                      <div className="h-4 bg-background rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Built for the Future
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This interface demonstrates modern web development practices with smooth animations, 
              accessibility features, and a seamless user experience that adapts to your preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="glass text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance</h3>
              <p className="text-muted-foreground">Optimized animations that respect user preferences and system capabilities.</p>
            </Card>

            <Card className="glass text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
              <p className="text-muted-foreground">Built with ARIA labels, focus states, and sufficient contrast ratios.</p>
            </Card>

            <Card className="glass text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">User Experience</h3>
              <p className="text-muted-foreground">Intuitive design with smooth transitions and responsive interactions.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Futuristic Interface. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
