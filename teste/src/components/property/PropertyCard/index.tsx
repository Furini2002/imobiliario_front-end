import { useNavigate } from "react-router-dom";
import Button from "../../shared/Button";
import styles from "./PropertyCard.module.css";
import { FaMapMarkerAlt, FaSquareFull } from "react-icons/fa";

type PropertyCardProps = {
  id: number;
  image: string;
  title: string;
  dorms: number;
  bathrooms: number;
  area: number;
  city: string;
  price: string;
  neighborhood: string;
};

export default function PropertyCard({
  id,
  image,
  title,
  dorms,
  bathrooms,
  area,
  city,
  price,
  neighborhood,
}: PropertyCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0)), url(${image})`,
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.cardInfo}>
          <h3>{title}</h3>
          <p>
            {dorms} dorm. | {bathrooms} banh. | {area} m²
          </p>
          <p>
            <FaMapMarkerAlt size={13} /> {neighborhood} {city}
          </p>
          <div className={styles.footer}>
            <p className={styles.price}>
              <FaSquareFull size={12} color="#0D4DA0" /> R$ {price}
            </p>
            <Button
              className={styles.button}
              onClick={() => {
                navigate(`/imovel/${id}`);
              }}
            >
              Detalhes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
