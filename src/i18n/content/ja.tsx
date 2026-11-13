import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "世峰",
  lastName: "張",
  name: "張 詩楓",
  role: "個人開発者",
  avatar: "/images/avatar.jpg",
  email: "f.shera.09@gmail.com",
  location: "Asia/Tokyo",
  languages: ["中国語", "日本語", "英語"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>{person.firstName}のニュースレターを購読</>,
  description: <>クリエイティビティとエンジニアリングに関する週刊ニュースレター</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Kaedeeeeeeeeee",
  },
  {
    name: "メール",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "ホーム",
  title: `${person.name} · 個人開発者`,
  description: `WebとAppleプラットフォームの個人開発作品を紹介するポートフォリオサイト`,
  headline: <>デザインとコードの架け橋を築く</>,
  featured: {
    display: false,
    title: <>注目の作品</>,
    href: "/work",
  },
  subline: (
    <>
      東京在住の{person.role}、{person.name}です。
      WebとAppleプラットフォームで、アイデアからリリースまでプロダクトを開発しています。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "自己紹介",
  title: `自己紹介 · ${person.name}`,
  description: `${person.name}、東京在住の${person.role}`,
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
    title: "はじめに",
    description: (
      <>
        WebとAppleプラットフォームで、企画・設計・開発・リリースまで一人で手がけています。2026年にiOS/iPadOSアプリ5本とmacOSアプリ2本をApp
        Storeへリリース。教育工学とゲームデザインを背景に、学習プロダクトと日常のツールを作っています。
      </>
    ),
    tagline: <>学びと日常の小さな不便を、使いやすいアプリに。</>,
  },
  work: {
    display: true,
    title: "職歴",
    experiences: [
      {
        company: "個人開発",
        timeframe: "2026年 - 現在",
        role: "個人開発者 · iOS / macOS / Web",
        current: true,
        achievements: [
          <>
            企画・デザインからリリースまで一人で手がけ、7本のアプリを公開。Passnoteはサブスクリプションで収益化。
          </>,
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
        role: "iOSアプリ開発者 & アプリデザイナー（インターン）",
        achievements: [
          <>幼稚園・小学校の保護者向け教育シミュレーションアプリのiOSフロントエンドを開発。</>,
          <>
            アプリのデザインからSwiftによる実装まで一貫して担当。Apple App
            Store（中国リージョン）にリリース。
          </>,
        ],
        images: [],
      },
      {
        company: "ZHUZI",
        timeframe: "2022 - 2023",
        role: "ゲームプランナー & UI/UXデザイナー",
        achievements: [
          <>
            モバイルゲームのゲームシステム、レベル、UI/UXを設計。要件分析からビジュアル納品までワークフロー全体を担当。
          </>,
          <>広告クリエイティブの最適化を主導し、広告パフォーマンスを30%改善。</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "学歴",
    institutions: [
      {
        name: "東北学院大学",
        description: (
          <>
            大学院 人間情報学研究科
            <br />
            研究テーマ：地質学シリアスゲームの開発と効果評価
          </>
        ),
      },
      {
        name: "Build the Future",
        description: <>オンラインマーケティングとSaaS構築を学習。</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "技術スキル",
    skills: [
      {
        title: "Swift, SwiftUI, ActivityKit, Apple Vision, WebKit, Unity, C#",
        description: <>開発</>,
        images: [],
      },
      {
        title: "TypeScript, Next.js, Supabase, Stripe, Python, HTML/CSS",
        description: <>Web & バックエンド</>,
        images: [],
      },
      {
        title: "UI/UX Design, Figma, Git/GitHub",
        description: <>デザイン & ツール</>,
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "ブログ",
  title: "デザインとテクノロジーについて...",
  description: `${person.name}の最近の活動`,
};

const work: Work = {
  path: "/work",
  label: "作品",
  title: `プロジェクト – ${person.name}`,
  description: `${person.name}のデザイン・開発プロジェクト`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "ギャラリー",
  title: `フォトギャラリー – ${person.name}`,
  description: `${person.name}のフォトコレクション`,
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
