import { collection, addDoc } from "firebase/firestore";
import { db } from "../src/firebaseConfig";

export const CreateClassroom = async (clasrroms)=>{
    try {
        const docRef =addDoc(collection(db,"classrooms"),clasrroms);
        console.log("Prueba creación",docRef.id);
        return docRef.id;  
    }catch (e){
        console.log("Error al crear documento",e);
        throw error;
    }
}



