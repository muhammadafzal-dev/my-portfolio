import { type Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Muhammad Afzal',
    template: 'Muhammad Afzal - Software Engineer',
    absolute: 'Muhammad Afzal - Software Engineer',
  },
  verification: {
    google: 'v17_mLrUxusKxX9glYv90NCPkZVDn6R4MPP8Vxdvo1U',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
  keywords: [
    'react',
    'react  native',
    'nextjs',
    'reactjs',
    'mobile development',
    // 'nodejs',
    'android',
    'ios',
    'afzal',
    'muhammad afzal',
    'Software Development',
    'Software Engineer',
    'Programming',
    'freelancer',
    'muhammad afzal Portfolio',
    'fiverr',
    // 'upwork',
    'developer',
    // 'https://www.upwork.com/freelancers/ahtishams',
    'https://www.fiverr.com/afzal_116',
  ],
  creator: 'Muhammad Afzal',
  publisher: 'Muhammad Afzal',
  applicationName: 'Muhammad Afzal',
  authors: [{ name: 'Muhammad Afzal', url: process.env.NEXT_PUBLIC_SITE_URL }],
  generator: 'Muhammad Afzal',

  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    title: 'Muhammad Afzal - Software Engineer',
    description:
      'I am Muhammad Afzal, Software Engineer with a solid 2-years journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

    siteName: 'Muhammad Afzal',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg`,
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg`,
      },
    ],
    description:
      'I am Muhammad Afzal, an Experienced Software Engineer with a solid 2-year journey dedicated to crafting high-performance, cross-platform mobile applications. My expertise lies in a robust understanding of JavaScript, Redux, React, Next.js, and React Native frameworks.',
    title: 'Muhammad Afzal - Software Engineer',
  },
  icons: [
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg` },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico`,
    },
  ],

  description:
    'I am Muhammad Afzal, Software Engineer with a solid 2-year journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
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
        className={`${geistSans.variable} ${geistMono.variable} flex h-full bg-background text-foreground`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
