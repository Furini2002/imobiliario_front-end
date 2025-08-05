import { useEffect, useState } from "react";

type City = {
  id: number;
  name: string;
};

export default function TesteApi() {
  const [cities, setCities] = useState<City[]>([]);
  const [erro, setErro] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/v1/cities")
      .then(res => res.json())
      .then(data => setCities(data.data))
      .catch(() => setErro("Erro ao conectar à API"));
  }, []);

  return (
    <div>
      <h3>Cidades cadastradas:</h3>
      {erro && <p>{erro}</p>}
      <ul>
        {cities.map(city => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </div>
  );
}
