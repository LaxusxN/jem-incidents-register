import { useEffect, useState } from "react";
import { GetClassrooms } from "../components/GetClasrooms";
import FormCreateStudent from "./FormCreateStudent";
import ShowStudents from "./ShowStudents";

const ShowClassrooms = () => {
  const [aulas, setAulas] = useState([]);
  const [aulaSeleccionada, setAulaSeleccionada] = useState(null);
  console.log(aulaSeleccionada);
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


  const handleSeleccionarAula = (aula) => {
    setAulaSeleccionada(aula);
  };

  return (
    <div>
      <h2>Listado de Aulas</h2>
      <ul>
        {aulas.map((aula) => (
          <li key={aula.id}
          onClick={() => handleSeleccionarAula(aula)}
            className="cursor-pointer hover:underline">
            <strong>{aula.grade}</strong> - {aula.classroom}
          </li>
        ))}
      </ul>
      {aulaSeleccionada && (
        <div className="mt-4">
          <FormCreateStudent aula={aulaSeleccionada} />
          <ShowStudents classroom={aulaSeleccionada}/>
        </div>
      )}
    </div>
  );
};

export default ShowClassrooms;
