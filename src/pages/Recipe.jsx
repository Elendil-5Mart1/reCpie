import { RecipeDetails } from "../components/RecipeDetails";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import './Recipe.css';

export const Recipe = () => {

  const recipe = useLoaderData();

  useEffect(() => {
    document.title = `reCpie | ${recipe.name}`;
  }, [recipe.name]);

  return (
    <main className="wrap">
      <RecipeDetails />
    </main>
  )
}

export default Recipe;