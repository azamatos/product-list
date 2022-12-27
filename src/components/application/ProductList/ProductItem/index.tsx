import { FC, useState } from "react";

// project imports
import { RectangleIcon } from "components/ui-components/RectangleIcon";
import { ImageComponent } from "components/templates/ImageComponent";
import { getWordCompletion } from "utils/getWordCompletion";
import { CategoryBlock } from "./CategoryBlock";
import { ButtonBlock } from "./ButtonBlock";

// styles
import styles from "styles/Product.module.scss";
import { HitIconComponent } from "components/templates/HitIconComponent";

interface ProductProps {
  item: Product;
}

export const ProductItem: FC<ProductProps> = ({ item }) => {
  const [itemCount, setItemCount] = useState(1);

  const price = Math.floor(item.price * 70);
  const stars = Array(5).fill(0);
  const itemRating = Math.floor(item.rating.rate);
  const isHit = item.rating.count > 300;
  const review = getWordCompletion(item.rating.count, [
    "отзыв",
    "отзыва",
    "отзывов",
  ]);

  const addItemCount = () => {
    setItemCount((prevState) => {
      return prevState + 1;
    });
  };

  const subItemCount = () => {
    setItemCount((prevState) => {
      if (prevState !== 1) {
        return prevState - 1;
      }
      return prevState;
    });
  };

  return (
    <div className={styles.product}>
      <ImageComponent
        width={220}
        height={220}
        alt="Product Image"
        src={item.image}
      />
      {isHit && (
        <div className={styles.hitIconBlock}>
          <HitIconComponent
            backgroundColor="#F23C30"
            title="Хит"
            titleStyle={styles.hitIconText}
            strokeColor="#fff"
          />
        </div>
      )}
      <div className={styles.titleBlock}>
        <CategoryBlock
          itemRating={itemRating}
          stars={stars}
          review={`${item.rating.count} ${review}`}
          category={item.category}
        />
        <span className={styles.mainTitle}>{item.title}</span>
        <span className={styles.priceTitle}>
          {`${price} ₽ `}
          <span className={styles.categoryTitle}>/шт.</span>
        </span>
      </div>
      <ButtonBlock
        itemId={item.id}
        itemCount={itemCount}
        addItemCount={addItemCount}
        subItemCount={subItemCount}
      />
    </div>
  );
};
