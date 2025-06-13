import { useEffect, useState } from "react";
import { GetClassrooms } from "../components/GetClasrooms";

const ShowClassrooms = () => {
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    const cargarAulas = async () => {
      try {
        const datos = await GetClassrooms();
        setAulas(datos);
      } catch (error) {
        console.error("Error al cargar aulas:", error);
      }
    };

    cargarAulas();
  }, []);

  return (
    <div>
      <h2>Listado de Aulas</h2>
      <ul>
        {aulas.map((aula) => (
          <li key={aula.id}>
            <strong>{aula.grade}</strong> - {aula.classroom}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowClassrooms;
