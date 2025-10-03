"use client";

import { useState } from "react";
import LeftPullTab from "@components/LeftPullTab";
import { useRouter } from "next/navigation"; // 戻るボタンのためにrouterをインポート
import styles from "./page.module.css"; // 専用のCSSファイルをインポート

export default function StockForm() {
  // 変更点: 電話番号とメールアドレスを削除し、連絡先(contactInfo)を追加
  const [supplierName, setSupplierName] = useState<string>(""); // 仕入れ先名
  const [itemName, setItemName] = useState<string>(""); // 品目名
  const [stockCount, setStockCount] = useState<string>(""); // 在庫数
  const [address, setAddress] = useState<string>(""); // 住所
  const [contactInfo, setContactInfo] = useState<string>(""); // 連絡先 (電話番号/メールアドレスなど)
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSuccess(null);

    const parsedCount = parseInt(stockCount, 10);

    // 変更点: バリデーションをcontactInfoに修正
    if (
      !supplierName ||
      !itemName ||
      isNaN(parsedCount) ||
      parsedCount <= 0 ||
      !address ||
      !contactInfo
    ) {
      setMessage("全てのフィールドに正しい値を入力してください。");
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch("/api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          supplierName,
          itemName,
          count: parsedCount,
          stockCount: parsedCount,
          address,
          contactInfo,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "在庫の登録に失敗しました。");
      }

      setMessage("在庫が正常に登録されました。✨");
      setIsSuccess(true); // フォームをリセット
      setSupplierName("");
      setItemName("");
      setStockCount("");
      setAddress("");
      setContactInfo("");
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage("予期せぬエラーが発生しました。");
      }
      setIsSuccess(false);
    }
  };

  const handleGoBack = () => {
    router.push("/web/stock");
  };

  return (
    <LeftPullTab>
      <div className={styles.container}>
        <h1 className={styles.title}>新規在庫登録 📝</h1>{" "}
        <form onSubmit={handleSubmit} className={styles.form}>
          {/* 1. 仕入れ先名 */}{" "}
          <input
            type="text"
            id="supplierName"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className={styles.input}
            placeholder="仕入れ先名"
            required
          />
          {/* 2. 品目名 */}{" "}
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className={styles.input}
            placeholder="品目名"
            required
          />
          {/* 3. 在庫数 */}{" "}
          <input
            type="number"
            id="stockCount"
            value={stockCount}
            onChange={(e) => setStockCount(e.target.value)}
            className={styles.input}
            placeholder="在庫数"
            required
            min="1"
          />
          {/* 4. 住所 */}{" "}
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className={styles.input}
            placeholder="住所"
            required
          />
          {/* 5. 連絡先 (統合) */}{" "}
          <input
            type="text" // 電話番号とメールアドレスを統合するため、type="text"に戻す
            id="contactInfo"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            className={styles.input}
            placeholder="連絡先 (電話番号、メールアドレスなど)"
            required
          />{" "}
          <div className={styles.buttonContainer}>
            {" "}
            <button
              type="button"
              onClick={handleGoBack}
              className={styles.backButton}
            >
              一覧に戻る{" "}
            </button>{" "}
            <button type="submit" className={styles.submitButton}>
              登録{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
        {message && (
          <div
            className={`${styles.message} ${
              isSuccess ? styles.success : styles.error
            }`}
          >
            {message}{" "}
          </div>
        )}{" "}
      </div>
    </LeftPullTab>
  );
}
