/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { RecipeInfo } from '../components/RecipeInfo';
import { SideBAr } from '../components/Sidebar';
import classes from '../styles/RecipePage.module.css';
import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../api/recipesApi';
import { Recipe } from '../types/Recipe';

export const RecipePage = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRecipe = async () => {
      if (!id) {
        setError('Recipe ID is missing');
        setLoading(false);
        return;
      }
  
      try {
        const data = await fetchRecipeById(id);
        setRecipe(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

  getRecipe();
  }, [id]);

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
      <RecipeInfo recipe={recipe} />
      <SideBAr recipe={recipe}/>
    </div>
  )
}