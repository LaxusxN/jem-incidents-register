import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebaseConfig";

export const GetClassrooms = async () => {
  const querySnapshot = await getDocs(collection(db, "classrooms"));
  const aulas = [];
  querySnapshot.forEach((doc) => {
    aulas.push({ id: doc.id, ...doc.data() });
  });
  return aulas;
};
