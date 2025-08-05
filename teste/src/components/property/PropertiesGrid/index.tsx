import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PropertiesPage.module.css";
import PropertyCard from "../PropertyCard";
import api from "../../Utils/api";

const pageSize = 16;

type Properties = {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  built_area: number;
  city: string;
  price: string;
  image: string;
};

export default function PropertiesGrid() {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const { search } = useLocation();

  //console.log(search);  

  useEffect(() => {
    api.get(`/properties/search${search}`)
      .then(res => {
        setProperties(res.data.data as Properties[]); 
        setTotal(res.data.data.length); 
        setPage(1); 
      })
      .catch(() => setProperties([]));
  }, [search]);  

  const paged = properties.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(properties.length / pageSize);

  return (
    <section className={styles.root}>
      <div className={styles.grid}>
        {paged.length === 0 && (
          <div>Nenhum imóvel encontrado.</div>
        )}
        {paged.map((p) => (
          <PropertyCard
            key={p.id}
            image={p.image}
            title={p.title}
            dorms={p.bedrooms}
            bathrooms={p.bathrooms}
            area={p.built_area}
            city={p.city}
            price={Number(p.price).toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
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
