import { TranslationProvider } from "@/providers/TranslationProvider";
import type { Metadata } from "next";

import { notFound } from "next/navigation";

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
      title: "Andrey Kochanov - Websites, Web Apps and Telegram Mini Apps",

      description:
        "I build websites, web applications, and Telegram Mini Apps with React, Next.js, and Node.js.",

      keywords: [
        "frontend developer",
        "web developer",
        "React developer",
        "Next.js developer",
        "TypeScript developer",
        "Tailwind CSS",
        "frontend developer portfolio",
        "Andrey Kochanov web developer",
      ],

      authors: [{ name: "Andrey Kochanov" }],
      creator: "Andrey Kochanov",

      alternates: {
        canonical: "/en",
        languages: {
          "ru-RU": "/ru",
          "en-US": "/en",
        },
      },

      openGraph: {
        type: "website",
        locale: "en_US",
        url: "/en",
        siteName: "Andrey Kochanov — Web Developer",
        title: "Websites, Web Apps and Telegram Services",
        description:
          "I build websites, web applications, and Telegram Mini Apps with React, Next.js, and Node.js.",
      },

      twitter: {
        card: "summary_large_image",
        title: "Websites, Web Apps and Telegram Services",
        description:
          "I build modern web applications with React, Next.js, Node.js, Web3, and third-party integrations.",
      },

      formatDetection: {
        address: false,
        telephone: false,
      },
    };
  }

  return {
    title: "Андрей Кочанов - сайты, веб-приложения и Telegram Mini Apps",

    description:
      "Разрабатываю сайты, веб-приложения, Telegram Mini Apps на React, Next.js и Node.js.",

    keywords: [
      "frontend developer",
      "web developer",
      "React developer",
      "Next.js developer",
      "TypeScript",
      "Tailwind CSS",
      "портфолио frontend разработчика",
      "Кочанов веб-разработчик",
    ],

    authors: [{ name: "Andrey Kochanov" }],
    creator: "Andrey Kochanov",

    alternates: {
      canonical: "/ru",
      languages: {
        "ru-RU": "/ru",
        "en-US": "/en",
      },
    },

    openGraph: {
      type: "website",
      locale: "ru_RU",
      url: "/ru",
      siteName: "Андрей Кочанов — веб-разработчик",
      title: "Разработка сайтов, веб-приложений и Telegram-сервисов",
      description:
        "Разрабатываю сайты, веб-приложения, Telegram Mini Apps на React, Next.js и Node.js.",
    },

    twitter: {
      card: "summary_large_image",
      title: "Сайты, веб-приложения и Telegram-сервисы для бизнеса",
      description:
        "Разрабатываю современные веб-приложения на React, Next.js и Node.js.",
    },

    formatDetection: {
      address: false,
      telephone: false,
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
