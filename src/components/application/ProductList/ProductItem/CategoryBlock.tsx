import { FC } from "react";
import { StarIcon } from "components/ui-components/StarIcon";

// styles
import styles from "styles/Product.module.scss";

interface RateBlockProps {
  stars: number[];
  itemRating: number;
  review: string;
  category: string;
}

export const CategoryBlock: FC<RateBlockProps> = ({
  stars,
  itemRating,
  review,
  category,
}) => (
  <div className={styles.categoryBlock}>
    <span className={styles.categoryTitle}>{category}</span>
    <div className={styles.rateBlock}>
      <div className={styles.starsBlock}>
        {stars?.map((star, index) => (
          <StarIcon
            key={index}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill={index <= itemRating ? "#F26A61" : "#E9E9EB"}
          />
        ))}
      </div>
      <span className={styles.categoryTitle}>{review}</span>
    </div>
  </div>
);
