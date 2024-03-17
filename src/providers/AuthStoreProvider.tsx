"use client";

import { createContext, useContext, useRef } from "react";
import { type StoreApi, useStore } from "zustand";

import { AuthStore, createAuthStore } from "@/store/auth/authStore";

export const AuthStoreContext = createContext<StoreApi<AuthStore> | null>(null);

export interface AuthStoreProviderProps {
  children: React.ReactNode;
}

export function AuthStoreProvider({ children }: AuthStoreProviderProps) {
  const storeRef = useRef<StoreApi<AuthStore>>();

  if (!storeRef.current) {
    storeRef.current = createAuthStore();
  }

  return (
    <AuthStoreContext.Provider value={storeRef.current}>
      {children}
    </AuthStoreContext.Provider>
  );
}

export function useAuthStore<T>(selector: (state: AuthStore) => T) {
  const store = useContext(AuthStoreContext);
  if (!store) {
    throw new Error("useAuthStore must be used within an AuthStoreProvider");
  }

  return useStore(store, selector);
}
