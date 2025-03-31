import { Recipe } from "../types/Recipe";

export const getIngredients = (recipe: Recipe) => {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}` as keyof Recipe;
      const ingredient = recipe[ingredientKey];
      if (ingredient) {
        ingredients.push(ingredient);
      }
    }
    return ingredients;
  };