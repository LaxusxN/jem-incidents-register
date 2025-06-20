import {collection, addDoc} from 'firebase/firestore';
import {db} from '../src/firebaseConfig';

export const CreateStudent = async (idClassroom, students)=>{


    try {
        const studentRef=await addDoc(collection(db,"classrooms",idClassroom,"student"), students);
        return studentRef;
    }catch (e){
        console.log("Error al crear documento del estudiante",e);
        throw e;
    }
}