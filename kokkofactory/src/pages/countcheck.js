import { useEffect, useState } from "react";

export default function CountCheck() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // APIからデータを取得
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countcheck");
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }
        const result = await response.json();
        setData(result); // データをセット
      } catch (error) {
        setError(error.message); // エラーメッセージをセット
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>卵のカウント確認</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table>
        <thead>
          <tr>
            <th>鶏舎ID</th>
            <th>カウント</th>
            <th>記録日時</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id}>
                <td>{row.coop_id}</td>
                <td>{row.count}</td>
                <td>{new Date(row.recorded_at).toLocaleString()}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">データがありません</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
