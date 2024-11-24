import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // DB接続

interface RequestBody {
  coopId: number;
  count: number;
  averageWeight: number;
}

interface ResponseData {
  message: string;
  result?: any;
  error?: string;
  stack?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { coopId, count, averageWeight }: RequestBody = req.body;

    try {
      // egg_countsテーブルにデータを保存
      const result = await pool.query(
        "INSERT INTO egg_counts (coop_id, count, average_weight) VALUES ($1, $2, $3) RETURNING *",
        [coopId, count, averageWeight] // 平均重量のみ保存
      );

      // 成功時のレスポンスに保存したデータを返す
      res.status(200).json({
        message: "データが保存されました",
        result: result.rows[0], // 保存されたデータを返却
      });
    } catch (error: any) {
      console.error("データ保存エラー:", error);
      res.status(500).json({
        message: "保存に失敗しました",
        error: error.message,
        stack: error.stack, // スタックトレースを開発環境でのみ表示
      });
    }
  } else {
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
