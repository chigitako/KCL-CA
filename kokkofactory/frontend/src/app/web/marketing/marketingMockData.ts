// marketingMockData.ts
// 5年間 (2021年〜2025年) の毎日(日別)データに拡張。

const DUMMY_SHIPMENTS = [];

// 1. ベースラインの成長と季節性の定義
const BASE_DATA: Record<string, { own: number; mail: number; direct: number }> =
  {
    "2021": { own: 100, mail: 250, direct: 150 },
    "2022": { own: 200, mail: 220, direct: 130 },
    "2023": { own: 350, mail: 200, direct: 100 },
    "2024": { own: 480, mail: 180, direct: 70 },
    "2025": { own: 600, mail: 200, direct: 80 },
  };

/**
 * 指定された日付の各チャネルの出荷数を生成する関数
 */
const generateDailyShipment = (
  date: Date,
  yearBase: { own: number; mail: number; direct: number }
) => {
  const data = [];
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();
  const shipmentDate = date.toISOString().split("T")[0];

  // 季節変動ファクター (直売所は夏に極端に落ち込み、秋にピーク)
  let directFactor = 1.0;
  if (month === 7 || month === 8) directFactor = 0.2; // 夏の落ち込みを強調
  if (month === 10) directFactor = 1.8; // 秋のピークを強調

  // 年末商戦ファクター (全チャネル11, 12月に伸びる)
  let totalFactor = 1.0;
  if (month === 11) totalFactor = 1.4;
  if (month === 12) totalFactor = 1.8; // 年末ピークを強調

  // 💡 曜日ファクター (週末の直売所の伸びや、平日の変動をシミュレート)
  const dayOfWeek = date.getDay(); // 0=日曜, 6=土曜
  const directDayFactor = dayOfWeek === 0 || dayOfWeek === 6 ? 1.5 : 0.8; // 週末は直売所が伸びる
  const randomFluctuation = Math.random() * 0.4 + 0.8; // +/- 20%のランダムな変動

  // 自社サイト
  data.push({
    shipmentDate,
    vendor: "自社サイト",
    shippedCount: Math.round(yearBase.own * totalFactor * randomFluctuation),
  });

  // 通販サイトA
  data.push({
    shipmentDate,
    vendor: "通販サイトA",
    shippedCount: Math.round(yearBase.mail * totalFactor * randomFluctuation),
  });

  // 直売所
  data.push({
    shipmentDate,
    vendor: "直売所",
    shippedCount: Math.round(
      yearBase.direct * directFactor * directDayFactor * randomFluctuation
    ),
  });

  return data;
};

// 2. 🔴 2021年1月1日 から 2025年12月31日 までのデータ生成 (5年間)
let currentDate = new Date("2021-01-01"); // 💡 開始日を2021年に変更
const endDate = new Date("2025-12-31");

while (currentDate <= endDate) {
  const yearString = currentDate.getFullYear().toString();
  const base = BASE_DATA[yearString];

  if (base) {
    DUMMY_SHIPMENTS.push(...generateDailyShipment(currentDate, base));
  }

  // 次の日へ進む (日付オブジェクトを正しく進める)
  currentDate.setDate(currentDate.getDate() + 1);
}

export const MOCK_DATA = {
  // 静的サマリーデータ (2025年11月時点の想定)
  month: "2025年11月",
  totalSales: 4000000,
  totalOrders: 2000,
  channelSummary: [
    { channel: "自社サイト", sales: 2500000, orders: 1000 },
    { channel: "通販サイトA", sales: 1000000, orders: 700 },
    { channel: "直売所", sales: 500000, orders: 300 },
  ],
  ownSiteBreakdown: [
    { type: "定期便", sales: 1800000, orders: 500 },
    { type: "単発購入", sales: 700000, orders: 500 },
  ],
  dummyShipments: DUMMY_SHIPMENTS,
};
