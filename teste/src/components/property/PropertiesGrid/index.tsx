import { useState } from "react";
import styles from "./PropertiesPage.module.css";
import PropertyCard from "../PropertyCard";

const properties = Array.from({ length: 24 }, (_, i) => ({
  id: i + 1,
  title: "Casa condomínio com 3 quartos",
  dorms: 3,
  vagas: 2,
  area: 160,
  city: "Palotina",
  price: "R$ 250.000,00",
  image: "/src/assets/casa1.jpg"
}));

const pageSize = 16;

export default function PropertiesGrid() {
  const [page, setPage] = useState(1);
  const paged = properties.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(properties.length / pageSize);

  return (
    <section className={styles.root}>
      <div className={styles.grid}>
        {paged.map((p) => (
          <PropertyCard
            key={p.id}
            image={p.image}
            title={p.title}
            dorms={p.dorms}
            vagas={p.vagas}
            area={p.area}
            city={p.city}
            price={p.price}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={page === i + 1 ? styles.active : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
