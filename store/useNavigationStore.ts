import { create } from 'zustand';

interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string | null;
  toggleMenu: () => void;
  setActiveSection: (section: string | null) => void;
  closeMenu: () => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isMenuOpen: false,
  activeSection: null,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  setActiveSection: (section) => set({ activeSection: section }),
  closeMenu: () => set({ isMenuOpen: false, activeSection: null }),
}));
