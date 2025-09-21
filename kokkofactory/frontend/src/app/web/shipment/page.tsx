"use client";
import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>出荷情報一覧</h1>
      {shipments.length === 0 ? (
        <p>出荷情報がありません。</p>
      ) : (
        <table>
          <thead>
            <tr>
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
              <tr key={index}>
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
  );
}