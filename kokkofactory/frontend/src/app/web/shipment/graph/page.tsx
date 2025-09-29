"use client";
import React, { useState, useMemo, useEffect } from 'react';
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
  const vendors = useMemo(
    () => Array.from(new Set(shipments.map((s) => s.vendor))),
    [shipments]
  );

  // 「全出荷数」も選択肢に追加
  const allOptions = useMemo(() => ["総出荷数", ...vendors], [vendors]);

  // 初期値を「すべて選択」にする
  const [selectedVendors, setSelectedVendors] = useState<string[]>(allOptions);
  useEffect(() => {
    setSelectedVendors(allOptions);
  }, [allOptions]);

  /// 集計処理
  const { labels, datasets } = useMemo(() => {
    const vendorMaps: Record<string, Map<string, number>> = {};

    vendors.forEach((v) => {
      vendorMaps[v] = new Map<string, number>();
    });
    const totalMap = new Map<string, number>();


    shipments.forEach((s) => {
      const date = new Date(s.shipmentDate);
      let key = "";
      if (groupBy === "day") key = date.toLocaleDateString();
      else if (groupBy === "month") key = `${date.getFullYear()}-${date.getMonth() + 1}`;
      else key = `${date.getFullYear()}`;

      // 企業別
      vendorMaps[s.vendor].set(key, (vendorMaps[s.vendor].get(key) ?? 0) + s.shippedCount);
      // 合計
      totalMap.set(key, (totalMap.get(key) ?? 0) + s.shippedCount);
    });

    const allKeys = new Set<string>();
    Object.values(vendorMaps).forEach((map) => {
      map.forEach((_, k) => allKeys.add(k));
    });
    totalMap.forEach((_, k) => allKeys.add(k));

    const sortedKeys = Array.from(allKeys).sort(
      (a, b) => new Date(a).getTime() - new Date(b).getTime()
    );

 
  // ランダム色生成（例）
    const colors = [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ];

    const datasets = allOptions
      .filter((v) => selectedVendors.includes(v))
      .map((vendor, i) => {
        if (vendor === "総出荷数") {
          return {
            label: vendor,
            data: sortedKeys.map((k) => totalMap.get(k) ?? 0),
            borderColor: "rgba(0, 0, 0, 1)", // 黒で目立たせる
            backgroundColor: "rgba(0, 0, 0, 0.2)",
            tension: 0.3,
          };
        }
      return {
        label: vendor,
        data: sortedKeys.map((k) => vendorMaps[vendor].get(k) ?? 0),
        borderColor: colors[i % colors.length],
        backgroundColor: colors[i % colors.length].replace(/1\)$/, "0.2)"),
        tension: 0.3,
      };
    });

  return { labels: sortedKeys, datasets };
  }, [shipments, groupBy, vendors, selectedVendors, allOptions]);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: "出荷数の推移（企業別＋合計）" },
    },
    scales: {
      y: { beginAtZero: true, title: { display: true, text: "出荷数" } },
      x: {
        title: {
          display: true,
          text: groupBy === "day" ? "出荷日" : groupBy === "month" ? "月" : "年",
        },
      },
    },
  };

  const toggleVendor = (vendor: string) => {
    setSelectedVendors((prev) =>
      prev.includes(vendor) ? prev.filter((v) => v !== vendor) : [...prev, vendor]
    );
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

          {/* フィルターUI */}
          <div>
            {allOptions.map((v) => (
              <label key={v} style={{ marginRight: "10px" }}>
                <input
                  type="checkbox"
                  checked={selectedVendors.includes(v)}
                  onChange={() => toggleVendor(v)}
                />
                {v}
              </label>
            ))}
          </div>


          {shipments.length === 0 ? (
            <p>まだ出荷データがありません！</p>
          ) : (
            <Line data={{ labels, datasets }} options={options} />
          )}

          <h1>取引先円グラフ</h1>
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