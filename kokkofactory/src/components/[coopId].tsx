// pages/coop/[coopId].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// 卵データの型定義
interface EggData {
  count: number;
}

function CoopEggCount() {
  const router = useRouter();
  const { coopId } = router.query as { coopId?: string }; // クエリパラメータの型定義
  const [eggData, setEggData] = useState<EggData | null>(null); // eggData の型を定義

  useEffect(() => {
    if (coopId) {
      fetch(`/api/eggs?coopId=${coopId}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch egg data");
          }
          return res.json();
        })
        .then((data: EggData) => setEggData(data)) // fetch結果を型定義に合わせる
        .catch((err) => console.error("Error fetching egg data:", err));
    }
  }, [coopId]);

  if (!eggData) return <p>Loading...</p>;

  return (
    <div>
      <h1>鶏舎 {coopId} の卵カウント</h1>
      <p>卵の数: {eggData.count}</p>
    </div>
  );
}

export default CoopEggCount;
