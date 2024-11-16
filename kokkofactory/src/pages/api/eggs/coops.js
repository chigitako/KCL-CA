// pages/api/coops.js

import db from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // 鶏舎のリストをデータベースから取得
      const result = await db.query("SELECT * FROM coops");

      res.status(200).json(result.rows); // 鶏舎のデータを返す
    } catch (error) {
      console.error("Error fetching coops:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    const { name } = req.body; // リクエストボディから鶏舎の名前を取得

    try {
      // 新しい鶏舎をデータベースに追加
      await db.query("INSERT INTO coops (name) VALUES ($1)", [name]);

      res.status(201).json({ message: "New coop added" });
    } catch (error) {
      console.error("Error adding coop:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
