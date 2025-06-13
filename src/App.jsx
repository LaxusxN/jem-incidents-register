import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FormCreateClassroom from "../components/FormCreateClassroom";
import ShowClassrooms from "../components/ShowClassrooms";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Crear Aula</Link> | <Link to="/aulas">Ver Aulas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<FormCreateClassroom />} />
        <Route path="/aulas" element={<ShowClassrooms />} />
      </Routes>
    </Router>
  );
}

export default App;

