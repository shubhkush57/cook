import React, {useState}from 'react'


function App() {
  const [count,setCount] = useState(0);
  return (
    <>
    <button onClick={()=>setCount(Math.max(0,count-1))}>-</button>
    <span>{count}</span>
    <button onClick={()=>setCount(count+1)}>+</button>
    </>
  );
}

export default App;
