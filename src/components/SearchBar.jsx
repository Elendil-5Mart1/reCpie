import { useState } from "react";
import { useRecipesFilters } from "../stores/recipesFilters.js";
import './SearchBar.css';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const search = useRecipesFilters((state) => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    search(searchTerm);
  };

  const handleReset = () => {
    setSearchTerm("");
    search("");
  };

  return (
    <section>
      <form className="search-bar-form mb-4" onSubmit={handleSubmit}>
        <label htmlFor="search" className="form-label">Recherche</label>
        <div className="search-bar mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher une recette..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Rechercher</button>
          <button className="btn btn-link text-dark border border-dark" type="button" onClick={handleReset}>Réinitialiser</button>
        </div>
      </form>
    </section>
  )
}