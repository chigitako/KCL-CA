"use client";

import { useEffect, useState } from "react";
import LeftPullTab from "@components/LeftPullTab";
import styles from "./page.module.css";
// import { Trash2 } from "lucide-react"; // ★★★ エラー回避のため削除 ★★★

interface Customer {
  id: number;
  name: string;
  address?: string | null;
  phone_number?: string | null;
  email?: string | null;
}

// ★★★ Lucide-reactの代わりにUnicode文字を使用 ★★★
// const DeleteIcon = () => <Trash2 className={styles.deleteIcon} size={18} />;

export default function CustomerListPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState({
    name: "",
    address: "",
    phone_number: "",
    email: "",
  });

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const query = new URLSearchParams(
      searchTerm as unknown as Record<string, string>
    ).toString();
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`/api/customers?${query}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: Customer[] = await response.json();
      setCustomers(data);
    } catch (err) {
      setError("Failed to fetch customers.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCustomers();
  };

  const handleClear = () => {
    const emptySearchTerm = {
      name: "",
      address: "",
      phone_number: "",
      email: "",
    };
    setSearchTerm(emptySearchTerm);
    fetchCustomers();
  };

  const handleDelete = async (id: number, name: string) => {
    if (window.confirm(`取引先「${name}」を本当に削除しますか？`)) {
      try {
        const response = await fetch("/api/customers", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to delete customer.");
        }

        fetchCustomers();
      } catch (err: any) {
        console.error(err);
        alert(`削除に失敗しました: ${err.message}`);
      }
    }
  };

  if (loading) {
    return <p className={styles.loading}>取引先情報をロード中...</p>;
  }

  if (error) {
    return <p className={styles.error}>エラーが発生しました: {error}</p>;
  }

  return (
    <LeftPullTab>
      <div className={styles.container}>
        {/* 1. 新規作成ボタン */}
        <div className={styles.header}>
          <a href="/web/customers/new" className={styles.newButton}>
            新規作成
          </a>
        </div>

        {/* 2. 検索フォームエリア */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          {/* 検索インプット（取引先） */}
          <input
            type="text"
            name="name"
            placeholder="取引先"
            className={styles.searchInput}
            value={searchTerm.name}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（住所） */}
          <input
            type="text"
            name="address"
            placeholder="住所"
            className={styles.searchInput}
            value={searchTerm.address}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（電話） */}
          <input
            type="text"
            name="phone_number"
            placeholder="電話"
            className={styles.searchInput}
            value={searchTerm.phone_number}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（メール） */}
          <input
            type="text"
            name="email"
            placeholder="メール"
            className={styles.searchInput}
            value={searchTerm.email}
            onChange={handleSearchChange}
          />

          {/* 検索ボタン */}
          <button type="submit" className={styles.searchButton}>
            検索
          </button>

          {/* クリアボタン */}
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            クリア
          </button>
        </form>

        {/* 3. データテーブル */}
        <div className={styles.tableContainer}>
          {customers.length === 0 ? (
            <p className={styles.noData}>取引先が見つかりませんでした。</p>
          ) : (
            <table className={styles.customerTable}>
              {/* ★★★ ハイドレーションエラー対策済み：trタグ内に空白なし ★★★ */}
              <thead>
                <tr className={styles.tableHeader}>
                  <th>取引先</th>
                  <th>住所</th>
                  <th>電話</th>
                  <th>メール</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  // ★★★ ハイドレーションエラー対策済み：trタグ内に空白なし ★★★
                  <tr key={customer.id} className={styles.tableRow}>
                    <td>{customer.name}</td>
                    <td>{customer.address || "未登録"}</td>
                    <td>{customer.phone_number || "未登録"}</td>
                    <td>{customer.email || "未登録"}</td>
                    <td
                      className={styles.deleteCell}
                      onClick={() => handleDelete(customer.id, customer.name)}
                    >
                      {/* ★★★ Unicodeアイコンを使用 ★★★ */}
                      <span className={styles.deleteIcon}>&#128465;</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </LeftPullTab>
  );
}
