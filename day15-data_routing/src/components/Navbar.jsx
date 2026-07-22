import React from 'react'
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/services"}>Services</NavLink>

      {/* <span>Home</span>
      <span>About</span>  */}
    </div>
  )
}

export default Navbar
