"use client"

import Image from "next/image"
import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface LogoCarouselProps {
  logos: { src: string; alt: string }[]
  autoPlayInterval?: number // in ms, default 4000
}

export function LogoCarousel({ logos, autoPlayInterval = 4000 }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Group logos into slides of 3
  const logosPerSlide = 3
  const slides = []
  for (let i = 0; i < logos.length; i += logosPerSlide) {
    slides.push(logos.slice(i, i + logosPerSlide))
  }

  const totalSlides = slides.length

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }, [totalSlides])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  const goToDot = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(goToNext, autoPlayInterval)
      return () => clearInterval(interval)
    }
  }, [isPaused, goToNext, autoPlayInterval])

  return (
    <div
      className="relative w-full overflow-hidden py-4 min-h-[150px] flex flex-col justify-between items-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full flex-grow flex items-center justify-center">
        {/* Navigation Arrows - Hidden on mobile, visible on sm and up */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 p-2 rounded-full text-gray-50 z-20 transition-colors hidden sm:block"
          aria-label="Previous client logo"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 p-2 rounded-full text-gray-50 z-20 transition-colors hidden sm:block"
          aria-label="Next client logo"
        >
          <ChevronRight size={24} />
        </button>

        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="flex-shrink-0 w-full flex justify-between items-center px-4 sm:px-8 md:px-16 gap-4 sm:gap-0"
            >
              {slide.map((logo, logoIndex) => (
                <div key={logoIndex} className="flex justify-center items-center flex-1">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={
                      logo.alt === "Publicis Group Logo"
                        ? 200
                        : logo.alt === "BBDO Logo"
                          ? 180
                          : logo.alt === "Indigo Logo"
                            ? 100
                            : logo.alt === "DDB Logo"
                              ? 100
                              : 150 // Default width for other logos
                    }
                    height={
                      logo.alt === "Publicis Group Logo"
                        ? 100
                        : logo.alt === "BBDO Logo"
                          ? 90
                          : logo.alt === "Indigo Logo"
                            ? 50
                            : logo.alt === "DDB Logo"
                              ? 50
                              : 75 // Default height for other logos
                    }
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Dots - One for each slide */}
      <div className="flex justify-center space-x-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToDot(index)}
            className={cn(
              "h-2 w-2 rounded-full bg-gray-500 transition-colors duration-300",
              currentIndex === index ? "bg-purple-400" : "hover:bg-gray-300",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
