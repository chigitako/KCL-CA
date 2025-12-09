// [...]/api/stock/threshold/route.ts (【✅ 新規ファイル】)

import { PrismaClient } from '../../../../../../generated/prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// PATCHリクエスト（アラート基準値の更新）の処理
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    // 必須：更新対象の仕入れ先名と、新しいアラート基準値
    const { supplierName, newThreshold } = body;

    if (!supplierName || newThreshold === undefined || typeof newThreshold !== 'number' || newThreshold < 0) {
      return NextResponse.json({ error: 'Required fields are missing or invalid: supplierName, newThreshold (non-negative number).' }, { status: 400 });
    }

    // 1. 仕入れ先IDを取得（または存在確認）
    const supplier = await prisma.supplier.findUnique({
      where: { name: supplierName },
      select: { id: true },
    });

    if (!supplier) {
      return NextResponse.json({ error: '指定された仕入れ先は存在しません。' }, { status: 404 });
    }
    
    // 2. StockThreshold レコードを UPSERT (更新または作成)
    //    SupplierIdがUNIQUEなので、findUnique/update/create/upsertが利用できます。
    const upsertedThreshold = await prisma.stockThreshold.upsert({
      where: {
        supplierId: supplier.id, // Supplier IDをキーに探す
      },
      update: {
        alert_threshold: newThreshold, // 基準値を更新
      },
      create: {
        supplierId: supplier.id,
        alert_threshold: newThreshold, // 基準値を作成
      },
    });

    return NextResponse.json(upsertedThreshold, { status: 200 });

  } catch (error: any) {
    console.error('Error updating stock threshold:', error);
    return NextResponse.json({ error: 'アラート基準値の更新に失敗しました。' }, { status: 500 });
  }
}