import { createContext, useState } from "react";

//setup our blank store----------
export const MyStore = createContext();

//make a provider of our store who handdles data and serves to the customers--------
export const ContextProvider = ({ children }) => {
  const [centralVal, setCentralVal] = useState("Mai Context se hu");
  const [cartItems, setCartItems] = useState([]);

  return (
    <MyStore.Provider value={{ centralVal, cartItems, setCartItems }}>
      {children}
    </MyStore.Provider>
  );
};
