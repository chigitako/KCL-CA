import { 
  collection, 
  doc, 
  addDoc, 
  setDoc,
  serverTimestamp, 
  getDocs,
  query,
  orderBy
} from "firebase/firestore";
import { db } from "../firebase";

// 1. 取引先（Customer）を新しく登録する関数
export const addCustomer = async (name: string, address: string, phone: string, email: string) => {
  try {
    await setDoc(doc(db, "customers", name), {
      name: name,
      address: address,    
      phone_number: phone,
      email: email,
      createdAt: serverTimestamp()
    });
    console.log("取引先の登録に成功したよ");
  } catch (e) {
    console.error("登録エラー：", e);
  }
};

// 2. 出荷情報（Shipment）を記録する関数（特定の取引先に紐付け） 
export const addShipment = async (customerName: string, count: number) => {
  try {
    const customerRef = doc(db, "customers", customerName);
    
    await addDoc(collection(customerRef, "shipments"), {
      shipped_count: count,      // 出荷個数 
      shipment_date: serverTimestamp() // 出荷日 
    });
    console.log(`${customerName} さんへの出荷を記録したよ`);
  } catch (e) {
    console.error("出荷記録エラー：", e);
  }
};

// 3. 特定の取引先の出荷履歴をすべて取得する関数
export const getCustomerShipments = async (customerName: string) => {
  const customerRef = doc(db, "customers", customerName);
  const shipmentsQuery = query(
    collection(customerRef, "shipments"), 
    orderBy("shipment_date", "desc")
  );
  
  const snapshot = await getDocs(shipmentsQuery);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};