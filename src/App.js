import React, { useEffect, useState } from "react";
import commerce from "../src/lib/commerce";
import "./styles/scss/styles.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faShoppingBag, faTimes } from "@fortawesome/free-solid-svg-icons";

import { Route, Routes } from "react-router-dom";

// Components
import Nav from "./components/Nav.js";
import CartNav from "./components/CartNav";
import Checkout from "./components/Checkout";
import Hero from "./components/Hero";
import Footer from './components/Footer';

// Pages
import HomePage from "./Pages/HomePage.js";

library.add(faShoppingBag, faTimes);

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [merchant, setMerchant] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchMerchantDetails = () => {
    commerce.merchants
      .about()
      .then((merchant) => {
        setMerchant(merchant);
      })
      .catch((error) => {
        console.log("There was an error fetching the merchant details", error);
      });
  };

  const fetchProducts = () => {
    commerce.products
      .list()
      .then((products) => {
        const { data } = products;
        setProducts(data);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  const fetchCart = () => {
    commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  const handleAddToCart = (productId, quantity) => {
    commerce.cart
      .add(productId, quantity)
      .then((item) => {
        setCart(item.cart);
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart", error);
      });
  };

  const handleEmptyCart = () => {
    commerce.cart
      .empty()
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error("There was an error emptying the cart", error);
      });
  };

  const handleRemoveFromCart = (lineItemId) => {
    commerce.cart
      .remove(lineItemId)
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.error(
          "There was an error removing the item from the cart",
          error
        );
      });
  };

  const handleUpdateCartQty = (lineItemId, quantity) => {
    commerce.cart
      .update(lineItemId, { quantity })
      .then((resp) => {
        setCart(resp.cart);
      })
      .catch((error) => {
        console.log("There was an error updating the cart items", error);
      });
  };

  useEffect(() => {
    setLoading(true);
    fetchMerchantDetails();
    fetchProducts();
    fetchCart();
    setLoading(false);
  }, []);

  return (
    <div className="App">
      {loading && <h1>loading...</h1>}
      <Nav />
      <CartNav
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
      />
      <Hero merchant={merchant} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage products={products} onAddToCart={handleAddToCart} />
          }
        ></Route>
        <Route
          exact
          path="/checkout"
          element={<Checkout cart={cart} />}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
