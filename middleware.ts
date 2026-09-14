import { NextResponse, type NextRequest } from 'next/server';
import { siteForHost } from '@/lib/sites';

/**
 * Host routing.
 *
 * capital.thara.ae/for-founders     → /s/capital/for-founders
 * capital.thara.ae/ar/for-founders  → /ar/s/capital/for-founders
 *
 * The parent host is left alone, and so is any path that already
 * addresses a site directly — that is how the same build serves
 * subdomains in production and plain paths in development.
 */
export function middleware(request: NextRequest) {
  const site = siteForHost(request.headers.get('host'));
  if (!site?.entitySlug) return NextResponse.next();

  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/s/') || pathname.startsWith('/ar/s/')) {
    return NextResponse.next();
  }

  const isArabic = pathname === '/ar' || pathname.startsWith('/ar/');
  const rest = isArabic ? pathname.slice(3) : pathname;
  const url = request.nextUrl.clone();
  url.pathname = `${isArabic ? '/ar' : ''}/s/${site.id}${rest === '/' ? '' : rest}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ['/((?!_next/|api/|favicon|robots.txt|og.png|images/).*)'],
};
