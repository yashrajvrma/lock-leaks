// @ts-nocheck
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      token: null,
      isAuthenticated: false,

      // Actions
      setUser: (user: any) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      setToken: (token: any) =>
        set({
          token,
          isAuthenticated: !!token,
        }),

      login: (user: any, token: string) =>
        set({
          user,
          token,
          isAuthenticated: true,
        }),

      logout: () =>
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        }),

      // Getters
      getToken: () => get().token,
      getUser: () => get().user,
      getIsAuthenticated: () => get().isAuthenticated,
    }),
    {
      name: "auth-storage", // localStorage key
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
