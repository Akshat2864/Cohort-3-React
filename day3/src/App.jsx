import React, { useState } from 'react'

const App = () => {
 

  let [count, setCount] = useState(0);    //use state ek 2 element ka array hai jisme pehli value state hai, aur doosri setState, state jo initial value hoti, aur useState ek function hota jo update and rerender krta





  return (
    <div>
      <h1>Count is - {count} </h1>
      <button onClick={()=>{
        setCount(count+1)   ///set count update krr rha hai aur parent ko re-render kr rha
      }}>Increment</button>
    </div>
  )
}

export default App
