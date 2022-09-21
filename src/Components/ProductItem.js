import React from "react";
import PropTypes from "prop-types";
import { stripHtml } from "string-strip-html";

const productClassNames = {
  productName: "product__name",
  productCard: "product__card",
  productImage: "product__image",
  productInfo: "product__info",
  productDescription: "product__description",
  productDetails: "product__details",
  productPrice: "product__price",
};

const ProductItem = ({ product, onAddToCart }) => {
  const { result } = stripHtml(product.description);
  const {
    productCard,
    productImage,
    productInfo,
    productDescription,
    productDetails,
    productPrice,
    productName,
  } = productClassNames;

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  };

  return (
    <div className={productCard}>
      <img
        className={productImage}
        src={product.image?.url}
        alt={product.name}
      />
      <div className={productInfo}>
        <h4 className={productName}>{product.name}</h4>
        <p className={productDescription}>
          {/* product description stripped of html tags */}
          {result}
        </p>
        <div className={productDetails}>
          <p className={productPrice}>{product.price.formatted_with_symbol}</p>
        </div>
      </div>
      <button
        name="Add to cart"
        className="product__btn"
        onClick={handleAddToCart}
      >
        Quick add
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};

export default ProductItem;
