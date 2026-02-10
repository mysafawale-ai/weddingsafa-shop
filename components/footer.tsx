"use client"

import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react"
import { LocalBusinessSchema } from "./local-business-schema"

interface FooterProps {
  hideMainNavigation?: boolean
}

// Mumbai Areas
const MUMBAI_AREAS = [
  { name: "South Mumbai", slug: "south-mumbai" },
  { name: "Colaba", slug: "colaba" },
  { name: "Malabar Hill", slug: "malabar-hill" },
  { name: "Bandra West", slug: "bandra-west" },
  { name: "Juhu", slug: "juhu" },
  { name: "Andheri West", slug: "andheri-west" },
  { name: "Breach Candy", slug: "breach-candy" },
  { name: "Cuffe Parade", slug: "cuffe-parade" },
  { name: "Nariman Point", slug: "nariman-point" },
  { name: "Churchgate", slug: "churchgate" },
  { name: "Parel", slug: "parel" },
  { name: "Dadar West", slug: "dadar-west" },
  { name: "Santacruz West", slug: "santacruz-west" },
  { name: "Powai", slug: "powai" },
  { name: "Vile Parle West", slug: "vile-parle-west" },
  { name: "Khar West", slug: "khar-west" },
  { name: "Bandra East", slug: "bandra-east" },
  { name: "Andheri East", slug: "andheri-east" },
  { name: "Borivali West", slug: "borivali-west" },
  { name: "Goregaon West", slug: "goregaon-west" },
  { name: "Thane West", slug: "thane-west" },
  { name: "Mulund West", slug: "mulund-west" },
  { name: "Chembur", slug: "chembur" },
  { name: "Kurla", slug: "kurla" },
  { name: "Ghatkopar", slug: "ghatkopar" },
  { name: "Malad West", slug: "malad-west" },
  { name: "Kandivali West", slug: "kandivali-west" },
  { name: "Borivali East", slug: "borivali-east" },
  { name: "Goregaon East", slug: "goregaon-east" },
  { name: "Kandivali East", slug: "kandivali-east" },
  { name: "Malad East", slug: "malad-east" },
  { name: "Sion", slug: "sion" },
  { name: "Matunga", slug: "matunga" },
  { name: "Byculla", slug: "byculla" },
  { name: "Cumballa Hill", slug: "cumballa-hill" },
  { name: "Lower Parel", slug: "lower-parel" },
  { name: "Bhandup", slug: "bhandup" },
  { name: "Mulund East", slug: "mulund-east" },
  { name: "Kurla West", slug: "kurla-west" },
  { name: "Ghatkopar East", slug: "ghatkopar-east" },
  { name: "Powai Hill", slug: "powai-hill" },
  { name: "Vashi", slug: "vashi" },
  { name: "Nerul", slug: "nerul" },
  { name: "CBD Belapur", slug: "cbd-belapur" },
  { name: "Kharghar", slug: "kharghar" },
  { name: "Panvel", slug: "panvel" },
  { name: "Mumbai Central", slug: "mumbai-central" },
  { name: "Mumbai West", slug: "mumbai-west" },
  { name: "Mumbai East", slug: "mumbai-east" },
  { name: "Mumbai Suburbs", slug: "mumbai-suburbs" },
]

