import { Favorite } from "./Favorite.jsx";
import { useBookmarks } from "../stores/bookmarks.js";
import './BookmarksList.css';

export const BookmarksList = () => {

  const { bookmarks } = useBookmarks();

  if (bookmarks.length === 0) {
    return (
      <div className="no-content">
        <div className="alert alert-warning text-center p-5">Aucun Favori pour le moment !</div>
      </div>
    );
  }

  return (
    <>
      <section>
        <div className="bookmarks-list">
          <div className="text-center">
            <h1 className="p-5">Liste des favoris ⭐{bookmarks.length}</h1>
          </div>
          <div className="bookmarks-container wrap my-4">
            {
              bookmarks.map(favorite => <Favorite key={favorite.id} favorite={favorite} />)
            }
          </div>
        </div>
      </section>
    </>
  )
}//? j'ai choisi bookmarks au pluriel et favorite au singulier