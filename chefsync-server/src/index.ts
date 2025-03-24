import express from 'express';
import cors from 'cors';
import { getRandomRecipes } from './spoonacular';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await getRandomRecipes();
    res.json(recipes);
  } catch (error) {
    res.status(500).send('Error fetching recipes');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
