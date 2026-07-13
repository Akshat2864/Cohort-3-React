import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyShop);
  return (
    <div className="flex text-white rounded items-center justify-between bg-gray-600 p-5 ">
      <div>LOGO</div>
      <div className="flex gap-10 text-xl ">
        <p onClick={() => setIsCartOpen(false)} className="cursor-pointer">
          Home
        </p>
        <p onClick={() => setIsCartOpen(true)} className="cursor-pointer">
          Cart
        </p>
      </div>
      <button>Login</button>
    </div>
  );
};

export default Navbar;
