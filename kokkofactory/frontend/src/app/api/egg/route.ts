import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../generated/prisma/client'
let prisma: PrismaClient;

// @ts-ignore
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // @ts-ignore
  if (!global.prisma) {
    // @ts-ignore
    global.prisma = new PrismaClient();
  }
  // @ts-ignore
  prisma = global.prisma;
}


export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { coop_number, count } = data;

    // 必須フィールドのチェックと数値変換
    if (coop_number === undefined || count === undefined) {
      return NextResponse.json(
        { message: '鶏舎番号 (coop_number) と個数 (count) は必須です。' },
        { status: 400 }
      );
    }

    // 文字列として受け取った値を安全に数値に変換
    const coopNumberInt = Number(coop_number);
    const countInt = Number(count);

    // バリデーション
    if (isNaN(coopNumberInt) || isNaN(countInt) || coopNumberInt < 1 || coopNumberInt > 9 || countInt <= 0) {
      return NextResponse.json(
        { message: '鶏舎番号は1-9の整数、個数は正の整数である必要があります。' },
        { status: 400 }
      );
    }

    // データベースに新しいEggレコードを作成
    const newEggData = await prisma.egg.create({
      data: {
        coop_number: coopNumberInt,
        count: countInt,
      },
    });

    return NextResponse.json(
      { message: '卵の数を正常に記録しました！', data: newEggData },
      { status: 201 }
    );
  } catch (error) {
    console.error('Prisma Eggデータ保存エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。データベースの接続を確認してください。' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Eggテーブルから全てのレコードを取得
    const eggList = await prisma.egg.findMany({
      // 一覧表示は新しいデータが上にあると便利なので、dateの降順でソートするね
      orderBy: {
        date: 'desc', 
      },
    });

    // 取得したデータを200 OKとともに返す
    return NextResponse.json(eggList, { status: 200 });
  } catch (error) {
    console.error('Prisma Eggデータ取得エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。一覧データの取得に失敗しました。' },
      { status: 500 }
    );
  }
}
