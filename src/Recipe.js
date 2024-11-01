import React from 'react'
import IngridentsList from './IngridentsList';
const Recipe = (props) => {
    const {
        id,
        name,
        servings,
        cookTime,
        instructions,
        ingridents,
    } = props;
  return (
    <div>
        <div>
            <h3>{name}</h3>
            <div>
                <button >Edit</button>
                <button>Delete</button>
            </div>
        </div>
        <div>
            <span>Cook Time: </span>
            <span>{cookTime}</span>
        </div>
        <div>
            <span>Servings: </span>
            <span>{servings}</span>
        </div>
        <div>
            <div>Instructions:</div>
            {instructions}
        </div>
        <div>
            <div>Ingridents:</div>
            {<IngridentsList ingridents={ingridents}/>}
        </div>
    </div>
  )
}

export default Recipe