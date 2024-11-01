import React from 'react'
import Ingrident from './Ingrident'
const IngridentsList = ({ingridents}) => {
  
  return (
    <div>{
    ingridents.map(ingrident =>{
        return (
            <Ingrident key = {ingrident.id} {...ingrident}/>
        )
    })
    }
    </div>
  )
}

export default IngridentsList