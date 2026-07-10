import { useEffect, useState } from "react"
import { RecipeCard } from "./RecipeCard.jsx"
import { useRecipesFilters } from "../stores/recipesFilters.js"

export const RecipesList = ({ maxLimit = 6 }) => {

  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const searchTerm = useRecipesFilters((state) => state.searchTerm);
  const page = useRecipesFilters((state) => state.page);
  const selectedCuisine = useRecipesFilters((state) => state.selectedCuisine);
  const sortOrder = useRecipesFilters((state) => state.sortOrder);
  
  const setTotalPages = useRecipesFilters((state) => state.setTotalPages);
  const setTotalResults = useRecipesFilters((state) => state.setTotalResults);
  const setCuisines = useRecipesFilters((state) => state.setCuisines);

  const limit = maxLimit;
  const skip = (page - 1) * limit;

  let URL_PARAMS = "";
  if (searchTerm !== "") {
    URL_PARAMS = `/search?q=${searchTerm}&skip=${skip}&limit=${limit}`;
  } else {
    URL_PARAMS = `?skip=${skip}&limit=${limit}`;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/recipes` + URL_PARAMS)
      .then(res => {
        if (!res.ok) {
          throw new Error('Erreur lors du chargement des données')
        }
        return res.json();
      })
      .then(data => {
        setRecipes(data.recipes);
        setError(null);
        setTotalPages(Math.ceil(data.total / maxLimit));
        setTotalResults(data.total);
        const uniqueCuisines = [...new Set(data.recipes.map(recipe => recipe.cuisine))];
        setCuisines(uniqueCuisines.sort());
      })
      .catch(err => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [searchTerm, page, maxLimit]);

  if (loading) return <p className="text-center py-5">Chargement des recettes...</p>
  if (error) return <p className="text-center py-5 text-danger">Erreur : {error}</p>

  //& Filtre par type de cuisine
  let displayedRecipes = [...recipes];

  if (selectedCuisine !== "all-cuisine") {
    displayedRecipes = displayedRecipes.filter(recipe => recipe.cuisine === selectedCuisine);
  }

  //& Tris de la page
  if (sortOrder === "alphabetical") {
    displayedRecipes.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "best-note") {
    displayedRecipes.sort((a, b) => b.rating - a.rating);
  } else if (sortOrder === "low-cal") {
    displayedRecipes.sort((a, b) => a.caloriesPerServing - b.caloriesPerServing);
  } else if (sortOrder === "faster") {
    displayedRecipes.sort((a, b) => (a.prepTimeMinutes + a.cookTimeMinutes) - (b.prepTimeMinutes + b.cookTimeMinutes));
  }

  //& alerte si la recherche retourne 0 résultats
  if (recipes.length === 0) {
    return (
      <p className="text-center alert alert-warning mt-4">
        Aucune recette ne correspond à votre recherche.
      </p>
    );
  }

  return (
    <section>
      <div className="recipe-container row">
        {
          displayedRecipes.map(recipe => (
            <div key={recipe.id} className="col-lg-4 col-md-6 mb-4">
              <RecipeCard recipe={recipe} />
            </div>
          ))
        }
      </div>
    </section>
  )
}
