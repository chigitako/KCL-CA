// app/dashboard/page.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import LoadingScreen from "@components/LoadingScreen"; // コンポーネントのパスは環境に合わせて調整してください
import LeftPullTab from "@components/LeftPullTab";    // コンポーネントのパスは環境に合わせて調整してください
import styles from "./page.module.css";

// --------------------------------------------------
// 1. 型定義
// --------------------------------------------------

// 🥚 /api/egg からの応答型
interface EggRecord {
    id: number;
    coop_number: number;
    count: number;
    date: string; 
}
interface EggDataList extends Array<EggRecord> {}

// 💀 /api/deathchicken からの応答型
interface DeadChickenRecord {
    id: number;
    coop_number: number;
    count: number; // 斃死数
    cause_of_death: string;
    date: string; 
}
interface DeadChickenDataList extends Array<DeadChickenRecord> {}

// 📦 /api/stock からの応答型
interface InventoryItem {
    supplierName: string;
    ItemName: string;
    address: string;
    phoneNumber: string;
    email: string;
    remainingCount: number;
}
interface InventoryList extends Array<InventoryItem> {}

// 🚚 新規追加: /api/shipment からの応答型 (Prismaのincludeを想定)
interface ShipmentRecord {
    id: number;
    customerId: number;
    shipment_date: string;
    shipped_count: number;
    // 顧客名を結合して取得できることを想定（API側でPrismaのincludeを使用）
    customer: {
        name: string;
    };
}
interface ShipmentDataList extends Array<ShipmentRecord> {}


interface DashboardData {
    // 🥚 産卵数
    eggCountToday: number; 
    
    // 💀 斃死数
    chickenDeathCountToday: number;
    
    // 🚚 出荷情報 👈 変更：モックから計算値へ
    totalShipmentCountToday: number; // 今日の出荷総数（KPI用）
    latestShipments: { customerName: string; count: number }[]; // 今日の出荷リスト
    
    // 🚨 在庫アラート情報
    lowStockItemsCount: number;
    lowStockItems: { name: string; remaining: number }[];
}


// --------------------------------------------------
// 2. API通信関数
// --------------------------------------------------

/**
 * 🥚 卵の全リストを取得する関数
 */
const fetchEggData = async (): Promise<EggDataList> => {
    const eggRes = await fetch("/api/egg");
    if (!eggRes.ok) throw new Error("卵データの取得に失敗しました。");
    return eggRes.json();
};

/**
 * 📦 在庫の全リストを取得する関数
 */
const fetchStockData = async (): Promise<InventoryList> => {
    const stockRes = await fetch("/api/stock");
    if (!stockRes.ok) throw new Error("在庫データの取得に失敗しました。");
    return stockRes.json();
};

/**
 * 💀 死んだ鶏の全リストを取得する関数
 */
const fetchDeadChickenData = async (): Promise<DeadChickenDataList> => {
    const dcRes = await fetch("/api/deathchicken"); 
    if (!dcRes.ok) throw new Error("斃死データの取得に失敗しました。");
    return dcRes.json();
};

/**
 * 🚚 新規追加: 出荷の全リストを取得する関数
 */
const fetchShipmentData = async (): Promise<ShipmentDataList> => {
    // APIルートを /api/shipment と仮定します
    const shipRes = await fetch("/api/shipment"); 
    if (!shipRes.ok) throw new Error("出荷データの取得に失敗しました。");
    // 顧客情報(name)がincludeされていることを想定
    return shipRes.json(); 
};


