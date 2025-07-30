import styles from "./TestimonialCard.module.css";

type TestimonialCardProps = {
  image: string;
  quote: string;
  name: string;
  location: string;
};

export default function TestimonialCard({
  image,
  quote,
  name,
  location,
}: TestimonialCardProps) {
  return (
    <div className={styles.card}>
      <img src={image} className={styles.image} alt={name} />
      <div className={styles.overlay}>
        <p className={styles.quote}>"{quote}"</p>
        <p className={styles.name}>
          {name} - {location}
        </p>
      </div>
    </div>
  );
}