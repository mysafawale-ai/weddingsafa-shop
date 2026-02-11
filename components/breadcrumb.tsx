"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  domain?: string
}

export function Breadcrumb({ items, domain }: BreadcrumbProps) {
  // Build JSON-LD structured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": domain ? `https://${domain}` : "/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.label,
        "item": item.href ? (domain ? `https://${domain}${item.href}` : item.href) : undefined
      }))
    ]
  }

  return (
    <>
      {/* JSON-LD Schema for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Visual Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-100 py-3 px-4">
        <div className="container mx-auto">
          <ol className="flex items-center flex-wrap gap-1 text-sm">
            <li className="flex items-center">
              <Link 
                href="/" 
                className="text-primary hover:text-accent transition-colors flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only sm:not-sr-only">Home</span>
              </Link>
            </li>
            
            {items.map((item, index) => (
              <li key={index} className="flex items-center">
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                {item.href && index < items.length - 1 ? (
                  <Link 
                    href={item.href}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-medium truncate max-w-[200px] sm:max-w-none">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}

// Auto-generate breadcrumb from page title
export function AutoBreadcrumb({ 
  pageTitle, 
  category,
  domain 
}: { 
  pageTitle: string
  category?: string
  domain?: string 
}) {
  const items: BreadcrumbItem[] = []
  
  if (category) {
    items.push({ label: category, href: `/#${category.toLowerCase().replace(/\s+/g, '-')}` })
  }
  
  items.push({ label: pageTitle })
  
  return <Breadcrumb items={items} domain={domain} />
}
