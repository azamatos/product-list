import { GetServerSidePropsContext } from "next";
import { ProductList } from "components/application/ProductList";
import { productService } from "services/productService";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const products = await productService.getAllProducts();

  return {
    props: {
      products,
    },
  };
}

export default ProductList;
