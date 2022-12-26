import { FC } from "react";
import styles from "../../styles/ProductList.module.scss";
import { ProducItem } from "../Product";

interface ProductListProps {
  products: Product[];
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {products?.map((product) => (
          <ProducItem key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
};
