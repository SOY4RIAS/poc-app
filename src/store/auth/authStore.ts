import { create } from "zustand";
import { persist } from "zustand/middleware";

import { AuthActions, AuthState, User } from "@/store/auth/types";

export type AuthStore = AuthState & AuthActions;

const defaultState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const createAuthStore = (initialState: AuthState = defaultState) => {
  return create(
    persist<AuthStore>(
      (set) => ({
        ...initialState,
        login: (user: User) => {
          set({ isAuthenticated: true, user });
        },
        logout: () => {
          set({ isAuthenticated: false, user: null });
        },
      }),
      {
        name: "auth-store",
      },
    ),
  );
};
