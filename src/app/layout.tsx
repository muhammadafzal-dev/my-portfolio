import { type Metadata } from 'next'
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google'

import Providers from '@/app/providers'
import SiteBackground from '@/components/SiteBackground'
import CursorFX from '@/components/CursorFX'
import ScrollProgress from '@/components/ScrollProgress'
import WhatsAppFloat from '@/components/WhatsAppFloat'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})

const siteUrl = "https://muhammadafzal.vercel.app";

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Afzal — Senior Full-Stack / AI Engineer',
    template: '%s — Muhammad Afzal',
  },
  verification: {
    google: 'v17_mLrUxusKxX9glYv90NCPkZVDn6R4MPP8Vxdvo1U',
  },
  metadataBase: new URL(siteUrl),
  keywords: [
    'muhammad afzal',
    'senior full-stack engineer',
    'full-stack ai engineer',
    'ai voice agents',
    'multi-tenant saas',
    'react.js developer',
    'next.js developer',
    'react native developer',
    'flutter developer',
    'mobile app development',
    'cross-platform apps',
    'frontend developer',
    'node.js',
    'nestjs',
    'graphql',
    'rest api',
    'lahore pakistan',
    'software engineer',
  ],
  creator: 'Muhammad Afzal',
  publisher: 'Muhammad Afzal',
  applicationName: 'Muhammad Afzal',
  authors: [{ name: 'Muhammad Afzal', url: siteUrl }],
  generator: 'Muhammad Afzal',

  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Muhammad Afzal — Senior Full-Stack / AI Engineer',
    description:
      'Senior Full-Stack / AI Engineer with 6+ years of experience building scalable multi-tenant SaaS platforms, web, and cross-platform mobile applications using React.js, Next.js, React Native, Flutter, Node.js, and NestJS.',
    siteName: 'Muhammad Afzal',
    images: [
      {
        url: `${siteUrl}/about.png`,
        width: 1122,
        height: 1402,
        alt: 'Muhammad Afzal — Senior Full-Stack / AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: siteUrl,
    description:
      'Senior Full-Stack / AI Engineer with 6+ years of experience building scalable multi-tenant SaaS platforms, web, and cross-platform mobile applications using React.js, Next.js, React Native, Flutter, Node.js, and NestJS.',
    title: 'Muhammad Afzal — Senior Full-Stack / AI Engineer',
    images: [`${siteUrl}/about.png`],
  },

  description:
    'Senior Full-Stack / AI Engineer with 6+ years of experience building scalable multi-tenant SaaS platforms, web, and cross-platform mobile applications using React.js, Next.js, React Native, Flutter, Node.js, and NestJS.',

  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Afzal",
    url: siteUrl,
    image: `${siteUrl}/about.png`,
    jobTitle: "Senior Full-Stack / AI Engineer",
    worksFor: { "@type": "Organization", name: "Obenan" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "Pakistan",
    },
    email: "mailto:afzalj166@gmail.com",
    sameAs: [
      "https://github.com/muhammadafzal-dev",
      "https://linkedin.com/in/muhammadafzal-dev",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "React Native",
      "Flutter",
      "Node.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "GraphQL",
      "AI voice agents",
      "Multi-tenant SaaS",
      "AI-assisted development",
    ],
  };

  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} bg-background text-foreground`}
      >
        <SiteBackground />
        <CursorFX />
        <ScrollProgress />
        <Providers>
          {children}
          <WhatsAppFloat />
        </Providers>
      </body>
    </html>
  )
}
