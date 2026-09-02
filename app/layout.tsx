import type { Metadata } from "next";
import "locomotive-scroll/locomotive-scroll.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kochanov-web.tech"),
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
