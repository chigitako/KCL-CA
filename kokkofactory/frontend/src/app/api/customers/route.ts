import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/prisma/client'

const prisma = new PrismaClient();
export async function GET(request: Request) {
  try {
    // Prismaを使ってCustomerテーブルからすべてのレコードを取得
    const customers = await prisma.customer.findMany({
      // 取得するカラムを指定することもできます
      select: {
        id: true,
        name: true,
        address: true,
        phone_number: true,
        email: true,
      },
    });

    // 取得したデータをJSON形式で返す
    return NextResponse.json(customers);
  } catch (error) {
    console.error('Error fetching customers:', error);
    // エラーが発生した場合は、500ステータスコードとエラーメッセージを返す
    return NextResponse.json(
      { error: 'Failed to fetch customers.' },
      { status: 500 }
    );
  }
}