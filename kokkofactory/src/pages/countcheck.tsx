import { useEffect, useState } from "react";

// データの型を定義
interface EggCount {
  id: number;
  coop_id: number; // coop_idをnumber型で定義
  coop_name: string; // 鶏舎名を追加
  count: number;
  weight: number; // 重さを追加
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
    <div style={{ padding: "20px" }}>
      <h1>卵のカウント確認</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              鶏舎ID
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              鶏舎名 {/* 鶏舎名を追加 */}
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              カウント
            </th>
            <th style={{ border: "1px solid black", padding: "8px" }}>重さ</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              記録日時
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {row.coop_id}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {row.coop_name} {/* 鶏舎名を表示 */}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {row.count}
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {row.weight} kg
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {new Date(row.recorded_at).toLocaleString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center", padding: "8px" }}>
                データがありません
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
