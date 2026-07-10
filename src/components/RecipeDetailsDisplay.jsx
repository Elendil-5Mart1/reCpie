import './RecipeDetailsDisplay.css';

export const RecipeDetailsDisplay = ({ recipe, creator, ingredients, instructions, addFavorite, removeFavorite, handleReturn, inBookmarks }) => {

  const handleClickAdd = () => {
    addFavorite(recipe);
  }

  const handleClickRemove = () => {
    removeFavorite(recipe);
  }

  return (
    <section>
      <div className="recipe-container text-dark wrap">
        <button className="back2list-btn btn my-3" onClick={handleReturn}>Retour aux recettes</button>

        <div className="recipe-header mb-3">
          <img src={recipe.image} alt={`Image de la recette ${recipe.name}`} />
          <div className="recipe-content">

            
              <div className="recipe-title-container m-3">
                <p className="recipe-title card-title fs-3 text-weight-bold">{recipe.name}</p>
                <div>
                  <span className="badge bg-warning text-dark text-center mx-5 h-50"><p>★{recipe.rating}</p></span>
                </div>
              </div>
            

            <span className="m-3">{recipe.cuisine} - {recipe.difficulty}</span>

            <div className="cook-details text-center m-3">
              <div className="cook-detail m-1"><p>{recipe.prepTimeMinutes} min</p><p>Prép.</p></div>
              <div className="cook-detail m-1"><p>{recipe.cookTimeMinutes} min</p><p>Cuisson</p></div>
              <div className="cook-detail m-1"><p>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</p><p>Total</p></div>
              <div className="cook-detail m-1"><p>{recipe.servings}</p><p>Portions</p></div>
            </div>

            <p className="m-3"><strong>kCal par portion :</strong> {recipe.caloriesPerServing}</p>

            <p className="m-3"><strong>Nombre d'avis :</strong> {recipe.reviewCount}</p>

            <div className="m-3">
              <span className="badge bg-secondary p-1 me-2">{recipe.tags?.[0]}</span>
              <span className="badge bg-secondary p-1 me-2">{recipe.cuisine}</span>
              <span className="badge bg-info text-dark p-1 me-2">{recipe.mealType?.[0]}</span>
            </div>

            <div className="mb-3">
              {
                inBookmarks
                  ? <button className="btn-del btn btn-sm border-danger mx-3 p-2" onClick={handleClickRemove}>Retirer des favoris</button>
                  : <button className="btn-add btn btn-sm border-success mx-3 p-2" onClick={handleClickAdd}>Ajouter aux favoris</button>
              }
            </div>
          </div>
        </div>

        <div className="recipe-creators p-3  mb-3">
          {creator && (
            <div>
              <h3>Créateur de la recette</h3>
              <p><strong>Nom Complet :</strong> {creator.firstName} {creator.lastName}</p>
              <p><strong>Courriel :</strong> {creator.email}</p>
            </div>
          )}
        </div>

        <div className="recipe-guide">
          <div className="recipe-ingredients p-3 me-3">
            <h3>Ingrédients</h3>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="recipe-instructions p-3">
            <h3>Instructions</h3>
            <ol>
              {instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <button className="back2list-btn btn my-3" onClick={handleReturn}>Retour aux recettes</button>
      </div>
    </section>
  )
}
