import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchProducts } from "./shared/products";
import { fetchCart } from "./shared/cart";
import commerce from "../src/lib/commerce";

// new instance of commerce
// const commerce = new Commerce('{public_api_key}');

// Components
import Nav from "./Components/Nav.js";
import CartNav from "./Components/CartNav";

// Pages
import HomePage from "./Pages/HomePage.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);

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
    const currentProducts = fetchProducts();
    const currentCart = fetchCart();

    setProducts(currentProducts);
    setCart(currentCart);
  }, []);

  return (
    <div className="App">
      <Nav />
      <CartNav
        cart={cart}
        onUpdateCartQty={handleUpdateCartQty}
        onRemoveFromCart={handleRemoveFromCart}
        onEmptyCart={handleEmptyCart}
      />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage products={products} onAddToCart={handleAddToCart} />
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
