// src/app/web/stock/page.tsx
"use client";

import { useState, useEffect, useCallback } from 'react';
import LoadingScreen from "@components/LoadingScreen";

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
    <div style={styles.container}>
      
      {/* エラーメッセージ表示 */}
      {error && <div style={styles.error}>{error}</div>}

      {/* ----------------- 在庫一覧表示 ----------------- */}
      {loading ? (
        <LoadingScreen message="データ読み込み中・・・" />
      ) : (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>仕入れ先名</th>
              <th style={styles.th}>品目名</th>
              <th style={styles.th}>在庫数</th>
              <th style={styles.th}>住所</th>
              <th style={styles.th}>連絡先</th>
            </tr>
          </thead>
          <tbody>
            {inventory.length === 0 ? (
              <tr>
                <td colSpan={5} style={styles.td}>在庫データがありません。</td>
              </tr>
            ) : (
              inventory.map((item, index) => (
                <tr key={index} style={index % 2 === 0 ? styles.rowEven : styles.rowOdd}>
                  <td style={styles.td}>{item.supplierName}</td>
                  <td style={styles.td}>{item.ItemName}</td>
                  <td style={styles.tdRight}>{item.remainingCount.toLocaleString()}</td>
                  <td style={styles.td}>{item.address}</td>
                  <td style={styles.td}>{item.phoneNumber} / {item.email}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}


const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  header: {
    color: '#ff66aa', // ピンク色
    borderBottom: '2px solid #ffcc00', // 黄色の下線
    paddingBottom: '10px',
  },
  subHeader: {
    color: '#ffcc00', // 黄色
    marginTop: '20px',
    marginBottom: '15px',
  },
  formSection: {
    backgroundColor: '#fffbe6', // 淡い黄色背景
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #ffcc00',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    gap: '20px',
    alignItems: 'flex-end',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '200px',
  },
  button: {
    backgroundColor: '#ff66aa', // ピンク色
    color: 'white',
    padding: '10px 20px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid #ccc',
    margin: '30px 0',
  },
  error: {
    backgroundColor: '#fdd',
    color: '#d00',
    padding: '10px',
    borderRadius: '4px',
    marginBottom: '20px',
    border: '1px solid #f00',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '15px',
  },
  th: {
    backgroundColor: '#ffcc00', // 黄色ヘッダー
    color: '#333',
    padding: '12px 10px',
    textAlign: 'left',
    border: '1px solid #e0e0e0',
  },
  td: {
    padding: '10px',
    border: '1px solid #e0e0e0',
    textAlign: 'left',
  },
  tdRight: {
    padding: '10px',
    border: '1px solid #e0e0e0',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  rowEven: {
    backgroundColor: '#f9f9f9',
  },
  rowOdd: {
    backgroundColor: '#fff',
  }
};