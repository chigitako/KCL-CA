// src/components/LeftPullTab.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import "./LeftPullTab.css";
import { usePathname } from "next/navigation"; 

const LeftPullTab = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ボタンコンポーネントを共通化し、アクティブクラスを適用するヘルパー関数
  const NavButton = ({ href, children }: { href: string, children: React.ReactNode }) => {
    // 現在のパスとリンク先のパスが一致するかチェックします
    const isActive = pathname === href;
    
    return (
      <Link href={href}>
        {/* 一致する場合のみ 'activeButton' クラスを追加します */}
        <button className={`buttonStyle ${isActive ? 'activeButton' : ''}`}>
          {children}
        </button>
      </Link>
    );
  };

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
        <h2>
          <Link href="/web">
            <img src="/images/kokkologo.png" alt="こっこふぁくとりーロゴ" className={"logo"} />
          </Link>
        </h2>

        <NavButton href="/web/chicken">産卵記録</NavButton>
        <NavButton href="/web/environment">環境モニタリング</NavButton>
        <NavButton href="/web/shipment">出荷履歴</NavButton>
        <NavButton href="/web/customers">取引先名簿</NavButton>
        <NavButton href="/web/stock">在庫</NavButton>
      </div>

      {/* ページ本体 */}
      <div className={`main ${open ? "shifted" : ""}`}>
        {children}
      </div>
    </>
  );
};

export default LeftPullTab;
