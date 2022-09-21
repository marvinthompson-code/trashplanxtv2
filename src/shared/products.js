import commerce from "../lib/commerce";

export const fetchProducts = () => {
  commerce.products
    .list()
    .then((products) => {
      const { data } = products;
      return data;
    })
    .catch((error) => {
      console.log("There was an error fetching the products", error);
    });
};
