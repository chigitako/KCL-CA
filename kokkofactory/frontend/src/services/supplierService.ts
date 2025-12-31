import { 
  doc, 
  setDoc, 
  updateDoc, 
  getDoc, 
  serverTimestamp 
} from "firebase/firestore";
import { db } from "../firebase";

// 1. 仕入れ先と在庫情報をまとめて登録・更新する関数
export const saveSupplierWithStock = async (
  name: string, 
  itemName: string, 
  stockCount: number, 
  threshold: number
) => {
  try {
    // Supplier名（@unique）をドキュメントIDにして、在庫(Stock)としきい値(Threshold)を合体！ 
    await setDoc(doc(db, "suppliers", name), {
      name: name,
      item_name: itemName,
      current_stock: stockCount,
      alert_threshold: threshold,
      updatedAt: serverTimestamp()
    });
    console.log(`${name} の在庫情報を保存した`);
  } catch (e) {
    console.error("仕入れ先保存エラー：", e);
  }
};

// 2. 在庫数（Stock）だけを更新する関数
export const updateStockCount = async (name: string, newCount: number) => {
  try {
    const supplierRef = doc(db, "suppliers", name);
    await updateDoc(supplierRef, {
      current_stock: newCount,
      updatedAt: serverTimestamp()
    });
  } catch (e) {
    console.error("在庫更新エラー：", e);
  }
};