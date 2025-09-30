"use client";

import { useEffect, useState } from "react";
import LeftPullTab from "@components/LeftPullTabEmployee";
import styles from "./page.module.css";
import { useLang } from "@components/LangContext";
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
  const { lang } = useLang();
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

  if (loading) {
    return <p className={styles.loading}>{lang === "ja" ? "取引先情報をロード中..." : "Loading"}</p>;
  }

  if (error) {
    return <p className={styles.error}>{lang === "ja" ? "エラーが発生しました:" : "Error:"} {error}</p>;
  }

  return (
    <LeftPullTab>
      <div className={styles.container}>
        <div className={styles.header}>
        </div>

        {/* 2. 検索フォームエリア */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          {/* 検索インプット（取引先） */}
          <input
            type="text"
            name="name"
            placeholder={lang === "ja" ? "取引先" : "Customer"}
            className={styles.searchInput}
            value={searchTerm.name}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（住所） */}
          <input
            type="text"
            name="address"
            placeholder={lang === "ja" ? "住所" : "Address"}
            className={styles.searchInput}
            value={searchTerm.address}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（電話） */}
          <input
            type="text"
            name="phone_number"
            placeholder={lang === "ja" ? "電話" : "Phone"}
            className={styles.searchInput}
            value={searchTerm.phone_number}
            onChange={handleSearchChange}
          />

          {/* 検索インプット（メール） */}
          <input
            type="text"
            name="email"
            placeholder={lang === "ja" ? "メール" : "Email"}
            className={styles.searchInput}
            value={searchTerm.email}
            onChange={handleSearchChange}
          />

          {/* 検索ボタン */}
          <button type="submit" className={styles.searchButton}>
            {lang === "ja" ? "検索" : "Search"}
          </button>

          {/* クリアボタン */}
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            {lang === "ja" ? "クリア" : "Clear"}
          </button>
        </form>

        {/* 3. データテーブル */}
        <div className={styles.tableContainer}>
          {customers.length === 0 ? (
            <p className={styles.noData}>{lang === "ja"
      ? "取引先が見つかりませんでした。"
      : "No customers found."}</p>
          ) : (
            <table className={styles.customerTable}>
              {/* ★★★ ハイドレーションエラー対策済み：trタグ内に空白なし ★★★ */}
              <thead>
                <tr className={styles.tableHeader}>
                <th>{lang === "ja" ? "取引先" : "Customer"}</th>
                <th>{lang === "ja" ? "住所" : "Address"}</th>
                <th>{lang === "ja" ? "電話" : "Phone"}</th>
                <th>{lang === "ja" ? "メール" : "Email"}</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  // ★★★ ハイドレーションエラー対策済み：trタグ内に空白なし ★★★
                  <tr key={customer.id} className={styles.tableRow}>
                    <td>{customer.name}</td>
                    <td>{customer.address || (lang === "ja" ? "未登録" : "Not registered")}</td>
                    <td>{customer.phone_number || (lang === "ja" ? "未登録" : "Not registered")}</td>
                    <td>{customer.email || (lang === "ja" ? "未登録" : "Not registered")}</td>
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
