import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Peter Kattan - Product Design Strategy & Team Operations Expert",
  description:
    "I help startups and scale-ups build successful product design operations, empower high-performing teams, and optimize user-centric strategies with GenAI integration. Expert in design thinking, UX strategy, and leadership coaching.",
  keywords: [
    "product design strategy",
    "design operations",
    "team enablement",
    "startup consultant",
    "UX strategy",
    "design thinking",
    "leadership coaching",
    "GenAI integration",
    "user experience",
    "product strategy",
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
    title: "Peter Kattan - Product Design Strategy & Team Operations Expert",
    description:
      "I help startups and scale-ups build successful product design operations, empower high-performing teams, and optimize user-centric strategies with GenAI integration.",
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
    title: "Peter Kattan - Product Design Strategy & Team Operations Expert",
    description:
      "I help startups and scale-ups build successful product design operations, empower high-performing teams, and optimize user-centric strategies with GenAI integration.",
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
              jobTitle: "Product Design Strategy & Operations Expert",
              description:
                "Expert in product design strategy, team enablement, and operational excellence with GenAI integration for startups and scale-ups.",
              url: "https://peterkattan.com", // Replace with your actual domain
              sameAs: [
                "https://linkedin.com/in/peterkattan",
                "https://x.com/fifth_element75",
                "https://www.behance.net/peterkattan",
              ],
              knowsAbout: [
                "Product Design Strategy",
                "Design Operations",
                "Team Enablement",
                "UX Strategy",
                "Design Thinking",
                "Leadership Coaching",
                "GenAI Integration",
              ],
              offers: {
                "@type": "Service",
                name: "Product Design Strategy Consulting",
                description:
                  "Comprehensive design strategy, team operations, and leadership coaching services for startups and scale-ups.",
              },
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
