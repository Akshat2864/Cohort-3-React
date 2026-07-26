import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";

export const useAuth = () => {

    const {registeredUsers, loggedInUsers, setLoggedInUsers, setRegisteredUsers} = useContext(AuthContext)


  let navigate = useNavigate();

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //login
  let loginFormSubmit = (data) => {
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("user not found or invalid credentials");
      reset();
      return;
    }

    setLoggedInUsers(user);
    localStorage.setItem("loggedInUsers", JSON.stringify(user));
    toast.success("Logged In Successfully");

    navigate("/main");

    reset();
  };

  //register
  let registerFormSubmit = (data) => {
    let arr = [...registeredUsers, data];
    setRegisteredUsers(arr);
    toast.success("User Registered Successfully");
    setLoggedInUsers(data);
    localStorage.setItem("loggedInUsers", JSON.stringify(data));

    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/main");

    reset();
  };

  return {
    navigate,
    register,
    handleSubmit,
    reset,
    errors,
    loginFormSubmit,
    registerFormSubmit,
  };
};
