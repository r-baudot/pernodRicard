import { create } from 'zustand';

interface UIState {
  theme: 'light' | 'dark';
  language: 'en' | 'fr';
  setTheme: (theme: 'light' | 'dark') => void;
  setLanguage: (language: 'en' | 'fr') => void;
  toggleTheme: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'light',
  language: 'en',
  setTheme: (theme) => set({ theme }),
  setLanguage: (language) => set({ language }),
  toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
}));
