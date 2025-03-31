import React from 'react';
import { Recipe } from '../types/Recipe';
import classes from '../styles/RecipeCard.module.css';
import { Link } from 'react-router-dom';

type Props = {
  recipe: Recipe
};

export const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe?.idMeal}`} className={classes.card}>
      <img className={classes.image} src={recipe.strMealThumb} alt='photo' />
      <h2 className={classes.title}>{recipe.strMeal}</h2>
    </Link>
  )
}