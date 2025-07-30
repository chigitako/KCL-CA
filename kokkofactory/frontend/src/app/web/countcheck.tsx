/*import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import BackButton from "../components/BackButton";

type CountData = {
  id: number;
  coop_id: number;
  count: number;
  recorded_at: string;
  average_weight: number | string;
};

const CountCheck = () => {
  const [data, setData] = useState<CountData[]>([]);
  const [error, setError] = useState<string | null>(null);

  if (error) {
    return <div>Error: {error}</div>;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countcheck");
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || "Error fetching data");
          return;
        }
        const result: CountData[] = await response.json();
        console.log(result); // データを確認
        setData(result);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch count data.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <AppBar title="集卵　count" />
      <h1>集卵</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }} border={1}>
        <thead>
          <tr>
            <th style={{ padding: "8px" }}>ID</th>
            <th style={{ padding: "8px" }}>鶏舎番号</th>
            <th style={{ padding: "8px" }}>数</th>
            <th style={{ padding: "8px" }}>時間</th>
            <th style={{ padding: "8px" }}>卵重</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            // average_weight を数値に変換
            const averageWeight = Number(row.average_weight); // 文字列から数値に変換

            return (
              <tr key={row.id}>
                <td style={{ padding: "8px" }}>{row.id}</td>
                <td style={{ padding: "8px" }}>{row.coop_id}</td>
                <td style={{ padding: "8px" }}>{row.count}</td>
                <td style={{ padding: "8px" }}>
                  {new Date(row.recorded_at).toLocaleString()}
                </td>
                <td style={{ padding: "8px" }}>
                  {/* averageWeight が有効な数値か確認し、必要に応じて表示 *//*}
                  {typeof averageWeight === "number" && !isNaN(averageWeight)
                    ? `${averageWeight.toFixed(2)} g`
                    : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <BackButton />
      </div>
    </div>
  );
};

export default CountCheck;*/
