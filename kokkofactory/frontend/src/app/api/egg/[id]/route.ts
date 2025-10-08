import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../../generated/prisma/client'
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

export async function PUT(
    request: Request, 
    { params }: { params: { id: string } } // URLからidを取得
) {
    try {
        const id = Number(params.id); // IDを数値に変換
        const data = await request.json();
        const { coop_number, count } = data;

        if (isNaN(id)) {
            return NextResponse.json(
                { message: '有効なIDが指定されていません。' },
                { status: 400 }
            );
        }

        // 必須フィールドのチェックと数値変換 (POSTと共通)
        if (coop_number === undefined || count === undefined) {
            return NextResponse.json(
                { message: '鶏舎番号 (coop_number) と個数 (count) は必須です。' },
                { status: 400 }
            );
        }

        const coopNumberInt = Number(coop_number);
        const countInt = Number(count);

        // バリデーション (POSTと共通)
        if (isNaN(coopNumberInt) || isNaN(countInt) || coopNumberInt < 1 || coopNumberInt > 9 || countInt <= 0) {
            return NextResponse.json(
                { message: '鶏舎番号は1-9の整数、個数は正の整数である必要があります。' },
                { status: 400 }
            );
        }

        // データベースのEggレコードを更新
        const updatedEggData = await prisma.egg.update({
            where: {
                id: id,
            },
            data: {
                coop_number: coopNumberInt,
                count: countInt,
            },
        });

        // 成功した場合は、更新されたデータを200 OKとともにJSONで返す
        // クライアント側でJSONを期待しているため、200 OKとJSONを返すのが最も安全
        return NextResponse.json(
            { message: `ID ${id} の卵の記録を正常に更新しました！`, data: updatedEggData },
            { status: 200 }
        );

    } catch (error) {
        // 更新対象のIDが見つからなかった場合 (PrismaClientKnownRequestError: P2025) もここで処理
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { message: `ID ${Number(params.id)} の卵の記録が見つかりませんでした。` },
                { status: 404 }
            );
        }
        
        console.error('Prisma Eggデータ更新エラー:', error);
        return NextResponse.json(
            { message: 'サーバーエラーが発生しました。データの更新に失敗しました。' },
            { status: 500 }
        );
    }
}
