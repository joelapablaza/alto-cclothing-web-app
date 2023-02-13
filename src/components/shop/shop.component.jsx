import { useContext } from "react";
import { ProductContext } from "../../contexts/products.context";
import ProductCard from "../product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { productsData } = useContext(ProductContext);

  return (
    <div className="products-container">
      {productsData.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
