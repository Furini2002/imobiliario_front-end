import styles from "./PropertiesPage.module.css";

type PaginationProps = {
    page: number;
    pageCount: number;     
    onChange: (p: number) => void;
    className?: string;
  };
  
  function buildRange(current: number, total: number) {
    if (total <= 1) return [1]; 
    const delta = 1;
    const range: (number | "...")[] = [];
    const left = Math.max(2, current - delta);
    const right = Math.min(total - 1, current + delta);
  
    range.push(1);
    if (left > 2) range.push("...");
    for (let i = left; i <= right; i++) range.push(i);
    if (right < total - 1) range.push("...");
    range.push(total);
  
    return Array.from(new Set(range));
  }
  
  export function Pagination({ page, pageCount, onChange, className }: PaginationProps) {
    if (pageCount < 1) return null; 
  
    const items = buildRange(page, pageCount);
    const go = (p: number) => {
      if (p < 1 || p > pageCount || p === page) return;
      onChange(p);
    };
  
    return (
        <nav className={styles.pagination} aria-label="Paginação de resultados">
        <ul className={styles.pg}>
          <li>
            <button
              className={styles.pgBtn}
              onClick={() => go(page - 1)}
              disabled={page === 1}
              aria-label="Página anterior"
            >
              ‹
            </button>
          </li>
      
          {items.map((it, idx) =>
            it === "..." ? (
              <li key={`ellipsis-${idx}`} className={styles.pgEllipsis} aria-hidden>
                …
              </li>
            ) : (
              <li key={it}>
                <button
                  className={`${styles.pgBtn} ${page === it ? styles.pgActive : ""}`}
                  onClick={() => go(it as number)}
                  aria-current={page === it ? "page" : undefined}
                >
                  {it}
                </button>
              </li>
            )
          )}
      
          <li>
            <button
              className={styles.pgBtn}
              onClick={() => go(page + 1)}
              disabled={page === pageCount}
              aria-label="Próxima página"
            >
              ›
            </button>
          </li>
        </ul>
      </nav>
    );
  }
  