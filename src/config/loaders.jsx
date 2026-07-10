export const LoaderRecipe = ({ params }) => {
  return fetch(`https://dummyjson.com/recipes/${params.id}`)
    .then(res => {
      if (!res.ok) {
        throw new Response("Recette non trouvée ...")
      }
      return res.json()
    })
    .then(recipeData => {
      return fetch(`https://dummyjson.com/users/${recipeData.userId}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Erreur lors du chargement du creator');
          }
          return res.json();
        })
        .then(userData => {
          //& retour d'un objet combiné : recette + créateur
          return { ...recipeData, creator: userData };
        });
    })
    .catch(err => {
      console.error(err);
      throw err;
    });
}