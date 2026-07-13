import React, {useState} from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [user, setUser] = useState({
    name: "Akshat",
  })

  
  let handleClick = ()=>{
    // user.name = "Agrawal"
    setUser({name: "Agrawal"})
  }
  
  console.log(user);

  return (
    <div>
      <h1 className='bg-amber-600'>heyy</h1>
      <h3>Count id : {count}</h3>
      <h1 className='text-amber-900 font-bold'>Name is-{user.name}</h1>
      <div className='flex gap-4'>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={handleClick}>Change Name</button>
      </div>  
    </div>
  )
}

export default App
