import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { fetchProducts } from "./shared/products";
import { fetchCart } from "./shared/cart";
import commerce from "../src/lib/commerce";

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

  useEffect(() => {
    const currentProducts = fetchProducts();
    const currentCart = fetchCart();

    setProducts(currentProducts);
    setCart(currentCart);
  }, []);

  return (
    <div className="App">
      <Nav />
      <CartNav cart={cart}/>
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
