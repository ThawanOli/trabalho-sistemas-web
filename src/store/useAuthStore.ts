import { create } from 'zustand';

interface AuthState {
  user: {
    name: string;
    role: 'USER' | 'ADMIN';
  } | null;
  login: (name: string, role: 'USER' | 'ADMIN') => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null, // Começa deslogado
  login: (name, role) => set({ user: { name, role } }),
  logout: () => set({ user: null }),
}));