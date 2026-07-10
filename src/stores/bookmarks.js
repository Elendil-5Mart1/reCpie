import { create } from 'zustand';

export const useBookmarks = create((set) => ({
    bookmarks: [],
    addFavorite: (recipe) => set((state) => {
        const updatedbookmarks = [...state.bookmarks, recipe];
        return { bookmarks: updatedbookmarks };
    }),
    removeFavorite: (recipe) => set((state) => {
        const updatedbookmarks = state.bookmarks.filter(r => r.id !== recipe.id);
        return { bookmarks: updatedbookmarks };
    })
}));