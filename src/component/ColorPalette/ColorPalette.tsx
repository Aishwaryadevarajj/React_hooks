import React from 'react';
import styles from './ColorPalette.module.scss';

const ColorPalette = ({ onSelect }:any) => {
  const colors = ['#9b5d73', '#144c52', '#0092ca', '#34857f', '#e9007f', '#97935c', '#e1a6e1',];
  

  const handleColorClick = (color:any) => {
    onSelect(color);
  };

  return (
    <div className={styles.colorPalette}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.color}
          style={{ backgroundColor: color }}
          onClick={() => handleColorClick(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorPalette;
