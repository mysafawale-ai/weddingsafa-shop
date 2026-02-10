"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown, Star } from "lucide-react"

const packages = [
  {
    name: "Basic Safa Package",
    price: "₹3,999",
    icon: Star,
    popular: false,
    features: [
      "Standard quality turban fabric",
      "Professional safa tying service",
      "Single color pagdi option",
      "Traditional kalgi (brooch)",
      "Perfect for engagement ceremonies",
      "1 hour service duration",
    ],
  },
  {
    name: "Premium Pagdi Package",
    price: "₹7,999",
    icon: Sparkles,
    popular: true,
    features: [
      "Premium silk safa & pagdi fabric",
      "Expert turban tying by master craftsman",
      "Multiple design & feta options",
      "Designer kalgi with stones",
      "Complementary pocket square & sehra",
      "Professional photo session assistance",
      "On-site wedding turban service",
      "Complete 2 hours service duration",
    ],
  },
  {
    name: "Royal Wedding Turban Package",
    price: "₹14,999",
    icon: Crown,
    popular: false,
    features: [
      "Luxury handwoven silk safa & pagdi",
      "Custom wedding turban design consultation",
      "Hand-embroidered turban details",
      "Premium kalgi with gemstones",
      "Complete groom accessories with sehra & feta",
      "Pre-wedding turban trial included",
      "On-site service with dedicated assistant",
      "Professional wedding coordinator",
      "Video documentation of turban tying",
      "Full day premium service coverage",
    ],
  },
]

export function PackagesSection() {
  const handleWhatsAppInquiry = (packageName: string) => {
    const message = `Hello! I'm interested in the ${packageName} for my wedding. Please provide more details.`
    const whatsappNumber = "919876543210"
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, "_blank")
  }

  return (
    <section id="packages" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Wedding Turban Pricing</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Safawala Mumbai Safa & Pagdi Packages
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {"Transparent turban tying service pricing with no hidden costs. Premium safa, pagdi, sehra & feta options included. Best wedding turban service in Mumbai"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background rounded-lg p-8 border-2 transition-all hover:shadow-2xl ${
                pkg.popular ? "border-accent shadow-xl scale-105" : "border-border hover:border-primary"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-1 rounded-full text-sm font-mono uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <pkg.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground font-mono">/event</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground font-mono text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  pkg.popular
                    ? "bg-accent hover:bg-secondary text-accent-foreground"
                    : "bg-primary hover:bg-accent text-primary-foreground"
                }`}
                size="lg"
                onClick={() => handleWhatsAppInquiry(pkg.name)}
              >
                Book {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">What's Included in All Packages</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Free consultation before booking",
                "Color matching with wedding theme",
                "Professional turban tying",
                "Styling tips and guidance",
                "Flexible appointment timing",
                "Service across all Mumbai areas",
                "Emergency support on wedding day",
                "Quality assurance guarantee",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-foreground font-mono">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground font-mono mb-4">
              {"Need a custom package? Contact us for personalized pricing"}
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("contact")
                element?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
