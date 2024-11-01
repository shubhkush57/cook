import React, {useState}from 'react'


function App() {
  const [count,setCount] = useState(0);
  const incremntFun = () =>{
    setCount(count+1);
  }
  const decrementFun = ()=>{
    setCount(Math.max(0,count-1));
  }
  return (
    <>
    <button onClick={decrementFun}>-</button>
    <span>{count}</span>
    <button onClick={incremntFun}>+</button>
    </>
  );
}

export default App;
