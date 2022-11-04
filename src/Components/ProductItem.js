import React, { useState } from "react";
import PropTypes from "prop-types";
import { stripHtml } from "string-strip-html";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const productClassNames = {
  productName: "product__name",
  productCard: "product__card",
  productImage: "product__image",
  productInfo: "product__info",
  productDescription: "product__description",
  productDetails: "product__details",
  productPrice: "product__price",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductItem = ({ product, onAddToCart }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <container className={"product__imageContainer"}>
        <img
          className={productImage}
          src={product.image?.url}
          alt={product.name}
        />
      </container>
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
      <container className={"product__btnContainer"}>
        <button
          name="Add to cart"
          className="product__btn"
          onClick={handleAddToCart}
        >
          Quick add
        </button>
        <button
          name="View product"
          className="product__view"
          onClick={handleOpen}
        >
          View
        </button>
      </container>

      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h4 className={productName}>{product.name}</h4>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <container>
                <container className={"product__modalImageContainer"}>
                  <img
                    className="product__modalImage"
                    src={product.image?.url}
                    alt={product.name}
                    style={{
                      width: "100%",
                      marginBottom: "0.5rem"
                    }}
                  />
                </container>
                <div>
                  <div className={productInfo}>
                    <p className={productDescription}>
                      {/* product description stripped of html tags */}
                      {result}
                    </p>
                    <div className={productDetails}>
                      <p className={productPrice}>
                        {product.price.formatted_with_symbol}
                      </p>
                    </div>
                  </div>
                  <button
                    name="Add to cart"
                    className="product__btn"
                    onClick={handleAddToCart}
                    style={{
                      background: "black",
                      color: "white",
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      padding: "0.5rem 1rem",
                      transition: "all 0.3s ease-in-out",
                      marginTop: "1rem",
                      border: "none",
                      marginBottom: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    Quick add
                  </button>
                </div>
              </container>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object,
  handleAddToCart: PropTypes.func,
  onAddToCart: () => {},
};

export default ProductItem;
