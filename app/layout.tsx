import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kochanov WebDev",
  description:
    "Web разработчик для Вас и Вашего бизнеса. Создаю современные сайты и веб-приложения.",
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
