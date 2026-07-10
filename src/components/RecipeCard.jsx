import { useNavigate } from 'react-router-dom';
import { useBookmarks } from '../stores/bookmarks.js';
import './RecipeCard.css'

export const RecipeCard = ({ recipe }) => {

  const { bookmarks, addFavorite, removeFavorite } = useBookmarks();
  const navigate = useNavigate();
  const inBookmarks = bookmarks.some(favorite => favorite.id === recipe.id);

  const handleViewDetails = () => {
    navigate(`/recipe/${recipe.id}`);
  }

  const handleClickAdd = () => {
    addFavorite(recipe);
  }

  const handleClickRemove = () => {
    removeFavorite(recipe);
  }

  return (
    <div className="recipe-card card h-100">
      <img src={recipe.image} alt={recipe.name} className="recipe-image card-img-top" />
      <div className="card-body">
        <div className="card-body-container">
          <p className="recipe-title card-title fs-5 text-weight-bold">{recipe.name}</p>
          <div>
            <span className="cuisine-badge badge border border-dark text-dark">{recipe.cuisine}</span>
          </div>
        </div>
        
        <div>
          <p>{recipe.difficulty} - {recipe.prepTimeMinutes + recipe.cookTimeMinutes} min - {recipe.caloriesPerServing}kcal/portion</p>
        </div>

        <div>
          <span className="badge bg-warning text-dark me-1">★ {recipe.rating}</span> 
          <span className="badge bg-secondary text-white me-1">{recipe.reviewCount} avis</span>
          <span className="badge bg-info text-dark me-1">{recipe.servings} portions</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="btn btn-sm btn-primary w-100 mb-2 p-2" onClick={handleViewDetails}>Voir détails</button>
        {
          inBookmarks 
          ? <button className="btn-del btn btn-sm border-danger w-100 p-2" onClick={handleClickRemove}>Retirer des favoris</button>
          : <button className="btn-add btn btn-sm border-success w-100 p-2" onClick={handleClickAdd}>Ajouter aux favoris</button>
        }
      </div>
    </div>
  );
}