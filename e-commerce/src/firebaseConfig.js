import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCwXf-N8RI5FmEjDTiTLfpiVf62zH96zw8",
  authDomain: "astra-e-commerce.firebaseapp.com",
  projectId: "astra-e-commerce",
  storageBucket: "astra-e-commerce.appspot.com",
  messagingSenderId: "725491747617",
  appId: "1:725491747617:web:094ab14b99aa8d930f8c60",
  measurementId: "G-2QBFB3ND65"
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const analytics = getAnalytics(app);
const database = getDatabase(app)


export const db = getFirestore(app); 
export { storage, database }