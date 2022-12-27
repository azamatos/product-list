import { FC } from "react";
import { ProductItem } from "./ProductItem";

// project imports
import { useProductQuery } from "services/queryHooks/useProductQuery";
import { Advertisement } from "../Advertisement";

// styles
import styles from "styles/ProductList.module.scss";


interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  useProductQuery(products);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <Advertisement />
        {products?.map((product) => (
          <ProductItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
