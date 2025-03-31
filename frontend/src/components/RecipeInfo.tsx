import React from 'react';
import { Link } from 'react-router-dom';
import { Recipe } from '../types/Recipe';
import classes from '../styles/RecipeInfo.module.css';
import { getIngredients } from '../utils/getIgredientsUtils';

type Props = {
  recipe: Recipe | null
}

export const RecipeInfo:React.FC<Props> = ({ recipe } ) => {
  const ingredients = recipe ? getIngredients(recipe) : [];

  return (
    <div className={classes.layout}>
      <div className={classes.top}>
      <img className={classes.bigImage} src={recipe?.strMealThumb} alt='photo' />
      <div className={classes.info_block}>
        <h2 className={classes.name}>{recipe?.strMeal}</h2>
        <Link to={`/country/${recipe?.strArea}`} className={classes.text}>
          <p className={classes.country} >{recipe?.strArea}</p>
        </Link>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              <Link to={`/ingredient/${ingredient}`} className={classes.text}>
                {ingredient}
              </Link>
            </li>
          ))}
      </ul>
      </div>
      </div>
      <p className={classes.instructions} >{recipe?.strInstructions}</p>
    </div>
  )
}