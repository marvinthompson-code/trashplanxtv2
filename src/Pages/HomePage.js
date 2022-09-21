import React from "react";
import ProductList from "../Components/ProductList";

const HomePage = ({ products, onAddToCart }) => {
  return (
    <>
      <ProductList products={products} onAddToCart={onAddToCart} />
    </>
  );
};

export default HomePage;
