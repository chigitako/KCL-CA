import { NextApiRequest, NextApiResponse } from "next"; // Next.jsの型をインポート
import { pool } from "../../../lib/db"; // 正しい場所にあるか確認

// リクエストボディの型定義
interface RequestBody {
  coopId: string;
  count: number;
}

// レスポンスの型定義
interface ResponseData {
  message: string;
  result?: any; // 成功時の結果
  error?: string; // エラー時のメッセージ
  stack?: string; // エラー時のスタックトレース（デバッグ用）
}

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "POST") {
    const { coopId, count }: RequestBody = req.body; // 送信されるデータの確認

    try {
      // データベースに卵の数だけ保存
      const result = await pool.query(
        "INSERT INTO egg_counts (coop_id, count, recorded_at) VALUES ($1, $2, NOW())",
        [coopId, count]
      );

      // 成功した場合のレスポンス
      res.status(200).json({ message: "データが保存されました", result });
    } catch (error: any) {
      console.error("データ保存エラー:", error); // エラーログを出力
      res.status(500).json({
        message: "保存に失敗しました",
        error: error.message, // エラーメッセージを返す
        stack: error.stack, // スタックトレースも返す（デバッグ用）
      });
    }
  } else {
    // POST以外のリクエストに対するレスポンス
    res.status(405).json({ message: "メソッドが許可されていません" });
  }
}
