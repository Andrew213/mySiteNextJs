import type { Metadata } from "next";
import "locomotive-scroll/locomotive-scroll.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kochanov-web.tech"),
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
  authors: [{ name: "Kochanov" }],
  creator: "Kochanov",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Андрей Кочанов — веб-разработчик",
    title: "Разработка сайтов, веб-приложений и Telegram-сервисов",
    description:
      "Разрабатываю сайты, веб-приложения, Telegram Mini Apps на React, Next.js и Node.js.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Сайты, веб-приложения и Telegram-сервисы для бизнеса",
    description:
      "Разрабатываю сайты, личные кабинеты, админ-панели и Telegram-приложения на React, Next.js и Node.js.",
  },
  formatDetection: {
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
