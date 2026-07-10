import { useRecipesFilters } from "../stores/recipesFilters.js";
import './RecipesPagination.css';

export const RecipesPagination = () => {
  const page = useRecipesFilters((state) => state.page);
  const totalPages = useRecipesFilters((state) => state.totalPages);
  const goToPage = useRecipesFilters((state) => state.goToPage);

  const handleClickPrevious = () => {
    if (page > 1) {
      goToPage(page - 1)
    }
  }

  const handleClickNext = () => {
    if (page < totalPages) {
      goToPage(page + 1)
    }
  }

  return (
    <>
      <section>
        <div className="page-btn-container mb-3">
          <button
            className="page-btn btn text-primary border border-primary"
            onClick={handleClickPrevious}
            disabled={page === 1}
          >Précédent
          </button>

          <span className="align-self-center">Page {page} sur {totalPages}</span>

          <button
            className="page-btn btn text-primary border border-primary"
            onClick={handleClickNext}
            disabled={page === totalPages}
          >Suivant
          </button>
        </div>
      </section>
    </>
  )
}