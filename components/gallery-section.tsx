"use client"

import { useState } from "react"
import { Play, X } from "lucide-react"

const galleryItems = [
  { id: 33, type: "video", thumbnail: "/video-thumb-2.jpg", videoSrc: "/video-2.mp4", title: "Turban Styling Video 2" },
  { id: 34, type: "video", thumbnail: "/video-thumb-3.jpg", videoSrc: "/video-3.mp4", title: "Turban Styling Video 3" },
  { id: 35, type: "video", thumbnail: "/video-thumb-4.jpg", videoSrc: "/video-4.mp4", title: "Turban Styling Video 4" },
  { id: 36, type: "video", thumbnail: "/video-thumb-5.jpg", videoSrc: "/video-5.mp4", title: "Turban Styling Video 5" },
  { id: 38, type: "video", thumbnail: "/video-thumb-7.jpg", videoSrc: "/video-7.mp4", title: "Turban Styling Video 7" },
  { id: 39, type: "video", thumbnail: "/video-thumb-8.jpg", videoSrc: "/video-8.mp4", title: "Turban Styling Video 8" },
  { id: 40, type: "video", thumbnail: "/video-thumb-9.jpg", videoSrc: "/video-9.mp4", title: "Turban Styling Video 9" },
  { id: 1, type: "image", src: "/1-6.webp" },
  { id: 2, type: "image", src: "/11-3.webp" },
  { id: 3, type: "image", src: "/12-4.webp" },
  { id: 4, type: "image", src: "/12-5.webp" },
  { id: 5, type: "image", src: "/13-3.webp" },
  { id: 6, type: "image", src: "/14-3.webp" },
  { id: 7, type: "image", src: "/14-4.webp" },
  { id: 8, type: "image", src: "/15-2.webp" },
  { id: 9, type: "image", src: "/17-3.webp" },
  { id: 10, type: "image", src: "/18-4.webp" },
  { id: 11, type: "image", src: "/19-3.webp" },
  { id: 12, type: "image", src: "/20-3.webp" },
  { id: 13, type: "image", src: "/21-3.webp" },
  { id: 14, type: "image", src: "/23-3.webp" },
  { id: 15, type: "image", src: "/25-3.webp" },
  { id: 16, type: "image", src: "/27-3.webp" },
  { id: 17, type: "image", src: "/28-3.webp" },
  { id: 18, type: "image", src: "/33-3.webp" },
  { id: 19, type: "image", src: "/36-3.webp" },
  { id: 20, type: "image", src: "/37-3.webp" },
  { id: 21, type: "image", src: "/38-3.webp" },
  { id: 22, type: "image", src: "/4-3.webp" },
  { id: 23, type: "image", src: "/40-3.webp" },
  { id: 24, type: "image", src: "/5-3.webp" },
  { id: 25, type: "image", src: "/52-3.webp" },
  { id: 26, type: "image", src: "/54-3.webp" },
  { id: 27, type: "image", src: "/56-3.webp" },
  { id: 28, type: "image", src: "/59-3.webp" },
  { id: 29, type: "image", src: "/7-3.webp" },
  { id: 30, type: "image", src: "/8-3.webp" },
  { id: 31, type: "image", src: "/9-3.webp" },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "image" | "video">("all")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredItems =
    selectedFilter === "all" ? galleryItems : galleryItems.filter((item) => item.type === selectedFilter)

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-accent font-mono uppercase tracking-wider mb-4">Our Work</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Gallery of Excellence</h2>
          <p className="text-lg text-muted-foreground leading-relaxed font-mono">
            {
              "Explore our stunning collection of wedding turbans and see the artistry that makes every groom look royal"
            }
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-6 py-2 rounded-full font-mono transition-all ${
              selectedFilter === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/20"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setSelectedFilter("image")}
            className={`px-6 py-2 rounded-full font-mono transition-all ${
              selectedFilter === "image"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/20"
            }`}
          >
            Photos
          </button>
          <button
            onClick={() => setSelectedFilter("video")}
            className={`px-6 py-2 rounded-full font-mono transition-all ${
              selectedFilter === "video"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/20"
            }`}
          >
            Videos
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={() => item.type === "video" && setSelectedVideo(item.videoSrc || null)}
            >
              <img
                src={item.type === "image" ? item.src : item.thumbnail}
                alt={item.title || ""}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                </div>
              )}
              {item.type === "video" && (
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-0 md:p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="relative w-full h-screen md:h-auto md:max-h-[90vh] md:max-w-2xl flex items-center justify-center" 
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Mobile Optimized */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 bg-red-600 hover:bg-red-700 text-white rounded-full w-12 h-12 flex items-center justify-center transition-colors duration-200 shadow-lg hover:shadow-xl"
                aria-label="Close video"
              >
                <X size={28} strokeWidth={3} />
              </button>

              {/* Video Player */}
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-full md:rounded-lg object-contain"
              />
            </div>

            {/* Mobile Swipe Hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 md:hidden text-white text-sm opacity-70">
              Tap X to close
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-mono mb-6 text-lg">
            {"Want to see more? Visit our social media for daily updates"}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.instagram.com/safawalaofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/people/Safawalacom/61579176513014/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary hover:bg-accent text-primary-foreground rounded-full font-mono transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
