import { collection, getDocs } from "firebase/firestore";
import { db } from "../src/firebaseConfig";

export const GetStudents = async (idClassroom) => {
  const querySnapshot = await getDocs(collection(db, "classrooms",idClassroom,"student"));
  const students = [];
  querySnapshot.forEach((doc) => {
    students.push({ id: doc.id, ...doc.data() });
  });
  return students;
};
