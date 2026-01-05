import { NextResponse } from 'next/server';
import { 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { db } from '@/firebase';

// --- PUT: 特定の卵の記録を更新 ---
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id; // FirestoreのドキュメントIDは文字列
    const data = await request.json();
    const { coop_number, count } = data;

    if (!id) {
      return NextResponse.json(
        { message: '有効なIDが指定されていません。' },
        { status: 400 }
      );
    }

    // 必須フィールドのチェック
    if (coop_number === undefined || count === undefined) {
      return NextResponse.json(
        { message: '鶏舎番号 (coop_number) と個数 (count) は必須です。' },
        { status: 400 }
      );
    }

    const coopNumberInt = Number(coop_number);
    const countInt = Number(count);

    // バリデーション
    if (isNaN(coopNumberInt) || isNaN(countInt) || coopNumberInt < 1 || coopNumberInt > 9 || countInt < 0) {
      return NextResponse.json(
        { message: '鶏舎番号は1-9の整数、個数は0以上の整数である必要があります。' },
        { status: 400 }
      );
    }

    const eggRef = doc(db, 'eggs', id);
    
    // ドキュメントが存在するか確認
    const docSnap = await getDoc(eggRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { message: `ID ${id} の卵の記録が見つかりませんでした。` },
        { status: 404 }
      );
    }

    // 更新実行
    await updateDoc(eggRef, {
      coop_number: coopNumberInt,
      count: countInt,
      updatedAt: serverTimestamp(), // 更新した時間を記録しておくと便利！
    });

    return NextResponse.json(
      { message: `ID ${id} の卵の記録を正常に更新しました！` },
      { status: 200 }
    );

  } catch (error) {
    console.error('Firestore Eggデータ更新エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。データの更新に失敗しました。' },
      { status: 500 }
    );
  }
}

// --- DELETE: 特定の卵の記録を削除 ---
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

    const eggRef = doc(db, 'eggs', id);
    
    // 存在確認
    const docSnap = await getDoc(eggRef);
    if (!docSnap.exists()) {
      return NextResponse.json(
        { message: '削除対象の記録が見つかりませんでした。' },
        { status: 404 }
      );
    }

    // 削除実行
    await deleteDoc(eggRef);

    return NextResponse.json(
      { message: `ID ${id} の記録を削除しました。` },
      { status: 200 }
    );
  } catch (error) {
    console.error('Firestore Eggデータ削除エラー:', error);
    return NextResponse.json(
      { message: 'サーバーエラーが発生しました。削除に失敗しました。' },
      { status: 500 }
    );
  }
}