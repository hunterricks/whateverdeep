"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useUser } from '@auth0/nextjs-auth0/client';
import Cookies from 'js-cookie';

// Ensure this is evaluated at runtime
const getIsWebContainer = () => process.env.NEXT_PUBLIC_ENV_MODE === 'webcontainer';

export type UserRole = 'homeowner' | 'contractor';

export type User = {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  activeRole: UserRole;
  token?: string;
};

type AuthStore = {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
  clearState: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: (userData) => {
        // In web container mode, always assign both roles
        const roles = getIsWebContainer() ? ['homeowner', 'contractor'] as UserRole[] : userData.roles;
        const activeRole = userData.activeRole || roles[0];

        if (userData.token) {
          Cookies.set('auth-token', userData.token, {
            expires: 7,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
            path: '/'
          });
        }
        
        set({ 
          user: { ...userData, roles, activeRole }, 
          isAuthenticated: true 
        });
      },
      logout: () => {
        Cookies.remove('auth-token', { path: '/' });
        localStorage.removeItem('auth-storage');
        sessionStorage.clear();
        
        set({ 
          user: null, 
          isAuthenticated: false 
        });
      },
      switchRole: (role) => {
        set((state) => {
          if (!state.user) {
            return state;
          }
          
          if (!state.user.roles.includes(role)) {
            return state;
          }

          return {
            ...state,
            user: {
              ...state.user,
              activeRole: role
            }
          };
        });
      },
      clearState: () => {
        set({
          user: null,
          isAuthenticated: false
        });
      }
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export const useAuth = () => {
  const { user: auth0User, error, isLoading } = useUser();
  const { user, isAuthenticated, login, logout, switchRole } = useAuthStore();
  
  const checkAuth = () => {
    // In web container mode, use the mock auth
    if (getIsWebContainer()) {
      const token = Cookies.get('auth-token');
      const isValid = isAuthenticated && user !== null && token !== null;
      
      if (!isValid) {
        useAuthStore.getState().clearState();
      }
      
      return isValid;
    }

    // In other environments, use Auth0
    if (error) {
      console.error('Auth0 error:', error);
      return false;
    }

    return !isLoading && auth0User !== null;
  };

  return { 
    user: getIsWebContainer() ? user : auth0User ? {
      id: auth0User.sub!,
      name: auth0User.name!,
      email: auth0User.email!,
      roles: (auth0User['https://myapp.org/roles'] as UserRole[]) || ['homeowner'],
      activeRole: (auth0User['https://myapp.org/activeRole'] as UserRole) || 'homeowner',
    } : null,
    isAuthenticated: getIsWebContainer() ? isAuthenticated : Boolean(auth0User),
    isLoading: getIsWebContainer() ? false : isLoading,
    error: getIsWebContainer() ? null : error,
    login,
    logout,
    switchRole,
    checkAuth,
  };
};