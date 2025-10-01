"use client";
import React, { useState, useMemo, useEffect } from 'react';
import LeftPullTab from "@components/LeftPullTabMobile";
import { useRouter } from 'next/navigation';
import styles from './page.module.css'; // CSSファイルをインポート
import { useShipment } from "@components/ShipmentContext";
import { useRef } from "react";


// Chart.js 関連インポート
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

// Chart.js を登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphPage() {
  const router = useRouter(); 
  const { shipments } = useShipment();
  const [selectedKey, setSelectedKey] = useState<string | null>(null);

  const handleBack = () => {
    router.push('/web/shipment');
  };

  const chartRef = useRef<ChartJS<"line", number[], string>>(null);

  // 日/月/年の選択
  const [groupBy, setGroupBy] = useState<"day" | "month" | "year">("day");
  const [rangeStart, setRangeStart] = useState<string>("");
  const [rangeEnd, setRangeEnd] = useState<string>("");
  const [rangeEnabled, setRangeEnabled] = useState(false);
  useEffect(() => {
    if (!rangeEnabled) {
      setRangeStart("");
      setRangeEnd("");
    }
  }, [rangeEnabled]);



  const vendors = useMemo(
    () => Array.from(new Set(shipments.map((s) => s.vendor))),
    [shipments]
  );

  // 「全出荷数」も選択肢に追加
  const allOptions = useMemo(() => ["総出荷数", ...vendors], [vendors]);

  // 初期値を「すべて選択」にする
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  useEffect(() => {
    setSelectedVendors(allOptions);
  }, [allOptions]);

  // ヘルパー：キー（内部）を作る（ISO 風）
  const makeKey = (date: Date, mode: "day" | "month" | "year") => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    if (mode === "day") return `${y}-${m}-${d}`;   // 例: 2025-09-30
    if (mode === "month") return `${y}-${m}`;     // 例: 2025-09
    return `${y}`;                                // 例: 2025
  };

  // key -> Date に直す（ソート用）
  const keyToDate = (key: string, mode: "day" | "month" | "year") => {
    if (mode === "day") return new Date(`${key}T00:00:00`);
    if (mode === "month") {
      const [y, m] = key.split("-");
      return new Date(Number(y), Number(m) - 1, 1);
    }
    return new Date(Number(key), 0, 1);
  };

  const formatKeyLabel = (key: string, mode: "day" | "month" | "year") => {
    if (mode === "day") return keyToDate(key, "day").toLocaleDateString();
    if (mode === "month") {
      const [y, m] = key.split("-");
      return `${y}年${m}月`;
    }
    return `${key}年`;
  };

  // 色生成（HSLで回す）
  const getColor = (i: number, alpha = 1) => {
    const hue = (i * 47) % 360; // 47のステップで色を回す
    return `hsl(${hue} 70% 50% / ${alpha})`; // modern CSS rgba-like HSL with alpha
  };

  // 期間指定で絞り込む
  const filteredShipments = useMemo(() => {
    if (!rangeStart || !rangeEnd) return shipments;
    const start = new Date(rangeStart);
    const end = new Date(rangeEnd);
    return shipments.filter(s => {
      const d = new Date(s.shipmentDate);
      return d >= start && d <= end;
    });
  }, [shipments, rangeStart, rangeEnd]);


  /// 折れ線グラフ用集計処理
  const { labels, datasets, sortedKeys } = useMemo(() => {
    const vendorMaps: Record<string, Map<string, number>> = {};
    vendors.forEach((v) => (vendorMaps[v] = new Map<string, number>()));
    const totalMap = new Map<string, number>();

    filteredShipments.forEach((s) => {
      const date = new Date(s.shipmentDate);
      const key = makeKey(date, groupBy);
      vendorMaps[s.vendor].set(key, (vendorMaps[s.vendor].get(key) ?? 0) + s.shippedCount);
      totalMap.set(key, (totalMap.get(key) ?? 0) + s.shippedCount);
    });

    const allKeys = new Set<string>();
    Object.values(vendorMaps).forEach((map) => map.forEach((_, k) => allKeys.add(k)));
    totalMap.forEach((_, k) => allKeys.add(k));

    const sortedKeys = Array.from(allKeys).sort(
      (a, b) => keyToDate(a, groupBy).getTime() - keyToDate(b, groupBy).getTime()
    );

    const displayLabels = sortedKeys.map((k) => formatKeyLabel(k, groupBy));

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
        const idx = vendors.indexOf(vendor); // vendor 配列内の index を使うと色が安定する
        return {
          label: vendor,
          data: sortedKeys.map((k) => vendorMaps[vendor].get(k) ?? 0),
          borderColor: getColor(idx, 1),
          backgroundColor: getColor(idx, 0.3),
          tension: 0.3,
        };
      });

  return { labels: displayLabels, datasets, sortedKeys };
  }, [filteredShipments, groupBy, vendors, selectedVendors, allOptions]);

  /// 円グラフ（全期間）
  const pieData = useMemo(() => {
    const vendorTotals = vendors.map((v) =>
      filteredShipments
        .filter((s) => s.vendor === v)
        .reduce((sum, s) => sum + s.shippedCount, 0)
    );

    return {
      labels: vendors,
      datasets: [
        {
          data: vendorTotals,
          backgroundColor: vendors.map((_, i) => getColor(i, 0.6)),
          borderColor: vendors.map((_, i) => getColor(i, 1)),
          borderWidth: 1,
        },
      ],
    };
  }, [filteredShipments, vendors]);

  // 日付別円グラフ
  const pieDayData = useMemo(() => {
    if (!selectedKey) {
    // vendors の数だけ薄いグレーにする
      return {
        labels: vendors,
        datasets: [
          {
            data: vendors.map(() => 1), // 数値は同じで OK
            backgroundColor: vendors.map(() => 'rgba(200, 200, 200, 0.3)'),
            borderColor: vendors.map(() => 'rgba(200, 200, 200, 0.8)'),
            borderWidth: 1,
          },
        ],
      };
    }

    const totals = vendors.map((v) => 
      filteredShipments
        .filter((s) => makeKey(new Date(s.shipmentDate), groupBy) === selectedKey && s.vendor === v)
          .reduce((sum, s) => sum + s.shippedCount, 0)
    );
    return {
      labels: vendors,
      datasets: [
        {
          data: totals,
          backgroundColor: vendors.map((_, i) => getColor(i, 0.6)),
          borderColor: vendors.map((_, i) => getColor(i, 1)),
          borderWidth: 1,
        },
      ],
    };
  }, [filteredShipments, vendors, selectedKey, groupBy]);

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

  const pieOptions = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const dataset = context.dataset;
            const total = dataset.data.reduce((sum: number, val: number) => sum + val, 0);
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1) + "%";
            return `${context.label}: ${value} (${percentage})`;
          },
        },
      },
      legend: { position: "top" as const },
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
          <div className={styles.linegraph}>
            <h1 style={{ margin: "1rem" }}>🍳出荷数グラフ</h1>

            {/* ▼ 日/月/年の切り替えUI */}
            <div className={styles.tabGroup}>
              {["day", "month", "year"].map((mode) => (
                <button
                  key={mode}
                  className={`${styles.tab} ${groupBy === mode ? styles.active : ""}`}
                  onClick={() => setGroupBy(mode as any)}
                >
                  {mode === "day" ? "日別" : mode === "month" ? "月別" : "年別"}
                </button>
              ))}
            </div>

            <div style={{ margin: "1rem 0" }}>
              <label>
                <input
                  type="checkbox"
                  checked={rangeEnabled}
                  onChange={(e) => setRangeEnabled(e.target.checked)}
                />
                期間指定
              </label>


              {rangeEnabled && (
                <span style={{ marginLeft: "1rem" }}>
                  開始日:
                  <input type="date" value={rangeStart} onChange={(e) => setRangeStart(e.target.value)} />
                  終了日:
                  <input type="date" value={rangeEnd} onChange={(e) => setRangeEnd(e.target.value)} />
                </span>
              )}

            </div>

            {/* フィルターUI */}
            <div>
              {allOptions.map((v) => (
                <label key={v} style={{ marginRight: "10" }}>
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
              <Line 
                ref={chartRef}
                data={{ labels, datasets }} 
                options={options}
                onClick={(e) => {
                  if (!chartRef.current) return;
                  const points = chartRef.current.getElementsAtEventForMode(
                    e.nativeEvent,
                    "nearest",
                    { intersect: true },
                    true
                  );
                  if (points.length > 0) {
                    const idx = points[0].index;
                    const key = sortedKeys[idx]; // 内部キーを保存
                    setSelectedKey(key);
                  }
                }}
              />
            )}
          </div>


          <div className={styles.engraphContainer}>
            <h1 style={{ margin: "1rem" }}>🍳取引先円グラフ</h1>
             
            {shipments.length === 0 ? (
              <p>まだ出荷データがありません！</p>
            ) : (
              <div className={styles.engraphWrapper}>
                <div className={styles.totalEngrapf}>
                  <h2 style={{ margin: "1rem" }}>総出荷割合</h2>
                  <Pie data={pieData} options={pieOptions} />
                </div>
                <div className={styles.selectEngraph}>
                  <h2 style={{ margin: "1rem" }}>
                    {selectedKey
                      ? `${formatKeyLabel(selectedKey, groupBy)} の出荷割合`
                      : "出荷数グラフの値をクリックしてください"}
                  </h2>
                  {selectedKey && <Pie data={pieDayData!} options={pieOptions} />}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className={styles.list}>
          <h2 style={{textAlign:"center"}}>出荷情報一覧</h2>
          {shipments.length === 0 ? (
            <p>出荷情報がまだ Context にありません！</p>
          ) : (
            <table className={styles.shipmentTable}>
            <thead>
              <tr className={styles.tableHeader}>
                <th>取引先</th>
                <th>出荷個数</th>
                <th>出荷日</th>
              </tr>
            </thead>
            <tbody>
              {shipments.map((s, i) => (
                <tr key={i} className={styles.tableRow}>
                  <td>{s.vendor}</td>
                  <td>{s.shippedCount}</td>
                  <td>{new Date(s.shipmentDate).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          )}
        </div>
      </div>
      <button className={styles.backButton} onClick={handleBack}>
        ←
      </button>
    </LeftPullTab>
      
  );
}