import { useQuery } from "react-query";

// project imports
import { productService } from "../productService";

// redux
import { setProducts } from "store/slices/products";
import { dispatch } from "store";

export const useProductQuery = (initialData: Product[] | undefined) => {
  const { isLoading, data, isSuccess } = useQuery<Product[]>(
    "products",
    () => productService.getAllProducts(),
    {
      initialData,
      staleTime: 0,
      suspense: false,
      onSuccess(data: Product[]) {
        if (data.length) {
          dispatch(setProducts(data))
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  return {
    isLoading,
    productData: data,
    isSuccess,
  };
};
