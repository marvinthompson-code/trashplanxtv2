// import Commerce from "@chec/commerce.js";
// const commerce = process.env.REACT_APP_CHEC_PUBLIC_KEY;

// commerce.products.list().then((product) => console.log(product));

// const ProductList = (categories = [], query = "") => {
//   const hasCategories = categories.length <= 0;
//   const hasQuery = query.length > 0;

//   const products = commerce.products
//     .list({
//       category_slug: hasCategories ? categories : null,
//       query: hasQuery ? query : null,
//       sortOrder: "desc",
//     })
//     .then((product) => console.log(product));
// };

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
