// Page data configuration for all Mumbai service pages
// This file contains the data structure for generating service pages

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

export const GALLERY_IMAGES = [
  "/1.png", "/2.png", "/3.png", "/gallery-3.png", "/gallery-4.png",
  "/1-6.webp", "/11-3.webp", "/12-4.webp", "/12-5.webp", "/13-3.webp",
  "/14-3.webp", "/14-4.webp", "/15-2.webp", "/17-3.webp", "/18-4.webp",
  "/19-3.webp", "/20-3.webp", "/21-3.webp", "/23-3.webp", "/25-3.webp",
  "/27-3.webp", "/28-3.webp", "/33-3.webp", "/36-3.webp", "/37-3.webp",
  "/38-3.webp", "/40-3.webp", "/4-3.webp", "/5-3.webp", "/52-3.webp",
  "/54-3.webp", "/56-3.webp", "/59-3.webp", "/7-3.webp", "/8-3.webp", "/9-3.webp"
]

export const VIDEOS = [
  "/main video.mp4", "/video-1.mp4", "/video-2.mp4", "/video-3.mp4",
  "/video-4.mp4", "/video-5.mp4", "/video-6.mp4", "/video-7.mp4",
  "/video-8.mp4", "/video-9.mp4"
]

export const MAIN_IMAGES = [
  "/37-3.webp", "/1-6.webp", "/11-3.webp", "/12-4.webp", "/13-3.webp",
  "/14-3.webp", "/15-2.webp", "/17-3.webp", "/18-4.webp", "/19-3.webp",
  "/20-3.webp", "/21-3.webp", "/23-3.webp", "/25-3.webp", "/27-3.webp"
]

