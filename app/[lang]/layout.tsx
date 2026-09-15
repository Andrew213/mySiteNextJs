import { TranslationProvider } from "@/providers/TranslationProvider";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

const siteUrl = "https://kochanov-web.tech";
const authorName = "Andrey Kochanov";
const ogImageUrl = `${siteUrl}/opengraph-image?v=3`;

const ogImage = {
  url: ogImageUrl,
  secureUrl: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Андрей Кочанов — разработка сайтов, веб-приложений и Telegram-сервисов",
  type: "image/png",
};

const sharedMetadata = {
  applicationName: "Andrey Kochanov Portfolio",
  authors: [{ name: authorName, url: siteUrl }],
  creator: authorName,
  publisher: authorName,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "web development",
  classification: "Fullstack web development portfolio and services",
  formatDetection: {
    address: false,
    telephone: false,
  },
} satisfies Metadata;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;

  if (lang !== "ru" && lang !== "en") {
    notFound();
  }

  if (lang === "en") {
    return {
      ...sharedMetadata,

      title: "Andrey Kochanov - Websites, Web Apps and Telegram Mini Apps",

      description:
        "I build websites, web applications, and Telegram Mini Apps with React, Next.js, and Node.js.",

      keywords: [
        "frontend developer",
        "fullstack developer",
        "web developer",
        "React developer",
        "Next.js developer",
        "TypeScript developer",
        "Node.js developer",
        "Telegram Mini Apps developer",
        "frontend developer portfolio",
        "Andrey Kochanov web developer",
      ],

      alternates: {
        canonical: "/en",
        languages: {
          "ru-RU": "/ru",
          "en-US": "/en",
          "x-default": "/en",
        },
      },

      openGraph: {
        type: "website",
        locale: "en_US",
        alternateLocale: "ru_RU",
        url: "/en",
        siteName: "Andrey Kochanov — Web Developer",
        title: "Websites, Web Apps and Telegram Services",
        description:
          "I build websites, web applications, and Telegram Mini Apps with React, Next.js, and Node.js.",
        images: [ogImage],
      },

      twitter: {
        card: "summary_large_image",
        title: "Websites, Web Apps and Telegram Services",
        description:
          "I build modern web applications with React, Next.js, Node.js, Web3, and third-party integrations.",
        images: [ogImage],
      },
    };
  }

  return {
    ...sharedMetadata,

    title: "Андрей Кочанов - сайты, веб-приложения и Telegram Mini Apps",

    description:
      "Разрабатываю сайты, веб-приложения, Telegram Mini Apps на React, Next.js и Node.js.",

    keywords: [
      "frontend developer",
      "fullstack developer",
      "web developer",
      "React developer",
      "Next.js developer",
      "TypeScript",
      "Node.js",
      "Telegram Mini Apps",
      "портфолио frontend разработчика",
      "Кочанов веб-разработчик",
    ],

    alternates: {
      canonical: "/ru",
      languages: {
        "ru-RU": "/ru",
        "en-US": "/en",
        "x-default": "/en",
      },
    },

    openGraph: {
      type: "website",
      locale: "ru_RU",
      alternateLocale: "en_US",
      url: "/ru",
      siteName: "Андрей Кочанов — веб-разработчик",
      title: "Разработка сайтов, веб-приложений и Telegram-сервисов",
      description:
        "Разрабатываю сайты, веб-приложения, Telegram Mini Apps на React, Next.js и Node.js.",
      images: [ogImage],
    },

    twitter: {
      card: "summary_large_image",
      title: "Сайты, веб-приложения и Telegram-сервисы для бизнеса",
      description:
        "Разрабатываю современные веб-приложения на React, Next.js и Node.js.",
      images: [ogImage],
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
};
export default async function LanguageLayout({ children, params }: Props) {
  const { lang } = await params;

  if (lang !== "ru" && lang !== "en") {
    notFound();
  }

  return <TranslationProvider lang={lang}>{children}</TranslationProvider>;
}