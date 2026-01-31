import { NextResponse } from "next/server";
import { adminDb, adminTimestamp } from "@/utils/firebase/server";

// ====================
// GET: 出荷一覧取得
// ====================
export async function GET(request: Request) {
  try {
    const querySnapshot = await adminDb
      .collectionGroup("shipments")
      .orderBy("shipment_date", "desc")
      .get();

    const shipmentsWithDetails = await Promise.all(
      querySnapshot.docs.map(async (shipDoc) => {
        const shipmentData = shipDoc.data();
        const customerRef = shipDoc.ref.parent.parent;
        let customerData: any = {};
        if (customerRef) {
          const cSnap = await customerRef.get();
          customerData = cSnap.data() || {};
        }

        return {
          id: shipDoc.id,
          vendor: customerData.name || "不明な取引先",
          address: customerData.address || null,
          phoneNumber: customerData.phone_number || null,
          email: customerData.email || null,
          shipmentDate: shipmentData.shipment_date?.toDate ? shipmentData.shipment_date.toDate().toISOString() : "",
          shippedCount: shipmentData.shipped_count ?? 0,
        };
      })
    );

    console.log("DEBUG shipmentsWithDetails:", JSON.stringify(shipmentsWithDetails, null, 2));

    return NextResponse.json(shipmentsWithDetails, { status: 200 });
  } catch (error) {
    console.error("Firestore Shipment取得エラー:", error);
    return NextResponse.json({ error: "データの取得に失敗しました。" }, { status: 500 });
  }
}

// ====================
// POST: 出荷情報作成
// ====================
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phone_number, email, address, shipment_date, shipped_count } = body;

    if (!customerName || shipped_count === undefined) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    const customerRef = adminDb.collection('customers').doc(customerName);
    const customerSnap = await customerRef.get();

    if (!customerSnap.exists) {
      await customerRef.set({
        name: customerName,
        phone_number: phone_number || null,
        email: email || null,
        address: address || null,
        createdAt: new Date().toISOString(),
      });
    }

    await customerRef.collection('shipments').add({
      shipped_count: Number(shipped_count),
      shipment_date: shipment_date ? new Date(shipment_date) : adminTimestamp.now(),
    });

    return NextResponse.json({ message: 'Created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating new shipment:', error);
    return NextResponse.json({ error: 'Failed to create new shipment.' }, { status: 500 });
  }
}