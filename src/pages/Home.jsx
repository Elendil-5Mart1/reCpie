import { Banner } from "../components/Banner.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { Filters } from "../components/Filters.jsx";
import { RecipesPagination } from "../components/RecipesPagination.jsx";
import { RecipesList } from "../components/RecipesList.jsx";
import { TotalResults } from "../components/TotalResults.jsx";
import { useEffect } from "react";
import { useRecipesFilters } from "../stores/recipesFilters.js";
import './Home.css';

export const Home = () => {

  const totalPages = useRecipesFilters((state) => state.totalPages);
  
  useEffect(() => {
    document.title = "reCpie | Home";
  }, []);

  return (
    <main className="wrap">
      <Banner />
      <SearchBar />
      <Filters />

      {totalPages > 1 && <RecipesPagination />}

      <TotalResults />

      <RecipesList />

      {totalPages > 1 && <RecipesPagination />}
    </main>
  )
}
