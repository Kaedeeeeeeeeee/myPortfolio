import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "诗枫",
  lastName: "张",
  name: "张诗枫",
  role: "独立开发者",
  avatar: "/images/avatar.jpg",
  email: "f.shera.09@gmail.com",
  location: "Asia/Tokyo",
  languages: ["中文", "日语", "英语"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>订阅 {person.firstName} 的周报</>,
  description: <>关于创意与工程的每周分享</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kaedeeeeeeeeee",
  },
  {
    name: "邮箱",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "首页",
  title: `${person.name} · 独立开发者`,
  description: `${person.name}的 Web 与 Apple 平台独立开发作品集`,
  headline: <>连接设计与代码</>,
  featured: {
    display: false,
    title: <>精选作品</>,
    href: "/work",
  },
  subline: (
    <>
      我是{person.name}，一名居住在东京的{person.role}。 在 Web 与 Apple
      平台上，从想法、设计到上线独立交付产品。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "关于",
  title: `关于 · ${person.name}`,
  description: `${person.name}，东京，${person.role}`,
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
    title: "简介",
    description: (
      <>
        从企划、设计、开发到上架，独立完成 Web 与 Apple 平台产品的全流程。2026 年已在 App Store 发布
        5 款 iOS/iPadOS 应用和 2 款 macOS
        应用；背景是教育工程与游戏设计，现在主要做学习产品和日常工具。
      </>
    ),
    tagline: <>把学习和日常里的小麻烦，做成好用的 App。</>,
  },
  work: {
    display: true,
    title: "工作经历",
    experiences: [
      {
        company: "独立开发",
        timeframe: "2026 - 至今",
        role: "个人开发者 · iOS / macOS / Web",
        current: true,
        achievements: [
          <>从企划、设计到上架独立完成 7 款 App，其中 Passnote 已通过订阅实现收入。</>,
        ],
        icons: [
          { src: "/images/projects/passnote/icon.png", alt: "Passnote" },
          { src: "/images/projects/tiny-coach/icon.png", alt: "Tiny Coach" },
          { src: "/images/projects/airalarm/icon.png", alt: "AirAlarm" },
          { src: "/images/projects/focus-densya/icon.png", alt: "FocusDensya" },
          { src: "/images/projects/html-previewer/icon.png", alt: "HTML Previewer" },
          { src: "/images/projects/corner-peek/icon.png", alt: "Corner Peek" },
          { src: "/images/projects/cheese-ocr/icon.png", alt: "Cheese! OCR" },
        ],
        images: [],
      },
      {
        company: "Innuna Inc.",
        timeframe: "2026年1月 - 8月",
        role: "iOS 应用开发 & 应用设计（实习）",
        achievements: [
          <>开发了一款面向幼儿园和小学家长的教育模拟应用的 iOS 前端。</>,
          <>主导从应用设计到 Swift 实现的全流程开发。已上架 Apple App Store（中国区）。</>,
        ],
        images: [],
      },
      {
        company: "ZHUZI",
        timeframe: "2022 - 2023",
        role: "游戏策划 & UI/UX 设计师",
        achievements: [
          <>设计手游的游戏系统、关卡和 UI/UX，负责从需求分析到视觉交付的完整工作流。</>,
          <>主导广告素材优化，广告效果提升 30%。</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "教育经历",
    institutions: [
      {
        name: "东北学院大学",
        description: (
          <>
            大学院 人类信息学研究科
            <br />
            研究课题：地质学严肃游戏的开发与效果评价
          </>
        ),
      },
      {
        name: "Build the Future",
        description: <>学习在线营销与 SaaS 产品构建。</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "技术栈",
    skills: [
      {
        title: "Swift, SwiftUI, ActivityKit, Apple Vision, WebKit, Unity, C#",
        description: <>开发</>,
        images: [],
      },
      {
        title: "TypeScript, Next.js, Supabase, Stripe, Python, HTML/CSS",
        description: <>Web 与后端</>,
        images: [],
      },
      {
        title: "UI/UX Design, Figma, Git/GitHub",
        description: <>设计与工具</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "博客",
  title: "关于设计与技术的思考...",
  description: `看看${person.name}最近在做什么`,
};

const work: Work = {
  path: "/work",
  label: "作品",
  title: `项目 – ${person.name}`,
  description: `${person.name}的设计与开发项目`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "相册",
  title: `照片集 – ${person.name}`,
  description: `${person.name}的照片集`,
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
