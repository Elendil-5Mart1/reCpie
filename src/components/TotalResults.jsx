import { useRecipesFilters } from "../stores/recipesFilters.js";
import './TotalResults.css'

export const TotalResults = () => {

  const totalResults = useRecipesFilters((state) => state.totalResults);
  
  return (
    <section>
      <div className="total-results mb-3">
        <p><strong>{totalResults}</strong> résultat(s)</p>
      </div>
    </section>
  )
}
