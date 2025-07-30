import React from "react";
import styles from "./HighlightFormSection.module.css";

interface Texts{
  title: string;
  buttonLabel: string;
  buttonLink :string;
  onButtonClick?: React.MouseEventHandler<HTMLAnchorElement>;
  target?: string;
}

const HighlightFormSection: React.FC<Texts> = ({
  title,
  buttonLabel,
  buttonLink,
  onButtonClick,
  target
}) => (
  <section className={styles.section}>
    <h2 className={styles.title}>{title}</h2>
    <a
      href={buttonLink}
      className={styles.button}
      onClick={onButtonClick}
      target={target}
    >
      {buttonLabel}
    </a>
  </section>
);


export default HighlightFormSection;
