import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);
  const value = { productsData };

  useEffect(() => {
    setProductsData(SHOP_DATA);
  }, []);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
