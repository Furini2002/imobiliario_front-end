import { useEffect, useState } from "react";
import api from "../../Utils/api";
import CardCarousel from "../CardCarouselProperty";
import PropertyCard from "../PropertyCard";
import styles from "./InterestProperty.module.css";

type Property = {
  id: number;
  title: string;
  dorms: number;
  bathrooms: number;
  area: number;
  city: string;
  price: string;
  image: string;
  neighborhood: string;
};

export default function InterestProperty() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/properties", {
        params: { limit: 11 }, 
      })
      .then((res) => {
        setProperties(res.data.data ?? res.data);
      })
      .catch((err) => {
        console.error("Erro ao buscar propriedades:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <section className={styles.featured}>
      <div className={styles.header}>
        <h2>Você pode se interessar ...</h2>
      </div>

      {loading ? (
        <p>Carregando...</p>
      ) : (
        <CardCarousel>
          {properties.map((property) => (
            <div key={property.id} style={{ width: 300 }}>
              <PropertyCard {...property} />
            </div>
          ))}
        </CardCarousel>
      )}
    </section>
  );
}
