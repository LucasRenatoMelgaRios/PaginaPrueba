// services/GetBibliotecaData.js
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const GetBibliotecaData = async () => {
    const querySnapshot = await getDocs(collection(db, "obras"));
    const obrasList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return obrasList;
};
