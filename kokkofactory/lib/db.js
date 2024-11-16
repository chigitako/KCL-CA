import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres", // データベースのユーザー名
  host: "localhost", // データベースのホスト
  database: "eggs", // データベース名
  password: "password", // パスワード
  port: 5432, // PostgreSQLのポート番号
});
