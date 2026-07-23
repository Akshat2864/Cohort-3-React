import { createContext } from "react";
import { useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers")) || []);
  const [loggedInUsers, setLoggedInUsers] = useState(JSON.parse(localStorage.getItem("loggedInUsers")));

  return (
    <AuthContext.Provider
      value={{
        loggedInUsers,
        setLoggedInUsers,
        registeredUsers,
        setRegisteredUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
