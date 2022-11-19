import React from "react";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer"

const HomePage = ({ products, onAddToCart }) => {
  return (
    <>
      <ProductList products={products} onAddToCart={onAddToCart} />
      <Footer />
    </>
  );
};

export default HomePage;
