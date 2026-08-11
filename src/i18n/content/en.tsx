import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Shifeng",
  lastName: "Zhang",
  name: "Zhang Shifeng",
  role: "Independent Developer",
  avatar: "/images/avatar.jpg",
  email: "f.shera.09@gmail.com",
  location: "Asia/Tokyo",
  languages: ["Chinese", "Japanese", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kaedeeeeeeeeee",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Independent web and Apple platform products by ${person.name}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
      I&apos;m {person.name}, a {person.role} based in Tokyo.
      I design, build, and launch products for the web and Apple platforms.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Zhang Shifeng is an independent developer who takes web and Apple-platform products from
        concept and design through development and launch. In 2026, he released four iOS/iPadOS apps
        and two macOS apps on the App Store, drawing on his background in learning engineering and game design.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Innuna Inc.",
        timeframe: "Jan – Aug 2026",
        role: "iOS App Developer & App Designer (Intern)",
        achievements: [
          <>
            Developed the iOS frontend for an educational simulation app for parents of kindergarten and elementary school children.
          </>,
          <>
            Led end-to-end app design and Swift-based implementation. Published on the Apple App Store (China region).
          </>,
        ],
        images: [],
      },
      {
        company: "ZHUZI",
        timeframe: "2022 - 2023",
        role: "Game Planner & UI/UX Designer",
        achievements: [
          <>
            Designed game systems, levels, and UI/UX for mobile titles; owned the full workflow from requirement analysis to visual delivery.
          </>,
          <>
            Led ad creative optimization initiative, achieving a 30% improvement in ad performance.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Tohoku Gakuin University",
        description: (
          <>
            Graduate School of Human Information Science.
            <br />
            Research Topic: Development and Effectiveness Evaluation of a Geology Serious Game
          </>
        ),
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and Build SaaS.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Swift, SwiftUI, ActivityKit, Apple Vision, WebKit, Unity, C#",
        description: <>Development</>,
        images: [],
      },
      {
        title: "TypeScript, Next.js, Supabase, Stripe, Python, HTML/CSS",
        description: <>Web & Backend</>,
        images: [],
      },
      {
        title: "UI/UX Design, Figma, Git/GitHub",
        description: <>Design & Tools</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [
    { src: "/images/gallery/horizontal-1.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-4.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-3.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-1.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/vertical-2.jpg", alt: "image", orientation: "vertical" },
    { src: "/images/gallery/horizontal-2.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/horizontal-4.jpg", alt: "image", orientation: "horizontal" },
    { src: "/images/gallery/vertical-3.jpg", alt: "image", orientation: "vertical" },
  ],
};

const content = { person, social, newsletter, home, about, blog, work, gallery };
export default content;
