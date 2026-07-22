import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";


const Login = () => {

    const {registeredUsers, loggedInUsers, setLoggedInUsers} = useContext(AuthContext)

    let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let formSubmit = (data) => {

    let user = registeredUsers.find((val)=>{
        return val.email === data.email && val.password === data.password;
    })

    if(!user){
        toast.error("user not found or invalid credentials")
        reset();
        return;
    }

    setLoggedInUsers(user);
    localStorage.setItem("loggedInUsers", JSON.stringify("user") )
    toast.success("Logged In Successfully")


    navigate("/main")
    
    
    reset();
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              {...register("password", {
                required: "password is required",
                minLength: { value: 6, message: "min 6 length" },
                maxLength: { value: 12, message: "max 12 length" },
              })}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <div className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            type="button"
            className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
