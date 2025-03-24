import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        setError('Error fetching recipes');
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Recipes</h1>
        {error && <p>{error}</p>}
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
