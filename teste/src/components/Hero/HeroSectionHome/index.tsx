import { useEffect, useState } from "react";
import Button from "../../shared/Button";
import Select from "../../shared/Select";
import styles from "./HeroSection.module.css";
import api from "../../Utils/api";
import { useNavigate } from "react-router-dom";

type City = {
  id: number;
  name: string;
};

type Type = {
  id: number;
  description: string;
};

export default function HeroSectionHome() {
  const [cities, setCities] = useState<City[]>([]);
  const [types, setTypes] = useState<Type[]>([]);
  const [erro, setErro] = useState("");

  const [tipo, setTipo] = useState("1");
  const [cidade, setCidade] = useState("1");
  const [tipoImovel, setTipoImovel] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/cities")
      .then((res) => setCities(res.data.data))
      .catch(() => setErro("Erro ao conectar à API"));
  }, []);

  useEffect(() => {
    api
      .get("/property-types")
      .then((res) => setTypes(res.data.data))
      .catch(() => setErro("Erro ao conectar à API"));
  }, []);

  const cityOptions = cities.map((city) => ({
    value: city.id,
    label: city.name,
  }));
  const typeOptions = [
    { value: "", label: "Todos os tipos" }, 
    ...types.map(type => ({
      value: type.id,
      label: type.description
    }))
  ];

  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Realizando Seu Sonho de Morar Bem</h1>
        <form
          className={styles.searchForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <Select
            label="Eu quero"
            options={[
              { value: 1, label: "Comprar" },
              { value: 2, label: "Alugar" },
            ]}
            name="tipo"
            onChange={(e) => setTipo((e.target.value))}
          />
          <Select
            label="Cidade"
            options={cityOptions}
            name="city"
            onChange={(e) => setCidade(e.target.value)}
          />
          <Select
            label="Tipo de imóvel"
            options={typeOptions}
            name="type"
            onChange={(e) => setTipoImovel(e.target.value)}
          />
          <Button
            type="primary"
            onClick={() => {
              const params = new URLSearchParams();
              if (tipo) params.append("status", tipo);
              if (cidade) params.append("city", cidade);
              if (tipoImovel) params.append("type", tipoImovel);
              navigate(`/buscar?${params.toString()}`);
            }}
          >
            Buscar
          </Button>
        </form>
      </div>
    </section>
  );
}
