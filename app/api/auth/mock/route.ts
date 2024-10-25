import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const isWebContainer = process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export async function POST(request: Request) {
  if (!isWebContainer) {
    return NextResponse.json({ error: 'Mock auth only available in web container' }, { status: 403 });
  }

  try {
    const { email, name } = await request.json();

    const mockUser = {
      id: `mock-${Date.now()}`,
      name: name || email.split('@')[0],
      email,
      roles: ['homeowner', 'contractor'] as const,
      activeRole: 'homeowner',
      token: `mock-token-${Date.now()}`,
    };

    // Set mock cookie
    cookies().set('auth-token', mockUser.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 86400, // 1 day
      path: '/',
    });

    return NextResponse.json({ user: mockUser });
  } catch (error) {
    console.error('Mock auth error:', error);
    return NextResponse.json({ error: 'Error during mock authentication' }, { status: 500 });
  }
}