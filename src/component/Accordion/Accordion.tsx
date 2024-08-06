// components/Accordion.js
import { useState } from "react";
import styles from "./Accordion.module.scss";

const Accordion = ({ title, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={isOpen ? styles.iconOpen : styles.iconClosed}>▼</span>
      </div>

      {isOpen && <div className={styles.content}>{content}</div>}
    </div>
  );
};

export default Accordion;
