"use client";

import { useState, useEffect, useCallback } from "react";
import LoadingScreen from "@components/LoadingScreen";
import LeftPullTab from "@components/LeftPullTab";
import styles from "./page.module.css";

// 在庫情報の型定義
interface InventoryItem {
  supplierName: string;
  ItemName: string;
  address: string;
  phoneNumber: string;
  email: string;
  remainingCount: number;
}

// フォームの入力値の型定義
interface NewStockForm {
  supplierName: string;
  count: string; // 入力値は文字列として扱う
}

// --------------------------------------------------
// 1. API通信関数
// --------------------------------------------------

const fetchInventory = async (): Promise<InventoryItem[]> => {
  const res = await fetch("/api/stock");

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(
      `在庫の取得に失敗しました: ${errorBody.error || res.statusText}`
    );
  }

  return res.json();
};

const createStock = async (data: NewStockForm) => {
  const payload = {
    supplierName: data.supplierName,
    count: parseInt(data.count, 10),
  };

  const res = await fetch("/api/stock", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorBody = await res.json();
    throw new Error(`登録に失敗しました: ${errorBody.error || res.statusText}`);
  }

  return res.json();
};

// --------------------------------------------------
// 2. メインコンポーネント
// --------------------------------------------------

export default function StockPage() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 🔹 追加: 検索用の state
  const [searchTerms, setSearchTerms] = useState({
    supplierName: "",
    itemName: "",
    address: "",
    phoneNumber: "",
    inventoryCount: "", // 在庫数を追加
  });

  const handleUpdate = (item: InventoryItem) => {
    alert(`${item.supplierName} の在庫情報を更新します`);
  };

  const loadInventory = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchInventory();
      setInventory(data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("在庫一覧の読み込み中に不明なエラーが発生しました。");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadInventory();
  }, [loadInventory]);

  // 🔹 検索フォーム入力ハンドラ
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchTerms((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 クリアボタン処理
  const handleClear = () => {
    setSearchTerms({
      supplierName: "",
      itemName: "",
      address: "",
      phoneNumber: "",
      inventoryCount: "",
    });
  };

  // 🔹 検索結果フィルタリング
  const filteredInventory = inventory.filter((item) => {
    return (
      item.supplierName.includes(searchTerms.supplierName) &&
      item.ItemName.includes(searchTerms.itemName) &&
      item.address.includes(searchTerms.address) &&
      item.phoneNumber.includes(searchTerms.phoneNumber) &&
      (searchTerms.inventoryCount === "" ||
        item.remainingCount.toString().includes(searchTerms.inventoryCount))
    );
  });

  return (
    <LeftPullTab>
      <div className={styles.container}>
        <div className={styles.header}>
          <a href="/web/stock/new" className={styles.newButton}>
            新規作成
          </a>
        </div>
        {/* 🔹 検索フォーム */}
        <form
          className={styles.searchForm}
          onSubmit={(e) => e.preventDefault()} // フォーム送信でリロード防止
        >
          <input
            type="text"
            name="supplierName"
            placeholder="仕入れ先名"
            value={searchTerms.supplierName}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <input
            type="text"
            name="itemName"
            placeholder="品目名"
            value={searchTerms.itemName}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <input
            type="text"
            name="inventoryCount"
            placeholder="在庫数"
            value={searchTerms.inventoryCount}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <input
            type="text"
            name="address"
            placeholder="住所"
            value={searchTerms.address}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="連絡先"
            value={searchTerms.phoneNumber}
            onChange={handleSearchChange}
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            検索
          </button>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            クリア
          </button>
        </form>

        {/* ----------------- 在庫一覧表示 ----------------- */}
        {loading ? (
          <LoadingScreen message="データ読み込み中・・・" />
        ) : (
          <table className={styles.table}>
            <thead className={styles.tableHeader}>
              <tr>
                <th>仕入れ先名</th>
                <th>品目名</th>
                <th>在庫数</th>
                <th>住所</th>
                <th>連絡先</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredInventory.length === 0 ? (
                <tr>
                  <td colSpan={6}>在庫データがありません。</td>
                </tr>
              ) : (
                filteredInventory.map((item, index) => (
                  <tr key={index} className={styles.tableRow}>
                    <td>{item.supplierName}</td>
                    <td>{item.ItemName}</td>
                    <td>{item.remainingCount.toLocaleString()}</td>
                    <td>{item.address}</td>
                    <td>
                      {item.phoneNumber} / {item.email}
                    </td>
                    <td>
                      <button
                        className={styles.updateButton}
                        onClick={() => handleUpdate(item)}
                      >
                        🖊️ 更新
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </LeftPullTab>
  );
}
