"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react" // Import chevron icons

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlayInterval?: number // in ms, default 5000
}

export function TestimonialCarousel({ testimonials, autoPlayInterval = 5000 }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }, [testimonials.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }, [testimonials.length])

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
      className="relative w-full overflow-hidden py-4 min-h-[250px] flex flex-col justify-between items-center" // Reduced py and added min-h for height control
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative w-full flex-grow flex items-center justify-center">
        {" "}
        {/* Added relative and flex-grow */}
        {/* Navigation Arrows - Hidden on mobile, visible on sm and up */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 p-2 rounded-full text-gray-50 z-20 transition-colors hidden sm:block"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/70 p-2 rounded-full text-gray-50 z-20 transition-colors hidden sm:block"
          aria-label="Next testimonial"
        >
          <ChevronRight size={24} />
        </button>
        <div
          ref={carouselRef}
          className="flex transition-transform duration-700 ease-in-out w-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center items-center px-4">
              <div className="max-w-2xl text-center">
                <p className="text-base italic mb-4 text-gray-300">
                  {'"'}
                  {testimonial.quote}
                  {'"'}
                </p>
                <p className="font-semibold text-purple-300 text-sm">{testimonial.author}</p>
                <p className="text-xs text-gray-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToDot(index)}
            className={cn(
              "h-2 w-2 rounded-full bg-gray-500 transition-colors duration-300",
              currentIndex === index ? "bg-purple-400" : "hover:bg-gray-300",
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
