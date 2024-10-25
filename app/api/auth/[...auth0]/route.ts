import { NextRequest } from 'next/server';
import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

const isWebContainer = process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export async function GET(ctx: any) {
  if (!ctx || !ctx.params) {
    throw new Error("Context or params are undefined");
  }
  const { params } = ctx;

  // In WebContainer mode, don't use Auth0
  if (isWebContainer) {
    return new Response('Auth0 routes not available in WebContainer', { status: 404 });
  }

  // Ensure we have the required Auth0 configuration
  if (!process.env.AUTH0_SECRET || !process.env.AUTH0_ISSUER_BASE_URL) {
    console.error('Missing required Auth0 configuration');
    return new Response('Auth0 configuration error', { status: 500 });
  }

  try {
    // Get the auth0 route from params
    const auth0Route = params.auth0[0];

    // Handle different auth routes
    switch (auth0Route) {
      case 'login':
        return handleLogin({
          returnTo: '/dashboard',
          authorizationParams: {
            prompt: 'login',
          },
        })(ctx.request);

      case 'callback':
        return handleCallback({
          afterCallback: async (req, res, session) => {
            if (session?.user) {
              // Add roles to the session based on Auth0 metadata
              const roles = session.user['https://myapp.org/roles'] || ['homeowner'];
              session.user.roles = roles;
              session.user.activeRole = roles[0];
            }
            return session;
          },
        })(ctx.request);

      case 'logout':
        return handleLogout({
          returnTo: new URL('/', ctx.request.url).toString(),
        })(ctx.request);

      default:
        return handleAuth()(ctx.request);
    }
  } catch (error) {
    console.error('Auth0 handler error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}