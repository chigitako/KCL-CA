"use client";

import { useState } from "react";
import LeftPullTab from "@components/LeftPullTab";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function StockForm() {
  // 🌸 状態管理（State）を最新の入力項目に合わせて定義
  const [supplierName, setSupplierName] = useState<string>(""); 
  const [itemName, setItemName] = useState<string>(""); 
  const [stockCount, setStockCount] = useState<string>(""); 
  const [alertThreshold, setAlertThreshold] = useState<string>("100"); // デフォルト値100
  const [address, setAddress] = useState<string>(""); 
  const [phoneNumber, setPhoneNumber] = useState<string>(""); // 🌸 電話番号を独立
  const [email, setEmail] = useState<string>(""); // 🌸 メールアドレスを独立

  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSuccess(null);

    const parsedCount = parseInt(stockCount, 10);
    const parsedThreshold = parseInt(alertThreshold, 10);

    // 🌸 全ての必須フィールドに値が入っているかチェック
    if (
      !supplierName ||
      !itemName ||
      isNaN(parsedCount) ||
      parsedCount < 0 ||
      !address ||
      isNaN(parsedThreshold)
    ) {
      setMessage("入力内容を確認してね！おぱんちゅうさぎが泣いちゃうよ😢");
      setIsSuccess(false);
      return;
    }

    try {
      // 🌸 API側に送るデータを準備
      const response = await fetch("/api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplierName,
          ItemName: itemName, // 🌸 API側の変数名に合わせて送るよ
          count: parsedCount,
          address,
          phoneNumber, // 🌸 分けて送信
          email,       // 🌸 分けて送信
          alertThreshold: parsedThreshold,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "登録に失敗しちゃったみたい💦");
      }

      setMessage("在庫と基準値がバッチリ登録されたよ！✨");
      setIsSuccess(true);
      
      // 🌸 登録が終わったらフォームを綺麗にお掃除
      setSupplierName("");
      setItemName("");
      setStockCount("");
      setAlertThreshold("100");
      setAddress("");
      setPhoneNumber("");
      setEmail("");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "予期せぬエラーが発生しました。");
      setIsSuccess(false);
    }
  };

  const handleGoBack = () => {
    router.push("/web/stock");
  };

  return (
    <LeftPullTab>
      <div className={styles.container}>
        <h1 className={styles.title}>新規在庫登録 📝</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 1. 仕入れ先名 */}
          <input
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className={styles.input}
            placeholder="仕入れ先名"
            required
          />
          {/* 2. 品目名 */}
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={styles.input}
            placeholder="品目名 (トウモロコシなど)"
            required
          />
          {/* 3. 在庫数 */}
          <input
            type="number"
            value={stockCount}
            onChange={(e) => setStockCount(e.target.value)}
            className={styles.input}
            placeholder="在庫数"
            required
            min="0"
          />
          {/* 4. アラート基準値 */}
          <input
            type="number"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(e.target.value)}
            className={styles.input}
            placeholder="アラート基準値 (この数以下で通知)"
            required
            min="0"
          />
          {/* 5. 住所 */}
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={styles.input}
            placeholder="住所"
            required
          />
          {/* 6. 電話番号 (独立) */}
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className={styles.input}
            placeholder="電話番号"
          />
          {/* 7. メールアドレス (独立) */}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            placeholder="メールアドレス"
          />

          <div className={styles.buttonContainer}>
            <button type="button" onClick={handleGoBack} className={styles.backButton}>
              一覧に戻る
            </button>
            <button type="submit" className={styles.submitButton}>
              登録
            </button>
          </div>
        </form>
        {message && (
          <div className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>
            {message}
          </div>
        )}
      </div>
    </LeftPullTab>
  );
}