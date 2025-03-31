/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import classes from '../styles/Sidebar.module.css';
import { Recipe } from "../types/Recipe";
import { fetchRecipesByCategory } from "../api/recipesApi";
import { SideBarCard } from "./SideBarCard";

type Props = {
  recipe: Recipe | null;
}

export const SideBAr:React.FC<Props> = ({ recipe }) => {
  const [recipes, setRecipes] = useState<Recipe[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(recipe);

  useEffect(() => {
    if (!recipe) {
      setLoading(false);
      return;
    }

    const fetchAllRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRecipesByCategory(recipe?.strCategory);
        setRecipes(data.meals || []);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
  };
  
  fetchAllRecipes();
  }, [recipe?.idMeal]);

  if (loading) {
    return (
      <div className={classes.msg}>
        <h1>Loading..</h1>
      </div>
    )
  }
  
  if (error) {
    return (
      <div className={classes.msg}>
        <h1>{error}</h1>
      </div>
    )
  }

  return (
    <div className={classes.layout}>
      {recipes.map(recipe => (
        <div key={recipe.idMeal} className={classes.card_block}>
          <SideBarCard recipe={recipe} />
        </div>
      ))}
    </div>
  )
}