"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Star, CheckCircle, MessageCircle, Clock } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ServicePageProps {
  title: string
  description: string
  shortDescription: string
  mainImage: string
  videos: string[]
  galleryImages: string[]
  areas: string[]
  keyFeatures: string[]
  seoKeywords: string[]
  content: string
  faqs: Array<{ question: string; answer: string }>
}

export function ServicePageTemplate({
  title,
  description,
  shortDescription,
  mainImage,
  videos,
  galleryImages,
  areas,
  keyFeatures,
  seoKeywords,
  content,
  faqs,
}: ServicePageProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    city: "",
    count: "",
    preference: "",
  })

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleWhatsAppSubmit = () => {
    const message = `Hi Safawala, I'm interested in your ${title} service. Name: ${formData.name}, Date: ${formData.date}, City: ${formData.city}, Quantity: ${formData.count}, Preference: ${formData.preference}`
    window.open(`https://wa.me/919725295692?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-10 md:pb-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">{title}</h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 leading-relaxed">{shortDescription}</p>
              <div className="flex gap-3 md:gap-4 flex-wrap">
                <a href="tel:+919725295692">
                  <Button className="bg-accent hover:bg-secondary text-black px-5 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold shadow-lg">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Book Now
                  </Button>
                </a>
                <a href="https://wa.me/919725295692?text=Hi%20Safawala%20I%20want%20to%20get%20a%20free%20quote%20for%20your%20services" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-secondary hover:bg-accent text-white px-5 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold border-2 border-white shadow-lg">
                    Free Quote
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-2xl mt-4 md:mt-0">
              <Image src={mainImage} alt={title} fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* SEO Meta Content */}
      <section className="py-12 px-4 hidden sr-only">
        {seoKeywords.map((keyword) => (
          <span key={keyword}>{keyword}</span>
        ))}
        {areas.map((area) => (
          <span key={area}>{area}</span>
        ))}
      </section>

      {/* Main Content Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <style jsx>{`
              .content-section {
                font-size: 1rem;
              }
              
              /* Headings - Mobile First */
              .content-section h2 {
                font-size: 1.5rem;
                font-weight: 700;
                color: #8b1a1a;
                margin-top: 2rem;
                margin-bottom: 1rem;
                border-bottom: 3px solid #d4a574;
                padding-bottom: 0.5rem;
                line-height: 1.3;
              }
              .content-section h3 {
                font-size: 1.25rem;
                font-weight: 600;
                color: #8b1a1a;
                margin-top: 1.75rem;
                margin-bottom: 0.75rem;
                line-height: 1.35;
              }
              .content-section h4 {
                font-size: 1.125rem;
                font-weight: 600;
                color: #8b1a1a;
                margin-top: 1.5rem;
                margin-bottom: 0.5rem;
                line-height: 1.4;
              }
              
              /* Paragraphs - Mobile Optimized */
              .content-section p {
                color: #374151;
                line-height: 1.75;
                margin-bottom: 1.25rem;
                font-size: 1rem;
                text-align: left;
                word-wrap: break-word;
                overflow-wrap: break-word;
                hyphens: auto;
              }
              
              /* Lists - Clean & Readable */
              .content-section ul {
                margin: 1.25rem 0;
                padding-left: 1.25rem;
                color: #374151;
                list-style-type: disc;
              }
              .content-section ul li {
                margin-bottom: 0.875rem;
                line-height: 1.65;
                padding-left: 0.5rem;
              }
              .content-section ol {
                margin: 1.25rem 0;
                padding-left: 1.25rem;
                color: #374151;
              }
              .content-section ol li {
                margin-bottom: 0.875rem;
                line-height: 1.65;
                padding-left: 0.5rem;
              }
              
              /* Emphasis & Links */
              .content-section strong {
                color: #8b1a1a;
                font-weight: 600;
              }
              .content-section em {
                font-style: italic;
                color: #4b5563;
              }
              
              /* Tablet & Desktop */
              @media (min-width: 640px) {
                .content-section h2 {
                  font-size: 1.75rem;
                  margin-top: 2.5rem;
                }
                .content-section h3 {
                  font-size: 1.375rem;
                  margin-top: 2rem;
                }
                .content-section h4 {
                  font-size: 1.25rem;
                }
                .content-section p {
                  font-size: 1.0625rem;
                  line-height: 1.8;
                  margin-bottom: 1.25rem;
                }
              }
              
              @media (min-width: 768px) {
                .content-section h2 {
                  font-size: 1.875rem;
                  margin-top: 2.5rem;
                  margin-bottom: 1.25rem;
                }
                .content-section h3 {
                  font-size: 1.5rem;
                }
                .content-section p {
                  font-size: 1.0625rem;
                  line-height: 1.85;
                  margin-bottom: 1.5rem;
                }
                .content-section ul,
                .content-section ol {
                  padding-left: 1.75rem;
                }
              }
              
              /* First heading special styling */
              .content-section h2:first-child {
                margin-top: 0;
              }
              
              /* Contact info styling */
              .content-section p:last-child {
                margin-bottom: 0;
              }
              
              /* Better spacing between sections */
              .content-section h2 + p {
                margin-top: 0.75rem;
              }
              .content-section h3 + p {
                margin-top: 0.5rem;
              }
            `}</style>
            <div className="content-section prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 md:py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Why Choose Safawala</h2>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="flex gap-3 md:gap-4 items-start bg-white p-4 md:p-6 rounded-lg shadow-md">
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      {videos.length > 0 && (
        <section className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Our Work in Action</h2>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              {videos.map((video, index) => (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                  <video className="w-full h-64 sm:h-80 md:h-96 object-cover" controls playsInline>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-10 md:py-16 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Gallery</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="relative h-40 sm:h-52 md:h-64 rounded-lg overflow-hidden shadow-md">
                  <Image src={image} alt={`Gallery ${index + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Areas Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Service Areas in Mumbai</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {areas.map((area, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 bg-accent/10 p-3 md:p-4 rounded-lg">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm md:text-base">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      {faqs.length > 0 && (
        <section className="py-10 md:py-16 bg-secondary/10">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-primary">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white p-4 md:p-6 rounded-lg shadow-md cursor-pointer group">
                  <summary className="font-semibold text-base md:text-lg text-primary flex items-start list-none">
                    <Star className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-accent flex-shrink-0 mt-0.5" />
                    <span className="flex-1">{faq.question}</span>
                  </summary>
                  <p className="mt-3 md:mt-4 text-gray-700 text-sm md:text-base leading-relaxed ml-6 md:ml-8">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-10 md:py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">Ready to Book Your {title}?</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 max-w-2xl mx-auto">
            Contact Safawala Mumbai today for the most professional turban tying service in Mumbai
          </p>
          <div className="flex gap-3 md:gap-4 justify-center flex-wrap">
            <a href="tel:+919725295692">
              <Button className="bg-accent hover:bg-secondary text-black px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="hidden sm:inline">Call Now: </span>+91-9725295692
              </Button>
            </a>
            <a href="https://wa.me/919725295692" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-4 sm:px-6 md:px-8 py-4 md:py-6 text-sm sm:text-base md:text-lg">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form and Details Section */}
      <section className="py-10 md:py-16 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-5 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">Book Now</h3>
                <div className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Event / Wedding Date *</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleFormChange}
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Event / Destination City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleFormChange}
                      placeholder="e.g., Mumbai, Thane, Navi Mumbai"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">No. of Safas / Turbans Required *</label>
                    <input
                      type="text"
                      name="count"
                      value={formData.count}
                      onChange={handleFormChange}
                      placeholder="e.g., 1, 5, 10"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5 md:mb-2">Design / Colour / Fabric Preference</label>
                    <textarea
                      name="preference"
                      value={formData.preference}
                      onChange={handleFormChange}
                      placeholder="e.g., Traditional red & gold, silk fabric"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      rows={3}
                    />
                  </div>
                  <Button
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 md:py-4 rounded-lg font-semibold flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
                    Send Enquiry via WhatsApp
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-4 md:space-y-6">
              {/* Call Us */}
              <div className="bg-primary text-white rounded-lg shadow-lg p-5 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-accent rounded-full p-3 md:p-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">Call Us</h4>
                    <p className="text-white/80 mb-2 md:mb-3 text-sm md:text-base">Available 9 AM - 9 PM</p>
                    <a href="tel:+919725295692" className="text-accent text-base md:text-lg font-semibold hover:text-secondary transition-colors">
                      +91 9725295692
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-green-500 text-white rounded-lg shadow-lg p-5 md:p-8">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="bg-white rounded-full p-3 md:p-4">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold mb-1 md:mb-2">WhatsApp</h4>
                    <p className="text-white/80 mb-2 md:mb-3 text-sm md:text-base">Quick response guaranteed</p>
                    <a
                      href="https://wa.me/919725295692?text=Hi%20Safawala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-base md:text-lg font-semibold hover:text-gray-200 transition-colors"
                    >
                      Chat Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-lg shadow-lg p-5 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">Why Contact Safawala?</h4>
                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Free consultation and design guidance</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Instant quotes on WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Same-day response to all queries</span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-accent flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">Flexible appointment scheduling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hideMainNavigation={true} />
      <WhatsAppFloat />
    </main>
  )
}
