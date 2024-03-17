export interface PokeState {
  favorites: string[];
}

export interface AuthActions {
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}
