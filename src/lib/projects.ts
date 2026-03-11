export type ProjectLink = {
  href: string
  label: string
}

export type Project = {
  name: string
  description: string
  link: ProjectLink
  ios?: ProjectLink
  image: string
  technologies?: string[]
}

export const projects: Project[] = [
  {
    name: "Company Needs",
    description:
      "At CompanyNeeds, we know that a well-equipped office is the cornerstone of productivity and success. That's why we're committed to providing you with the highest quality office products and solutions to help you create a workspace that fosters innovation and efficiency.",
    link: {
      href: "https://company-needs-front-end.vercel.app/",
      label: "company needs",
    },
    image: "/projects/companyneeds.png",
    technologies: ["Next.js", "React", "E-commerce"],
  },
  {
    name: "uDress (Android)",
    description:
      "Finding a special dress for your special occasion has never been easier or more affordable!",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.app.udress",
      label: "uDress (Android)",
    },
    ios: {
      href: "https://apps.apple.com/us/app/udress/id1485435709",
      label: "uDress (iOS)",
    },
    image: "/projects/udress.ico",
    technologies: ["React Native", "Android", "iOS"],
  },
  {
    name: "uDress (iOS)",
    description:
      "Finding a special dress for your special occasion has never been easier or more affordable!",
    link: {
      href: "https://apps.apple.com/us/app/udress/id1485435709",
      label: "uDress (iOS)",
    },
    image: "/projects/udress.ico",
    technologies: ["React Native", "iOS"],
  },
  {
    name: "SenSights (Android)",
    description:
      "SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors along with risk monitoring and screening for seniorcare workers.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.sensights&hl=en&gl=US&pli=1",
      label: "SenSights (Android)",
    },
    image: "/projects/SenSights.webp",
    technologies: ["Android", "Healthcare", "IoT"],
  },
  {
    name: "SenSights (iOS)",
    description:
      "SenSights is a cloud-based platform that delivers remote monitoring, personal emergency response & telehealth services for seniors along with risk monitoring and screening for seniorcare workers.",
    link: {
      href: "https://apps.apple.com/us/app/sensights/id1522446657",
      label: "SenSights (iOS)",
    },
    image: "/projects/SenSights.webp",
    technologies: ["iOS", "Healthcare", "IoT"],
  },
  {
    name: "Company Needs (Android)",
    description:
      "At CompanyNeeds, we know that a well-equipped office is the cornerstone of productivity and success. That's why we're committed to providing you with the highest quality office products and solutions to help you create a workspace that fosters innovation and efficiency.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.companyneeds.app",
      label: "Company Needs (Android)",
    },
    image: "/projects/companyneeds.png",
    technologies: ["Android", "Retail"],
  },
  {
    name: "Etihad Town (Android)",
    description:
      "Etihad Town has played a phenomenal role in developing a lifestyle for its residents where they can enjoy a luxurious life with serenity and security.",
    link: {
      href: "https://play.google.com/store/apps/details?id=com.etihadtown.app",
      label: "Etihad Town (Android)",
    },
    image: "/projects/etihad.webp",
    technologies: ["Android", "Real Estate"],
  },
  {
    name: "Etihad Town (iOS)",
    description:
      "Etihad Town has played a phenomenal role in developing a lifestyle for its residents where they can enjoy a luxurious life with serenity and security.",
    link: {
      href: "https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920",
      label: "Etihad Town (iOS)",
    },
    image: "/projects/etihad.webp",
    technologies: ["iOS", "Real Estate"],
  },
  {
    name: "Live Urdu News (iOS)",
    description:
      "Live Urdu News aggregates news from leading Pakistani and international newspapers and other sources and presents them in an easy-to-read format.",
    link: {
      href: "https://apps.apple.com/us/app/live-urdu-news/id1565184003",
      label: "Live Urdu News (iOS)",
    },
    image: "/projects/urdunews.webp",
    technologies: ["iOS", "News"],
  },
  {
    name: "Live Urdu News (Android)",
    description:
      "Live Urdu News aggregates news from leading Pakistani and international newspapers and other sources and presents them in an easy-to-read format.",
    link: {
      href: "https://apps.apple.com/us/developer/etihad-town-pvt-limited/id1690750920",
      label: "Live Urdu News (Android)",
    },
    image: "/projects/urdunews.webp",
    technologies: ["Android", "News"],
  },
  {
    name: "Life Design (iOS)",
    description:
      "Embark on a transformative journey towards your aspirations with LifeDesign, the ultimate life goal inspiration app. Crafted to ignite motivation and guide you towards success, this app is your go-to companion for setting, tracking, and achieving life goals.",
    link: {
      href: "https://apps.apple.com/us/app/life-design/id6477827161",
      label: "Life Design (iOS)",
    },
    image: "/projects/lifeDesign.png",
    technologies: ["iOS", "Lifestyle"],
  },
  {
    name: "Life Design (Android)",
    description:
      "Embark on a transformative journey towards your aspirations with LifeDesign, the ultimate life goal inspiration app. Crafted to ignite motivation and guide you towards success, this app is your go-to companion for setting, tracking, and achieving life goals.",
    link: {
      href: "https://play.google.com/store/games?hl=en&gl=US",
      label: "Life Design (Android) (Link Pending)",
    },
    image: "/projects/lifeDesign.png",
    technologies: ["Android", "Lifestyle"],
  },
]
