import { useLoaderData, useNavigate } from "react-router-dom";
import { RecipeDetailsDisplay } from "./RecipeDetailsDisplay";
import { useBookmarks } from '../stores/bookmarks.js';
import './RecipeDetails.css';

export const RecipeDetails = () => {
  const recipe = useLoaderData();
  const navigate = useNavigate();
  const { bookmarks, addFavorite, removeFavorite } = useBookmarks();
  const inBookmarks = bookmarks.some(favorite => favorite.id === recipe.id);

  const handleReturn = () => {
    navigate('/');
  };

  return <RecipeDetailsDisplay
    key={recipe.id}
    recipe={recipe}
    creator={recipe.creator}
    ingredients={recipe.ingredients}
    instructions={recipe.instructions}
    addFavorite={addFavorite}
    removeFavorite={removeFavorite}
    inBookmarks={inBookmarks}
    handleReturn={handleReturn}
  />;
}

export default RecipeDetails;