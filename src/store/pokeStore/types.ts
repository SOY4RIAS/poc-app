import { Pokemon } from '@/lib/types';

export interface PokeState {
  favorites: Pokemon[];
}

export interface AuthActions {
  toggleFavorite: (id: Pokemon) => void;
}
