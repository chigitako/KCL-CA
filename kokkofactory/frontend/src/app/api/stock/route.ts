import { PrismaClient } from '../../../../../generated/prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// GETリクエスト（在庫一覧の取得）の処理
export async function GET() {
  try {
    // 全ての仕入れ在庫情報を取得し、仕入れ先情報を含める
    const allPurchaseStocks = await prisma.stock.findMany({
      include: { supplier: true },
    });

    const inventoryList = allPurchaseStocks.map((stock) => ({
      supplierName: stock.supplier.name,
     ItemName:stock.supplier.item_name,
      address: stock.supplier.address,
      phoneNumber: stock.supplier.phone_number,
      email: stock.supplier.email,
      remainingCount: stock.count,
    }));

    return NextResponse.json(inventoryList, { status: 200 });
  } catch (error) {
    console.error('Error fetching inventory:', error);
    return NextResponse.json({ error: '在庫情報の取得に失敗しました。' }, { status: 500 });
  }
}

// POSTリクエスト（在庫の新規作成と仕入れ先の同時作成）の処理
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { supplierName, count } = body;

    // 必須フィールドの検証
    if (!supplierName || count === undefined) {
      return NextResponse.json({ error: 'Required fields are missing: supplierName or count.' }, { status: 400 });
    }

    // トランザクションを使って、複数の処理を安全に実行
    const result = await prisma.$transaction(async (tx) => {
      // 1. 仕入れ先を検索し、なければ作成
      let supplier = await tx.supplier.findUnique({
        where: { name: supplierName },
      });

      if (!supplier) {
        supplier = await tx.supplier.create({
          data: {
            name: supplierName,
            // 必要に応じて他のフィールドもここで追加
            address: '未登録',
            phone_number: '未登録',
            email: '未登録',
          },
        });
      }

      // 2. 新しい在庫情報をデータベースに作成
      const newStock = await tx.stock.create({
        data: {
          supplierId: supplier.id,
          count: count,
        },
      });

      return newStock;
    });

    // 新しく作成された在庫情報を返す
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    console.error('Error creating new stock:', error);
    return NextResponse.json({ error: '新しい在庫の作成に失敗しました。' }, { status: 500 });
  }
}