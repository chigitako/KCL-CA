import { useEffect, useState } from "react";

type CountData = {
  id: number;
  coop_id: number;
  count: number;
  recorded_at: string;
  average_weight: number | string; // 文字列または数値で返ってくる可能性があるため、型を変更
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
      <h1>Count Results</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Coop ID</th>
            <th>Count</th>
            <th>Recorded At</th>
            <th>Average Weight</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => {
            // average_weight を数値に変換
            const averageWeight = Number(row.average_weight); // 文字列から数値に変換

            return (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.coop_id}</td>
                <td>{row.count}</td>
                <td>{new Date(row.recorded_at).toLocaleString()}</td>
                <td>
                  {/* averageWeight が有効な数値か確認し、必要に応じて表示 */}
                  {typeof averageWeight === "number" && !isNaN(averageWeight)
                    ? `${averageWeight.toFixed(2)} g`
                    : "N/A"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CountCheck;
