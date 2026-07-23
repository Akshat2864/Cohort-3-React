import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { Navigate } from "react-router";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

const Navbar = () => {

  const navigate = useNavigate();
  const {setLoggedInUsers}= useContext(AuthContext);


  const handleLogout = ()=>{
    setLoggedInUsers(null);
    localStorage.removeItem("loggedInUsers");
    navigate("/");
    toast.warn("Logged Out Successfully")

  }


  return (
    <div className="border-r border-gray-500 flex flex-col justify-between p-3 ">
      <div className="flex flex-col gap-10">
        <h1 className="text-3xl font-semibold">Logo</h1>
        <div className="flex flex-col gap-6 ml-3 ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-xl text-blue-600 border-b border-gray-500"
                : "border-b border-gray-500"
            }
            to={"/main"}
            end
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-xl text-blue-600 border-b border-gray-500"
                : "border-b border-gray-500"
            }
            to={"/main/users"}
          >
            Users
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "font-bold text-xl text-blue-600 border-b border-gray-500"
                : "border-b border-gray-500"
            }
            to={"/main/products"}
          >
            Products
          </NavLink>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="p-4 bg-red-600 text-white rounded cursor-pointer"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Navbar;
