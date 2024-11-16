import { pool } from "../../../lib/db"; // db.jsの場所を確認してインポート

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // egg_countsテーブルからデータを取得
      const result = await pool.query(
        "SELECT * FROM egg_counts ORDER BY recorded_at DESC"
      );

      // 成功した場合のレスポンス
      res.status(200).json(result.rows);
    } catch (error) {
      console.error("データ取得エラー:", error);
      res
        .status(500)
        .json({ message: "データ取得に失敗しました", error: error.message });
    }
  } else {
    // GET以外のリクエストに対するレスポンス
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
