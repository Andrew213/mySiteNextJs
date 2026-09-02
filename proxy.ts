import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname !== "/") {
    return NextResponse.next();
  }

  const acceptLanguage = request.headers.get("accept-language") ?? "";

  const locale = acceptLanguage.toLowerCase().startsWith("ru") ? "ru" : "en";

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
