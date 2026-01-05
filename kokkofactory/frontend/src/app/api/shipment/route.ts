import { NextResponse } from 'next/server';
import { 
  collection, 
  collectionGroup, 
  getDocs, 
  getDoc, 
  doc, 
  setDoc, 
  addDoc, 
  serverTimestamp, 
  query, 
  orderBy 
} from 'firebase/firestore';
import { db } from '@/firebase';

// GETリクエスト（データ取得）の処理
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id'); // 単一取得の場合は id を使用
  const customerName = url.searchParams.get('customerName'); // 取引先名で絞る場合

  try {
    if (id && customerName) {
      // 1. 特定の取引先の特定の出荷情報を取得
      const shipmentRef = doc(db, 'customers', customerName, 'shipments', id);
      const shipmentSnap = await getDoc(shipmentRef);
      const customerSnap = await getDoc(doc(db, 'customers', customerName));

      if (!shipmentSnap.exists() || !customerSnap.exists()) {
        return NextResponse.json({ error: '指定された出荷情報が見つかりません。' }, { status: 404 });
      }

      const shipmentData = shipmentSnap.data();
      const customerData = customerSnap.data();

      return NextResponse.json({
        vendor: customerData.name,
        address: customerData.address,
        phoneNumber: customerData.phone_number,
        email: customerData.email,
        shipmentDate: shipmentData.shipment_date?.toDate(),
        shippedCount: shipmentData.shipped_count,
      });

    } else {
      // 2. 全ての出荷情報を取得（collectionGroup を使用）
      // 注意：Firebaseコンソールで「インデックス」の作成が必要になる場合があるよ🌸
      const allShipmentsQuery = query(collectionGroup(db, 'shipments'), orderBy('shipment_date', 'desc'));
      const querySnapshot = await getDocs(allShipmentsQuery);

      const shipmentsWithDetails = await Promise.all(querySnapshot.docs.map(async (shipDoc) => {
        const shipmentData = shipDoc.data();
        // 親（取引先）の情報を取得
        const customerRef = shipDoc.ref.parent.parent; 
        let customerData: any = {};
        if (customerRef) {
          const cSnap = await getDoc(customerRef);
          customerData = cSnap.data() || {};
        }

        return {
          id: shipDoc.id,
          vendor: customerData.name || '不明な取引先',
          address: customerData.address,
          phoneNumber: customerData.phone_number,
          email: customerData.email,
          shipmentDate: shipmentData.shipment_date?.toDate(),
          shippedCount: shipmentData.shipped_count,
        };
      }));

      return NextResponse.json(shipmentsWithDetails, { status: 200 });
    }
  } catch (error) {
    console.error('Firestore Shipment取得エラー:', error);
    return NextResponse.json({ error: 'データの取得に失敗しました。' }, { status: 500 });
  }
}

// POSTリクエスト（データ作成）の処理
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phone_number, email, address, shipment_date, shipped_count } = body;

    if (!customerName || !shipped_count) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    // 取引先の参照（名前をIDとして使用）
    const customerRef = doc(db, 'customers', customerName);
    const customerSnap = await getDoc(customerRef);

    // 取引先がなければ作成する（Prismaのupsert的な動き）
    if (!customerSnap.exists()) {
      await setDoc(customerRef, {
        name: customerName,
        phone_number: phone_number || null,
        email: email || null,
        address: address || null,
        createdAt: serverTimestamp(),
      });
    }

    // 出荷情報をサブコレクションに追加 
    const newShipmentRef = await addDoc(collection(customerRef, 'shipments'), {
      shipped_count: Number(shipped_count),
      shipment_date: shipment_date ? new Date(shipment_date) : serverTimestamp(),
    });

    return NextResponse.json({ id: newShipmentRef.id, message: 'Created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating new shipment:', error);
    return NextResponse.json({ error: 'Failed to create new shipment.' }, { status: 500 });
  }
}