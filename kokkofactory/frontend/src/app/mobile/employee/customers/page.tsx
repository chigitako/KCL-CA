"use client";

import { useEffect, useState } from "react";
import LeftPullTab from "@components/LeftPullTabEmployee";
import styles from "./page.module.css";
import { useLang } from "@components/LangContext";

interface Customer {
  id: number;
  name: string;
  address?: string | null;
  phone_number?: string | null;
  email?: string | null;
}

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
    const query = new URLSearchParams(searchTerm).toString();
    try {
      setLoading(true);
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
    // 検索条件を空の状態にリセット
    const emptySearchTerm = {
      name: "",
      address: "",
      phone_number: "",
      email: "",
    };
    setSearchTerm(emptySearchTerm);

    // 空の検索条件でfetchCustomersを呼び出す
    const query = new URLSearchParams(emptySearchTerm).toString();
    fetch(`/api/customers?${query}`)
      .then((res) => res.json())
      .then((data) => setCustomers(data))
      .catch((err) => console.error(err));
  };
  

  if (loading) {
    return <p>{lang === "ja" ? "取引先情報をロード中..." : "Loading"}</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{lang === "ja" ? "エラーが発生しました:" : "Error:"} {error}</p>;
  }

  return (
    <LeftPullTab>
      <div className={styles.container}>
        <div className={styles.header}>
        </div>

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            name="name"
            placeholder={lang === "ja" ? "取引先" : "Customer"}
            className={styles.searchInput}
            value={searchTerm.name}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            name="address"
            placeholder={lang === "ja" ? "住所" : "Address"}
            className={styles.searchInput}
            value={searchTerm.address}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            name="phone_number"
            placeholder={lang === "ja" ? "電話" : "Phone"}
            className={styles.searchInput}
            value={searchTerm.phone_number}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            name="email"
            placeholder={lang === "ja" ? "メール" : "Email"}
            className={styles.searchInput}
            value={searchTerm.email}
            onChange={handleSearchChange}
          />
          <button type="submit" className={styles.searchButton}>
            {lang === "ja" ? "検索" : "Search"}
          </button>
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
          >
            {lang === "ja" ? "クリア" : "Clear"}
          </button>
        </form>

        {customers.length === 0 ? (
          <p>{lang === "ja"
      ? "取引先が見つかりませんでした。"
      : "No customers found."}</p>
        ) : (
          <table className={styles.customerTable}>
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
    </LeftPullTab>
  );
}
