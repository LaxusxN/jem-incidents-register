// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'; // or 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM6GVJWplYAXeHBP_o4Ex2olFw4JaXkxs",
  authDomain: "jem-incidents-register.firebaseapp.com",
  projectId: "jem-incidents-register",
  storageBucket: "jem-incidents-register.firebasestorage.app",
  messagingSenderId: "3444315149",
  appId: "1:3444315149:web:414b024df66ad46369f144"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
 export const db = getFirestore(app);

 //export {db};