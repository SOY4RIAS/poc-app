import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { AuthActions, AuthState, User } from '@/store/pokeStore/types';

export type AuthStore = AuthState & AuthActions;

const defaultState: AuthState = {
  isAuthenticated: false,
  user: null,
  _hasHydrated: false,
};

export const createAuthStore = (initialState: AuthState = defaultState) => {
  return create(
    persist<AuthStore>(
      (set) => ({
        ...initialState,
        _hasHydrated: false,
        setHasHydrated: (state: boolean) => {
          set({
            _hasHydrated: state,
          });
        },
        login: (user: User) => {
          set({ isAuthenticated: true, user });
        },
        logout: () => {
          set({ isAuthenticated: false, user: null });
        },
      }),
      {
        name: 'auth-store',
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true);
        },
      }
    )
  );
};
