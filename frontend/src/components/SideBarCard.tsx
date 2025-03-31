import React, { useEffect, useState } from 'react';
import { Recipe } from '../types/Recipe';
import classes from '../styles/RecipeCard.module.css';
import { Link } from 'react-router-dom';
import { fetchRecipeById } from '../api/recipesApi';

type Props = {
  recipe: Recipe | null
};

export const SideBarCard: React.FC<Props> = ({ recipe }) => {
  const [recipeData, setRecipeData] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      if (recipe?.idMeal) {
        try {
        const res = await fetchRecipeById(recipe.idMeal);
        setRecipeData(res);
        } catch (error) {
          console.error(error)
        }
      }
    };

      fetchRecipe();
  }, [recipe?.idMeal]);

  if (!recipeData) {
    return <div>Loading...</div>;
  }

  return (
    <Link to={`/category/${recipeData.strCategory}`} className={classes.card}>
      <img className={classes.image} src={recipe?.strMealThumb} alt='photo' />
      <h2 className={classes.title}>{recipe?.strMeal}</h2>
    </Link>
  )
}