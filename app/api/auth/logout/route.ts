import { NextRequest } from 'next/server';
import { handleLogout } from '@auth0/nextjs-auth0';
import { cookies } from 'next/headers';

const isWebContainer = process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export async function GET(request: NextRequest) {
  // Handle WebContainer logout
  if (isWebContainer) {
    cookies().delete('auth-token');
    return new Response(null, {
      status: 302,
      headers: { Location: '/' },
    });
  }

  // Ensure we have the required Auth0 configuration
  if (!process.env.AUTH0_SECRET || !process.env.AUTH0_ISSUER_BASE_URL) {
    console.error('Missing required Auth0 configuration');
    return new Response('Auth0 configuration error', { status: 500 });
  }

  try {
    return handleLogout({
      returnTo: new URL('/', request.url).toString(),
    })(request);
  } catch (error) {
    console.error('Logout error:', error);
    return new Response(null, {
      status: 302,
      headers: { Location: '/' },
    });
  }
}