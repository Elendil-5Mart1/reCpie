import { useEffect } from "react";
import { BookmarksList } from "../components/BookmarksList.jsx";
import './Bookmarks.css';

export const Bookmarks = () => {

  useEffect(() => {
    document.title = "reCpie | Favoris";
  }, []);

  return (
    <>
      <BookmarksList />
    </>
  )
}
