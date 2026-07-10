import { useNavigate } from 'react-router-dom';
import { useBookmarks } from '../stores/bookmarks.js';
import './Favorite.css'

export const Favorite = ({ favorite }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/recipe/${favorite.id}`);
  }

  const { removeFavorite } = useBookmarks();

  const handleClick = () => {
    removeFavorite(favorite);
  }

  return (
    <div className="favorite-container mb-3">

      <div className="favorite-image">
        <img src={favorite.image} alt={favorite.name} className="favorite-image card-img-top" />
      </div>

      <div className="favorite-body m-3">

        <div className="favorite-title">
          <p className="fs-5">{favorite.name}</p>
          <div>
            <span className="cuisine-badge badge border border-dark text-dark m-3">{favorite.cuisine}</span>
          </div>
        </div>

        <div>
          <p>{favorite.difficulty} - {favorite.prepTimeMinutes + favorite.cookTimeMinutes} min - {favorite.caloriesPerServing}kcal/portion</p>
        </div>

      </div>

      <div className="m-3">
        <span className="badge bg-warning text-dark me-1">★ {favorite.rating}</span>
        <span className="badge bg-secondary text-white me-1">{favorite.reviewCount} avis</span>
        <span className="badge bg-info text-dark me-1">{favorite.servings} portions</span>
      </div>


      <div className="favorite-footer me-3">
        <button className="btn btn-sm btn-primary p-2 mb-3 ms-3" onClick={handleViewDetails}>Voir détails</button>
        <button className="btn-del btn btn-sm border-danger p-2 mb-3 ms-3" onClick={handleClick}>Retirer des favoris</button>
      </div>
    </div>
  );
}