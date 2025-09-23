'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css'; // CSSファイルをインポート
import LeftPullTab from '@components/LeftPullTab';

interface InventoryItem {
  supplierName: string;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  remainingCount: number;
}

export default function Page() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/api/stock');
        if (!response.ok) {
          throw new Error('Failed to fetch inventory data');
        }
        const data: InventoryItem[] = await response.json();
        setInventory(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchInventory();
  }, []);

  if (loading) {
    return <div className={styles.loading}>在庫情報を読み込み中...</div>;
  }

  if (error) {
    return <div className={`${styles.loading} ${styles.error}`}>エラーが発生しました: {error}</div>;
  }

  return (
    <LeftPullTab>
    <div className={styles.container}>
        <div className={styles.header}>
          <a href="/web/stock/new" className={styles.newButton}>新規作成</a>
        </div>
      <h1 className={styles.title}>在庫一覧</h1>
      <div className={styles.tableContainer}>
        
        {inventory.length > 0 ? (
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th scope="col" className={styles.th}>仕入れ先</th>
                <th scope="col" className={styles.th}>備品名</th>
                <th scope="col" className={styles.th}>住所</th>
                <th scope="col" className={styles.th}>電話番号</th>
                <th scope="col" className={styles.th}>残り個数</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {inventory.map((item, index) => (
                <tr key={index}>
                  <td className={styles.td}>{item.supplierName}</td>
                  <td className={styles.td}>{item.ItemName}</td>
                  <td className={styles.td}>{item.address || 'N/A'}</td>
                  <td className={styles.td}>{item.phoneNumber || 'N/A'}</td>
                  <td className={styles.td}>{item.remainingCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className={styles.noData}>在庫情報がありません。</div>
        )}
      </div>
    </div>
    </LeftPullTab>
  );
}