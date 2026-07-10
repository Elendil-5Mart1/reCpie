import { useRecipesFilters } from "../stores/recipesFilters.js";
import './Filters.css';

export const Filters = () => {
  const cuisines = useRecipesFilters((state) => state.cuisines);
  const selectedCuisine = useRecipesFilters((state) => state.selectedCuisine);
  const setSelectedCuisine = useRecipesFilters((state) => state.setSelectedCuisine);
  const sortOrder = useRecipesFilters((state) => state.sortOrder);
  const setSortOrder = useRecipesFilters((state) => state.setSortOrder);

  return (
    <>
      <section className="filter mb-4">

        <div className="cuisine-filter">
          <p>Filtrer par type</p>
          <select
            className="form-select"
            name="cuisine-type"
            value={selectedCuisine}
            onChange={(e) => setSelectedCuisine(e.target.value)}
          >
            <option value="all-cuisine">-Toutes les cuisines-</option>
            {cuisines.map((cuisine) => (
              <option key={cuisine} value={cuisine}>{cuisine}</option>
            ))}
          </select>
        </div>

        <div className="order-filter ms-3">
          <p>Trier la page</p>
          <select
            className="form-select"
            name="cuisine-order"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="défault">-Choix-</option>
            <option value="alphabetical">A-Z</option>
            <option value="best-note">Meilleures notes</option>
            <option value="low-cal">Basses calories</option>
            <option value="faster">Rapidité</option>
          </select>
        </div>

      </section>
    </>
  )
}
