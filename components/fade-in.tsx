"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function FadeIn({ children, className, delay = 0, direction = "up", duration = 600 }: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if IntersectionObserver is supported
    if (typeof window === "undefined" || !window.IntersectionObserver) {
      setIsVisible(true) // Fallback: show content immediately
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
          observer.unobserve(entry.target) // Stop observing once visible
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [delay])

  const getTransformClasses = () => {
    if (direction === "up") return "translate-y-8"
    if (direction === "down") return "-translate-y-8"
    if (direction === "left") return "translate-x-8"
    if (direction === "right") return "-translate-x-8"
    return ""
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${getTransformClasses()}`,
        className,
      )}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}
