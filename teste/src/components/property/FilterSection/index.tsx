import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./FilterSection.module.css";
import api from "../../Utils/api";
import Select from "../../shared/Select";

type City = { id: number; name: string };
type Type = { id: number; description: string };
type Neighborhood = { id: number; name: string };

function normalizeCurrencyInput(v: string) {
  const cleaned = v.replace(/[R$\s]/g, "").replace(/\./g, "").replace(",", ".");
  return cleaned;
}
function formatCurrencyBRL(value: string) {
  const numericValue = value.replace(/\D/g, "");
  const number = Number(numericValue) / 100;
  return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function FilterSection() {
  const [showMore, setShowMore] = useState(false);

  const [tipo, setTipo] = useState("1");                
  const [tipoImovel, setTipoImovel] = useState("");
  const [cidade, setCidade] = useState("");             
  const [bairro, setBairro] = useState("");             

  const [maxValue, setMaxValue] = useState("");
  const [bathrooms, setBathrooms] = useState<string>("1");
  const [bedrooms, setBedrooms] = useState<string>("1");
  const [suites, setSuites] = useState<string>("0");

  const [cities, setCities] = useState<City[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [erro, setErro] = useState("");

  const navigate = useNavigate();
  const { search } = useLocation();

  const desiredNeighborhoodRef = useRef<string | null>(null);

  const fetched = useRef(false);

  useEffect(() => {
    if (fetched.current) return;
    fetched.current = true;

    api.get("/cities")
      .then((res) => setCities(res.data.data))
      .catch(() => setErro("Erro ao conectar à API (cidades)"));

    api.get("/property-types")
      .then((res) => setTypes(res.data.data))
      .catch(() => setErro("Erro ao conectar à API (tipos)"));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(search);

    const urlTipo        = params.get("status");
    const urlCidade      = params.get("city");
    const urlTipoImovel  = params.get("type");
    const urlBairro      = params.get("neighborhood"); 

    if (urlTipo !== null) setTipo(urlTipo);
    if (urlCidade !== null) setCidade(urlCidade);
    if (urlTipoImovel !== null) setTipoImovel(urlTipoImovel);

    desiredNeighborhoodRef.current = urlBairro;
  }, [search]);

  useEffect(() => {
    setNeighborhoods([]);
    setBairro("");

    if (!cidade) return;

    api.get("/neighborhoods", { params: { city_id: cidade } })
      .then((res) => {
        const list: Neighborhood[] = res.data.data ?? [];
        setNeighborhoods(list);

        const desired = desiredNeighborhoodRef.current;
        if (desired && list.some(n => String(n.id) === desired)) {
          setBairro(desired);
        } else {
          setBairro("");
        }
        desiredNeighborhoodRef.current = null;
      })
      .catch(() => setErro("Erro ao conectar à API (bairros)"));
  }, [cidade]);

  const cityOptions = useMemo(
    () => [{ value: "", label: "Todas as cidades" },
           ...cities.map((c) => ({ value: String(c.id), label: c.name }))],
    [cities]
  );
  const typeOptions = useMemo(
    () => [{ value: "", label: "Todos os tipos" },
           ...types.map((t) => ({ value: String(t.id), label: t.description }))],
    [types]
  );
  const neighborhoodOptions = useMemo(
    () => [{ value: "", label: "Todos os bairros" },
           ...neighborhoods.map((n) => ({ value: String(n.id), label: n.name }))],
    [neighborhoods, cidade]
  );

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams();
    if (tipo) params.set("status", tipo);
    if (cidade) params.set("city", cidade);
    if (tipoImovel) params.set("type", tipoImovel);
    if (bairro) params.set("neighborhood", bairro); 
    if (bathrooms) params.set("bathrooms", bathrooms);
    if (bedrooms) params.set("bedrooms", bedrooms);
    if (suites) params.set("suites", suites);
    if (maxValue) {
      const n = normalizeCurrencyInput(maxValue);
      if (!Number.isNaN(Number(n)) && Number(n) > 0) params.set("maxPrice", n);
    }

    navigate(`/buscar?${params.toString()}`);
  };

  return (
    <section className={styles.section}>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.mainFilters}>
          <Select
            options={[
              { value: "1", label: "Quero comprar" },
              { value: "2", label: "Quero alugar" },
            ]}
            name="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
          <Select
            options={typeOptions}
            name="type"
            value={tipoImovel}
            onChange={(e) => setTipoImovel(e.target.value)}
          />
          <Select
            options={cityOptions}
            name="city"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
          />
          <Select
            options={neighborhoodOptions}
            name="neighborhood"
            value={bairro}
            onChange={(e) => setBairro(e.target.value)}            
          />
          <button type="submit" className={styles.button}>Buscar</button>
        </div>

        {!showMore && (
          <button type="button" className={styles.link} onClick={() => setShowMore(true)}>
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
                  onChange={(e) => setMaxValue(formatCurrencyBRL(e.target.value))}
                  inputMode="decimal"
                />
              </div>

              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de banheiros</span>
                <div className={styles.radioGroup}>
                  {[1, 2, 3, 4].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${bathrooms === String(v) ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="banheiros"
                        value={v}
                        checked={bathrooms === String(v)}
                        onChange={() => setBathrooms(String(v))}
                      />
                      {v}+
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de quartos</span>
                <div className={styles.radioGroup}>
                  {[1, 2, 3, 4].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${bedrooms === String(v) ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="quartos"
                        value={v}
                        checked={bedrooms === String(v)}
                        onChange={() => setBedrooms(String(v))}
                      />
                      {v}+
                    </label>
                  ))}
                </div>
              </div>

              <div className={styles.expandedGroup}>
                <span className={styles.groupLabel}>Quantidade de suítes</span>
                <div className={styles.radioGroup}>
                  {[0, 1, 2, 3, 4].map((v) => (
                    <label
                      key={v}
                      className={`${styles.radioLabel} ${suites === String(v) ? styles.selected : ""}`}
                    >
                      <input
                        type="radio"
                        name="suites"
                        value={v}
                        checked={suites === String(v)}
                        onChange={() => setSuites(String(v))}
                      />
                      {v === 0 ? v : `${v}+`}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <button type="button" className={styles.link} onClick={() => setShowMore(false)}>
              Menos Filtros
            </button>
          </>
        )}

        {erro && <div className={styles.error}>{erro}</div>}
      </form>
    </section>
  );
}
