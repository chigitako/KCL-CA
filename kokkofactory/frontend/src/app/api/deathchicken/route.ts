import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ['query'], // デバッグ時に有効にしてください
  });

// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { coop_number, count, cause_of_death } = data;

    // 必須フィールドのチェック
    if (coop_number === undefined || count === undefined || !cause_of_death) {
      return NextResponse.json(
        { message: '鶏舎番号、死んだ羽数、および死因は必須です。' },
        { status: 400 }
      );
    }

    // 数値への安全な変換
    const coopNumberInt = Number(coop_number);
    const countInt = Number(count);

    // バリデーション
    if (
      isNaN(coopNumberInt) || isNaN(countInt) ||
      coopNumberInt < 1 || coopNumberInt > 9 || 
      countInt < 0 || typeof cause_of_death !== 'string' || cause_of_death.trim() === ''
    ) {
      return NextResponse.json(
        { message: '入力値が不正です。鶏舎番号は1-9、羽数は0以上の整数、死因は文字列である必要があります。' },
        { status: 400 }
      );
    }

    // データベースに新しいDeadChickenレコードを作成
    const newDeadChickenData = await prisma.deadChicken.create({
      data: {
        coop_number: coopNumberInt,
        count: countInt,
        cause_of_death: cause_of_death,
        // dateはスキーマで @default(now()) が設定されているため、指定不要
      },
    });

    return NextResponse.json(
      { message: '死んだ鶏の数を正常に記録しました！', data: newDeadChickenData },
      { status: 201 }
    );
  } catch (error) {
    console.error('Prisma DeadChickenデータ保存エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。データベースの接続を確認してください。' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: 'GETメソッドは許可されていません。' }, { status: 405 });
}
