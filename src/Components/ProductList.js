import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddToCart }) => {
  const currentProductList = products.map((product) => (
    <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} />
  ));
  return (
    <div className="products" id="products">
      {currentProductList}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
  onAddToCart: PropTypes.func,
};

export default ProductList;

