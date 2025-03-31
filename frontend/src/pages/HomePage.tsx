/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { fetchRecipes, fetchRecipesByCategory, fetchRecipesByCountry, fetchRecipesByIngredient } from '../api/recipesApi';
import { RecipeCard } from '../components/RecipeCard';
import { Recipe } from '../types/Recipe';
import classes from '../styles/HomePage.module.css';
import { useParams } from 'react-router-dom';
import { getTitle } from '../utils/getTitleUtils';

export const HomePage: React.FC = () => {
  const { country, ingredient, category } = useParams();
  const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (country) {
          data = await fetchRecipesByCountry(country);
        } else if (ingredient) {
          data = await fetchRecipesByIngredient(ingredient);
        } else if (category ){
          data = await fetchRecipesByCategory(category)
        } else {
          data = await fetchRecipes();
        }
        setAllRecipes(data.meals || []);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllRecipes();
  }, [country, ingredient]);

    const title = getTitle(country, ingredient, category);

  if (loading) {
    return (
      <div className={classes.msg}>
        <h1>Recipes are getting loading, Please Wait!</h1>
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
      <div>
        <p className={classes.title}>{title}</p>
      </div>
      <div className={classes.cards}>
        {allRecipes.map(recipe => (
          <RecipeCard 
            recipe={recipe} 
            key={recipe.idMeal}
          />
        ))}
      </div>
    </div>
  )
}