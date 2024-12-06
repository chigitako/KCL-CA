import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// PostgreSQLの接続プール設定
const pool = new Pool({
  user: "postgres", // PostgreSQLのユーザー名
  host: "localhost", // データベースホスト
  database: "eggs", // データベース名
  password: "password", // パスワード
  port: 5432, // デフォルトのPostgreSQLポート
});

interface EggData {
  coopId: number;
  count: number;
  averageWeight: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { coopId, count, averageWeight }: EggData = req.body;

    if (!coopId || !count || !averageWeight) {
      return res.status(400).json({ message: "必要なデータが不足しています" });
    }

    try {
      // データベースに新しいレコードを挿入
      const query = `
        INSERT INTO egg_counts(coop_id, count, average_weight, recorded_at)
        VALUES ($1, $2, $3, NOW())
        RETURNING id;
      `;
      const values = [coopId, count, averageWeight];

      const result = await pool.query(query, values);

      // 挿入されたレコードのIDを取得
      const newId = result.rows[0].id;

      return res
        .status(200)
        .json({ message: "データが保存されました", id: newId });
    } catch (error) {
      console.error("保存エラー:", error);
      return res
        .status(500)
        .json({ message: "保存に失敗しました: サーバーエラー" });
    }
  } else {
    return res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
