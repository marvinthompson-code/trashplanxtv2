import ProductList from "../Components/ProductList";

const HomePage = ({ products }) => {
  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
