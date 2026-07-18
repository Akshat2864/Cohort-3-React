import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-gray-300">
      <nav className="flex justify-between items-center p-4">
        <h1 className="text-2xl">Logo</h1>
        <div className="flex items-center justify-center gap-5">
          <NavLink className="font-bold" to={"/"}>
            Home
          </NavLink>
          <NavLink className="font-bold" to={"/about"}>
            About
          </NavLink>
          <NavLink className="font-bold" to={"/products"}>
            Product
          </NavLink>
        </div>
        <button>LOGIN</button>
      </nav>
    </div>
  );
};

export default Navbar;
