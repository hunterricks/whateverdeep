import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

const isWebContainer = process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export default isWebContainer 
  ? async function middleware(req: NextRequest) {
      // In WebContainer, check for mock auth token
      const token = req.cookies.get('auth-token');
      if (!token) {
        const url = new URL('/login', req.url);
        url.searchParams.set('returnTo', req.url);
        return NextResponse.redirect(url);
      }
      return NextResponse.next();
    }
  : withMiddlewareAuthRequired();

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/profile/:path*',
    '/post-job/:path*',
    '/browse-jobs/:path*',
    '/my-jobs/:path*',
    '/my-proposals/:path*',
    '/messages/:path*',
  ],
};