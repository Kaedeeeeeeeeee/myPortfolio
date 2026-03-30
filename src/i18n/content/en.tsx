import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "Shifeng",
  lastName: "Zhang",
  name: "Zhang Shifeng",
  role: "Product Engineer",
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
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: false,
    title: <>Featured work</>,
    href: "/work",
  },
  subline: (
    <>
      I&apos;m {person.name}, a {person.role} based in Tokyo.
      I build full-stack applications from idea to launch.
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
        Zhang Shifeng is a product engineer who builds full-stack applications from idea to launch.
        With a background in game design and EdTech research, he develops AI-powered learning tools,
        OCR utilities, and productivity apps — shipping end-to-end across frontend, backend, and AI integration.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Innuna Inc.",
        timeframe: "2026 - Present",
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
        title: "Unity, C#, Swift/iOS, JavaScript, TypeScript, Next.js, Python, HTML/CSS",
        description: <>Development</>,
        images: [],
      },
      {
        title: "UI/UX Design, Figma, Git/GitHub, Supabase, OpenAI API",
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
