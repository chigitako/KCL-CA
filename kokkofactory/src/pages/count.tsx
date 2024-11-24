import type { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg"; // PostgreSQL用のパッケージをインポート

// PostgreSQLの接続設定
const pool = new Pool({
  user: process.env.PG_USER, // 環境変数からDB接続情報を取得
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: Number(process.env.PG_PORT),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { coopId, count, averageWeight } = req.body;

    // 必要なデータがない場合、エラーメッセージを返す
    if (!coopId || count === undefined || averageWeight === undefined) {
      return res.status(400).json({ message: "必要なデータが不足しています" });
    }

    try {
      // PostgreSQLにデータを保存
      const query = `
        INSERT INTO egg_counts (coop_id, count, average_weight)
        VALUES ($1, $2, $3) RETURNING id;
      `;
      const values = [coopId, count, averageWeight];
      const result = await pool.query(query, values);

      // 保存が成功した場合
      res
        .status(200)
        .json({ message: "データが保存されました", id: result.rows[0].id });
    } catch (error) {
      console.error("データベースエラー:", error);
      res.status(500).json({ message: "サーバーエラー" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
