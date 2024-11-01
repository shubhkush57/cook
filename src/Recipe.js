import React from 'react'

const Recipe = (props) => {
    const {
        id,
        name,
        servings,
        cookTime,
        instructions
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
    </div>
  )
}

export default Recipe