import { Pool } from "pg";

// PoolConfig型を使って型安全に設定
const poolConfig: {
  user: string;
  host: string;
  database: string;
  password: string;
  port: number;
} = {
  user: "postgres", // データベースのユーザー名
  host: "localhost", // データベースのホスト
  database: "eggs", // データベース名
  password: "password", // パスワード
  port: 5432, // PostgreSQLのポート番号
};

// 型安全にPoolを作成
export const pool = new Pool(poolConfig);
