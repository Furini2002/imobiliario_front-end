import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import styles from "./PropertiesPage.module.css";
import PropertyCard from "../PropertyCard";
import api from "../../Utils/api";
import EmptyState from "../EmptySearch";
import { Pagination } from "../../shared/Pagination";

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
  neighborhood: string;
};

function SkeletonGrid({ count = 16 }: { count?: number }) {
  return (
    <div
      className={styles.grid}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.skelCard}>
          <div className={styles.skelImage} />
          <div className={styles.skelLines}>
            <div className={styles.skelLineWide} />
            <div className={styles.skelLine} />
            <div className={styles.skelMetaRow}>
              <div className={styles.skelPill} />
              <div className={styles.skelPill} />
              <div className={styles.skelPill} />
            </div>
            <div className={styles.skelPrice} />
            <div className={styles.skelButton} />
          </div>
        </div>
      ))}
      <span className="sr-only">Carregando imóveis…</span>
    </div>
  );
}

export default function PropertiesGrid() {
  const [properties, setProperties] = useState<Properties[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const { search } = useLocation();

  useEffect(() => {
    let mounted = true;
    const ctrl = new AbortController();

    async function fetchData() {
      setLoading(true);
      try {
        const res = await api.get(`/properties/search${search}`, {
          signal: ctrl.signal,
        });
        if (!mounted) return;
        const data = res.data?.data ?? [];
        setProperties(data);
        setTotal(data.length);
        setPage(1);
      } catch {
        if (!mounted) return;
        setProperties([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
      ctrl.abort();
    };
  }, [search]);

  const paged = useMemo(
    () => properties.slice((page - 1) * pageSize, page * pageSize),
    [properties, page]
  );
  const pageCount = Math.ceil(properties.length / pageSize);

  return (
    <section className={styles.root}>
      {loading ? (
        <SkeletonGrid count={pageSize} />
      ) : (
        <>
          <div className={styles.grid}>
            {paged.length === 0 && (
              <div className={styles.emptyStateGrid}>
                <EmptyState
                  title="Ops! Não encontramos nenhum imóvel."
                  description="Tente alterar os filtros ou veja todos os imóveis disponíveis."
                  ctaLabel="Ver todos os imóveis"
                  onCtaClick={() => (window.location.href = "/buscar")}
                />
              </div>
            )}

            {paged.map((p) => (
              <PropertyCard
                key={p.id}
                id={p.id}
                image={p.image}
                title={p.title}
                dorms={p.bedrooms}
                bathrooms={p.bathrooms}
                area={p.built_area}
                city={p.city}
                neighborhood={p.neighborhood}
                price={Number(p.price).toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              />
            ))}
          </div>

          <Pagination
            page={page}
            pageCount={pageCount}
            onChange={(p) => setPage(p)}
            className={styles.pagination}
          />
        </>
      )}
    </section>
  );
}
