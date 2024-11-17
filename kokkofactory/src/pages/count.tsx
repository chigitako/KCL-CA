
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
    const { coopId, count, weight } = req.body;

    // 必要なデータがない場合、エラーメッセージを返す
    if (!coopId || count === undefined || weight === undefined) {
      return res.status(400).json({ message: "必要なデータが不足しています" });
    }

import BackButton from "../components/BackButton";
import AppBar from "../components/AppBar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";

const CountPage: React.FC = () => {
  const [carton, setCarton] = useState<number>(0); // カートンの個数
  const [egg, setEgg] = useState<number>(0); // 卵の個数
  const [total, setTotal] = useState<number>(0); // 合計の卵の個数
  const [weight, setWeight] = useState<number>(0); // 重さの入力フィールド
  const [coopId, setCoopId] = useState<number>(1); // 仮で鶏舎IDを設定

  // cartonやeggが変更された時に合計を計算
  const calculateTotal = () => {
    setTotal(carton * 30 + egg); // カートン数×30 + 卵の数
  };

  // cartonやeggが変更されたときに再計算する
  React.useEffect(() => {
    calculateTotal();
  }, [carton, egg]);



    try {
      // PostgreSQLにデータを保存
      const query = `
        INSERT INTO eggs (coop_id, count, weight)
        VALUES ($1, $2, $3) RETURNING id;
      `;
      const values = [coopId, count, weight];
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
