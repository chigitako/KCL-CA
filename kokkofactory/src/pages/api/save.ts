import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // データベース接続

interface RequestBody {
  coopId: string;
  count: number;
  weight: number; // 重さも追加
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
    const { coopId, count, weight }: RequestBody = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO egg_counts (coop_id, count, weight, recorded_at) VALUES ($1, $2, $3, NOW())",
        [coopId, count, weight]
      );
      res.status(200).json({ message: "データが保存されました", result });
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