const fetchDashboardData = async (): Promise<DashboardData> => {
    // Promise.allで複数のAPIを並行して実行
    const [eggList, inventoryList, deadChickenList, shipmentList] = await Promise.all([
        fetchEggData(),
        fetchStockData(),
        fetchDeadChickenData(),
        fetchShipmentData() // 🚚 API呼び出しを追加
    ]);

    // --- 【日付判定用: JSTで「今日」の00:00:00を計算】 ---
    const now = new Date();
    const startOfTodayJST = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime(); 
    
    // --- 【🥚 卵データの集計（変更なし）】 ---
    let totalCountToday = 0;
    eggList.forEach(record => {
        if (new Date(record.date).getTime() >= startOfTodayJST) {
            totalCountToday += record.count;
        }
    });
    
    // --- 【💀 斃死データの集計（変更なし）】 ---
    let totalDeadChickenToday = 0;
    deadChickenList.forEach(record => {
        if (new Date(record.date).getTime() >= startOfTodayJST) {
            totalDeadChickenToday += record.count;
        }
    });
    
    // --- 【🚚 出荷データの集計（新規ロジック）】 ---
    let totalShipmentCountToday = 0;
    const todayShipments: { customerName: string; count: number }[] = [];
    
    shipmentList.forEach(record => {
        // 出荷日が、JSTの「今日」の開始時間以降であれば集計
        if (new Date(record.shipment_date).getTime() >= startOfTodayJST) {
            totalShipmentCountToday += record.shipped_count;
            todayShipments.push({
                customerName: record.customer.name, // 結合された顧客名を使用
                count: record.shipped_count,
            });
        }
    });

    // --- 【🚨 在庫アラートの集計（変更なし）】 ---
    const LOW_STOCK_THRESHOLD = 100;
    const lowStockItems: { name: string; remaining: number }[] = [];
    inventoryList.forEach(item => {
        if (item.remainingCount <= LOW_STOCK_THRESHOLD) {
            lowStockItems.push({ name: item.ItemName, remaining: item.remainingCount });
        }
    });

    // --- 【最終的な DashboardData の構築】 ---
    
    return {
        eggCountToday: totalCountToday,
        chickenDeathCountToday: totalDeadChickenToday,
        totalShipmentCountToday: totalShipmentCountToday, // 🚚 今日の総出荷数
        latestShipments: todayShipments,                   // 🚚 今日の出荷リスト
        lowStockItemsCount: lowStockItems.length,
        lowStockItems: lowStockItems,
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
                <h1 className={styles.title}>🐓 ふくふく Factory ダッシュボード</h1>

                {/* 1. KPI サマリー */}
                <div className={styles.kpiGrid}>
                    <KpiCard icon="🥚" label="今日の産卵数" value={data!.eggCountToday.toLocaleString()} unit="個" />
                    
                    {/* 🚨 在庫アラート数 KPI */}
                    <KpiCard 
                        icon="🚨" 
                        label="低在庫品目" 
                        value={data!.lowStockItemsCount.toString()} 
                        unit="種" 
                        isAlert={data!.lowStockItemsCount > 0} 
                    />
                    
                    {/* 💀 本日の斃死数 KPI */}
                    <KpiCard 
                        icon="💀" 
                        label="本日の斃死数" 
                        value={data!.chickenDeathCountToday.toLocaleString()} 
                        unit="羽" 
                        isAlert={data!.chickenDeathCountToday > 0} 
                    />
                    
                    {/* 🚚 今日の出荷総数 KPI 👈 変更 */}
                    <KpiCard 
                        icon="🚚" 
                        label="今日の出荷総数" 
                        value={data!.totalShipmentCountToday.toLocaleString()} 
                        unit="個" 
                    />
                </div>

                {/* 2. アラート/詳細リスト */}
                <div className={styles.detailGrid}>
                    {/* 🚨 低在庫アラートリスト (左パネル) */}
                    <div className={styles.alertPanel}>
                        <h2>🚨 低在庫アラート (在庫 ≤ 100)</h2>
                        {data!.lowStockItems.length === 0 ? (
                            <p>現在、在庫切れの警告はありません。</p>
                        ) : (
                            <ul>
                                {data!.lowStockItems.map((item, index) => (
                                    <li key={index} className={styles.alertItem}>
                                        <span className={styles.alertName}>{item.name}</span>
                                        <span className={styles.alertCount}>残り: {item.remaining.toLocaleString()}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {/* 🚚 今日の出荷リスト (右パネル) 👈 新規追加 */}
                    <div className={styles.monitorPanel}>
                        <h2>🚚 本日の出荷先リスト</h2>
                        {data!.latestShipments.length === 0 ? (
                            <p>今日、まだ出荷記録はありません。</p>
                        ) : (
                            <ul className={styles.shipmentList}>
                                {data!.latestShipments.map((shipment, index) => (
                                    <li key={index} className={styles.shipmentItem}>
                                        <span className={styles.shipmentName}>{shipment.customerName}</span>
                                        <span className={styles.shipmentCount}>{shipment.count.toLocaleString()} 個</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    
                    {/* 鶏舎モニタリングの場所は、この後どちらかのパネルに統合しても良いですね */}
                    {/* <div className={styles.monitorPanel}>
                        <h2>🏠 鶏舎番号モニタリング</h2>
                        <p>環境モニタリングやカメラ映像のダミー表示部分です。</p>
                        <div className={styles.chickenCoopStatus}>
                            <div className={styles.coopItem}>鶏舎 1: 🌡️ 異常なし</div>
                            <div className={styles.coopItem}>鶏舎 2: 🚨 高温注意</div>
                        </div>
                    </div> */}
                </div>

            </div>
        </LeftPullTab>
    );
}