// pages/coop/[coopId].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 卵データの型定義
interface EggData {
  count: number;
}

// 死んだ鶏データの型定義
interface DeadChickenData {
  count: number;
}

function CoopEggCount() {
  const router = useRouter();
  const { coopId } = router.query as { coopId?: string }; // クエリパラメータの型定義

  const [eggData, setEggData] = useState<EggData | null>(null); // eggData の型を定義
  const [deadChickenData, setDeadChickenData] =
    useState<DeadChickenData | null>(null); // deadChickenData の型を定義
  const [loading, setLoading] = useState<boolean>(true); // ローディング状態の管理

  useEffect(() => {
    if (coopId) {
      // 卵のデータを取得
      fetch(`/api/eggs?coopId=${coopId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch egg data");
          }
          return res.json();
        })
        .then((data: EggData) => setEggData(data)) // fetch結果を型定義に合わせる
        .catch((err) => console.error("Error fetching egg data:", err));

      // 死んだ鶏のデータを取得
      fetch(`/api/deadChickens?coopId=${coopId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch dead chicken data");
          }
          return res.json();
        })
        .then((data: DeadChickenData) => setDeadChickenData(data)) // fetch結果を型定義に合わせる
        .catch((err) =>
          console.error("Error fetching dead chicken data:", err)
        );
    }
  }, [coopId]);

  if (loading || !eggData || !deadChickenData) return <p>Loading...</p>;

  return (
    <div>
      <h1>鶏舎 {coopId} のデータ</h1>
      <p>卵の数: {eggData.count}</p>
      <p>死んだ鶏の数: {deadChickenData.count}</p>
    </div>
  );
}

export default CoopEggCount;
