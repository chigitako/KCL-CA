// pages/api/deadChickens.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg"; // PostgreSQL用のパッケージをインポート

const pool = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { coopId } = req.query;

  // GET メソッド: 鶏舎の死んだ鶏の数を取得
  if (req.method === "GET" && coopId) {
    try {
      const query = "SELECT count FROM dead_chickens WHERE coop_id = $1";
      const result = await pool.query(query, [coopId]);

      if (result.rows.length === 0) {
        return res
          .status(404)
          .json({ message: "死んだ鶏のデータが見つかりません" });
      }

      res.status(200).json({ count: result.rows[0].count });
    } catch (error) {
      console.error("データベースエラー:", error);
      res.status(500).json({ message: "サーバーエラー" });
    }
  }

  // POST メソッド: 新しい死んだ鶏の数を保存
  else if (req.method === "POST" && coopId) {
    const { count } = req.body; // リクエストボディから死んだ鶏の数を取得

    if (typeof count !== "number" || count < 0) {
      return res.status(400).json({ message: "無効な死んだ鶏の数です。" });
    }

    try {
      // 既存のデータがあれば更新、なければ新規挿入
      const query =
        "INSERT INTO dead_chickens (coop_id, count) VALUES ($1, $2) ON CONFLICT (coop_id) DO UPDATE SET count = EXCLUDED.count";
      await pool.query(query, [coopId, count]);

      res.status(200).json({ message: "死んだ鶏の数が保存されました。" });
    } catch (error) {
      console.error("データベースエラー:", error);
      res.status(500).json({ message: "サーバーエラー" });
    }
  }

  // 他のHTTPメソッドはサポートしない
  else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
