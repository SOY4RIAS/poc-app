export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface AuthActions {
  login: (user: User) => void;
  logout: () => void;
}
