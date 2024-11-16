// pages/coop/[coopId].js

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function CoopEggCount() {
  const router = useRouter();
  const { coopId } = router.query;
  const [eggData, setEggData] = useState(null);

  useEffect(() => {
    if (coopId) {
      fetch(`/api/eggs?coopId=${coopId}`)
        .then((res) => res.json())
        .then((data) => setEggData(data))
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
