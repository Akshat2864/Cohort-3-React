import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-200 rounded-lg">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlGLMfv2ep5HF2FW00S0O9mYA5uuqMd7lDVfXRMWzCw&s"
          alt="Logo"
          className="h-12 rounded-full"
        />
      </div>
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
      </div>
      <button onClick={() => setToggle((prev) => !prev)} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Create User
      </button>
    </div>
  );
};

export default Navbar;
