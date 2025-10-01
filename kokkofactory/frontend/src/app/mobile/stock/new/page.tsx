'use client';

import { useState } from 'react';
import styles from './page.module.css'; // 専用のCSSファイルをインポート

export default function StockForm() {
  const [supplierName, setSupplierName] = useState<string>('');
  const [count, setCount] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setIsSuccess(null);

    const parsedCount = parseInt(count, 10);

    // 入力値のバリデーション
    if (!supplierName || isNaN(parsedCount) || parsedCount <= 0) {
      setMessage('仕入れ先名と個数には、正しい値を入力してください。');
      setIsSuccess(false);
      return;
    }

    try {
      const response = await fetch('/api/stock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          supplierName,
          count: parsedCount,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || '在庫の登録に失敗しました。');
      }

      setMessage('在庫が正常に登録されました。✨');
      setIsSuccess(true);
      // フォームをリセット
      setSupplierName('');
      setCount('');
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      } else {
        setMessage('予期せぬエラーが発生しました。');
      }
      setIsSuccess(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>新しい在庫を登録</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="supplierName" className={styles.label}>仕入れ先名</label>
          <input
            id="supplierName"
            type="text"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
            className={styles.input}
            placeholder="例: 養鶏場A"
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="count" className={styles.label}>個数</label>
          <input
            id="count"
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            className={styles.input}
            placeholder="例: 500"
          />
        </div>
        <button type="submit" className={styles.submitButton}>登録</button>
      </form>

      {message && (
        <div className={`${styles.message} ${isSuccess ? styles.success : styles.error}`}>
          {message}
        </div>
      )}
    </div>
  );
}