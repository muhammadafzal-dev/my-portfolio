import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import Providers from '@/app/providers'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = "https://muhammadafzal.vercel.app/";

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Afzal',
    template: 'Muhammad Afzal — Full-Stack MERN Developer',
    absolute: 'Muhammad Afzal — Full-Stack MERN Developer',
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
  authors: [{ name: 'Muhammad Afzal', url: process.env.NEXT_PUBLIC_SITE_URL }],
  generator: 'Muhammad Afzal',

  openGraph: {
    type: 'website',
    url: `${siteUrl}`,
    title: 'Muhammad Afzal — Full-Stack MERN Developer',
    description:
      'Full-Stack MERN Developer with 3.5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',

    siteName: 'Muhammad Afzal',
    images: [
      {
        url: `${siteUrl}avatar.png`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: `${siteUrl}`,
    images: [
      {
        url: `${siteUrl}avatar.png`,
      },
    ],
    description:
      'Full-Stack MERN Developer with 3.5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',
    title: 'Muhammad Afzal — Full-Stack MERN Developer',
  },
  icons: [
    { url: `${siteUrl}avatar.png` },
    {
      url: `${siteUrl}favicon.ico`,
    },
  ],

  description:
    'Full-Stack MERN Developer with 3.5+ years of experience building scalable web and cross-platform mobile applications using React.js, Next.js, and React Native.',

  alternates: {
    canonical: siteUrl,
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
