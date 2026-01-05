import { NextResponse } from 'next/server';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/firebase';

// --- PUT: 特定の死亡記録の更新 ---
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const data = await request.json();
    const { coop_number, count, cause_of_death } = data;

    // IDが空でないかチェック
    if (!id) {
      return NextResponse.json(
        { message: '有効なIDが指定されていません。' },
        { status: 400 }
      );
    }

    // 必須フィールドのチェック
    if (coop_number === undefined || count === undefined || !cause_of_death) {
      return NextResponse.json(
        { message: '鶏舎番号、死んだ羽数、および死因は必須です。' },
        { status: 400 }
      );
    }

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

    const deadChickenRef = doc(db, 'dead_chickens', id);
    
    // ドキュメントが存在するか確認
    const docSnap = await getDoc(deadChickenRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { message: `ID ${id} の死亡記録が見つかりませんでした。` },
        { status: 404 }
      );
    }

    // 更新実行
    await updateDoc(deadChickenRef, {
      coop_number: coopNumberInt,
      count: countInt,
      cause_of_death: cause_of_death,
      updatedAt: serverTimestamp(), // 更新日時を記録
    });

    return NextResponse.json(
      { message: `ID ${id} の死亡記録を正常に更新しました！` },
      { status: 200 }
    );

  } catch (error) {
    console.error('Firestore DeadChickenデータ更新エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。データの更新に失敗しました。' },
      { status: 500 }
    );
  }
}

// --- DELETE: 特定の死亡記録の削除 ---
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;

    if (!id) {
      return NextResponse.json(
        { message: '有効なIDが指定されていません。' },
        { status: 400 }
      );
    }

    const deadChickenRef = doc(db, 'dead_chickens', id);
    
    // 存在確認
    const docSnap = await getDoc(deadChickenRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { message: '削除対象の記録が見つかりませんでした。' },
        { status: 404 }
      );
    }

    // 削除実行
    await deleteDoc(deadChickenRef);

    return NextResponse.json(
      { message: `ID ${id} の記録を削除しました。` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Firestore DeadChickenデータ削除エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。削除に失敗しました。' },
      { status: 500 }
    );
  }
}