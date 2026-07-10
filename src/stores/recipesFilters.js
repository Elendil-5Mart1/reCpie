import { create } from 'zustand';

export const useRecipesFilters = create((set) => ({
  //* état
  searchTerm: "",
  page: 1,
  totalPages: 1,
  totalResults: 0,
  cuisines: [],
  selectedCuisine: "all-cuisine",
  sortOrder: "défault",

  //* setters simples
  setTotalPages: (totalPages) => set({ totalPages }),
  setTotalResults: (totalResults) => set({ totalResults }),
  setCuisines: (cuisines) => set({ cuisines }),
  setSelectedCuisine: (selectedCuisine) => set({ selectedCuisine }),
  setSortOrder: (sortOrder) => set({ sortOrder }),

  //* actions "métier"
  search: (newSearchTerm) => set({ searchTerm: newSearchTerm, page: 1 }),
  goToPage: (newPage) => set({
    page: newPage,
    selectedCuisine: "all-cuisine",
    sortOrder: "défault",
  }),
}));