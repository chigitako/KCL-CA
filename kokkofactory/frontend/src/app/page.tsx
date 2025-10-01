// src/app/web/page.tsx
"use client"; 

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"

export default function WebPage() {
  const [role, setRole] = useState<"admin" | "employee" | "">("");
  const [mode, setMode] = useState<"login" | "help">("login"); // 画面モード
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  

  //スマホかどうかの判定
  const isMobile = () => {
    if (typeof navigator === "undefined") return false; // SSR対策
    return /Mobi|Android|iPhone|iPad|iPod/.test(navigator.userAgent);
  };


  const ADMIN_PASSWORD = "kokkofactory"; // 管理者用パスワード

  const handleLogin = () => {
    const mobile = isMobile();
    if (role === "admin") {
      if (password === ADMIN_PASSWORD) {
        setMessage("管理者ログイン成功🎉");
        router.push(mobile ? "/mobile" : "/web"); // ←スマホなら /mobile
      } else {
        setMessage("パスワードが違う💦");
      }
    } else if (role === "employee") {
      setMessage("従業員ログイン成功🎉");
      router.push("/web/employee");
      
    } else {
      setMessage("ユーザー種別を選んで");
      
    }
  };

  const handleModeSwitch = () => {
    setMode(mode === "login" ? "help" : "login"); // login <-> help 切替
    setMessage(""); // メッセージリセット
  };

  return (
    <div className={styles.page}>
      {/* ロゴ */}
        <div className={styles.logoWrapper}>
          <img src="/images/kokkologo.png" alt="こっこふぁくとりーロゴ" className={styles.logo} />
        </div>
      <div className={styles.main}>
        
        {mode === "login" ? (
          <>
            <h1>ログイン</h1>
            <label>
              ユーザー種別：
              <select value={role} onChange={(e) => setRole(e.target.value as any)}>
                <option value="">選択してください</option>
                <option value="admin">管理者</option>
                <option value="employee">従業員</option>
              </select>
            </label>

            {role === "admin" && (
              <label>
                パスワード：
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
            )}

            <div className={styles.ctas}>
              <button className={styles.primary} onClick={handleLogin}>
                ログイン
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>ヘルプ</h1>
            <p>パスワードはkokkofactory</p>
            <p>モバイルページを見るときは URL に "/mobile" を追加してにょ</p>
          </>
        )}
        {message && <p>{message}</p>}      
      </div>

      <footer className={styles.footer}>
        <a href="#" onClick={handleModeSwitch}>
          {mode === "login" ? "ヘルプ" : "ログイン"}
        </a>
        <a href="#">プライバシー</a>
        <a href="#">お問い合わせ</a>
      </footer>
    </div>
  );
}