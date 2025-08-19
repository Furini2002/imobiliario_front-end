import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import Select from "../../shared/Select";
import styles from "./HeroSection.module.css";
import api from "../../Utils/api";
import { useNavigate } from "react-router-dom";

type City = { id: number; name: string; };
type Type = { id: number; description: string; };
type Neighborhood = { id: number; name: string; };

export default function HeroSectionHome() {
  const [cities, setCities] = useState<City[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>([]);
  const [erro, setErro] = useState("");

  const [tipo, setTipo] = useState("1");        
  const [cidade, setCidade] = useState("");     
  const [bairro, setBairro] = useState("");     
  const [tipoImovel, setTipoImovel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api.get("/cities")
      .then((res) => setCities(res.data.data))
      .catch(() => setErro("Erro ao conectar à API"));
  }, []);

  useEffect(() => {
    api.get("/property-types")
      .then((res) => setTypes(res.data.data))
      .catch(() => setErro("Erro ao conectar à API"));
  }, []);

  useEffect(() => {
    if (!cidade) {
      setNeighborhoods([]);
      setBairro("");
      return;
    }
    api.get(`/neighborhoods`, { params: { city_id: cidade } })
      .then((res) => setNeighborhoods(res.data.data))
      .catch(() => setErro("Erro ao conectar à API"));
    setBairro("");
  }, [cidade]);

  const cityOptions = [
    { value: "", label: "Todas as cidades" },
    ...cities.map((c) => ({ value: String(c.id), label: c.name })),
  ];

  const typeOptions = [
    { value: "", label: "Todos os tipos" },
    ...types.map((t) => ({ value: String(t.id), label: t.description })),
  ];

  const neighborhoodOptions = [
    { value: "", label: "Todos os bairros" },
    ...neighborhoods.map((n) => ({ value: String(n.id), label: n.name })),
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Realizando Seu Sonho de Morar Bem</h1>

        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
          <Select
            label="Eu quero"
            options={[
              { value: "1", label: "Comprar" },
              { value: "2", label: "Alugar" },
            ]}
            name="tipo"            
            onChange={(e) => setTipo(e.target.value)}
          />

          <Select
            label="Tipo de imóvel"
            options={typeOptions}
            name="type"
            onChange={(e) => setTipoImovel(e.target.value)}
          />

          <Select
            label="Cidade"
            options={cityOptions}
            name="city"
            onChange={(e) => setCidade(e.target.value)}
          />

          <Select
            label="Bairro"
            options={neighborhoodOptions}
            name="neighborhood"
            onChange={(e) => setBairro(e.target.value)}            
          />

          <Button
            type="primary"
            onClick={() => {
              const params = new URLSearchParams();
              if (tipo) params.append("status", tipo);
              if (cidade) params.append("city", cidade);
              if (tipoImovel) params.append("type", tipoImovel);
              if (bairro) params.append("neighborhood", bairro);
              navigate(`/buscar?${params.toString()}`);
            }}
          >
            Buscar
          </Button>
        </form>

        {erro && <small className={styles.error}>{erro}</small>}
      </div>
    </section>
  );
}
