import { FC } from "react";

// project imrpots
import { ButtonComponent } from "components/templates/ButtonComponent";
import { HeartIcon } from "components/ui-components/HeartIcon";
import { MinusIcon } from "components/ui-components/MinusIcon";
import { PlusIcon } from "components/ui-components/PlusIcon";

// redux
import {
  addBucketProduct,
  addFavouriteProduct,
  removeFavouriteProduct,
} from "store/slices/products";
import { dispatch, useSelector } from "store";

// styles
import styles from "styles/Product.module.scss";

interface ButtonBlockProps {
  itemCount: number;
  subItemCount: () => void;
  addItemCount: () => void;
  itemId: number;
}

export const ButtonBlock: FC<ButtonBlockProps> = ({
  subItemCount,
  itemCount,
  addItemCount,
  itemId,
}) => {
  const { bucketProducts, favouriteProducts } = useSelector(
    (state) => state.products
  );

  const addItemToBucket = () => {
    dispatch(addBucketProduct({ id: itemId, count: itemCount }));
  };

  const toggleFavouriteProduct = () => {
    if (favouriteProducts[itemId]) {
      dispatch(removeFavouriteProduct({ id: itemId }));
    } else {
      dispatch(addFavouriteProduct({ id: itemId, value: true }));
    }
  };

  const leftPosition = String(itemCount).length;

  const inBucket = bucketProducts[itemId];
  const addToBucketButtonWidth = inBucket ? 175 : 100;
  const addToBucketButtonBackground = inBucket
    ? "#00B177"
    : "#4056a1";
  const addToBucketButtonTitle = inBucket ? "В корзине" :" В корзину"

  return (
    <div className={styles.buttonBlock}>
      <div className={styles.bucketBlock}>
        <ButtonComponent
          className={styles.addToBucketButton}
          onClick={addItemToBucket}
          style={{
            width: addToBucketButtonWidth,
            backgroundColor: addToBucketButtonBackground,
          }}
        >
         {addToBucketButtonTitle}
        </ButtonComponent>
        {!bucketProducts[itemId] && (
          <div
            className={styles.itemCountBlock}
            style={{ left: 65 + leftPosition * 5 }}
          >
            <ButtonComponent
              className={styles.itemChangeButton}
              onClick={subItemCount}
            >
              <MinusIcon />
            </ButtonComponent>
            <span>{itemCount}</span>
            <ButtonComponent
              className={styles.itemChangeButton}
              onClick={addItemCount}
            >
              <PlusIcon />
            </ButtonComponent>
          </div>
        )}
      </div>
      <ButtonComponent
        onClick={toggleFavouriteProduct}
        className={styles.heartButton}
        style={{
          borderColor: favouriteProducts[itemId] ? "#FF0000" : "#F5F5F7",
        }}
      >
        <HeartIcon
          width={18}
          height={16}
          viewBox="0 0 18 16"
          stroke={favouriteProducts[itemId] ? "#FF0000" : "#999999"}
        />
      </ButtonComponent>
    </div>
  );
};
