"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Linkedin,
  Compass,
  Lightbulb,
  Workflow,
  GraduationCap,
  Zap,
  Sparkles,
  Link2,
  ShieldCheck,
  DollarSign,
  Rocket,
  Target,
  Eye,
  Tag,
  SlidersHorizontal,
  Handshake,
  User,
  BookOpen,
  TrendingUp,
  Users,
  Menu,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react" // Import useState
import { LogoCarousel } from "@/components/logo-carousel"
import { TestimonialCarousel } from "@/components/testimonial-carousel" // Import the new component
import { FadeIn } from "@/components/fade-in"

export default function HomePage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const headerHeight = 80 // Approximate height of the sticky header in pixels

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault() // Prevent default link behavior
    const targetElement = document.getElementById(id)
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
      setIsSheetOpen(false) // Close the mobile sheet after navigation
    }
  }

  const testimonials = [
    {
      quote:
        "It has been a privilege to manage and support Peter at Yelp, a natural leader who consistently brings out the best in his teams through empathy, care, and humility. Peter's strategic mindset and ability to champion design thinking methodologies make him a valuable asset to any organization looking to up their design game. His facilitation skills and charisma foster collaboration and innovation, while his dedication to people ensures a thriving team culture. Peter's rare combination of humbleness, approachability, and skilful expertise sets him apart as a top-tier leader and evangelist.",
      author: "Tony Schibono",
      title: "Director of Design",
    },
    {
      quote:
        "Peter's extensive industry experience gives him a pretty good sense of what will work when it comes to product design and he's very dedicated to keeping an eye on user needs. He called himself once a \"user defender\" and I fully agree with that statement. I've seen Peter advocate for best experience time and time again. He's got a great deal of business acumen and thinks in terms of marrying user needs and business objectives. Working with Peter has been a delight, he's always focused on delivering the best result possible and making sure everyone gets along doing it!",
      author: "Anna Romanovska",
      title: "UX Researcher",
    },
    {
      quote:
        "Peter is a champion of people and culture when it comes to working in teams. I would say what stands out the most about him is his dedication to his direct reports and their growth. He is also passionate about building teams, streamlining design operations and being instrumental in creating a structure for a design process when working with cross-functional teams.",
      author: "Annie Cheng",
      title: "Sr. Director of Design",
    },
    {
      quote:
        "Peter is thoughtful, creative, and always open to discuss new possibilities. He creates a space for people to share ideas without judgement and to explore the ways in which ideas can become tangible projects for the benefit of the company. Peter has a deep understanding of the design process from discovery to implementation. Work aside, he's personable, charismatic, and always up for an engaging conversation.",
      author: "Michael Stone",
      title: "Sr. Product Designer",
    },
  ]

  return (
    <div className="relative min-h-screen text-gray-50">
      {/* Global Parallax Background - Fixed in viewport */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <Image
          src="/images/global-parallax-bg.png"
          alt="Abstract background pattern"
          layout="fill"
          objectFit="cover"
          className="opacity-10" // Make it very subtle
        />
      </div>

      {/* Main Content Wrapper - Scrolls over the fixed background */}
      <div className="relative z-10 bg-gray-950/90">
        {" "}
        {/* Semi-transparent dark overlay */}
        <header className="py-6 sticky top-0 z-50 bg-gray-950/90 backdrop-blur-sm animate-in slide-in-from-top duration-500">
          <div className="container mx-auto px-4 flex justify-between items-center">
            {/* Peter Kattan name as a clickable link to the top */}
            <Link
              href="#hero"
              onClick={(e) => handleScrollToSection(e, "hero")}
              className="text-2xl font-bold text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            >
              Peter Kattan
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link
                href="#about"
                onClick={(e) => handleScrollToSection(e, "about")}
                className="hover:text-purple-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="#offer"
                onClick={(e) => handleScrollToSection(e, "offer")}
                className="hover:text-purple-400 transition-colors"
              >
                What I Offer
              </Link>
              <Link
                href="#services"
                onClick={(e) => handleScrollToSection(e, "services")}
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#contact"
                onClick={(e) => handleScrollToSection(e, "contact")}
                className="hover:text-purple-400 transition-colors"
              >
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
                      href="#about"
                      onClick={(e) => handleScrollToSection(e, "about")}
                      className="text-xl hover:text-purple-400 transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="#offer"
                      onClick={(e) => handleScrollToSection(e, "offer")}
                      className="text-xl hover:text-purple-400 transition-colors"
                    >
                      What I Offer
                    </Link>
                    <Link
                      href="#services"
                      onClick={(e) => handleScrollToSection(e, "services")}
                      className="text-xl hover:text-purple-400 transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      href="#contact"
                      onClick={(e) => handleScrollToSection(e, "contact")}
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
        <main>
          {/* Hero Section */}
          <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center text-center px-4 py-20 overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-20 my-0"
              >
                <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/216005_small-rfSLoO1yWUDMr9QmgIH1ZRWZznN4sx.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                I Build Successful Product Design Operations and Team structures
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
                I guide visionary startups and scale-ups in architecting user-centric products, empowering
                high-performing teams, and optimizing operations for unparalleled market differentiation.
              </p>
              <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  <Link href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                    Let's Connect
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="relative py-20 bg-gray-950/90 rounded-lg shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/about-parallax-bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="relative z-10 container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <FadeIn direction="left" delay={200}>
                  <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/peter-kattan-headshot.png"
                      alt="Peter Kattan professional headshot"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                </FadeIn>
                <FadeIn direction="right" delay={400}>
                  <div>
                    <h2 className="text-4xl font-bold mb-6 text-purple-400">About Me</h2>
                    <p className="text-lg text-gray-300 mb-4">
                      With a proven track record in leading transformative design initiatives and a deep understanding
                      of emerging technologies, I partner with ambitious startups and scale-ups to navigate complex
                      challenges and seize new opportunities. My passion lies in bridging the gap between innovative
                      ideas and impactful execution, fostering environments where design excellence and technological
                      foresight converge.
                    </p>
                    <p className="text-lg text-gray-300">
                      As a design leader and tech visionary, I empower organizations to not only adapt but thrive in the
                      rapidly evolving digital landscape. I believe in leveraging the power of AI to unlock
                      unprecedented efficiencies, drive market differentiation, and cultivate high-performing teams
                      ready for the future.
                    </p>
                  </div>
                </FadeIn>
              </div>
              {/* Clients & Organizations Section - Moved below the grid */}
              <FadeIn delay={600}>
                <div className="py-8 rounded-lg bg-purple-100 mt-16 mr-0 border-0 px-4">
                  {" "}
                  {/* Added px-4 for horizontal padding */}
                  <h3 className="text-3xl font-semibold text-center mb-8 text-purple-500">
                    Clients & Organizations I worked with
                  </h3>
                  <LogoCarousel
                    logos={[
                      { src: "/images/clients/Holt-Renfrew-black.svg", alt: "Holt Renfrew Logo" },
                      { src: "/images/clients/equifax-logo-dark.png", alt: "Equifax Logo" },
                      { src: "/images/clients/Wave-logo-RGB.png", alt: "Wave Logo" },
                      { src: "/images/clients/Yelp-Logo.png", alt: "Yelp Logo" },
                      { src: "/images/clients/Wavefront-dark.png", alt: "Wavefront Logo" },
                      { src: "/images/clients/Compass-Digital-logo-dark.png", alt: "Compass Digital Logo" },
                      { src: "/images/clients/Domunus-Blue-logo.png", alt: "Domunus Logo" },
                      { src: "/images/clients/DDB-logo.avif", alt: "DDB Logo" },
                      { src: "/images/clients/Publicis-Group-logo.png", alt: "Publicis Group Logo" },
                      { src: "/images/clients/CIBC-logo.png", alt: "CIBC Logo" },
                      { src: "/images/clients/Indigo-logo.png", alt: "Indigo Logo" },
                      { src: "/images/clients/BBDO-logo.png", alt: "BBDO Logo" },
                    ]}
                  />
                </div>
              </FadeIn>
            </div>
          </section>

          {/* What I Offer Section */}
          <section id="offer" className="relative py-20 rounded-lg shadow-2xl bg-indigo-950 overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/offer-parallax-bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="relative z-10 container mx-auto px-4">
              <FadeIn>
                <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">What I Offer</h2>
              </FadeIn>

              <div className="mb-16">
                <FadeIn delay={200}>
                  <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">I help teams become...</h3>
                </FadeIn>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <FadeIn delay={300}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Zap className="text-purple-400 mb-3" size={32} />
                        <CardTitle className="text-xl font-semibold text-purple-300 mb-2">Streamlined</CardTitle>
                        <p className="text-gray-300 text-sm">
                          Enhancing productivity, efficacy, and results through optimized workflows.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Sparkles className="text-purple-400 mb-3" size={32} />
                        <CardTitle className="text-xl font-semibold text-purple-300 mb-2">Evolved</CardTitle>
                        <p className="text-gray-300 text-sm">
                          Cultivating a mindset of continuous improvement and adaptability.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={500}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <Link2 className="text-purple-400 mb-3" size={32} />
                        <CardTitle className="text-xl font-semibold text-purple-300 mb-2">Aligned</CardTitle>
                        <p className="text-gray-300 text-sm">
                          Infusing transparency and visibility for better, faster collaboration.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={600}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <ShieldCheck className="text-purple-400 mb-3" size={32} />
                        <CardTitle className="text-xl font-semibold text-purple-300 mb-2">Confident</CardTitle>
                        <p className="text-gray-300 text-sm">
                          Empowering teams with the tools and knowledge to make informed decisions.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
              </div>

              <FadeIn delay={700}>
                <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-xl mb-16">
                  <h3 className="text-3xl font-semibold text-center mb-8 text-purple-300">
                    Superior to a full-time hire
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                    <div className="flex items-start space-x-4">
                      <DollarSign className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">Amazing ROI</h4>
                        <p className="text-gray-300 text-sm">
                          Best-in-class expertise at a startup-friendly price point.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Rocket className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">Rapid Onboarding</h4>
                        <p className="text-gray-300 text-sm">
                          Get immediate value and skip lengthy recruitment processes.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Target className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">Specialised</h4>
                        <p className="text-gray-300 text-sm">
                          Nurturing startup, scale-up, and enterprise teams is my core strength.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Eye className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">External View</h4>
                        <p className="text-gray-300 text-sm">
                          Benefit from a fresh, objective, and unbiased perspective.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Tag className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">Fixed Fees</h4>
                        <p className="text-gray-300 text-sm">
                          Transparent pricing with no hidden costs, salaries, or perks.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <SlidersHorizontal className="text-purple-400 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="text-xl font-semibold text-purple-300">Flexible Service</h4>
                        <p className="text-gray-300 text-sm">
                          Scale services up or down precisely as your needs evolve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* How It Works Section - Now part of What I Offer */}
              <div className="py-20 rounded-lg shadow-2xl overflow-hidden">
                <FadeIn>
                  <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">How It Works</h3>
                </FadeIn>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-full mx-auto justify-center">
                  <FadeIn delay={200}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                      <CardHeader className="flex flex-col items-center flex-grow">
                        <Handshake className="text-purple-400 mb-4" size={40} />
                        <CardTitle className="text-xl font-semibold text-purple-300">Tailored Approach</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-gray-300">
                          Custom strategies designed to fit your unique team and business needs.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={300}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                      <CardHeader className="flex flex-col items-center flex-grow">
                        <User className="text-purple-400 mb-4" size={40} />
                        <CardTitle className="text-xl font-semibold text-purple-300">1-to-1 Sessions</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-gray-300">
                          Personalized guidance and direct mentorship for key individuals.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={400}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                      <CardHeader className="flex flex-col items-center flex-grow">
                        <BookOpen className="text-purple-400 mb-4" size={40} />
                        <CardTitle className="text-xl font-semibold text-purple-300">Takeaway Exercises</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-gray-300">Practical assignments to reinforce learning and apply concepts.</p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={500}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                      <CardHeader className="flex flex-col items-center flex-grow">
                        <TrendingUp className="text-purple-400 mb-4" size={40} />
                        <CardTitle className="text-xl font-semibold text-purple-300">Progress Tracking</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-gray-300">
                          Monitoring and feedback to ensure continuous improvement and goal achievement.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                  <FadeIn delay={600}>
                    <Card className="bg-gray-800 border-gray-700 text-gray-50 text-center p-6 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                      <CardHeader className="flex flex-col items-center flex-grow">
                        <Users className="text-purple-400 mb-4" size={40} />
                        <CardTitle className="text-xl font-semibold text-purple-300">Up to Four Apprentices</CardTitle>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-gray-300">
                          Capacity to mentor and develop up to four team members simultaneously.
                        </p>
                      </CardContent>
                    </Card>
                  </FadeIn>
                </div>
              </div>

              {/* My Approach Section - Moved here */}
              <FadeIn delay={800}>
                <div className="py-20 rounded-lg shadow-2xl overflow-hidden">
                  <h3 className="text-4xl font-bold text-center mb-12 text-purple-400">My Approach</h3>
                  <div className="max-w-3xl mx-auto text-center text-lg text-gray-300">
                    <p className="mb-6">
                      I blend strategic foresight with hands-on execution to transform your organization's innovation
                      and operations. Together, we develop a user-centered product vision and strategy, utilizing
                      advanced techniques like GenAI for insights, rapid prototyping, testing and iteration. Through
                      design thinking workshops, we simplify challenges into actionable roadmaps and user experiences
                      that enhance retention.
                    </p>
                    <p className="mb-6">
                      I focus on optimizing design operations and establishing frameworks for talent growth, ensuring
                      your teams are impactful and integrated. Additionally, I provide mentoring and leadership coaching
                      to foster a culture of continuous innovation.
                    </p>
                    <p>
                      My ultimate goal is to build sustainable capabilities within your organization, empowering your
                      teams to lead in the evolving tech landscape and drive business growth.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="relative py-20 bg-gray-900/90 rounded-lg shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/services-parallax-bg.png")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="relative z-10 container mx-auto px-4">
              <FadeIn>
                <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">My Services</h2>
              </FadeIn>
              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={200} direction="left">
                  <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center">
                      <Compass className="text-purple-400 mb-4" size={48} />
                      <CardTitle className="text-2xl font-semibold text-purple-300">
                        Product & User Experience Strategy
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-4">
                        Empower your team to establish a robust, user-centered North Star vision and strategic horizons
                        that drive product development. Implement frameworks to align teams on product positioning,
                        increasing velocity, transparency, and visibility for faster, better operations.
                      </p>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Develop user-centered product vision & roadmap</li>
                        <li>Align teams on product positioning & shared goals</li>
                        <li>Enhance operational velocity & transparency</li>
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={400} direction="right">
                  <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center">
                      <Lightbulb className="text-purple-400 mb-4" size={48} />
                      <CardTitle className="text-2xl font-semibold text-purple-300">
                        Design Thinking & Workshop Facilitation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-4">
                        Utilize workshopping, brainstorming, and discovery techniques to help your team untangle complex
                        problems and translate them into clear, tactical, and aligned roadmaps. Facilitate vision
                        workshops to ensure team alignment on success metrics.
                      </p>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Facilitate problem-solving workshops & brainstorming</li>
                        <li>Guide data-driven user research for improved retention</li>
                        <li>Develop intuitive UX based on principles & accessibility</li>
                        <li>Create sitemaps, user journeys, wireframes & prototypes</li>
                        <li>Coach on style guides & component libraries</li>
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={600} direction="left">
                  <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center">
                      <Workflow className="text-purple-400 mb-4" size={48} />
                      <CardTitle className="text-2xl font-semibold text-purple-300">
                        Optimizing Design Operations (DesignOps)
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-4">
                        Refine workflows and structure your design organization for maximum impact and efficiency,
                        covering outsourcing, recruitment, hiring, and onboarding. Implement comprehensive templates for
                        hiring, performance, and career development to boost retention and growth.
                      </p>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Streamline design talent acquisition & onboarding</li>
                        <li>Implement performance reviews & career development plans</li>
                        <li>Leverage trifecta model & agile methodologies</li>
                        <li>Align UX strategies with Product & Engineering objectives</li>
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={800} direction="right">
                  <Card className="bg-gray-800 border-gray-700 text-gray-50 hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                    <CardHeader className="flex flex-col items-center text-center">
                      <GraduationCap className="text-purple-400 mb-4" size={48} />
                      <CardTitle className="text-2xl font-semibold text-purple-300">
                        Mentoring & Leadership Coaching
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-gray-300 mb-4">
                        Provide experienced leadership to bridge gaps during recruitment and guide the evolution and
                        scaling of your UX team. Offer dedicated 1:1 mentorship focused on developing technical,
                        interpersonal, and presentation skills, fostering stronger daily collaboration.
                      </p>
                      <ul className="list-disc list-inside text-gray-400 space-y-2">
                        <li>Bridge leadership gaps during recruitment</li>
                        <li>Facilitate UX team growth & scaling operations</li>
                        <li>Provide 1:1 mentorship for skill development</li>
                        <li>Coach on navigating workplace challenges & relationships</li>
                      </ul>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
              {/* New buttons added here */}
              <FadeIn delay={1000}>
                <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16">
                  <Button
                    asChild
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <a href="https://www.behance.net/peterkattan" target="_blank" rel="noopener noreferrer">
                      View Case Studies
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-gray-700 hover:bg-gray-600 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
                  >
                    <Link href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                      Book a 1-on-1
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="relative py-20 bg-gray-900/90 rounded-lg shadow-2xl overflow-hidden">
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: 'url("/images/testimonials-parallax-bg.png")', // You might want to create a new parallax background image for this section
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",
              }}
            ></div>
            <div className="relative z-10 container mx-auto px-4">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-12 text-purple-400 text-center">What People Say</h2>
              </FadeIn>
              <FadeIn delay={300}>
                <TestimonialCarousel testimonials={testimonials} autoPlayInterval={6000} /> {/* Updated prop name */}
              </FadeIn>
            </div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="relative py-20 overflow-hidden bg-gray-900/90 shadow-2xl min-h-[50vh] flex items-center"
          >
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full object-cover opacity-20 z-0 my-0 h-full border-0"
            >
              <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6266-190550868_medium-JopA1GXzKXSbeTuaHGFsUfhxvsVLnZ.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 text-center">
              <FadeIn>
                <h2 className="text-4xl font-bold mb-12 text-purple-400">Let's Connect</h2>
              </FadeIn>
              <div className="max-w-2xl mx-auto text-center space-y-6">
                <FadeIn delay={200}>
                  <p className="text-lg text-gray-300">
                    I'm always seeking new opportunities to collaborate with leaders and their teams across various
                    industries and organizational stages. It begins with an initial conversation, during which I can
                    learn about your organization's needs and assess the best way to assist you. Feel free to connect
                    with me on LinkedIn or view my Behance profile to learn more about how my expertise can support your
                    team in achieving the next level of growth.
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  <div className="flex flex-col items-center space-y-4">
                    <Button
                      asChild
                      variant="outline"
                      className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 border-none"
                    >
                      <a href="https://calendly.com/peter-kattan/30min" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-6 w-6" />
                        Book a 1on1
                      </a>
                    </Button>
                  </div>
                </FadeIn>
                <FadeIn delay={600}>
                  <div className="flex justify-center space-x-6 mt-6">
                    <a
                      href="https://linkedin.com/in/peterkattan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors"
                    >
                      <Linkedin size={30} />
                    </a>
                    <a
                      href="https://x.com/fifth_element75"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors text-2xl font-bold"
                    >
                      X
                    </a>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        </main>
        <footer className="py-9 border-t border-gray-800 mt-px bg-gray-950/90">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Peter Kattan. All rights reserved.</p>
            <p className="mt-2">Built with passion and vision.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
