import { NextApiRequest, NextApiResponse } from "next";
import { pool } from "../../../lib/db"; // データベース接続設定

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  try {
    const query = `
      SELECT 
        id,
        coop_id,
        count,
        recorded_at,
        average_weight 
      FROM egg_counts
      ORDER BY recorded_at DESC;
    `;

    const result = await pool.query(query);

    if (result.rows.length === 0) {
      res.status(404).json({ message: "No count data found" });
      return;
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching count data:", error);
    res.status(500).json({ message: "Error fetching count data" });
  }
}
