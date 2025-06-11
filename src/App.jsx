import './App.css'
import { db } from './firebaseConfig'
import {IncidentList} from './IncidentList'


function App() {
  console.log("Value of db in parent before rendering IncidentList:", db);
  return (
    <div>
      <IncidentList db={db} />
    </div>
    
  );
}

export default App
