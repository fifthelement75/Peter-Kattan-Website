import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fractional Head of Design | Design Operations Consulting | Peter Kattan",
  description:
    "Fractional Head of Design and Design Operations Consulting for Series A-C startups. I help founders, CEOs, and CPOs build world-class design teams, optimize design maturity, and accelerate product delivery. Design Maturity Audit included.",
  keywords: [
    "fractional head of design",
    "design operations consulting",
    "design maturity audit",
    "product design strategy",
    "design operations",
    "team enablement",
    "startup design consultant",
    "UX strategy",
    "design thinking",
    "leadership coaching",
    "GenAI integration",
    "user experience",
    "product strategy",
    "design leadership",
    "CPO consulting",
    "series a startup",
    "series b startup",
    "series c startup",
  ],
  authors: [{ name: "Peter Kattan" }],
  creator: "Peter Kattan",
  publisher: "Peter Kattan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://peterkattan.com", // Replace with your actual domain
    title: "Fractional Head of Design & Design Operations Consulting for Startups",
    description:
      "Get Design Operations Consulting and Design Maturity Audits for Series A-C startups. Fractional Head of Design services for founders, CEOs, and product leaders. Accelerate design maturity 6X faster.",
    siteName: "Peter Kattan",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Peter Kattan - Product Design Strategy Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fractional Head of Design | Design Operations Consulting",
    description:
      "Design Operations Consulting and Design Maturity Audit for Series A-C startups. Fractional Head of Design for founders and CPOs seeking to accelerate product delivery.",
    creator: "@fifth_element75",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b5cf6" }],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://peterkattan.com"), // Replace with your actual domain
  alternates: {
    canonical: "https://peterkattan.com", // Replace with your actual domain
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Peter Kattan",
              jobTitle: "Fractional Head of Design | Design Operations Consultant",
              description:
                "Fractional Head of Design and Design Operations Consulting expert specializing in Design Maturity Audits for Series A-C startups, founders, CEOs, and product leaders.",
              url: "https://peterkattan.com", // Replace with your actual domain
              sameAs: [
                "https://linkedin.com/in/peterkattan",
                "https://x.com/fifth_element75",
                "https://www.behance.net/peterkattan",
              ],
              knowsAbout: [
                "Fractional Head of Design",
                "Design Operations Consulting",
                "Design Maturity Audit",
                "Product Design Strategy",
                "Design Operations",
                "Team Enablement",
                "UX Strategy",
                "Design Thinking",
                "Leadership Coaching",
                "GenAI Integration",
              ],
              offers: [
                {
                  "@type": "Service",
                  name: "Fractional Head of Design",
                  description:
                    "Part-time strategic design leadership for startups and scale-ups. Provide expert guidance on design direction, team building, and operational excellence.",
                  areaServed: ["US", "Canada"],
                  priceRange: "$$",
                },
                {
                  "@type": "Service",
                  name: "Design Operations Consulting",
                  description:
                    "Optimize your design processes, workflows, and team structure. Design maturity audits help identify gaps and accelerate growth.",
                  areaServed: ["US", "Canada"],
                  priceRange: "$$",
                },
                {
                  "@type": "Service",
                  name: "Design Maturity Audit",
                  description:
                    "Comprehensive assessment of your design maturity and organizational readiness. Tailored recommendations for Series A-C startups.",
                  areaServed: ["US", "Canada"],
                  priceRange: "$$",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
