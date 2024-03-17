import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  AuthActions as PokeActions,
  PokeState as PokeState,
} from '@/store/pokeStore/types';

export type PokeStore = PokeState & PokeActions;

const defaultState: PokeState = {
  favorites: [],
};

export const createPokeStore = (initialState: PokeState = defaultState) => {
  return create(
    persist<PokeStore>(
      (set) => ({
        ...initialState,
        addFavorite(id) {
          set((state) => ({
            favorites: [...state.favorites, id],
          }));
        },
        removeFavorite(id) {
          set((state) => ({
            favorites: state.favorites.filter((f) => f !== id),
          }));
        },
      }),
      {
        name: btoa('poke-store'),
      }
    )
  );
};
