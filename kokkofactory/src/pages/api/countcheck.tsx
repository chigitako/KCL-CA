import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // db.tsの場所を確認してインポート

interface EggCount {
  id: number;
  coop_id: number;
  count: number;
  recorded_at: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // egg_countsテーブルからデータを取得
      const result = await pool.query(
        "SELECT * FROM egg_counts ORDER BY recorded_at DESC"
      );

      // 成功した場合のレスポンス
      const eggCounts: EggCount[] = result.rows; // 型を指定してレスポンスを整形
      res.status(200).json(eggCounts);
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
