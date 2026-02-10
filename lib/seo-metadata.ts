/**
 * SEO Metadata and Structured Data for Safawala Mumbai
 * Local SEO optimization for Mumbai wedding turban services
 */

export const MUMBAI_AREAS = [
  "South Mumbai", "Colaba", "Malabar Hill", "Bandra West", "Juhu", "Andheri West",
  "Breach Candy", "Cuffe Parade", "Nariman Point", "Churchgate", "Parel", "Dadar West",
  "Santacruz West", "Powai", "Vile Parle West", "Khar West", "Bandra East", "Andheri East",
  "Borivali West", "Goregaon West", "Thane West", "Mulund West", "Chembur", "Kurla",
  "Ghatkopar", "Malad West", "Kandivali West", "Borivali East", "Goregaon East",
  "Kandivali East", "Malad East", "Sion", "Matunga", "Byculla", "Cumballa Hill",
  "Lower Parel", "Bhandup", "Mulund East", "Kurla West", "Ghatkopar East", "Powai Hill",
  "Vashi", "Nerul", "CBD Belapur", "Kharghar", "Panvel", "Mumbai Central", "Mumbai West",
  "Mumbai East", "Mumbai Suburbs"
]

export const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://safawalamumbai.com",
  name: "Safawala Mumbai - Premium Wedding Turban Service Mumbai",
  image: "https://safawalamumbai.com/SAFAWALA LOGO.png",
  description: "Mumbai's most trusted wedding turban specialists with 20+ years of heritage. Expert safa, pagdi, feta & sehra tying for grooms and baraatis across all Mumbai areas.",
  url: "https://safawalamumbai.com",
  telephone: "+91-9725295692",
  email: "info@safawalamumbai.com",
  alternateName: ["Safawala Mumbai", "Safawala Wedding Turbans Mumbai", "Pagdi Tying Mumbai", "Safa Service Mumbai", "Turban Service Mumbai"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 15, Ground Floor, Near Gateway of India, Colaba Causeway",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.9220",
    longitude: "72.8347",
  },
  priceRange: "₹500-₹5000",
  areaServed: [
    {
      "@type": "City",
      name: "Mumbai",
      areaServed: MUMBAI_AREAS
    }
  ],
  serviceArea: {
    "@type": "City",
    name: "Mumbai",
    areaServed: MUMBAI_AREAS
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500",
    bestRating: "5",
    worstRating: "1",
  },
  hasMap: "https://maps.google.com/?q=Safawala+Mumbai+Colaba",
  sameAs: [
    "https://www.facebook.com/safawalamumbai/",
    "https://www.instagram.com/safawalamumbai/",
    "https://wa.me/919725295692",
  ],
  foundingDate: "2004",
  founder: {
    "@type": "Person",
    name: "Safawala Founders",
  },
  knowsAbout: [
    "Wedding Turban Tying",
    "Safa Tying",
    "Pagdi Design",
    "Rajasthani Turbans",
    "Marathi Pheta",
    "Groom Styling",
    "Traditional Turban Art",
    "Wedding Sehra",
  ],
  opens: "09:00",
  closes: "21:00",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "20:00",
    },
  ],
}

export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Safawala Mumbai",
  url: "https://safawalamumbai.com",
  logo: "https://safawalamumbai.com/SAFAWALA LOGO.png",
  description: "Premium wedding turban service in Mumbai with 20+ years of heritage serving all areas of Mumbai",
  sameAs: [
    "https://www.facebook.com/safawalamumbai/",
    "https://www.instagram.com/safawalamumbai/",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+91-9725295692",
    email: "info@safawalamumbai.com",
    areaServed: "IN",
    availableLanguage: ["hi", "en", "mr"],
  },
}

export const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best turban service in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Safawala Mumbai is Mumbai's most trusted turban service with 20+ years of heritage. We offer expert safa, pagdi, feta & sehra tying with master specialists across all Mumbai areas including Colaba, Bandra, Juhu, Andheri, and more.",
      },
    },
    {
      "@type": "Question",
      name: "How much does turban tying service cost in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our turban tying service in Mumbai ranges from ₹500-₹5000 depending on the type of turban, fabric, and complexity. We offer competitive pricing with premium quality for all Mumbai locations.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide same-day turban service in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide same-day turban tying service across Mumbai including South Mumbai, Western Suburbs, Eastern Suburbs, and Navi Mumbai. Contact us at +91-9725295692 or WhatsApp for instant booking.",
      },
    },
    {
      "@type": "Question",
      name: "What areas of Mumbai do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve all major areas of Mumbai including Colaba, Bandra, Juhu, Andheri, Powai, Thane, Vashi, Navi Mumbai, Borivali, Goregaon, Malad, Kandivali, and all other areas.",
      },
    },
    {
      "@type": "Question",
      name: "Can you customize turban designs in Mumbai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer fully customized turban designs in Mumbai. Our specialists will work with you to create the perfect design matching your preferences and wedding theme.",
      },
    },
  ],
}

export const BREADCRUMB_SCHEMA = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const PRODUCT_SCHEMA = (serviceName: string, serviceUrl: string, description: string, price: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  url: serviceUrl,
  description: description,
  provider: {
    "@type": "LocalBusiness",
    name: "Safawala Mumbai",
    url: "https://safawalamumbai.com",
    telephone: "+91-9725295692",
  },
  areaServed: {
    "@type": "City",
    name: "Mumbai",
  },
  priceRange: price,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "8500",
  },
})

export const MumbaiLocalizations = {
  mumbai: {
    name: "Mumbai",
    region: "Maharashtra",
    country: "India",
    neighborhoods: MUMBAI_AREAS,
    landmarks: ["Gateway of India", "Marine Drive", "Bandra Worli Sea Link", "Taj Mahal Palace", "Siddhivinayak Temple"],
  }
}

// Dynamic SEO metadata generator for Mumbai
export function generateServiceMetadata(
  serviceName: string,
  serviceDescription: string,
  keywords: string[],
  slug: string
) {
  return {
    title: `${serviceName} in Mumbai | Expert Service | Safawala Mumbai`,
    description: `${serviceDescription} Get professional ${serviceName.toLowerCase()} service in Mumbai by Safawala Mumbai. Experienced specialists, premium quality, same-day service available across all Mumbai areas.`,
    keywords: [
      ...keywords,
      `${serviceName.toLowerCase()} mumbai`,
      "wedding turban service mumbai",
      "safa tying mumbai",
      "pagdi service mumbai",
      "groom styling mumbai",
      "turban specialist mumbai",
    ].join(", "),
    openGraph: {
      title: `${serviceName} in Mumbai - Safawala Mumbai Professional Service`,
      description: `Expert ${serviceName.toLowerCase()} with master specialists. Same-day service, premium quality, all Mumbai areas.`,
      url: `https://safawalamumbai.com/${slug}`,
      type: "website",
    },
  }
}
