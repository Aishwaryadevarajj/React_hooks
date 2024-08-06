import React from "react";
import styles from "./letterFly.module.scss";

const LetterFly = ({ count}:any) => {

  const elements = Array.from({ length: count }, (_, index) => index);

  return (
    <div className={styles.container}>
     
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.star}>A</div>
              <div className={styles.letterA}>*</div>
              
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div><div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>
        <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>*</div>
              <div className={styles.star}>A</div>
            </React.Fragment>
          ))}
        </div>   <div className={styles.animationContainer}>
          {elements.map((index) => (
            <React.Fragment key={index}>
              <div className={styles.letterA}>A</div>
              <div className={styles.star}>*</div>
            </React.Fragment>
          ))}
        </div>
      </div>
   
  );
};

export default LetterFly;
