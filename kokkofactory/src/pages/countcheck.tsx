import { useEffect, useState } from "react";

// データの型を定義
interface EggCount {
  id: number;
  coop_id: string;
  count: number;
  recorded_at: string;
}

export default function CountCheck() {
  const [data, setData] = useState<EggCount[]>([]); // EggCount型の配列
  const [error, setError] = useState<string | null>(null); // エラーは文字列かnull

  useEffect(() => {
    // APIからデータを取得
    const fetchData = async () => {
      try {
        const response = await fetch("/api/countcheck");
        if (!response.ok) {
          throw new Error("データ取得に失敗しました");
        }
        const result: EggCount[] = await response.json(); // 結果をEggCount型で推論
        setData(result); // データをセット
      } catch (error) {
        setError((error as Error).message); // エラーメッセージをセット
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
              <td colSpan={3}>データがありません</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
