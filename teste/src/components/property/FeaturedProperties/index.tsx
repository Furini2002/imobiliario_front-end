import { useEffect, useState } from "react";
import CardCarousel from "../CardCarouselProperty";
import PropertyCard from "../PropertyCard";
import styles from "./FeaturedProperties.module.css";
import api from "../../Utils/api";
// import { withBaseURL } from "../../Utils/url"; // se precisar prefixar imagens

type PropertyApi = {
  id: number;
  title: string;
  bedrooms: number;
  bathrooms: number;
  built_area: number;
  city: string;
  price: number | string;
  image?: string;          // ajuste conforme sua API
  image_path?: string;     // ajuste conforme sua API
  neighborhood?: string;
};

type PropertyCardModel = {
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

export default function FeaturedProperties() {
  const [properties, setProperties] = useState<PropertyCardModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    let mounted = true;

    async function fetchData() {
      try {
        const res = await api.get("/properties", {
          params: { limit: 11 },
          signal: ctrl.signal,
        });

        const data: PropertyApi[] = res.data?.data ?? res.data ?? [];

        const mapped: PropertyCardModel[] = data.map((p) => ({
          id: p.id,
          title: p.title,
          dorms: p.bedrooms,
          bathrooms: p.bathrooms,
          area: Number(p.built_area) || 0,
          city: p.city,
          price:
            typeof p.price === "number"
              ? p.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
              : p.price ?? "",
          image: p.image || p.image_path || "/placeholder.jpg", // ou withBaseURL(p.image_path!)
          neighborhood: p.neighborhood ?? "",
        }));

        if (mounted) setProperties(mapped);
      } catch (err) {
        if ((err as any)?.name === "CanceledError") return;
        console.error("Erro ao buscar propriedades:", err);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
      ctrl.abort();
    };
  }, []); // ⬅️ IMPORTANTE: roda só uma vez

  return (
    <section className={styles.featured}>
      <img src="/src/assets/Component.png" />
      <div className={styles.header}>
        <h2>
          <strong>
            IMÓVEIS
            <br />
            EM DESTAQUE
          </strong>
        </h2>
        <p>
          Conheça algumas das <strong>melhores oportunidades de negócios</strong> de
          imóveis na sua região.
        </p>
      </div>

      {loading ? (
        <div style={{ padding: 16 }}>Carregando…</div>
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
