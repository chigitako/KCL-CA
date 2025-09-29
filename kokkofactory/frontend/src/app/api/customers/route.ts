import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/prisma/client'
const prisma = new PrismaClient();

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name') || '';
    const address = searchParams.get('address') || '';
    const phone_number = searchParams.get('phone_number') || '';
    const email = searchParams.get('email') || '';

    const customers = await prisma.customer.findMany({
      where: {
        AND: [
          { name: { contains: name, mode: 'insensitive' } },
          { address: { contains: address, mode: 'insensitive' } },
          { phone_number: { contains: phone_number } },
          { email: { contains: email, mode: 'insensitive' } },
        ],
      },
      select: {
        id: true,
        name: true,
        address: true,
        phone_number: true,
        email: true,
      },
    });

    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch customers.' },
      { status: 500 }
    );
  }
}
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, address, phone_number, email } = body;

    if (!name) {
      return NextResponse.json({ error: 'Customer name is required.' }, { status: 400 });
    }

    const newCustomer = await prisma.customer.create({
      data: {
        name,
        address: address || null,
        phone_number: phone_number || null,
        email: email || null,
      },
    });

    return NextResponse.json(newCustomer, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002' && error.meta?.target.includes('name')) {
      return NextResponse.json({ error: 'A customer with this name already exists.' }, { status: 409 });
    }
    console.error('Error creating new customer:', error);
    return NextResponse.json(
      { error: 'Failed to create new customer.' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: 'Customer ID is required.' }, { status: 400 });
    }

    // トランザクションを使って関連レコードを先に削除
    const result = await prisma.$transaction(async (tx) => {
      // 関連するShipmentレコードを削除
      await tx.shipment.deleteMany({
        where: { customerId: Number(id) },
      });

      // その後、Customerレコードを削除
      const deletedCustomer = await tx.customer.delete({
        where: { id: Number(id) },
      });

      return deletedCustomer;
    });

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return NextResponse.json({ error: 'Customer not found.' }, { status: 404 });
    }
    console.error('Error deleting customer:', error);
    return NextResponse.json(
      { error: 'Failed to delete customer.' },
      { status: 500 }
    );
  }
}