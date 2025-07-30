// src/app/web/page.tsx
"use client";

import { useState } from "react";
import baseStyles from './page.module.css';

export default function WebPage() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 左のプルタブ */}
      <div className={baseStyles.leftPulltab}
        onClick={() => setOpen(!open)}
      >
        {open ? "閉じる" : "開く"}
      </div>

      {/* スライドメニュー */}
      <div className={baseStyles.srideMenu} style={{ left: open ? "0" : "-200px" }}>
        <h2>プルタブメニュー</h2>
        <p>好きな内容を入れてね！</p>
      </div>

      {/* ページ本体 */}
      <div className={baseStyles.main} style={{ marginLeft: open ? "200px" : "0"}}>
        <h1>ここは /web ページにょん！</h1>
        <p>左のタブでメニューの開閉ができるにょ！</p>
      </div>
    </>
  );
}
