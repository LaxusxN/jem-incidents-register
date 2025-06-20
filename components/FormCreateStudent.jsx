import { useState,useEffect } from "react";
import { GetClassrooms } from "./GetClasrooms";
import  {CreateStudent} from "./CreateStudent"; 
import { collection,getDocs } from "firebase/firestore";

const FormCreateStudent = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [classroom, setClassroom]=useState("");
  const [classrooms, setClassrooms]=useState([]);

useEffect(() => {
    const cargarAulas = async () => {
      try {
        const datos = await GetClassrooms();
        setClassrooms(datos);
      } catch (error) {
        console.error("Error al cargar aulas:", error);
      }
    };

    cargarAulas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      lastname,
    };

    try {
      const id = await CreateStudent(classroom, newStudent);
      alert(`Estudiante agregado con id: ${id}`);
      setName("");
      setLastname("");
    } catch (error) {
      console.error("Error al agregar alumno:", error);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <label>Selecciona un aula:</label>
      <select
        value={classroom}
        onChange={(e) => setClassroom(e.target.value)}
        required
      >
        <option value="">-- Selecciona --</option>
        {classrooms.map((classroom) => (
          <option key={classroom.id} value={classroom.id}>
            {classroom.classroom} {classroom.grade}
          </option>
        ))}
      </select>  
      <input
        type="text"
        placeholder="Apellidos"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nombres"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type="submit">Agregar alumno</button>
    </form>
  );
};

export default FormCreateStudent;
