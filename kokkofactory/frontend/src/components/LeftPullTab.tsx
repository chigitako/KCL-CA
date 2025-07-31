// src/components/LeftPullTab.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import "./LeftPullTab.css";

const LeftPullTab = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 左のプルタブ */}
      <div
        className="leftPullTab"
        onClick={() => setOpen(!open)}
      >
        {open ? "閉じる" : "開く"}
      </div>

      {/* スライドメニュー */}
      <div className={`slideMenu ${open ? "open" : ""}`}>
        <h2>プルタブメニュー</h2>
        <p>好きな内容を入れてね！</p>

        <Link href="/web/chicken">
          <button className="buttonStyle">とり 🐥</button>
        </Link>
        <Link href="/web/environment">
          <button className="buttonStyle">環境 🌎</button>
        </Link>
      </div>

      {/* ページ本体 */}
      <div className={`main ${open ? "shifted" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default LeftPullTab;
