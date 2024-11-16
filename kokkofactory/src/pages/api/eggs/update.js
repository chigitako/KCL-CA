// pages/api/eggs/update.js

import db from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { coopId, count } = req.body; // リクエストボディからcoopIdと新しい卵の数を取得

    try {
      // 卵のカウントをデータベースで更新
      await db.query("UPDATE egg_counts SET count = $1 WHERE coop_id = $2", [
        count,
        coopId,
      ]);

      // 成功した場合は200 OKを返す
      res.status(200).json({ message: "Egg count updated successfully" });
    } catch (error) {
      console.error("Error updating egg count:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
