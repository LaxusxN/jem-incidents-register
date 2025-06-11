import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

export function IncidentList({ db }) {
  const [incidents, setIncidents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIncidents = async () => {
      console.log("Value of db in IncidentList useEffect:", db);
      try {
        // Nombre de la colección (ajústalo si es dinámico)
        const incidentsCollectionRef = collection(db, '2doH2025');
        const snapshot = await getDocs(incidentsCollectionRef);

        const incidentList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        console.log("Datos obtenidos:", incidentList);
        setIncidents(incidentList);
      } catch (error) {
        console.error("Error fetching incidents:", error);
      } finally {
        setLoading(false);
      }
    };

    if (db) {
      fetchIncidents();
    } else {
      console.error("No se pasó instancia de db a IncidentList");
      setLoading(false);
    }
  }, [db]);

  if (loading) return <p>Cargando incidentes...</p>;

  if (!incidents || incidents.length === 0) {
    return <p>No se encontraron incidentes.</p>;
  }

  return (
    <div>
      <h2>Incidentes</h2>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id} style={{ marginBottom: '1rem' }}>
            <strong>Estudiante:</strong> {incident.Student} <br />
            <strong>Fecha:</strong>{' '}
            {incident.Fecha?.seconds
              ? new Date(incident.Fecha.seconds * 1000).toLocaleString()
              : 'Sin fecha'}{' '}
            <br />
            <strong>Incidentes:</strong>
            <ul>
              {incident.Incident?.map((inc, index) => (
                <li key={index}>{inc}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IncidentList;
