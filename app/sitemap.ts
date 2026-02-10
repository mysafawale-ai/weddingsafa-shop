import { MetadataRoute } from 'next'
import { DOMAIN_PAGES } from '@/lib/domain-pages-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://weddingsafa.shop'
  const domain = 'weddingsafa.shop'
  const currentDate = new Date().toISOString()
  
  // Get pages for this domain
  const domainPages = DOMAIN_PAGES[domain] || []
  
  // Homepage - highest priority
  const sitemap: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
  
  // Add all domain pages
  for (const page of domainPages) {
    sitemap.push({
      url: `${baseUrl}/${page}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    })
  }
  
  return sitemap
}
