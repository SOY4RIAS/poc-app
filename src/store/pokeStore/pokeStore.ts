import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import {
  AuthActions as PokeActions,
  PokeState as PokeState,
} from '@/store/pokeStore/types';
import { Pokemon } from '@/lib/types';

export type PokeStore = PokeState & PokeActions;

const defaultState: PokeState = {
  favorites: [],
};

export const createPokeStore = (initialState: PokeState = defaultState) => {
  return create(
    persist<PokeStore>(
      (set) => ({
        ...initialState,
        toggleFavorite: (item: Pokemon) =>
          set((state) => {
            const isFavorite = !!state.favorites.find(
              (pokemon) => pokemon.name === item.name
            );

            return {
              favorites: isFavorite
                ? state.favorites.filter(
                    (pokemon) => pokemon.name !== item.name
                  )
                : [...state.favorites, item],
            };
          }),
      }),
      {
        name: btoa('poke-store'),
      }
    )
  );
};
