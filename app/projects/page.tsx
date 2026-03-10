import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoCosmos from '@/images/logos/cosmos.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import pedlarIco from '@/images/logos/pedlar.ico'
import logoSoft from '@/images/logos/logoSoft.png'
import companyneeds from '@/images/logos/companyneeds.png'
import Udress from '@/images/logos/udress.ico'
import SenSights from '@/images/logos/SenSights.webp'
import etihad from '@/images/logos/etihad.webp'
import urdunews from '@/images/logos/urdunews.webp'
import lifeDesign from '@/images/logos/lifeDesign.png'

import Link from 'next/link'

const projects = [
  // {
  //   name: 'Pedlar',
  //   description:
  //     'Creator commerce that enables creators to connect with followers, offering a curated collection of their favourite brands & products through their own Pedlar storefront.',
  //   link: { href: 'https://pedlar.store/', label: 'pedlar.store' },
  //   logo: pedlarIco,
  // },
  {
    name: 'Company Needs ',
    description: `At CompanyNeeds, we know that a well-equipped office is the cornerstone of productivity and success.That's why we're committed to providing you with the highest quality office products and solutions to help you create a workspace that fosters innovation and efficiency.`,

    link: {
      href: 'https://company-needs-front-end.vercel.app/',
      label: 'company needs',
    },
    logo: companyneeds,
  },
  {
    name: 'uDress(Android App)  ',
    description:
      'Finding a special dress for your special occasion has never been easier or more affordable!',
    ios: {
      href: 'https://apps.apple.com/us/app/udress/id1485435709',
      label: 'uDress',
    },

    link: {
      href: 'https://play.google.com/store/apps/details?id=com.app.udress',
      label: 'uDress(android)',
    },
    logo: Udress,
  },
  {
    name: 'uDress(IOS App)  ',
    description:
      'Finding a special dress for your special occasion has never been easier or more affordable!',

    link: {
      href: 'https://apps.apple.com/us/app/udress/id1485435709',
      label: 'uDress(ios)',
    },
    logo: Udress,
  },
  {
    name: 'SenSights(Android App)',
    description:
      'SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors  along with risk monitoring and screening for seniorcare workers ',
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.sensights&hl=en&gl=US&pli=1',
      label: 'SenSights(Android App)',
    },
    logo: SenSights,
  },
  {
    name: 'SenSights(IOS App)',
    description:
      'SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors  along with risk monitoring and screening for seniorcare workers ',
    link: {
      href: 'https://apps.apple.com/us/app/sensights/id1522446657',
      label: 'SenSights(IOS App)',
    },
    logo: SenSights,
  },
  {
    name: 'Company Needs (Android App)',
    description: `At CompanyNeeds, we know that a well-equipped office is the cornerstone of productivity and success.That's why we're committed to providing you with the highest quality office products and solutions to help you create a workspace that fosters innovation and efficiency.`,
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.companyneeds.app',
      label: 'Company Needs(android app)',
    },
    logo: companyneeds,
  },
  {
    name: 'Etihad Town(Android App)',
    description: `Etihad Town has played a phenomenal role in developing a lifestyle for its residents where they can enjoy a luxurious life with serenity and security.
    `,
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.etihadtown.app',
      label: 'Etihad Town(Android App)',
    },
    logo: etihad,
  },

  {
    name: 'Etihad Town(IOS App)',
    description: `Etihad Town has played a phenomenal role in developing a lifestyle for its residents where they can enjoy a luxurious life with serenity and security.
    `,
    link: {
      href: 'https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920',
      label: 'Etihad Town(IOS App)',
    },
    logo: etihad,
  },
  {
    name: 'Live Urdu News(IOS App)',
    description: `Live Urdu News aggregates news from leading Pakistani and international newspapers and other sources and presents them in an easy-to-read format.`,
    link: {
      href: 'https://apps.apple.com/us/app/live-urdu-news/id1565184003',
      label: 'Live Urdu News(IOS App)',
    },
    logo: urdunews,
  },
  {
    name: 'Live Urdu News (Android App)',
    description: `Live Urdu News aggregates news from leading Pakistani and international newspapers and other sources and presents them in an easy-to-read format.`,

    link: {
      href: 'https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920',
      label: 'Live Urdu News(IOS App)',
    },
    logo: urdunews,
  },
  {
    name: 'Life Design',
    description:
      'Embark on a transformative journey towards your aspirations with LifeDesign, the ultimate life goal inspiration app. Crafted to ignite motivation and guide you towards success, this app is your go-to companion for setting, tracking, and achieving life goals.',
    link: {
      href: 'https://apps.apple.com/us/app/life-design/id6477827161',
      label: 'Life Design(IOS)',
    },
    logo: lifeDesign,
  },
  {
    name: 'Life Design',
    description:
      'Embark on a transformative journey towards your aspirations with LifeDesign, the ultimate life goal inspiration app. Crafted to ignite motivation and guide you towards success, this app is your go-to companion for setting, tracking, and achieving life goals.',
    link: {
      href: 'https://play.google.com/store/games?hl=en&gl=US',
      label: 'Life Design(Android App)(Link Pending)',
    },
    logo: lifeDesign,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}
export const metadata: Metadata = {
  title: {
    default: 'Muhammad Afzal',
    template: '%s - Software Engineer',
  },
  verification: {
    google: 'v17_mLrUxusKxX9glYv90NCPkZVDn6R4MPP8Vxdvo1U',
  },
  applicationName: 'Muhammad Afzal',
  authors: [{ name: 'Muhammad Afzal', url: process.env.NEXT_PUBLIC_SITE_URL }],
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_SITE_URL}about`),
  generator: 'Muhammad Afzal',

  keywords: [
    'react',
    'react  native',
    'nextjs',
    'reactjs',
    'mobile development',
    // 'nodejs',
    'android',
    'ios',
    'ahtisham',
    'shahzad',
    'Muhammad Afzal',
    'Software Development',
    'Software Engineer',
    'Programming',
    'freelancer',
    'Muhammad Afzal Portfolio',
    'fiverr',
    // 'upwork',
    'developer',
    // 'https://www.upwork.com/freelancers/ahtishams',
    'https://www.fiverr.com/afzal_116',
  ],

  openGraph: {
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL}about`,
    title: 'Muhammad Afzal - Software Engineer',
    description:
      'I am Muhammad Afzal, Software Engineer with a  solid 2-year journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

    siteName: 'Muhammad Afzal',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg`,
      },
      { url: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico` },
    ],
  },
  creator: 'Muhammad Afzal',
  publisher: 'Muhammad Afzal',
  twitter: {
    card: 'summary',
    site: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg`,
      },
    ],
    description:
      'I am Muhammad Afzal, Software Engineer with a  solid 2-year journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/afzal_116.',

    title: 'Muhammad Afzal - Software Engineer',
  },
  icons: [
    { url: `${process.env.NEXT_PUBLIC_SITE_URL}avatar.jpg` },
    {
      url: `${process.env.NEXT_PUBLIC_SITE_URL}favicon.ico`,
    },
  ],
  description:
    'I am Muhammad Afzal, Software Engineer with a  solid 2-year journey in building high-performance, cross-platform mobile and web applications. Strong understanding of JavaScript, Redux, React, Next js and React Native framework. You can find my freelance work on Fiverr at https://www.fiverr.com/ahtishamshahzad.',

  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL}projects`,

    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}feed.xml`,
    },
  },
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of  projects over the years but these are the ones that I’m most proud of. "
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-9 w-9 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>

            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
