import { PrismaClient } from '../../../../../generated/prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GETリクエスト（データ取得）の処理
export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');

  if (id) {
    // 特定のIDのデータを取得
    try {
      const shipment = await prisma.shipment.findUnique({
        where: { id: Number(id) },
        include: { customer: true },
      });

      if (!shipment) {
        return NextResponse.json({ error: '指定された出荷情報が見つかりません。' }, { status: 404 });
      }

      const shipmentDetails = {
        vendor: shipment.customer.name,
        address: shipment.customer.address,
        phoneNumber: shipment.customer.phone_number,
        email: shipment.customer.email,
        shipmentDate: shipment.shipment_date,
        shippedCount: shipment.shipped_count,
      };

      return NextResponse.json(shipmentDetails, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'データの取得に失敗しました。' }, { status: 500 });
    }
  } else {
    // 全てのデータを取得
    try {
      const allShipments = await prisma.shipment.findMany({
        include: { customer: true },
      });

    interface Customer {
        name: string;
        address: string | null;
        phone_number: string | null;
        email: string | null;
    }

    interface Shipment {
        customer: Customer;
        shipment_date: Date;
        shipped_count: number;
    }

    interface ShipmentDetails {
        vendor: string;
        address: string | null;
        phoneNumber: string | null;
        email: string | null;
        shipmentDate: Date;
        shippedCount: number;
    }

      const shipmentsWithDetails: ShipmentDetails[] = allShipments.map((shipment: Shipment) => ({
        vendor: shipment.customer.name,
        address: shipment.customer.address,
        phoneNumber: shipment.customer.phone_number,
        email: shipment.customer.email,
        shipmentDate: shipment.shipment_date,
        shippedCount: shipment.shipped_count,
      }));
      return NextResponse.json(shipmentsWithDetails, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ error: 'データの取得に失敗しました。' }, { status: 500 });
    }
  }
}

// POSTリクエスト（データ作成）の処理
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { customerName, phone_number, email, address, shipment_date, shipped_count, remaining_count } = body;

    if (!customerName || !shipped_count || !remaining_count) {
      return NextResponse.json({ error: 'Required fields are missing.' }, { status: 400 });
    }

    let customer = await prisma.customer.findUnique({
      where: { name: customerName },
    });

    if (!customer) {
      customer = await prisma.customer.create({
        data: {
          name: customerName,
          phone_number: phone_number || null,
          email: email || null,
          address: address || null,
        },
      });
    }

    const newShipment = await prisma.shipment.create({
      data: {
        customerId: customer.id,
        shipped_count,
        shipment_date: shipment_date ? new Date(shipment_date) : new Date(),
      },
    });

    return NextResponse.json(newShipment, { status: 201 });
  } catch (error) {
    console.error('Error creating new shipment:', error);
    return NextResponse.json(
      { error: 'Failed to create new shipment.' },
      { status: 500 }
    );
  }
}