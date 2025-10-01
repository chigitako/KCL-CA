// src/app/web/stock/page.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from "@components/LoadingScreen";
import LeftPullTab from "@components/LeftPullTab";
import styles from "./page.module.css";


// 在庫情報の型定義（APIのGETリクエストのレスポンスに基づく）
interface InventoryItem {
  supplierName: string;
  ItemName: string;
  address: string;
  phoneNumber: string;
  email: string;
  remainingCount: number;
}

// フォームの入力値の型定義
interface NewStockForm {
  supplierName: string;
  count: string; // 入力値は文字列として扱う
}

// --------------------------------------------------
// 1. API通信関数
// --------------------------------------------------

/**
 * 在庫一覧を取得するAPI呼び出し
 */
const fetchInventory = async (): Promise<InventoryItem[]> => {
  const res = await fetch('/api/stock');
  
  if (!res.ok) {
    // サーバーエラーの場合、具体的なメッセージを表示
    const errorBody = await res.json();
    throw new Error(`在庫の取得に失敗しました: ${errorBody.error || res.statusText}`);
  }
  
  return res.json();
};

/**
 * 新しい在庫情報を登録するAPI呼び出し
 */
const createStock = async (data: NewStockForm) => {
  const payload = {
    supplierName: data.supplierName,
    count: parseInt(data.count, 10), // 数値に変換して送信
  };

  const res = await fetch('/api/stock', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // サーバーエラーの場合、具体的なメッセージを表示
    const errorBody = await res.json();
    throw new Error(`登録に失敗しました: ${errorBody.error || res.statusText}`);
  }
  
  return res.json();
};


// --------------------------------------------------
// 2. メインコンポーネント
// --------------------------------------------------

export default function StockPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState<NewStockForm>({ supplierName: '', count: '' });
  // 更新ボタン用ハンドラ
  const handleUpdate = (item: InventoryItem) => {
    // ここで編集ページに飛ぶとか、モーダルを開くとかにゃ
    // 今は簡単にアラート表示にしてみる
    alert(`${item.supplierName} の在庫情報を更新します`);
  };


  // 在庫一覧をフェッチするコールバック
  const loadInventory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchInventory();
      setInventory(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('在庫一覧の読み込み中に不明なエラーが発生しました。');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInventory();
  }, [loadInventory]);

  // フォーム入力ハンドラ
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // フォーム送信ハンドラ
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.supplierName.trim() || !formData.count.trim()) {
      setError('仕入れ先名と在庫数は必須です。');
      return;
    }
    if (isNaN(parseInt(formData.count, 10))) {
      setError('在庫数は数値で入力してください。');
      return;
    }

    try {
      await createStock(formData);
      
      // 成功したら一覧を再読み込みし、フォームをクリア
      await loadInventory();
      setFormData({ supplierName: '', count: '' });
      alert('新しい在庫が登録されました！💖');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('在庫の登録中に不明なエラーが発生しました。');
      }
    }
  };

  return (
    <LeftPullTab>
      <div className={styles.container}>
        
        {/* エラーメッセージ表示 */}
        {error && <div className={styles.error}>{error}</div>}

        {/* ----------------- 在庫一覧表示 ----------------- */}
        {loading ? (
          <LoadingScreen message="データ読み込み中・・・" />
        ) : (
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>仕入れ先名</th>
                <th>品目名</th>
                <th>在庫数</th>
                <th>住所</th>
                <th>連絡先</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {inventory.length === 0 ? (
                <tr>
                  <td colSpan={5}>在庫データがありません。</td>
                </tr>
              ) : (
                inventory.map((item, index) => (
                  <tr key={index} className={styles.tableRow}>
                    <td>{item.supplierName}</td>
                    <td>{item.ItemName}</td>
                    <td >{item.remainingCount.toLocaleString()}</td>
                    <td>{item.address}</td>
                    <td>{item.phoneNumber} / {item.email}</td>
                    <td>
                      <button
                        className={styles.updateButton}
                        onClick={() => handleUpdate(item)}
                      >
                        🖊️ 更新
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </LeftPullTab>
  );
}