// Service Keywords Links
const SERVICE_KEYWORDS = [
  // Core Safa / Pagdi / Turban
  { name: "Safa in Mumbai", slug: "safa-in-mumbai" },
  { name: "Pagdi in Mumbai", slug: "pagdi-in-mumbai" },
  { name: "Pagri in Mumbai", slug: "pagri-in-mumbai" },
  { name: "Pagadi in Mumbai", slug: "pagadi-in-mumbai" },
  { name: "Paghdi in Mumbai", slug: "paghdi-in-mumbai" },
  { name: "Turban in Mumbai", slug: "turban-in-mumbai" },
  { name: "Feta in Mumbai", slug: "feta-in-mumbai" },
  // Wedding & Groom Focus
  { name: "Wedding Safa in Mumbai", slug: "wedding-safa-in-mumbai" },
  { name: "Safa for Groom in Mumbai", slug: "safa-for-groom-in-mumbai" },
  { name: "Groom Safa in Mumbai", slug: "groom-safa-in-mumbai" },
  { name: "Groom Turban in Mumbai", slug: "groom-turban-in-mumbai" },
  { name: "Wedding Turban in Mumbai", slug: "wedding-turban-in-mumbai" },
  { name: "Wedding Pagdi in Mumbai", slug: "wedding-pagdi-in-mumbai" },
  { name: "Wedding Pagri in Mumbai", slug: "wedding-pagri-in-mumbai" },
  { name: "Pagdi for Wedding in Mumbai", slug: "pagdi-for-wedding-in-mumbai" },
  { name: "Pagdi for Marriage in Mumbai", slug: "pagdi-for-marriage-in-mumbai" },
  { name: "Marriage Pagdi in Mumbai", slug: "marriage-pagdi-in-mumbai" },
  { name: "Dulha Safa in Mumbai", slug: "dulha-safa-in-mumbai" },
  { name: "Dulha Pagdi in Mumbai", slug: "dulha-pagdi-in-mumbai" },
  { name: "Dulha Pagri in Mumbai", slug: "dulha-pagri-in-mumbai" },
  { name: "Dulhe Ki Pagdi in Mumbai", slug: "dulhe-ki-pagdi-in-mumbai" },
  { name: "Indian Dulha Turban in Mumbai", slug: "indian-dulha-turban-in-mumbai" },
  { name: "Royal Wedding Turban for Groom in Mumbai", slug: "royal-wedding-turban-for-groom-in-mumbai" },
  { name: "Luxury Wedding Turban in Mumbai", slug: "luxury-wedding-turban-in-mumbai" },
  { name: "Traditional Wedding Safa in Mumbai", slug: "traditional-wedding-safa-in-mumbai" },
  { name: "Designer Wedding Safa in Mumbai", slug: "designer-wedding-safa-in-mumbai" },
  { name: "Custom Wedding Safa in Mumbai", slug: "custom-wedding-safa-in-mumbai" },
  { name: "Premium Pagdi with Kalgi in Mumbai", slug: "premium-pagdi-with-kalgi-in-mumbai" },
  // Regional / Style Based
  { name: "Rajasthani Safa in Mumbai", slug: "rajasthani-safa-in-mumbai" },
  { name: "Rajasthani Wedding Safa in Mumbai", slug: "rajasthani-wedding-safa-in-mumbai" },
  { name: "Jodhpuri Safa in Mumbai", slug: "jodhpuri-safa-in-mumbai" },
  { name: "Jodhpuri Pagdi in Mumbai", slug: "jodhpuri-pagdi-in-mumbai" },
  { name: "Jodhpuri Pagri in Mumbai", slug: "jodhpuri-pagri-in-mumbai" },
  { name: "Jodhpuri Safa for Groom in Mumbai", slug: "jodhpuri-safa-for-groom-in-mumbai" },
  { name: "Jodhpuri Safa for Wedding in Mumbai", slug: "jodhpuri-safa-for-wedding-in-mumbai" },
  { name: "Jodhpuri Safa Design in Mumbai", slug: "jodhpuri-safa-design-in-mumbai" },
  { name: "Rajputi Safa in Mumbai", slug: "rajputi-safa-in-mumbai" },
  { name: "Rajputi Safa Design in Mumbai", slug: "rajputi-safa-design-in-mumbai" },
  { name: "Rajput Pagdi in Mumbai", slug: "rajput-pagdi-in-mumbai" },
  { name: "Rajwadi Safa in Mumbai", slug: "rajwadi-safa-in-mumbai" },
  { name: "Rajwadi Pagdi in Mumbai", slug: "rajwadi-pagdi-in-mumbai" },
  { name: "Marwadi Safa in Mumbai", slug: "marwadi-safa-in-mumbai" },
  { name: "Gujarati Pagdi in Mumbai", slug: "gujarati-pagdi-in-mumbai" },
  { name: "Maharaja Safa in Mumbai", slug: "maharaja-safa-in-mumbai" },
  { name: "Marathi Pheta in Mumbai", slug: "marathi-pheta-in-mumbai" },
  { name: "Punjabi Turban in Mumbai", slug: "punjabi-turban-in-mumbai" },
  // Barati / Group Use
  { name: "Safa for Barati in Mumbai", slug: "safa-for-barati-in-mumbai" },
  { name: "Wedding Safa for Barati in Mumbai", slug: "wedding-safa-for-barati-in-mumbai" },
  { name: "Safa Design for Barati in Mumbai", slug: "safa-design-for-barati-in-mumbai" },
  { name: "Wedding Turban for Barati in Mumbai", slug: "wedding-turban-for-barati-in-mumbai" },
  { name: "Mens Wedding Turban in Mumbai", slug: "mens-wedding-turban-in-mumbai" },
  // Rental / Service Based
  { name: "Safa on Rent in Mumbai", slug: "safa-on-rent-in-mumbai" },
  { name: "Wedding Safa on Rent in Mumbai", slug: "wedding-safa-on-rent-in-mumbai" },
  { name: "Barati Safa on Rent in Mumbai", slug: "barati-safa-on-rent-in-mumbai" },
  { name: "Safa on Rent Near Me in Mumbai", slug: "safa-on-rent-near-me-in-mumbai" },
  { name: "Barati Safa Online in Mumbai", slug: "barati-safa-online-in-mumbai" },
  { name: "Hand Tied Safa Rental Near Me in Mumbai", slug: "hand-tied-safa-rental-near-me-in-mumbai" },
  { name: "Heritage Feta Turban Hire in Mumbai", slug: "heritage-feta-turban-hire-in-mumbai" },
  { name: "Safa Tying Service in Mumbai", slug: "safa-tying-service-in-mumbai" },
  { name: "Professional Safa Tying in Mumbai", slug: "professional-safa-tying-in-mumbai" },
  { name: "Pagdi Bandhne Wala in Mumbai", slug: "pagdi-bandhne-wala-in-mumbai" },
  // Shop / Purchase Intent
  { name: "Buy Wedding Safa in Mumbai", slug: "buy-wedding-safa-in-mumbai" },
  { name: "Wedding Safa for Rent in Mumbai", slug: "wedding-safa-for-rent-in-mumbai" },
  { name: "Safa Shop in Mumbai", slug: "safa-shop-in-mumbai" },
  { name: "Wedding Pagdi Shop in Mumbai", slug: "wedding-pagdi-shop-in-mumbai" },
  { name: "Groom Turban Shop in Mumbai", slug: "groom-turban-shop-in-mumbai" },
  { name: "Safa Garments in Mumbai", slug: "safa-garments-in-mumbai" },
  // Bandhej / Premium
  { name: "Wedding Safa Bandhej in Mumbai", slug: "wedding-safa-bandhej-in-mumbai" },
  { name: "Groom Safa Bandhej in Mumbai", slug: "groom-safa-bandhej-in-mumbai" },
  { name: "Royal Wedding Safa in Mumbai", slug: "royal-wedding-safa-in-mumbai" },
  // Sehra Related
  { name: "Sehra in Mumbai", slug: "sehra-in-mumbai" },
  { name: "Groom Sehra in Mumbai", slug: "groom-sehra-in-mumbai" },
  { name: "Dulha Sehra in Mumbai", slug: "dulha-sehra-in-mumbai" },
  { name: "Dulhe Ka Sehra in Mumbai", slug: "dulhe-ka-sehra-in-mumbai" },
  { name: "Sehra for Groom in Mumbai", slug: "sehra-for-groom-in-mumbai" },
  { name: "Customized Sehra for Baraat in Mumbai", slug: "customized-sehra-for-baraat-in-mumbai" },
  { name: "Sehra Rental in Mumbai", slug: "sehra-rental-in-mumbai" },
  // Draping / Service
  { name: "Wedding Turban Draping in Mumbai", slug: "wedding-turban-draping-in-mumbai" },
  { name: "Wedding Safa Draping in Mumbai", slug: "wedding-safa-draping-in-mumbai" },
]

