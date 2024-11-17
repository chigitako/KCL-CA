import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // データベース接続

interface EggCount {
  id: number;
  coop_id: number;
  coop_name: string; // 鶏舎名
  count: number;
  weight: number;
  recorded_at: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // egg_countsテーブルとcoopテーブルをJOINしてデータを取得
      const result = await pool.query(
        `SELECT egg_counts.id, egg_counts.coop_id, coop.name AS coop_name, egg_counts.count, egg_counts.weight, egg_counts.recorded_at 
         FROM egg_counts 
         JOIN coop ON egg_counts.coop_id = coop.id 
         ORDER BY egg_counts.recorded_at DESC`
      );

      const eggCounts: EggCount[] = result.rows;
      res.status(200).json(eggCounts);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "未知のエラーが発生しました";
      console.error("データ取得エラー:", error);
      res.status(500).json({
        message: "データ取得に失敗しました",
        error: errorMessage,
      });
    }
  } else if (req.method === "POST") {
    const {
      coopId,
      count,
      weight,
    }: { coopId: number; count: number; weight: number } = req.body;
    console.log("受け取ったデータ:", { coopId, count, weight });

    try {
      // egg_countsテーブルにデータを挿入
      const result = await pool.query(
        "INSERT INTO egg_counts (coop_id, count, weight, recorded_at) VALUES ($1, $2, $3, NOW()) RETURNING id",
        [coopId, count, weight]
      );

      const newEggCount = result.rows[0];
      res.status(200).json({
        message: "データが正常に保存されました",
        result: newEggCount,
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "未知のエラーが発生しました";
      console.error("データ保存エラー:", error);
      res.status(500).json({
        message: "データ保存に失敗しました",
        error: errorMessage,
      });
    }
  } else {
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
