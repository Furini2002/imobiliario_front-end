import styles from "./EmptyState.module.css";
import { FaHouseCircleExclamation } from "react-icons/fa6";

type EmptyStateProps = {
    title: string;
    description: string;
    image?: string;
    ctaLabel?: string;
    onCtaClick?: () => void;
  };
  
  export default function EmptyState({
    title,
    description,
    ctaLabel,
    onCtaClick
  }: EmptyStateProps) {
    return (
      <div className={styles.emptyState}>
        <FaHouseCircleExclamation size={80} color="#ccc"/>
        <h2>{title}</h2>
        <p>{description}</p>
        {ctaLabel && onCtaClick && (
          <button className={styles.ctaButton} onClick={onCtaClick}>
            {ctaLabel}
          </button>
        )}
      </div>
    );
  }
  