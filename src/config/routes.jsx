import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoaderRecipe } from "./loaders.jsx";
import { Layout } from "../pages/layout/Layout.jsx";
import { Home } from "../pages/Home.jsx";
import { Bookmarks } from "../pages/Bookmarks.jsx";
import { Error404 } from "../pages/Error404.jsx";

const Recipe = lazy(() => import("../pages/Recipe.jsx"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: () => <p className="text-center">Chargement...</p>,
    children: [
      { index: true, element: <Home /> },
      
      { path: "bookmarks", element: <Bookmarks />},
        
      {
        path: "recipe/:id", 
        element:
          <Suspense fallback={<p className="text-center">Chargement de la page ...</p>}>
            <Recipe />
          </Suspense>,
        loader: LoaderRecipe
      },

      { path: "*", element: <Error404 /> }
    ]
  }
]);