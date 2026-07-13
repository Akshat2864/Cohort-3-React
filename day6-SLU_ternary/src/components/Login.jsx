import React from 'react'

const Login = ({ setToggle }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => setToggle((prev)=>!prev)}>toggle</button>
    </div>
  )
}

export default Login
