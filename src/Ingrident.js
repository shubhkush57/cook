import React from 'react'

const Ingrident = (props) => {
    const {name,amount} = props;
  return (
    <div>
      <span>{name }: </span>
      <span>{amount}</span>
    </div>
  )
}

export default Ingrident