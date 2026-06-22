import type { Metadata } from "next";
import "locomotive-scroll/locomotive-scroll.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Андрей Кочанов — сайты, веб-приложения и Telegram Mini Apps",
  description:
    "Разрабатываю сайты, веб-приложения, Telegram Mini Apps, личные кабинеты и админ-панели для бизнеса на React, Next.js и Node.js.",
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
