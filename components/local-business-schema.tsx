/**
 * Local Business Schema Component
 * Adds structured data for better local SEO in footer
 */

import Script from "next/script"

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawalamumbai.com",
  name: "Safawala Mumbai - Wedding Turban Service",
  image: "https://safawalamumbai.com/SAFAWALA%20LOGO.png",
  description: "Mumbai's most trusted wedding turban specialists with 20+ years of heritage.",
  telephone: "+91-9725295692",
  email: "info@safawalamumbai.com",
  url: "https://safawalamumbai.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 15, Ground Floor, Near Gateway of India, Colaba Causeway",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.9220",
    longitude: "72.8347"
  },
  areaServed: {
    "@type": "City",
    name: "Mumbai"
  },
  sameAs: [
    "https://www.facebook.com/safawalamumbai/",
    "https://www.instagram.com/safawalamumbai/",
    "https://wa.me/919725295692"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500"
  }
}

export function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  )
}

// Contact information for schema
export const contactInfo = {
  phone: "+91-9725295692",
  email: "info@safawalamumbai.com",
  address: "Shop No. 15, Ground Floor, Near Gateway of India, Colaba Causeway, Mumbai, Maharashtra – 400001",
  hours: "9 AM - 9 PM (Daily)",
  whatsapp: "https://wa.me/919725295692",
}
