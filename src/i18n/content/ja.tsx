import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";

const person: Person = {
  firstName: "世峰",
  lastName: "張",
  name: "張 詩楓",
  role: "プロダクトエンジニア",
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
  title: `${person.name}のポートフォリオ`,
  description: `プロダクトエンジニアとしての作品を紹介するポートフォリオサイト`,
  headline: <>デザインとコードの架け橋を築く</>,
  featured: {
    display: false,
    title: <>注目の作品</>,
    href: "/work",
  },
  subline: (
    <>
      東京在住の{person.role}、{person.name}です。
      アイデアからリリースまで、フルスタックアプリケーションを開発しています。
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "自己紹介",
  title: `自己紹介 – ${person.name}`,
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
        張 詩楓はアイデアからリリースまでフルスタックアプリケーションを開発するプロダクトエンジニアです。
        ゲームデザインとEdTech研究のバックグラウンドを活かし、AI搭載の学習ツール、
        OCRユーティリティ、生産性向上アプリを開発しています。フロントエンド、バックエンド、AI統合まで、
        エンドツーエンドでプロダクトを届けます。
      </>
    ),
  },
  work: {
    display: true,
    title: "職歴",
    experiences: [
      {
        company: "Innuna Inc.",
        timeframe: "2026 - 現在",
        role: "iOSアプリ開発者 & アプリデザイナー（インターン）",
        achievements: [
          <>
            幼稚園・小学校の保護者向け教育シミュレーションアプリのiOSフロントエンドを開発。
          </>,
          <>
            アプリのデザインからSwiftによる実装まで一貫して担当。Apple App Store（中国リージョン）にリリース。
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
          <>
            広告クリエイティブの最適化を主導し、広告パフォーマンスを30%改善。
          </>,
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
        title: "Unity, C#, Swift/iOS, JavaScript, TypeScript, Next.js, Python, HTML/CSS",
        description: <>開発</>,
        images: [],
      },
      {
        title: "UI/UX Design, Figma, Git/GitHub, Supabase, OpenAI API",
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
