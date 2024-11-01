import React, {useState}from 'react'
import RecipeList from './RecipeList';
function App() {
  const sampleRecipeList = [
    {
      id:1,
      name: "Plain Chicken",
      servings: 3,
      cookTime: '1:45',
      instructions: "1.Put Salt on chicken.\n 2. Put Chicken in oven.\n 3. Eat Chicken."
    },
    {
      id:2,
      name: "Plain Pork",
      servings: 2,
      cookTime: '3:000',
      instructions: "1.Put Salt on pork.\n 2. Put Pork in oven.\n 3. Eat Pork."
    }
  ]
  return (
    <div>
      <RecipeList recipeList = {sampleRecipeList}/>
    </div>
  );
}

export default App;
