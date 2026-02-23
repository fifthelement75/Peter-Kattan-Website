"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Play, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// Portfolio projects data - you can add your projects here
const projects = [
  {
    id: 1,
    title: "Leadership Capabilities",
    description: "Product & Design Processes, Design Operations, Strategy & Team Alignment",
    media: [
      { type: "image", src: "/images/work/leadership-capabilities-1.jpg" },
      { type: "image", src: "/images/work/leadership-capabilities-2.jpg" },
      { type: "image", src: "/images/work/leadership-capabilities-3.jpg" },
    ],
    cover: "/images/work/lc-cover.png",
  },
  {
    id: 2,
    title: "Strava AI Walking Companion",
    description: "AI-powered walking experience with personalized coaching, insights, and monetization strategy",
    media: [
      { type: "image", src: "/images/work/strava-1.jpg" },
      { type: "image", src: "/images/work/strava-2.jpg" },
      { type: "video", src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Strava%20movie-DdI3yR6TYXBSV8TlYCTUEjPomgWQ8L.mp4" },
      { type: "image", src: "/images/work/strava-3.jpg" },
    ],
    cover: "/images/work/strava-ai-cover.jpg",
  },
  {
    id: 3,
    title: "Compass Digital",
    description: "Egalitarian UX design for operators - SaaS product, Kitchen Display System, and Design Systems",
    media: [
      { type: "image", src: "/images/work/compass-digital-1.jpg" },
      { type: "image", src: "/images/work/compass-digital-2.jpg" },
      { type: "image", src: "/images/work/compass-digital-3.jpg" },
      { type: "image", src: "/images/work/compass-digital-4.jpg" },
      { type: "image", src: "/images/work/compass-digital-5.jpg" },
    ],
    cover: "/images/work/compass-cover.png",
  },
  {
    id: 4,
    title: "Syrup Sports Entertainment App",
    description:
      "MLSE fan engagement platform - Design thinking, user research, personas, and high-fidelity prototypes",
    media: [
      { type: "image", src: "/images/work/syrup-1.jpg" },
      { type: "image", src: "/images/work/syrup-2.png" },
      { type: "image", src: "/images/work/syrup-3.jpg" },
    ],
    cover: "/images/work/syrup-cover.png",
  },
  {
    id: 5,
    title: "DIY Mortgage App",
    description: "B2C mobile app for home buying - Discovery, research, user journey mapping, and visual design",
    media: [
      { type: "image", src: "/images/work/diy-1.jpg" },
      { type: "image", src: "/images/work/diy-2.jpg" },
      { type: "image", src: "/images/work/diy-3.jpg" },
    ],
    cover: "/images/work/diy-cover.jpg",
  },
  {
    id: 6,
    title: "The Future of Transportation",
    description: "Wavefront innovation initiative - Research, design thinking, and autonomous vehicle concepts",
    media: [
      { type: "image", src: "/images/work/transportation-1.jpeg" },
      { type: "image", src: "/images/work/transportation-3.jpg" },
    ],
    cover: "/images/work/transportation-cover.jpg",
  },
]

export default function WorkPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    // Scroll to top when opening project
    window.scrollTo(0, 0)
  }

  const closeProject = () => {
    setSelectedProject(null)
  }

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-50">
        {/* Sticky header with back button */}
        <header className="py-4 sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
          <div className="container mx-auto px-4 flex items-center gap-4">
            <button
              onClick={closeProject}
              className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Back to Work</span>
            </button>
            <div className="flex-1" />
            <Link href="/" className="text-xl font-bold text-purple-400 hover:text-purple-300 transition-colors">
              Peter Kattan
            </Link>
          </div>
        </header>

        {/* Project header */}
        <section className="py-12 md:py-16 border-b border-gray-800">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">{selectedProject.title}</h1>
            <p className="text-lg text-gray-400 text-pretty">{selectedProject.description}</p>
          </div>
        </section>

        {/* Vertical scrolling media gallery */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex flex-col gap-4 md:gap-6">
              {selectedProject.media.map((item, index) => (
                <div key={index} className="relative w-full rounded-lg overflow-hidden bg-gray-900">
                  {item.type === "video" ? (
                    <video src={item.src} className="w-full h-auto" controls playsInline />
                  ) : (
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      width={1920}
                      height={1080}
                      className="w-full h-auto object-contain"
                      priority={index === 0}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back to work button at bottom */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <Button
              onClick={closeProject}
              variant="outline"
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Work
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 py-8 border-t border-gray-800">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Peter Kattan. All rights reserved.</p>
          </div>
        </footer>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-50">
      {/* Header */}
      <header className="py-6 sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
          >
            Peter Kattan
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/#about" className="hover:text-purple-400 transition-colors">
              About
            </Link>
            <Link href="/#offer" className="hover:text-purple-400 transition-colors">
              What I Offer
            </Link>
            <Link href="/#services" className="hover:text-purple-400 transition-colors">
              Services
            </Link>
            <Link href="/work" className="text-purple-400 transition-colors">
              Work
            </Link>
            <Link href="/#contact" className="hover:text-purple-400 transition-colors">
              Contact
            </Link>
          </nav>
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-purple-400 hover:bg-gray-800">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-gray-950 border-gray-800 text-gray-50 w-[250px]">
                <nav className="flex flex-col gap-6 pt-8">
                  <Link
                    href="/#about"
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl hover:text-purple-400 transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    href="/#offer"
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl hover:text-purple-400 transition-colors"
                  >
                    What I Offer
                  </Link>
                  <Link
                    href="/#services"
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl hover:text-purple-400 transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    href="/work"
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl text-purple-400 transition-colors"
                  >
                    Work
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={() => setIsSheetOpen(false)}
                    className="text-xl hover:text-purple-400 transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            My <span className="text-purple-400">Work</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto text-pretty">
            A selection of UX design projects showcasing my approach to user-centered design and problem-solving.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-purple-500 hover:shadow-lg hover:shadow-purple-500/20"
                onClick={() => openProject(project)}
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  {project.media[0].type === "video" && !project.cover ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
                      <video src={project.media[0].src} className="w-full h-full object-cover" muted playsInline />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={project.cover || project.media[0].src || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Peter Kattan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
