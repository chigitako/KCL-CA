"use client";
import React, { useState, useEffect } from 'react';
import LeftPullTab from "@components/LeftPullTab";
import styles from './page.module.css'; // CSSファイルをインポート


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
  const [shipments, setShipments] = useState<ShipmentDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showGraph, setShowGraph] = useState(false);

  const handleShowGraph = () => {
    setShowGraph(true);
  };

  useEffect(() => {
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
  }, []);

  if (loading) return <div>読み込み中...</div>;
  if (error) return <div>エラー: {error}</div>;

  return (
    <LeftPullTab>
        <div className={`${styles.sidebar} ${showGraph ? styles.showSidebar : ''}`}>
        <h2>取引先情報</h2>
        {shipments.map((shipment, index) => (
            <div key={index}>
            <p><b>取引先:</b> {shipment.vendor}</p>
            <p><b>住所:</b> {shipment.address || '情報なし'}</p>
            <p><b>電話番号:</b> {shipment.phoneNumber || '情報なし'}</p>
            <p><b>メール:</b> {shipment.email || '情報なし'}</p>
            <hr/>
            </div>
        ))}
        </div>
    </LeftPullTab>
    
  );
}