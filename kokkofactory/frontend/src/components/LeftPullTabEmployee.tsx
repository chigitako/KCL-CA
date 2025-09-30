// src/components/LeftPullTab.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "./LeftPullTab.css";
import { useLang } from "./LangContext";

const LeftPullTab = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const { lang, setLang } = useLang();

  // ページ初回ロード時に localStorage から読み込み
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang === "ja" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === "ja" ? "en" : "ja";
    setLang(newLang);
    localStorage.setItem("lang", newLang); // ← 永続化
  };

  return (
    <>
      {/* 左のプルタブ */}
      <div
        className="leftPullTab"
        onClick={() => setOpen(!open)}
      >
        {open
          ? lang === "ja"
            ? "閉じる"
            : "Close"
          : lang === "ja"
            ? "開く"
            : "Open"}
      </div>

      {/* スライドメニュー */}
      <div className={`slideMenu ${open ? "open" : ""}`}>
        <h2>{lang === "ja" ? "プルタブメニュー" : "Pull Tab Menu"}</h2>
        <p>{lang === "ja" ? "好きな内容を入れてね！" : "Add whatever you like!"}</p>

        <Link href="/web/employee/chicken">
          <button className="buttonStyle">{lang === "ja" ? "とり 🐥" : "Chicken 🐥"}</button>
        </Link>
        <Link href="/web/employee/environment">
          <button className="buttonStyle">{lang === "ja" ? "環境 🌎" : "Environment 🌎"}</button>
        </Link>
        <Link href="/web/employee/customers">
          <button className="buttonStyle">{lang === "ja" ? "取引先名簿" : "Customers"}</button>
        </Link>
        <Link href="/web/employee/stock">
          <button className="buttonStyle">{lang === "ja" ? "在庫" : "Stock"}</button>
        </Link>

        {/* 下部に固定の設定ボタン */}
        <div className="settingsSection">
          <button className="buttonStyle" onClick={toggleLang}>
            {lang === "ja" ? "🌐 言語: 日本語" : "🌐 Language: English"}
          </button>
        </div>
      </div>

      {/* ページ本体 */}
      <div className={`main ${open ? "shifted" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default LeftPullTab;
