// Importa las funciones necesarias de Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDv2xe0_Xy3JBnb_NMNe-pN-3OGE-WLfq0",
  authDomain: "ikigai-4506d.firebaseapp.com",
  projectId: "ikigai-4506d",
  storageBucket: "ikigai-4506d.appspot.com",
  messagingSenderId: "549956605153",
  appId: "1:549956605153:web:dc55c518f92536e40193a0",
  measurementId: "G-NGLRBCA4PYB"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener instancia de Firestore
const db = getFirestore(app);

export { db };