// Helper to get random items from array
export function getRandomItems<T>(arr: T[], count: number): T[] {
  const shuffled = [...arr].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Helper to get gallery images for a page
export function getGalleryImages(seed: number): string[] {
  const start = seed % (GALLERY_IMAGES.length - 10)
  return GALLERY_IMAGES.slice(start, start + 10)
}

// Helper to get videos for a page  
export function getVideos(seed: number): string[] {
  const start = seed % (VIDEOS.length - 2)
  return VIDEOS.slice(start, start + 2)
}

// Helper to get main image for a page
export function getMainImage(seed: number): string {
  return MAIN_IMAGES[seed % MAIN_IMAGES.length]
}

// Base content generator
export function generateBaseContent(keyword: string, keywordCapitalized: string): string {
  return `
<h2>Welcome to Safawala Mumbai - Your Premier ${keywordCapitalized} Destination</h2>

<p>Are you searching for the perfect <strong>${keyword}</strong> for your wedding or special occasion? Look no further than Safawala Mumbai, the city's most trusted and experienced service provider for <strong>${keyword}</strong>. For over two decades, we have been the preferred choice for grooms, families, and wedding planners seeking authentic and beautifully crafted <strong>${keyword}</strong>. Our expertise combined with contemporary designs has made us Mumbai's leading specialists.</p>

<p>At Safawala Mumbai, we understand that <strong>${keyword}</strong> is not just about tradition – it's a symbol of honor and celebration. Whether you're a groom looking for the perfect <strong>${keyword}</strong> for your wedding day, or you need services for baraatis and family members, our team of expert specialists is here to serve you with excellence. We provide premium <strong>${keyword}</strong> service across all areas including Colaba, Bandra, Juhu, Andheri, Powai, Thane, and Navi Mumbai.</p>

<h2>The Importance of ${keywordCapitalized}</h2>

<p>The <strong>${keyword}</strong> holds immense cultural and traditional significance in Indian weddings. It represents respect, dignity, and honor. When you choose the right <strong>${keyword}</strong>, you're not just selecting headwear – you're embracing centuries of tradition while making a powerful style statement.</p>

<p>In Mumbai, where weddings are grand celebrations, the <strong>${keyword}</strong> plays a crucial role in completing the groom's royal look. Whether it's a Marwari wedding in South Mumbai, a Gujarati celebration in Borivali, or a destination wedding in Juhu, the perfect <strong>${keyword}</strong> can transform the entire wedding aesthetic. That's why choosing an experienced service provider like Safawala Mumbai is essential.</p>

<h2>Our Premium ${keywordCapitalized} Services</h2>

<h3>Groom's ${keywordCapitalized}</h3>
<p>The groom deserves the most spectacular <strong>${keyword}</strong> on his wedding day. Our expert specialists create stunning designs that complement your sherwani and wedding theme perfectly. We offer customized <strong>${keyword}</strong> in various styles including Rajasthani, Marwari, Jodhpuri, and contemporary fusion designs.</p>

<h3>Baraati ${keywordCapitalized}</h3>
<p>Complete your baraat with our premium <strong>${keyword}</strong> for wedding guests. We provide bulk services for baraatis with matching designs that create a coordinated and impressive look. Our baraati <strong>${keyword}</strong> service includes professional service at your venue.</p>

<h3>Family Packages</h3>
<p>Make your family stand out with our special family <strong>${keyword}</strong> packages. We offer coordinated designs for the groom's family, creating a unified and regal appearance.</p>

<h2>Why Choose Safawala Mumbai for ${keywordCapitalized}?</h2>

<h3>20+ Years of Excellence</h3>
<p>Our journey in providing <strong>${keyword}</strong> began over two decades ago. Since then, we have served thousands of weddings across Mumbai, perfecting our craft and building a reputation for excellence.</p>

<h3>Expert Specialists</h3>
<p>Our team consists of highly trained specialists who have mastered the art. They understand the nuances of different styles and can create the perfect <strong>${keyword}</strong> for any occasion.</p>

<h3>Premium Quality Materials</h3>
<p>We use only the finest fabrics for our <strong>${keyword}</strong> service. From rich silk to elegant cotton, our materials are sourced from trusted suppliers to ensure superior quality.</p>

<h3>All Mumbai Areas Covered</h3>
<p>We provide <strong>${keyword}</strong> service across the entire city. Whether you're in South Mumbai, Western Suburbs, Eastern Suburbs, or Navi Mumbai, our team reaches you with professional service.</p>

<h2>Service Areas for ${keywordCapitalized}</h2>

<p><strong>South Mumbai:</strong> Colaba, Cuffe Parade, Nariman Point, Churchgate, Marine Drive, Malabar Hill, Breach Candy</p>

<p><strong>Central Mumbai:</strong> Parel, Dadar, Matunga, Sion, Byculla, Lower Parel, Worli, Mumbai Central</p>

<p><strong>Western Suburbs:</strong> Bandra, Khar, Santacruz, Juhu, Andheri, Vile Parle, Goregaon, Malad, Kandivali, Borivali</p>

<p><strong>Eastern Suburbs:</strong> Chembur, Kurla, Ghatkopar, Mulund, Bhandup, Powai</p>

<p><strong>Navi Mumbai:</strong> Vashi, Nerul, CBD Belapur, Kharghar, Panvel</p>

<h2>How to Book ${keywordCapitalized}</h2>

<ol>
<li><strong>Contact Us:</strong> Call +91-9725295692 or WhatsApp</li>
<li><strong>Consultation:</strong> Our experts will guide you through options</li>
<li><strong>Confirmation:</strong> Confirm booking with advance payment</li>
<li><strong>Service:</strong> Our team arrives at your venue on the scheduled date</li>
</ol>

<h2>Pricing for ${keywordCapitalized}</h2>

<ul>
<li>Individual Groom Service: Starting from ₹1,500</li>
<li>Baraati Service (per person): Starting from ₹500</li>
<li>Family Packages: Custom pricing</li>
<li>Bulk Bookings: Special discounts available</li>
</ul>

<h2>Contact Safawala Mumbai for ${keywordCapitalized}</h2>

<p><strong>Phone:</strong> +91-9725295692<br/>
<strong>WhatsApp:</strong> +91-9725295692<br/>
<strong>Email:</strong> info@safawalamumbai.com<br/>
<strong>Address:</strong> Shop No. 15, Ground Floor, Near Gateway of India, Colaba Causeway, Mumbai - 400001</p>

<p>Experience the finest <strong>${keyword}</strong> with Safawala Mumbai. Book today!</p>
  `
}

// Generate FAQs
export function generateFAQs(keyword: string) {
  return [
    {
      question: `What is the cost of ${keyword}?`,
      answer: `Our ${keyword} pricing starts from ₹500 for baraati service and ₹1,500 for groom service. Prices vary based on design and customization. Contact us for quotes.`,
    },
    {
      question: `Do you provide on-site service for ${keyword}?`,
      answer: `Yes, we provide on-site ${keyword} service at your venue across all Mumbai areas.`,
    },
    {
      question: `How early should I book ${keyword}?`,
      answer: `We recommend booking your ${keyword} at least 2-3 weeks in advance. Peak season requires earlier booking.`,
    },
    {
      question: `What areas in Mumbai do you serve for ${keyword}?`,
      answer: `We provide ${keyword} service across all Mumbai including South Mumbai, Bandra, Juhu, Andheri, Powai, Thane, and Navi Mumbai.`,
    },
    {
      question: `Can you customize designs for ${keyword}?`,
      answer: `Yes, we specialize in custom ${keyword} designs to match your preferences and wedding theme.`,
    },
    {
      question: `Do you provide bulk service for ${keyword}?`,
      answer: `Yes, we offer bulk ${keyword} service with special rates for large groups.`,
    },
  ]
}

// Generate key features
export function generateKeyFeatures(keyword: string): string[] {
  return [
    `Expert ${keyword} specialists with 20+ years of experience`,
    `Authentic traditional techniques for Mumbai weddings`,
    `Customized ${keyword} designs for your wedding theme`,
    `Quick and professional service on wedding day across Mumbai`,
    `Perfect fit with maximum comfort guaranteed`,
    `Affordable ${keyword} pricing for individual or group bookings`,
    `On-call service available across all Mumbai areas`,
    `100% satisfaction guaranteed with quality materials`,
  ]
}
