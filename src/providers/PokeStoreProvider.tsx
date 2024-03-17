'use client';

import { createContext, useContext, useRef } from 'react';
import { type StoreApi, useStore } from 'zustand';

import {
  createPokeStore as createPokeStore,
  PokeStore,
} from '@/store/pokeStore/pokeStore';

export const PokeStoreContext = createContext<StoreApi<PokeStore> | null>(null);

export interface PokeStoreProviderProps {
  children: React.ReactNode;
}

export function PokeStoreProvider({ children }: PokeStoreProviderProps) {
  const storeRef = useRef<StoreApi<PokeStore>>();

  if (!storeRef.current) {
    storeRef.current = createPokeStore();
  }

  return (
    <PokeStoreContext.Provider value={storeRef.current}>
      {children}
    </PokeStoreContext.Provider>
  );
}

type PokeStoreSelector<T = PokeStore> = (state: PokeStore) => T;

export function usePokeStore<T = PokeStore>(selector: PokeStoreSelector<T>) {
  const store = useContext(PokeStoreContext);
  if (!store) {
    throw new Error('usePokeStore must be used within an AuthStoreProvider');
  }

  return useStore(store, selector);
}
