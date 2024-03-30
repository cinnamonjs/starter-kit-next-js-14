import { create } from "zustand";

/** global use state management: (use for handle many state in one page) */
export const useUserStore = create((set) => ({
  // variables
  likes: 0,
  items: [],
  populations: 0,

  // functions
  setItem: (item) => set((state) => ({ item: [...state.items, item] })),

  incrementPopulation: () =>
    set((state) => ({ populations: state.populations + 1 })),
  decrementPopulation: () =>
    set((state) => {
      if (state.populations === 0) {
        return { populations: 0 };
      } else {
        return { populations: state.populations - 1 };
      }
    }),

  like: () => set((state) => ({ like: state.like + 1 })),
  dislike: () =>
    set((state) => {
      if (state.like === 0) {
        return { like: 0 };
      } else {
        return { like: state.like - 1 };
      }
    }),
}));
