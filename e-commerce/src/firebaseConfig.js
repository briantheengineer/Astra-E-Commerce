import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 

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
const analytics = getAnalytics(app);


export const db = getFirestore(app); 
