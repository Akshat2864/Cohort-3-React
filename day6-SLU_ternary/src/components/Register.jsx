import React from 'react'

const Register = ({ setToggle }) => {
  return (
    <div>
      <h1>Register Page</h1>
      <button onClick = {()=>{setToggle((prev)=>!prev)}}>toggle</button>
      

    </div>
  )
}

export default Register
