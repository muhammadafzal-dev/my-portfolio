import { type Metadata } from 'next'
import { Fraunces, IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'

import Providers from '@/app/providers'

import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal', 'italic'],
})

const plex = IBM_Plex_Sans({
  variable: '--font-plex',
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = "https://muhammadafzal.vercel.app";

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Afzal — Full-Stack MERN Developer',
    template: '%s — Muhammad Afzal',
  },
  verification: {
    google: 'v17_mLrUxusKxX9glYv90NCPkZVDn6R4MPP8Vxdvo1U',
  },
  metadataBase: new URL(siteUrl),
  keywords: [
    'muhammad afzal',
    'full-stack mern developer',
    'react.js developer',
    'next.js developer',
    'react native developer',
    'mobile app development',
    'frontend developer',
    'node.js',
    'express.js',
    'mongodb',
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
    title: 'Muhammad Afzal — Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer with 5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',
    siteName: 'Muhammad Afzal',
    images: [
      {
        url: `${siteUrl}/avatar.png`,
        width: 400,
        height: 400,
        alt: 'Muhammad Afzal',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: siteUrl,
    description:
      'Full-Stack MERN Developer with 5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',
    title: 'Muhammad Afzal — Full-Stack MERN Developer',
    images: [`${siteUrl}/avatar.png`],
  },

  description:
    'Full-Stack MERN Developer with 5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',

  alternates: {
    canonical: siteUrl,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const themeInitScript = `(function(){try{var s=localStorage.getItem('theme');var t=(s==='dark'||s==='light')?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.add(t);}catch(e){}})();`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Afzal",
    url: siteUrl,
    image: `${siteUrl}/avatar.png`,
    jobTitle: "Full-Stack MERN Developer",
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
      "Node.js",
      "NestJS",
      "TypeScript",
      "MongoDB",
      "GraphQL",
      "AI-assisted development",
    ],
  };

  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${fraunces.variable} ${plex.variable} ${jetbrains.variable} bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
