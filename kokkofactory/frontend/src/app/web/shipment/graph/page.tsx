"use client";
import React from 'react';
import LeftPullTab from "@components/LeftPullTab";
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // CSSファイルをインポート
import { useShipment } from "@components/ShipmentContext";

// Chart.js 関連インポート
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Chart.js を登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphPage() {
  const router = useRouter(); 
  const { shipments } = useShipment();

  const handleBack = () => {
    router.push('/web/shipment');
  };

  // 日付順にソート
  const sortedShipments = [...shipments].sort(
    (a, b) => new Date(a.shipmentDate).getTime() - new Date(b.shipmentDate).getTime()
  );

  // ラベル（日付）とデータ（出荷数）を作成
  const labels = sortedShipments.map(s => new Date(s.shipmentDate).toLocaleDateString());
  const dataValues = sortedShipments.map(s => s.shippedCount);

  const data = {
    labels,
    datasets: [
      {
        label: '出荷数',
        data: dataValues,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3, // 線のカーブ調整
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '出荷数の推移',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '出荷数',
        },
      },
      x: {
        title: {
          display: true,
          text: '出荷日',
        },
      },
    },
  };

  return (
    <LeftPullTab>
      <div className ={styles.container}>
        <div className={styles.graph}>
          <h1>出荷数グラフ</h1>
          {shipments.length === 0 ? (
            <p>出荷情報がありません！</p>
          ) : (
            <Line data={data} options={options} />
          )}
        </div>
        <div className={styles.list}>
          {shipments.length === 0 ? (
            <p>出荷情報がまだ Context にありません！</p>
          ) : (
          <>
            <p>出荷情報を Context から取得できています🎉</p>
            <ul>
              {shipments.map((s, i) => (
                <li key={i}>
                  {s.vendor} - {s.shippedCount} 個 ({new Date(s.shipmentDate).toLocaleDateString()})
                </li>
              ))}
            </ul>
          </>
          )}
        </div>
      </div>
      <button className={styles.backButton} onClick={handleBack}>
        ←
      </button>
    </LeftPullTab>
      
  );
}