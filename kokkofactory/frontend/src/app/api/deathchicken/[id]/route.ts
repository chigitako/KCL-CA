import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../../../generated/prisma/client'

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    // log: ['query'], // デバッグ時に有効にしてください
  });

// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;



export async function PUT(
    request: Request, 
    { params }: { params: { id: string } } // URLからidを取得
) {
    try {
        const id = Number(params.id); // IDを数値に変換
        const data = await request.json();
        const { coop_number, count, cause_of_death } = data; // 死因も受け取る

        if (isNaN(id)) {
            return NextResponse.json(
                { message: '有効なIDが指定されていません。' },
                { status: 400 }
            );
        }

        // 必須フィールドのチェック (POSTと共通)
        if (coop_number === undefined || count === undefined || !cause_of_death) {
            return NextResponse.json(
                { message: '鶏舎番号、死んだ羽数、および死因は必須です。' },
                { status: 400 }
            );
        }

        const coopNumberInt = Number(coop_number);
        const countInt = Number(count);

        // バリデーション (POSTと共通)
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

        // データベースのDeadChickenレコードを更新
        const updatedDeadChickenData = await prisma.deadChicken.update({
            where: {
                id: id,
            },
            data: {
                coop_number: coopNumberInt,
                count: countInt,
                cause_of_death: cause_of_death, // ✨ 死因を更新データに追加
            },
        });

        // 成功した場合は、更新されたデータを200 OKとともにJSONで返す
        return NextResponse.json(
            { message: `ID ${id} の死亡記録を正常に更新しました！`, data: updatedDeadChickenData },
            { status: 200 }
        );

    } catch (error) {
        // 更新対象のIDが見つからなかった場合 (PrismaClientKnownRequestError: P2025) もここで処理
        if (error instanceof Error && 'code' in error && error.code === 'P2025') {
            return NextResponse.json(
                { message: `ID ${Number(params.id)} の死亡記録が見つかりませんでした。` },
                { status: 404 }
            );
        }
        
        console.error('Prisma DeadChickenデータ更新エラー:', error);
        return NextResponse.json(
            { message: 'サーバーエラーが発生しました。データの更新に失敗しました。' },
            { status: 500 }
        );
    }
}