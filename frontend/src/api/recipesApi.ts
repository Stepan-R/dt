import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRecipes = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};

export const fetchRecipeById = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
};

export const fetchRecipesByCountry = async (country: string) => {
  const response = await fetch(`${API_URL}?country=${country}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return await response.json();
};

export const fetchRecipesByIngredient = async (ingredient: string) => {
  const response = await fetch(`${API_URL}?ingredient=${ingredient}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return await response.json();
};

export const fetchRecipesByCategory = async (category: string) => {
  const response = await fetch(`${API_URL}?category=${category}`);
  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }
  return await response.json();
};