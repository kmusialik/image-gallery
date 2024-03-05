import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path == 'login' || path == 'signup';
  let token = request.cookies.get('token')?.value || '';

  if (!isPublicPath && !token) {
    // if the url is not public and there is no token
    return NextResponse.redirect(new URL('/login', request.url));
  }


  if (!isPublicPath && token) {
    // if the url is PUBLIC and there is no token
    return NextResponse.redirect(new URL(path, request.url));
  }
}

// matcher allows you to filter Middleware to run on specific paths.
export const config = {
  matcher: ['/', 'signup', 'login', '/profile'],
};
