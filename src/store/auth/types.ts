export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  _hasHydrated: boolean;
}

export interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
  setHasHydrated: (state: boolean) => void;
}
