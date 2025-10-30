import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { i18n } from "./i18n-config";
import Negotiator from "negotiator";

import { match as matchLocale } from "@formatjs/intl-localematcher";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  // if (
  //   [
  //     '/manifest.json',
  //     '/favicon.ico',
  //     // Your other files in `public`
  //   ].includes(pathname)
  // )
  //   return
  const fetch = require("isomorphic-unfetch");

  // Bake redirects into next config at build time

  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/google0daa6a3d798d5fdc.html "
  ) {
    return NextResponse.next();
  }
  if (
    pathname.startsWith("/en/blog/en/") ||
    pathname.startsWith("/vi/blog/en/")
  ) {
    const slug = pathname
      .replace("/en/blog/en/", "")
      .replace("/vi/blog/en/", "")
      .replace("/ja/blog/en/", "");
    const redirectTo = "/en/blog/" + slug;
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  if (
    pathname.startsWith("/vi/blog/vi/") ||
    pathname.startsWith("/en/blog/vi/") ||
    pathname.startsWith("/ja/blog/vi/")
  ) {
    const slug = pathname
      .replace("/vi/blog/vi/", "")
      .replace("/en/blog/vi/", "")
      .replace("/ja/blog/vi/", "");
    const redirectTo = "/vi/blog/" + slug;
    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  // Kiểm tra xem locale có giá trị "en" không

  // Tiếp tục xử lý bình thường nếu không cần chuyển hướng

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Không redirect đối với file icon svg
  const isPublicIcon = pathname === "/images/sprite-icon.svg";

  // Redirect if there is no locale
  if (pathnameIsMissingLocale && !isPublicIcon) {
    // const locale = getLocale(request);
    const locale = i18n.defaultLocale;

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url
      )
    );
  }
  const redirectBlog: any = fetch(
    `https://strapi-ezbuy.ichiba.net/redirects?pagination[start]=0&pagination[limit]=-1`
  )
    .then((res: { json: () => any }) => res.json())
    .then((response: { data: any }) => {
      const redirects = response.data.map(
        (redirect: { attributes: { from: any; to: any; type: string } }) => ({
          source: redirect.attributes.from,
          destination: redirect.attributes.to,
          permanent: redirect.attributes.type === "permanent",
        })
      );

      const matchingRedirect = redirects.find(
        (redirect: { source: string }) => redirect.source === pathname
      );

      if (matchingRedirect && matchingRedirect.permanent) {
        return NextResponse.redirect(
          new URL(matchingRedirect.destination, request.url),
          { status: 301 }
        );
      } else if (matchingRedirect && !matchingRedirect.permanent) {
        return NextResponse.redirect(
          new URL(matchingRedirect.destination, request.url),
          { status: 302 }
        );
      }

      // Nếu không có redirect nào khớp, tiếp tục xử lý bình thường
      return NextResponse.next();
    })
    .catch((error: any) => {
      console.error("Error fetching redirects:", error);
      return NextResponse.next(); // Trả về để tiếp tục xử lý bình thường nếu có lỗi fetch
    });
  // Check if there is any supported locale in the pathname
  if (redirectBlog) {
    return redirectBlog;
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
