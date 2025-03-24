import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const SPOONACULAR_API_KEY = process.env.SPOONACULAR_API_KEY;
const SPOONACULAR_BASE_URL = 'https://api.spoonacular.com/recipes/random';

export const getRandomRecipes = async (number: number = 5) => {
  try {
    const response = await axios.get(SPOONACULAR_BASE_URL, {
      params: {
        apiKey: SPOONACULAR_API_KEY,
        number: number,
      },
    });
    return response.data.recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};
