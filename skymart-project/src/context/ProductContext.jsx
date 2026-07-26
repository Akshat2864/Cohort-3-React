import { Children, createContext, useState } from "react";

export const Product = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cartItems, setCartItems] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  const incrementQuantity = (id) => {
    setCartItems((prev) => {
      return prev.map((val) => {
        return val.id === id ? { ...val, quantity: val.quantity + 1 } : val;
      });
    });
  };
  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(item.quantity - 1, 1),
              }
            : item
        )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <Product.Provider
      value={{
        products,
        setProducts,
        cartItems,
        setCartItems,
        isInCart,
        setIsInCart,
        isLoading,
        setIsLoading,
        incrementQuantity,
        decrementQuantity,
        removeFromCart,
        total,
      }}
    >
      {children}
    </Product.Provider>
  );
};
