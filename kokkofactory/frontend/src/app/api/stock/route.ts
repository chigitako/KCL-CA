import { NextResponse } from 'next/server';
import { 
  collection, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  updateDoc, 
  increment,
  collectionGroup,
  serverTimestamp,
  query,
  deleteDoc
} from 'firebase/firestore';
import { db } from '@/firebase';

// --- GET: 在庫一覧の取得 ---
export async function GET() {
  try {
    const stockQuery = query(collectionGroup(db, 'inventory'));
    const querySnapshot = await getDocs(stockQuery);

    const inventoryList = await Promise.all(querySnapshot.docs.map(async (stockDoc) => {
      const stockData = stockDoc.data();
      const itemName = stockDoc.id;
      
      // 親ドキュメント（仕入れ先）の情報を取得
      const supplierRef = stockDoc.ref.parent.parent;
      let supplierData: any = {};
      if (supplierRef) {
        const sSnap = await getDoc(supplierRef);
        supplierData = sSnap.data() || {};
      }

      // しきい値（threshold）を品目名で取得
      let alertThreshold = 100;
      if (supplierRef) {
        const thresholdRef = doc(db, 'suppliers', supplierRef.id, 'settings', itemName);
        const thresholdSnap = await getDoc(thresholdRef);
        if (thresholdSnap.exists()) {
          alertThreshold = thresholdSnap.data().alert_threshold;
        }
      }

      return {
        supplierName: supplierData.name || '不明な仕入れ先',
        ItemName: itemName, 
        address: supplierData.address || '未登録',
        phoneNumber: supplierData.phone_number || '未登録',
        email: supplierData.email || '未登録',
        remainingCount: stockData.count || 0,
        alertThreshold: alertThreshold,
      };
    }));

    return NextResponse.json(inventoryList, { status: 200 });
  } catch (error) {
    console.error('Firestore 在庫取得エラー:', error);
    return NextResponse.json({ error: '在庫情報の取得に失敗しました。' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      supplierName, 
      ItemName,     // 品目名
      count, 
      address, 
      phoneNumber,
      email,
      alertThreshold 
    } = body;

    if (!supplierName || !ItemName || count === undefined) {
      return NextResponse.json({ error: '仕入れ先名、品目名、在庫数は必須だよ！' }, { status: 400 });
    }

    const supplierRef = doc(db, 'suppliers', supplierName);
    
    // 1. 仕入れ先情報の保存
    await setDoc(supplierRef, {
      name: supplierName,
      address: address || '未登録',
      phone_number: phoneNumber || '未登録',
      email: email || '未登録',
    }, { merge: true });
    // 2. 在庫情報の保存・更新
    const stockRef = doc(db, 'suppliers', supplierName, 'inventory', ItemName);
    const stockSnap = await getDoc(stockRef);

    if (!stockSnap.exists()) {
      await setDoc(stockRef, { 
        item_name: ItemName,
        count: Number(count) 
      });
    } else {
      await updateDoc(stockRef, {
        count: increment(Number(count))
      });
    }

    // 3. 基準値もしっかり品目ごとに保存するよ
    if (alertThreshold !== undefined) {
      const thresholdRef = doc(db, 'suppliers', supplierName, 'settings', ItemName);
      await setDoc(thresholdRef, {
        alert_threshold: Number(alertThreshold),
        updatedAt: serverTimestamp()
      }, { merge: true });
    }

    return NextResponse.json({ message: `${ItemName} の在庫を更新したよ！✨` }, { status: 201 });
  } catch (error) {
    console.error('Firestore 保存エラー:', error);
    return NextResponse.json({ error: '保存に失敗しちゃった…' }, { status: 500 });
  }
}

// --- PATCH: 在庫数の修正 ---
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { supplierName, ItemName, newCount } = body;

    if (!supplierName || !ItemName || newCount === undefined) {
      return NextResponse.json({ error: '情報が足りないよ！' }, { status: 400 });
    }

    const stockRef = doc(db, 'suppliers', supplierName, 'inventory', ItemName);
    
    await updateDoc(stockRef, {
      count: Number(newCount)
    });

    return NextResponse.json({ message: '在庫数を更新したよ！✨' }, { status: 200 });
  } catch (error) {
    console.error('Firestore 在庫修正エラー:', error);
    return NextResponse.json({ error: '更新に失敗しました。' }, { status: 500 });
  }
}
// --- DELETE: 在庫の削除 ---
export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { supplierName, ItemName } = body;

    if (!supplierName || !ItemName) {
      return NextResponse.json({ error: '削除に必要な情報が足りないよ！' }, { status: 400 });
    }

    // 在庫ドキュメントを削除
    const stockRef = doc(db, 'suppliers', supplierName, 'inventory', ItemName);
    const { deleteDoc } = await import('firebase/firestore'); // deleteDocをインポート
    await deleteDoc(stockRef);

    // 任意：基準値（settings）も一緒に消したい場合はここに追加
    const thresholdRef = doc(db, 'suppliers', supplierName, 'settings', ItemName);
    await deleteDoc(thresholdRef);

    return NextResponse.json({ message: '削除に成功したよ！✨' }, { status: 200 });
  } catch (error) {
    console.error('Firestore 削除エラー:', error);
    return NextResponse.json({ error: '削除に失敗しちゃった…' }, { status: 500 });
  }
}