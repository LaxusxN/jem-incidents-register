import { useEffect, useState } from "react";
import { GetStudents } from "../components/GetStudents";
//import FormCreateStudent from "./FormCreateStudent";

const ShowStudents = ({classroom}) => {
  const [students, setStudents] = useState([]);
  const [studentSelected, setStudentSelected] = useState(null);

  useEffect(() => {
    const loadStudents = async () => { 
      try {
        const datos = await GetStudents(classroom.id);
        setStudents(datos);
      } catch (error) {
        console.error("Error al cargar estudiantes:", error);
      }
    };

    loadStudents();
  }, [classroom]);


  const handleStudentSelected = (student) => {
    setStudentSelected(student);
  };

  return (
    <div>
      <h2>Listado de Estudiantes</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}
          onClick={() => handleStudentSelected(studentSelected)}
            className="cursor-pointer hover:underline">
            <strong>{student.lastname}</strong> - {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowStudents;
