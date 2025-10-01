"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LeftPullTab from "@components/LeftPullTabMobile";
import styles from './page.module.css'; // CSSファイルをインポート
import { useShipment } from '@components/ShipmentContext';
import LoadingScreen from "@components/LoadingScreen";

// APIから取得するデータの型を定義（配列を想定）
interface ShipmentDetails {
  vendor: string;
  address: string | null;
  phoneNumber: string | null;
  email: string | null;
  shipmentDate: string;
  shippedCount: number;
}

export default function WebPage() {
  const { shipments, setShipments } = useShipment();
  //const [shipments, setShipments] = useState<ShipmentDetails[]>([]);
  const [loading, setLoading] = useState(shipments.length === 0); // Context にデータあるかで判定
  //const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); 

  const handleShowGraph = () => {
    router.push('/mobile/shipment/graph');
  };

  const handleNew = () => {
    router.push('/mobile/shipment/new');
  }

  useEffect(() => {
    if (shipments.length === 0) {
      const fetchShipments = async () => {
        try {
          // バックエンドのAPIにアクセス
          // すべてのデータを取得するため、IDは指定しない
          const response = await fetch('/api/shipment');
          if (!response.ok) {
            throw new Error('APIからデータの取得に失敗しました。');
          }
          const data: ShipmentDetails[] = await response.json();
          setShipments(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'データの取得中にエラーが発生しました。');
        } finally {
          setLoading(false);
        }
      };
      fetchShipments();
    } else {
      setLoading(false);
    }
  }, [shipments, setShipments]);

  if (loading) return <LoadingScreen message="データ読み込み中・・・" />;
  if (error) return <div>エラー: {error}</div>;

  return (
    <LeftPullTab>
      <div className ={styles.container}>
        <div className={styles.header}>
          <button className={styles.createGraph} onClick={handleShowGraph}>
            グラフを表示
          </button>
          <button className={styles.createGraph} onClick={handleNew}>
            新規出荷情報
          </button>
        </div>
        
        {shipments.length === 0 ? (
          <p>出荷情報がありません。</p>
        ) : (
          <table className={styles.shipmentTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>取引先</th>
                <th>出荷日</th>
                <th>出荷個数</th>
                <th>住所</th>
                <th>電話番号</th>
                <th>メール</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((shipment, index) => (
                <tr key={index} className={styles.tableRow}>
                  <td>{shipment.vendor}</td>
                  <td>{new Date(shipment.shipmentDate).toLocaleDateString()}</td>
                  <td>{shipment.shippedCount}</td>
                  <td>{shipment.address || '情報なし'}</td>
                  <td>{shipment.phoneNumber || '情報なし'}</td>
                  <td>{shipment.email || '情報なし'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </LeftPullTab>
  );
}