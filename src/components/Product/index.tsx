import Image from "next/image";
import { FC } from "react";
import styles from "../../styles/Product.module.scss";
import { getWordCompletion } from "../../utils/getWordCompletion";
import starImage from "../../../public/star.svg";

interface ProductProps {
  item: Product;
}

export const ProducItem: FC<ProductProps> = ({ item }) => {
  const price = Math.floor(item.price * 70);
  const stars = Array(5).fill(0);
  const itemRate = Math.floor(item.rating.rate);
  const review = getWordCompletion(item.rating.count, [
    "отзыв",
    "отзыва",
    "отзывов",
  ]);

  return (
    <div className={styles.product}>
      <Image width={220} height={220} src={item.image} alt="Product image" />
      <div className={styles.titleBlock}>
        <div className={styles.categoryBlock}>
          <span className={styles.categoryTitle}>{item.category}</span>
          <div className={styles.rateBlock}>
            <div className={styles.starsBlock}>
              {stars?.map((star, index) => (
                <svg
                  key={index}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7 0L8.61892 5.12352L14 5.08673L9.62155 8.21419L11.3233 13.3101L7 10.1183L2.67674 13.3101L4.37845 8.21419L0 5.08673L5.38108 5.12352L7 0Z"
                    fill={index <= itemRate ? "#F26A61" : "#E9E9EB"}
                  />
                </svg>
              ))}
            </div>
            <span
              className={styles.categoryTitle}
            >{`${item.rating.count} ${review}`}</span>
          </div>
        </div>
        <span className={styles.mainTitle}>{item.title}</span>
        <span className={styles.priceTitle}>
          {`${price} ₽ `}
          <span className={styles.categoryTitle}>/шт.</span>
        </span>
      </div>
    </div>
  );
};
