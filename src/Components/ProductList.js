import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart }) => {
  const currentProductList = products.map((product) => (
    <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
  ));
  return (
    <>
      <div className="header__container">
        <h1 className="productHeader">ALL PRODUCTS</h1>
      </div>
      <div className={"products"} id={"products"}>
        {currentProductList}
      </div>
    </>
  );
};

export default ProductList;

ProductList.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func,
};
