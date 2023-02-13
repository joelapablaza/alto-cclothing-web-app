import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
});

export const CartPrivider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  //   const [items, setItems] = useState([]);

  const value = {
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
