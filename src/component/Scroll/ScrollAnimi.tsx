import React, { useEffect, useRef } from "react";
import styles from "./ScrollAnimi.module.scss";
import { TextFlickering } from "../TextFlicker/TextFlickering";

const TwoColumnLayout = () => {
 
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.textContent}>
          <TextFlickering
            words={
              " A* is an early stage venture capital firm that is leading the shift from transactional capital to meaningful parterships."
            }
            removeUnderlineAfterHover={true}
            trigerredAnimation={true}
            textClassName={styles.paragraph}
          />
        </div>
      </div>

      <div className={styles.rightSection}  >
      <div className={styles.logoContainer}>
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/rivian.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/rappi.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/oura.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/list-across.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/unpsun.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/kanarys.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/connect-homes.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/ov-loop.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/pinch.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/hyperframe.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/nexbank.jpg"
          alt=""
          className={styles.logo}
        />
        <img
          src="https://www.ouiwill.com/wp-content/uploads/2022/04/moxion.jpg"
          alt=""
          className={styles.logo}
        />
      </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
