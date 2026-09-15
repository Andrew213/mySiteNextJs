import {
  createPortfolioOgImage,
  ogImageContentType,
  ogImageSize,
} from "@/lib/ogImageResponse";

export const alt = "Andrey Kochanov — websites, web apps, and Telegram services";
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default function OpenGraphImage() {
  return createPortfolioOgImage("en");
}