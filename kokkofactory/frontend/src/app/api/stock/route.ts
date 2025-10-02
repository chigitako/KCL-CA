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

// PATCHリクエスト（在庫数の更新）の処理を追加
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    // 必須：更新対象の仕入れ先名と、新しい在庫数
    const { supplierName, newCount } = body;

    if (!supplierName || newCount === undefined || typeof newCount !== 'number') {
      return NextResponse.json({ error: 'Required fields are missing or invalid: supplierName, newCount (number).' }, { status: 400 });
    }

    // 1. 仕入れ先IDを取得（または存在確認）
    const supplier = await prisma.supplier.findUnique({
      where: { name: supplierName },
    });

    if (!supplier) {
      return NextResponse.json({ error: '指定された仕入れ先は存在しません。' }, { status: 404 });
    }

    // 2. 該当する仕入れ先の在庫レコードを取得し、supplierIdで検索しidで更新
    // NOTE: ここでは「仕入れ先と在庫が1対1」のモデルを想定し、supplierIdでレコードを検索しidで更新します。
    const stockRecord = await prisma.stock.findFirst({
      where: {
        supplierId: supplier.id,
      },
    });

    if (!stockRecord) {
      return NextResponse.json({ error: '指定された仕入れ先の在庫情報が見つかりません。' }, { status: 404 });
    }

    const updatedStock = await prisma.stock.update({
      where: {
        id: stockRecord.id,
      },
      data: {
        count: newCount, // 在庫数のみを更新
      },
      include: {
        supplier: true, // 応答に仕入れ先情報を含める
      },
    });

    return NextResponse.json(updatedStock, { status: 200 });

  } catch (error: any) {
    // レコードが見つからなかった場合（updateMany/updateではNotFoundにならないため、ここでは一般的なエラー処理）
    if (error.code === 'P2025') {
        return NextResponse.json({ error: '在庫情報の更新対象が見つかりませんでした。' }, { status: 404 });
    }
    console.error('Error updating stock count:', error);
    return NextResponse.json({ error: '在庫数の更新に失敗しました。' }, { status: 500 });
  }
}