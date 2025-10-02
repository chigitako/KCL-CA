// app/dashboard/page.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import LoadingScreen from "@components/LoadingScreen"; // コンポーネントのパスは環境に合わせて調整してください
import LeftPullTab from "@components/LeftPullTab";    // コンポーネントのパスは環境に合わせて調整してください
import styles from "./page.module.css";

// --------------------------------------------------
// 1. 型定義
// --------------------------------------------------

// 既存の /api/egg からの応答型（レコードの配列）
interface EggRecord {
    id: number;
    coop_number: number;
    count: number;
    date: string; // Prismaからの応答は通常ISO文字列
}

interface EggDataList extends Array<EggRecord> {}

interface DashboardData {
    // フロントエンドで計算する値
    eggCountToday: number; 
    
    // モックデータとして扱う他の値
    chickenDeathCountToday: number;
    lowStockItemsCount: number;
    latestShipmentStatus: string;
    lowStockItems: { name: string; remaining: number }[];
}


// --------------------------------------------------
// 2. API通信関数
// --------------------------------------------------

const fetchDashboardData = async (): Promise<DashboardData> => {
    // 1. 卵データ (全リスト) を取得
    const eggRes = await fetch("/api/egg");
    if (!eggRes.ok) throw new Error("卵データの取得に失敗しました。");
    const eggList: EggDataList = await eggRes.json();
    
    // --- 【API変更なしで今日の合計数を計算するロジック】 ---
    
    // 2. JSTで「今日」の00:00:00を計算
    const now = new Date();
    // JSTの「今日」の開始時刻をgetTime()でミリ秒に変換
    const startOfTodayJST = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(); 

    let totalCountToday = 0;

    // 3. 取得した全リストをフィルタリングし、今日の合計を計算
    eggList.forEach(record => {
        // DBのタイムスタンプ（ISO文字列）をDateオブジェクトに変換し、ミリ秒を取得
        const recordTime = new Date(record.date).getTime(); 
        
        // レコードの時間が、JSTの「今日」の開始時間以降であれば合計に加算
        if (recordTime >= startOfTodayJST) {
            totalCountToday += record.count;
        }
    });
    
    // --- 【モックデータの統合】 ---
    
    // 4. 他のAPIデータがないため、モックデータとして定義
    const mockOtherData = {
        chickenDeathCountToday: 3,
        lowStockItemsCount: 2,
        latestShipmentStatus: "本日分の出荷が完了しました",
        lowStockItems: [
          { name: "特殊飼料A", remaining: 45 },
          { name: "パッケージ資材", remaining: 100 },
        ],
    };

    return {
        eggCountToday: totalCountToday, // 計算した合計値
        ...mockOtherData,
    };
};

// --------------------------------------------------
// 3. 補助コンポーネント (KPI表示用)
// --------------------------------------------------
interface KpiCardProps {
    icon: string;
    label: string;
    value: string;
    unit: string;
    isAlert?: boolean;
    isLargeText?: boolean;
}

const KpiCard: React.FC<KpiCardProps> = ({ icon, label, value, unit, isAlert = false, isLargeText = false }) => (
    <div className={`${styles.kpiCard} ${isAlert ? styles.kpiAlert : ''}`}>
        <div className={styles.kpiIcon}>{icon}</div>
        <div className={styles.kpiContent}>
            <div className={styles.kpiLabel}>{label}</div>
            {isLargeText ? (
                <div className={styles.kpiValueLarge}>{value}</div>
            ) : (
                <div className={styles.kpiValue}>
                    {value}
                    <span className={styles.kpiUnit}>{unit}</span>
                </div>
            )}
        </div>
    </div>
);

// --------------------------------------------------
// 4. メインコンポーネント
// --------------------------------------------------

export default function DashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadDashboardData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const dashboardData = await fetchDashboardData();
      setData(dashboardData);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("ダッシュボードデータの読み込み中に不明なエラーが発生しました。");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDashboardData();
  }, [loadDashboardData]);

  if (loading) {
    return <LoadingScreen message="鶏舎データ集計中・・・" />;
  }

  if (error) {
    return <div className={styles.errorText}>エラー: {error}</div>;
  }

  // 🐔 表示コンポーネント
  return (
    <LeftPullTab>
      <div className={styles.container}>
        <h1 className={styles.title}>こっこふぁくとりー ダッシュボード</h1>

        {/* 1. KPI サマリー */}
        <div className={styles.kpiGrid}>
          {/* 👈 ここにフロントエンドで計算した値が表示されます */}
          <KpiCard icon="🥚" label="今日の産卵数" value={data!.eggCountToday.toLocaleString()} unit="個" />
          
          <KpiCard icon="🚨" label="低在庫品目" value={data!.lowStockItemsCount.toString()} unit="種" isAlert={true} />
          <KpiCard icon="💀" label="本日の斃死数" value={data!.chickenDeathCountToday.toString()} unit="羽" isAlert={data!.chickenDeathCountToday > 0} />
          <KpiCard icon="🚚" label="最新の出荷状況" value={data!.latestShipmentStatus} unit="" isLargeText={true} />
        </div>

        {/* 2. アラート/詳細リスト */}
        <div className={styles.detailGrid}>
          {/* 低在庫アラートリスト */}
          <div className={styles.alertPanel}>
            <h2>🚨 低在庫アラート</h2>
            {data!.lowStockItems.length === 0 ? (
              <p>現在、在庫切れの警告はありません。</p>
            ) : (
              <ul>
                {data!.lowStockItems.map((item, index) => (
                  <li key={index} className={styles.alertItem}>
                    <span className={styles.alertName}>{item.name}</span>
                    <span className={styles.alertCount}>残り: {item.remaining}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          {/* 鶏舎モニタリング (画像参照) */}
          <div className={styles.monitorPanel}>
             <h2>🏠 鶏舎番号モニタリング</h2>
             <p>環境モニタリングやカメラ映像のダミー表示部分です。</p>
             <div className={styles.chickenCoopStatus}>
                <div className={styles.coopItem}>鶏舎 1: 🌡️ 異常なし</div>
                <div className={styles.coopItem}>鶏舎 2: 🚨 高温注意</div>
             </div>
          </div>
        </div>

      </div>
    </LeftPullTab>
  );
}