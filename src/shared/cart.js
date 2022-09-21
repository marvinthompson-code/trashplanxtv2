import commerce from "../lib/commerce";

export const fetchCart = () => {
  commerce.cart
    .retrieve()
    .then((cart) => {
      return cart;
    })
    .catch((error) => {
      console.log("There was an error fetching the cart", error);
    });
};
