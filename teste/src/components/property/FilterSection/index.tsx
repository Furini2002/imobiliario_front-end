import { useState } from "react";
import styles from "./FilterSection.module.css";

function FilterSection() {
  const [showMore, setShowMore] = useState(false);
  const [maxValue, setMaxValue] = useState("");
  const [bathrooms, setBathrooms] = useState<string>("1");
  const [bedrooms, setBedrooms] = useState<string>("1");
  const [suites, setSuites] = useState<string>("1");

  return (
    <section className={styles.section}>
      <form className={styles.form}>
        <div className={styles.mainFilters}>
          <select className={styles.select}>
            <option>Quero comprar</option>
            <option>Quero alugar</option>
          </select>
          <select className={styles.select}>
            <option>Todos os Tipos</option>
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
          </select>
          <select className={styles.select}>
            <option>Todas as cidades</option>
            <option>Palotina</option>
            <option>Francisco Alves</option>
          </select>
          <select className={styles.select}>
            <option>Todos os Bairros</option>
            <option>Centro</option>
            <option>Jardim Social</option>
          </select>
          <button type="submit" className={styles.button}>
            Buscar
          </button>
        </div>

        {!showMore && (
          <button
            type="button"
            className={styles.link}
            onClick={() => setShowMore(true)}
          >
            Mais Filtros
          </button>
        )}

        {showMore && (
          <>
            <div className={styles.expandedFilters}>
              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Valor máximo</span>
                <input
                  className={`${styles.input} ${styles.expandedInput}`}
                  placeholder="R$"
                  value={maxValue}
                  onChange={(e) => setMaxValue(e.target.value)}
                />
              </div>
              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de banheiros</span>
                <div className={styles.radioGroup}>
                  {[1, 2, 3, '4+'].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${bathrooms === v.toString() ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="banheiros"
                        value={v}
                        checked={bathrooms === v.toString()}
                        onChange={() => setBathrooms(v.toString())}
                        style={{ display: "none" }}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de quartos</span>
                <div className={styles.radioGroup}>
                  {[1, 2, 3,'4+'].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${bedrooms === v.toString() ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="quartos"
                        value={v}
                        checked={bedrooms === v.toString()}
                        onChange={() => setBedrooms(v.toString())}
                        style={{ display: "none" }}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de suítes</span>
                <div className={styles.radioGroup}>
                  {[1, 2, 3, '4+'].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${suites === v.toString() ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="suites"
                        value={v}
                        checked={suites === v.toString()}
                        onChange={() => setSuites(v.toString())}
                        style={{ display: "none" }}
                      />
                      {v}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <button
              type="button"
              className={styles.link}              
              onClick={() => setShowMore(false)}
            >
              Menos Filtros
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default FilterSection;
