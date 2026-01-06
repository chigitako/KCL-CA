import { NextResponse } from 'next/server';
import { 
  doc, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db } from '@/firebase';

// --- PATCH: 品目名ごとのアラート基準値更新 ---
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    // 🌸 フロントエンドから届く名前を確認
    const { supplierName, ItemName, newThreshold } = body;

    if (!supplierName || !ItemName || newThreshold === undefined) {
      return NextResponse.json({ error: '項目が足りないよ！' }, { status: 400 });
    }

    // 🌸 画像4枚目のパスにピッタリ合わせたよ！
    // suppliers / {仕入れ先名} / settings / {品目名}
    const targetRef = doc(db, 'suppliers', supplierName, 'settings', ItemName);

    try {
      // まずは更新を試みる
      await updateDoc(targetRef, {
        alert_threshold: newThreshold,
        updatedAt: new Date()
      });
    } catch (e) {
      // ドキュメントがない場合は新規作成
      await setDoc(targetRef, {
        alert_threshold: newThreshold,
        updatedAt: new Date()
      }, { merge: true });
    }

    return NextResponse.json(
      { message: `${ItemName} の基準値を ${newThreshold} に更新したよ！✨` }, 
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Firestore更新エラー:', error);
    return NextResponse.json({ error: '更新に失敗しちゃった💦' }, { status: 500 });
  }
}