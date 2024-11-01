import React from 'react'
import Recipe from './Recipe'
const RecipeList = ({recipeList}) => {
  return (

   <>{
        recipeList.map(recipe => {
            return (
                <Recipe key = {recipe.id} {...recipe}/>
            )
        })
   }
   <button > Add Recipe</button>
   </>
  )
}

export default RecipeList