export function Footer({ hideMainNavigation = false }: FooterProps) {
  return (
    <>
      <LocalBusinessSchema />
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info with Schema */}
            <div itemScope itemType="https://schema.org/LocalBusiness">
              <h2 className="text-3xl font-bold mb-4 text-accent" itemProp="name">
                Safawala Mumbai
              </h2>
              <p className="text-primary-foreground/80 font-mono leading-relaxed mb-6" itemProp="description">
                {
                  "Mumbai's most trusted wedding turban specialists. Bringing royal elegance to your special day since 2004."
                }
              </p>
              <meta itemProp="url" content="https://safawalamumbai.com" />
              <meta itemProp="telephone" content="+91-9725295692" />
              <meta itemProp="email" content="info@safawalamumbai.com" />
              <meta itemProp="areaServed" content="Mumbai" />
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/safawalamumbai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/safawalamumbai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            {!hideMainNavigation && (
            <nav>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {["Packages"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => {
                        const element = document.getElementById(link.toLowerCase().replace(" ", "-"))
                        element?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
            )}

            {/* Services */}
            <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-primary-foreground/80 font-mono">
              <li>Wedding Turban Tying Service</li>
              <li>Safa & Pagdi Tying</li>
              <li>Groom Turban & Sehra</li>
              <li>Feta & Wedding Turban Design</li>
              <li>Barati Safa Service</li>
              <li>Marathi Pheta Service</li>
              <li>Destination Wedding Turbans</li>
            </ul>
          </div>

          {/* Contact Info with Schema */}
          <address className="not-italic">
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <p className="text-primary-foreground/80 font-mono">
                    Shop No. 15, Ground Floor,<br />
                    Near Gateway of India, Colaba Causeway,<br />
                    Mumbai, Maharashtra – 400001, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="tel:+919725295692"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  +91 97252 95692
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:info@safawalamumbai.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
                >
                  info@safawalamumbai.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" aria-hidden="true" />
                <div className="text-primary-foreground/80 font-mono">
                  <p>Mon - Sat: 9 AM - 9 PM</p>
                  <p>Sunday: 10 AM - 8 PM</p>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Service Areas - We Service In */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-4 text-center">We Service In - All Areas of Mumbai</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 text-sm text-center">
            {MUMBAI_AREAS.map((area) => (
              <a
                key={area.slug}
                href={`/${area.slug}`}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-mono py-1"
              >
                {area.name}
              </a>
            ))}
          </div>
          <p className="text-center text-accent font-mono text-sm mt-4">
            ✓ Destination Wedding Turban Service | ✓ On-site Safa & Pagdi Tying | ✓ Groom & Baraati Coverage | ✓ All Mumbai Areas
          </p>
        </div>

        {/* Our Services Links */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h4 className="text-xl font-bold mb-6 text-center">Wedding Turban Services in Mumbai</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {SERVICE_KEYWORDS.map((service) => (
              <a
                key={service.slug}
                href={`/${service.slug}`}
                className="text-primary-foreground/80 hover:text-accent transition-colors font-mono"
              >
                → {service.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/80 font-mono text-sm text-center md:text-left">
              © 2025 Safawala Mumbai. All rights reserved. | Mumbai's Premier Wedding Turban Service
            </p>
            <div className="flex gap-6 text-sm font-mono">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO - Service Areas in Structured Format */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <h3 className="text-xl font-bold mb-4 text-center">Service Areas - All Neighborhoods of Mumbai</h3>
          <p className="text-center text-primary-foreground/80 font-mono text-sm leading-relaxed max-w-4xl mx-auto">
            We provide professional turban tying service across all major areas of Mumbai including:
            <br />
            <strong>South Mumbai:</strong> Colaba, Cuffe Parade, Nariman Point, Churchgate, Marine Drive, Malabar Hill, Breach Candy, Cumballa Hill
            <br />
            <strong>Central Mumbai:</strong> Parel, Dadar, Matunga, Sion, Byculla, Lower Parel, Mumbai Central
            <br />
            <strong>Western Suburbs:</strong> Bandra, Juhu, Andheri, Santacruz, Vile Parle, Khar, Goregaon, Malad, Kandivali, Borivali
            <br />
            <strong>Eastern Suburbs:</strong> Chembur, Kurla, Ghatkopar, Mulund, Bhandup, Powai
            <br />
            <strong>Navi Mumbai:</strong> Vashi, Nerul, CBD Belapur, Kharghar, Panvel
          </p>
          <p className="text-center text-accent font-mono text-sm mt-3 font-semibold">
            ✓ Same-Day Service Available | ✓ Free Consultation | ✓ Destination Weddings | ✓ On-site Styling
          </p>
        </div>
      </div>

      {/* SEO Keywords (hidden) */}
      <div className="sr-only">
        Wedding turban Mumbai, safa Mumbai, pagdi tying service Mumbai, groom turban Mumbai, wedding safa Mumbai, turban tying Mumbai,
        best turban service Mumbai, safa tying service Mumbai, pagdi design Mumbai, feta tying Mumbai, sehra Mumbai, barati safa Mumbai,
        turban rental Mumbai, turban service Mumbai, wedding turban price Mumbai, turban for groom Mumbai, custom wedding turban Mumbai,
        turban tying near me Mumbai, groom pagdi Mumbai, traditional turban Mumbai, premium safa design Mumbai, wedding turban online Mumbai,
        turban shop Mumbai, modern pagdi design Mumbai, ethnic turban Mumbai, fabric safa Mumbai, gold embroidered turban Mumbai,
        bridal groom turban Mumbai, turban booking Mumbai, same day turban service Mumbai, professional turban tying Mumbai,
        handmade safa Mumbai, silk pagdi Mumbai, embellished turban Mumbai, wedding turban rental Mumbai, groom styling Mumbai,
        rajasthani safa mumbai, jodhpuri safa mumbai, marathi pheta mumbai, gujarati pagdi mumbai, punjabi turban mumbai,
        Colaba safa service, Bandra turban tying, Juhu pagdi service, Andheri wedding turban, Powai safa tying,
        Thane turban service, Vashi safa service, Navi Mumbai turban, South Mumbai pagdi, Western Suburbs safa
      </div>
    </footer>
    </>
  )
}
