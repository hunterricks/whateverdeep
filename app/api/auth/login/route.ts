import { NextRequest } from 'next/server';
import { handleLogin } from '@auth0/nextjs-auth0';

const isWebContainer = process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export async function GET(request: NextRequest) {
  // In WebContainer mode, don't use Auth0
  if (isWebContainer) {
    return new Response('Auth0 login not available in WebContainer', { status: 404 });
  }

  // Ensure we have the required Auth0 configuration
  if (!process.env.AUTH0_SECRET || !process.env.AUTH0_ISSUER_BASE_URL) {
    console.error('Missing required Auth0 configuration');
    return new Response('Auth0 configuration error', { status: 500 });
  }

  try {
    return handleLogin({
      returnTo: new URL(request.url).searchParams.get('returnTo') || '/dashboard',
      authorizationParams: {
        prompt: 'login',
        screen_hint: new URL(request.url).searchParams.get('screen_hint') || undefined,
      },
    })(request);
  } catch (error) {
    console.error('Login error:', error);
    return new Response('Login failed', { status: 500 });
  }
}