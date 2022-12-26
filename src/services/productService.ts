import axios from "axios";

export const productService = {
  getAllProducts() {
    return axios
      .get<Product[]>(`https://fakestoreapi.com/products`, {
        headers: {
          "Content-type": "application/json",
          "Accept-Encoding": "gzip,deflate,compress",
        },
      })
      .then((res) => res.data);
  },
};
