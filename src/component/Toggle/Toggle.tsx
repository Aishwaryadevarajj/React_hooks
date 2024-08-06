import { useState } from 'react';
import styles from './Toggle.module.scss';

const ToggleButton = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  return (
    <label className={styles.toggleButton}>
      <input type="checkbox" onClick={toggleButton} />
      <span className={`${styles.slider} ${styles.round}`}></span>
    </label>
  );
};

export default ToggleButton;
