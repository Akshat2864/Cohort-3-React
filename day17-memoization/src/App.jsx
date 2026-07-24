import React, {useCallback, useMemo, useState} from 'react'
import Home from './components/Home';
import About from './components/About';

const App = () => {
  console.log("appp.....")


  const [count, setCount] = useState(0)
  const [users, setUsers] = useState({name:"Akshat", id:202});

  let calculation = useMemo(()=>{     //useMemo converts this function into a value
    let sum=0;
    for(let i=0; i<100; i++){
      sum += i;
    }
    return sum;
  }, [])
  

  let greet = useCallback(()=>{
    console.log("hey,..... ")
  }, [])

  return (
    <div>
      mwmoization
      <h2>Count is {count}</h2>
      <h2>Name is {users.name}</h2>
      <h2>My Calculation is {calculation}</h2>
      <button onClick={()=>setUsers({...users, name:"ranjeet"})}>Change Name</button>
      <button onClick={()=>setCount(count+1)}>Increamnet</button>
      <Home greet={greet}/>
      <About greet={greet}/>
    </div>
  )
}

export default App
