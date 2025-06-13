import { useState } from "react";
import  {CreateClassroom}  from "./CreateClassroom";

const FormCreateClassroom = () => {
  const [grade, setGrade] = useState("");
  const [classroom, setClassroom] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClassroom = {
      grade,
      classroom,
    };

    try {
      const id = await CreateClassroom(newClassroom);
      alert(`Aula agregada con ID: ${id}`);
      setGrade("");
      setClassroom("");
    } catch (error) {
      console.error("Error al agregar aula:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Grado"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Aula"
        value={classroom}
        onChange={(e) => setClassroom(e.target.value)}
        required
      />
      <button type="submit">Agregar aula</button>
    </form>
  );
};

export default FormCreateClassroom;
