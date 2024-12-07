import { NextApiRequest, NextApiResponse } from 'next';
import { pool } from '../../../../lib/db'; // サーバーサイド用のdb.tsをインポート

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // データベースからデータを取得
      const result = await pool.query('SELECT count FROM egg_counts WHERE coop_id = $1', [1]); // 例: coop_id = 1
      res.status(200).json(result.rows[0]); // データを返す
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}


/*
// pages/api/get-count.ts
import { Client } from 'pg';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // データベース接続の設定
  const client = new Client({
    connectionString: process.env.DATABASE_URL, // 環境変数からURLを取得
  });

  try {
    await client.connect(); // データベースに接続
    const result = await client.query('SELECT COUNT(*) FROM eggs'); // 必要なクエリを実行
    const count = result.rows[0].count; // データ取得
    res.status(200).json({ count }); // クライアントにデータを返す
  } catch (error) {
    console.error('Database query failed:', error);
    res.status(500).json({ error: 'Database query failed' });
  } finally {
    await client.end(); // 接続終了
  }
}
*/
