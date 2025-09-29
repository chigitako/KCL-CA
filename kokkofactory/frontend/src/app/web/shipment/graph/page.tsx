"use client";
import React, { useState, useMemo } from 'react';
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

  // 日/月/年の選択
  const [groupBy, setGroupBy] = useState<"day" | "month" | "year">("day");

  // 集計処理
  const { labels, values } = useMemo(() => {
    const map = new Map<string, number>();

    shipments.forEach((s) => {
      const date = new Date(s.shipmentDate);
      let key = "";

      if (groupBy === "day") {
        key = date.toLocaleDateString(); // 例: 2025/09/30
      } else if (groupBy === "month") {
        key = `${date.getFullYear()}-${date.getMonth() + 1}`; // 例: 2025-9
      } else if (groupBy === "year") {
        key = `${date.getFullYear()}`; // 例: 2025
      }

      map.set(key, (map.get(key) ?? 0) + s.shippedCount);
    });


    const sortedKeys = Array.from(map.keys()).sort((a, b) => {
      // 日付として比較できるように変換
      return new Date(a).getTime() - new Date(b).getTime();
    });
    return {
      labels: sortedKeys,
      values: sortedKeys.map((k) => map.get(k) ?? 0),
    };
  }, [shipments, groupBy]);

 
  const data = {
    labels,
    datasets: [
      {
        label: '出荷数',
        data: values,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: '出荷数の推移' },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: '出荷数' },
      },
      x: {
        title: { display: true, text: groupBy === "day" ? "出荷日" : groupBy === "month" ? "月" : "年" },
      },
    },
  };

  return (
    <LeftPullTab>
      <div className ={styles.container}>
        <div className={styles.graph}>
          <h1>出荷数グラフ</h1>
          {/* ▼ 日/月/年の切り替えUI */}
          <select value={groupBy} onChange={(e) => setGroupBy(e.target.value as any)}>
            <option value="day">日ごと</option>
            <option value="month">月ごと</option>
            <option value="year">年ごと</option>
          </select>
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