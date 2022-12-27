import { HitIconComponent } from "components/templates/HitIconComponent";
import { ImageComponent } from "components/templates/ImageComponent";
import { RightArrow } from "components/ui-components/RightArrow";

import styles from "styles/Advertisement.module.scss";

export const Advertisement = () => (
  <div className={styles.mainBlock}>
    <span className={styles.mainTitle}>Всё для комфортной работы</span>
    <RightArrow />
    <div className={styles.grid}>
      <ImageComponent
        width={180}
        height={140}
        src="/image_55.jpg"
        alt="Image 55"
      />
      <div className={styles.secondBlock}>
        <div className={styles.firstdiscountBlock}>
          <HitIconComponent
            backgroundColor="#FFDC38"
            strokeColor="#636b7f"
            title="- 25%"
            titleStyle={styles.firstDiscount}
          />
        </div>
        <span className={styles.blockText}>
          на товары <br /> для кабинета
        </span>
        <span className={styles.selectText}>Выбрать</span>
      </div>
      <div className={styles.thirdBlock}>
        <div className={styles.seconddiscountBlock}>
          <HitIconComponent
            backgroundColor="#FFDC38"
            strokeColor="#e7e9ec"
            title="10%"
            titleStyle={styles.secondDiscount}
          />
        </div>
        <span className={styles.blockText}>
          Скидка <br /> на периферию <br /> для компьютера
        </span>
        <span className={styles.selectText}>Выбрать</span>
      </div>
      <ImageComponent
        width={180}
        height={140}
        src="/image_60.jpg"
        alt="Image 60"
      />
    </div>
  </div>
);
