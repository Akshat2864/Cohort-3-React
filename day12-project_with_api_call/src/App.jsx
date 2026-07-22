import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CartScreen from "./pages/CartScreen";
import { MyEComm } from "./context/MyEComm";

const App = () => {

  let {isCartOpen, cartItems} = useContext(MyEComm)

  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    try {
      // let res = await fetch("https://fakestoreapi.com/products");
      // let products = await res.json();

      let res = await axios.get("https://fakestoreapi.com/products");
      setProductData(res.data);

      console.log(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <div className="h-screen p-2 flex flex-col gap-5">
      <Navbar  />

      {isCartOpen ? (
        <div>
          <CartScreen />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 p-2">
          {productData.map((elem) => {

            let isInCart= cartItems.find((val)=>val.id===elem.id)

            return (
              <ProductCard
                key={elem.id}
                product={elem}
                isInCart={isInCart}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
