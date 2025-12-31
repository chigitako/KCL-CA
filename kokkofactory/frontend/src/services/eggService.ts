import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const addEggRecord = async (coop: number, count: number) => {
  await addDoc(collection(db, "eggs"), {
    coop_number: coop,
    count: count,
    date: serverTimestamp()
  });
};