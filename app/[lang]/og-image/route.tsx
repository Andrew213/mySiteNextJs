import { createPortfolioOgImage } from "@/lib/ogImageResponse";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ lang: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { lang } = await params;

  if (lang !== "ru" && lang !== "en") {
    return new Response("Not found", { status: 404 });
  }

  return createPortfolioOgImage(lang);
}