// src/app/web/page.tsx
"use client";

import { useState } from "react";

export default function WebPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 左のプルタブ */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          backgroundColor: "#ffcc00",
          padding: "10px",
          borderTopRightRadius: "8px",
          borderBottomRightRadius: "8px",
          cursor: "pointer",
          userSelect: "none",
          zIndex: 1000,
        }}
      >
        {open ? "閉じる" : "開く"}
      </div>

      {/* スライドメニュー */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: open ? 0 : "-200px",
          width: "200px",
          height: "100vh",
          backgroundColor: "#ffee66",
          boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
          transition: "left 0.3s ease",
          padding: "20px",
          zIndex: 999,
        }}
      >
        <h2>プルタブメニュー</h2>
        <p>好きな内容を入れてね！</p>
      </div>

      {/* ページ本体 */}
      <div style={{ marginLeft: open ? "200px" : "0", transition: "margin-left 0.3s ease", padding: "20px" }}>
        <h1>ここは /web ページにょん！</h1>
        <p>左のタブでメニューの開閉ができるにょ！</p>
      </div>
    </>
  );
}
