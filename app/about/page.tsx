import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  UpWorkIcon,
  fiverIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

function WhatAppIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="24"
      height="24"
      viewBox="0 0 48 48"
    >
      <path
        fill="#fff"
        d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
      ></path>
      <path
        fill="#fff"
        d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
      ></path>
      <path
        fill="#cfd8dc"
        d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
      ></path>
      <path
        fill="#40c351"
        d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
      ></path>
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
        clip-rule="evenodd"
      ></path>
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

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
            Muhammad Afzal - Software Engineer( Javascript | React Native |
            React | NextJs )
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am Muhammad Afzal, an Experienced Software Engineer with a solid
              2-year journey dedicated to crafting high-performance,
              cross-platform mobile applications. Strong understanding of
              JavaScript, Redux, React, Next js and React Native framework.
              Proven track record of delivering successful projects for clients
              in various industries. Skilled in debugging and troubleshooting to
              ensure seamless user experience. Passionate about staying
              up-to-date with the latest technologies and trends.
            </p>
            <h6 className="text-2xl font-bold  text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              Key Skills:
            </h6>
            <p>
              <b>React and React Native Expertise:</b> Demonstrated proficiency
              in React and React Native frameworks, ensuring the development of
              intuitive and seamless user interfaces across various platforms.
            </p>
            <p>
              <b> Next.js Proficiency:</b> Well-versed in Next.js, I bring a
              strategic approach to web development, creating dynamic and
              efficient web applications.
            </p>
            {/* <p>
              <b>Node.js Development:</b> Experienced in utilizing Node.js to
              build scalable and server-side applications, contributing to a
              comprehensive skill set.
            </p> */}
            <p>
              <b>Project Success:</b> I boast a proven track record of
              delivering successful projects across diverse industries. My
              commitment to excellence is reflected in the seamless user
              experiences provided through meticulous debugging and
              troubleshooting. Each project is a testament to my dedication to
              meeting and exceeding client expectations.
            </p>
            <p>
              <h6 className="text-1xl sm:text-1xl  font-bold text-zinc-800 dark:text-zinc-100">
                Passion for Innovation:
              </h6>
              Driven by a passion for staying at the forefront of technological
              advancements, I actively pursue continuous learning. This
              commitment ensures that the solutions I provide are not only
              current but also future-proofed, aligning with the latest trends
              in the ever-evolving landscape of software engineering.
            </p>
            <h6 className="text-2xl font-bold  text-zinc-800 dark:text-zinc-100 sm:text-2xl">
              What Sets Me Apart:
            </h6>
            <p>
              <b> Strategic Problem-Solving:</b> Known for my ability to
              approach challenges strategically, I excel in identifying and
              implementing effective solutions.<br></br>
              <b>Collaborative Approach:</b> I thrive in collaborative
              environments, valuing teamwork and open communication to achieve
              collective<br></br>
              success.<br></br> <b>Adaptability:</b> The fast-paced nature of
              the tech industry requires adaptability, and I excel in navigating
              evolving landscapes with ease.
            </p>
            <p>
              With a blend of technical expertise, project success, and a
              passion for innovation, I am dedicated to contributing to the
              growth and success of every project I undertake. Let&apos;s build
              the future of software together.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              className="mt-4"
              href="https://twitter.com/afzalj166"
              icon={TwitterIcon}
            >
              Follow on Twitter
            </SocialLink>
            {/* <SocialLink
              href="https://www.instagram.com/malikahtisham.shani/"
              icon={InstagramIcon}
              className="mt-4"
            >
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="https://github.com/afzal155"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/muhammad-afzal-7333321b5"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            {/* <SocialLink
              href="https://www.upwork.com/freelancers/ahtishams"
              icon={UpWorkIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              Up Work
            </SocialLink> */}

            <SocialLink
              href="https://www.fiverr.com/afzal_116"
              icon={fiverIcon}
              className="mt-4"
            >
              Fiverr
            </SocialLink>
            <SocialLink
              href="mailto:afzalj166@gmail.com"
              icon={MailIcon}
              className="mt-4"
            >
              afzalj166@gmail.com
            </SocialLink>
            <SocialLink
              href={`https://wa.me/+923056129131`}
              icon={WhatAppIcon}
              className="mt-4"
            >
              +923056129131
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
