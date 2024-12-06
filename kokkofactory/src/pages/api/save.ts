import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // DB接続

interface RequestBody {
  coopId: number;
  count: number; // 死んだ鶏の数
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
    const { coopId, count }: RequestBody = req.body;

    try {
      // dead_chickensテーブルにデータを保存
      const result = await pool.query(
        "INSERT INTO dead_chickens (coop_id, count, recorded_at) VALUES ($1, $2, NOW())",
        [coopId, count]
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
        stack: error.stack,
      });
    }
  } else {
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
