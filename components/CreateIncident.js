import {collection, addDoc} from 'firebase/firestore';
import {db} from '../src/firebaseConfig';

export const CreateIncident = async (idStudent, incidents)=>{


    try {
        const incidentRef=await addDoc(collection(db,"classrooms","student", "incidencias",idStudent), incidents);
        return incidentRef;
    }catch (e){
        console.log("Error al crear documento de las incidencias",e);
        throw e;
    }
}