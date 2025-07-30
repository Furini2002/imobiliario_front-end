import Button from "../../shared/Button";
import styles from "./PropertyCard.module.css";
import { FaMapMarkerAlt, FaSquareFull } from "react-icons/fa"; 

type PropertyCardProps = {
  image: string;
  title: string;
  dorms: number;
  vagas: number;
  area: number;
  city: string;
  price: string;
};

export default function PropertyCard({
  image,
  title,
  dorms,
  vagas,
  area,
  city,
  price,
}: PropertyCardProps) {
    
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${image})`,}}
    >
      <div className={styles.overlay}>
        <div className={styles.cardInfo}>
          <h3>{title}</h3>
          <p>
            {dorms} dorm. | {vagas} vagas | {area} m²
          </p>
          <p><FaMapMarkerAlt size={13} /> {city}</p>
          <div className={styles.footer}>
            <p className={styles.price}><FaSquareFull size={12} color="#0D4DA0"/> {price}</p>
            <Button className={styles.button}>Detalhes</Button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
