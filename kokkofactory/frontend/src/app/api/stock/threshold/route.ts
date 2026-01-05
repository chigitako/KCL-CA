import { NextResponse } from 'next/server';
import { 
  doc, 
  getDoc, 
  setDoc, 
  updateDoc 
} from 'firebase/firestore';
import { db } from '@/firebase';

// --- PATCH: アラート基準値（しきい値）の更新 ---
export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    // 必須：更新対象の仕入れ先名と、新しいアラート基準値
    const { supplierName, newThreshold } = body;

    if (!supplierName || newThreshold === undefined || typeof newThreshold !== 'number' || newThreshold < 0) {
      return NextResponse.json(
        { error: 'Required fields are missing or invalid: supplierName, newThreshold (non-negative number).' }, 
        { status: 400 }
      );
    }

    // 1. 仕入れ先の存在確認
    const supplierRef = doc(db, 'suppliers', supplierName);
    const supplierSnap = await getDoc(supplierRef);

    if (!supplierSnap.exists()) {
      return NextResponse.json({ error: '指定された仕入れ先は存在しません。' }, { status: 404 });
    }
    
    // 2. Threshold ドキュメントを UPSERT (作成または更新)
    // 構造: suppliers/{supplierName}/settings/threshold
    const thresholdRef = doc(db, 'suppliers', supplierName, 'settings', 'threshold');
    const thresholdSnap = await getDoc(thresholdRef);

    if (!thresholdSnap.exists()) {
      // まだ設定がない場合は新規作成（setDoc）
      await setDoc(thresholdRef, {
        alert_threshold: newThreshold,
        updatedAt: new Date()
      });
    } else {
      // 既にある場合は更新（updateDoc）
      await updateDoc(thresholdRef, {
        alert_threshold: newThreshold,
        updatedAt: new Date()
      });
    }

    return NextResponse.json(
      { message: 'アラート基準値を更新しました！', supplierName, alert_threshold: newThreshold }, 
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Firestore Threshold更新エラー:', error);
    return NextResponse.json({ error: 'アラート基準値の更新に失敗しました。' }, { status: 500 });
  }
}