// src/app/web/employee/page.tsx
"use client";
import LeftPullTab from "@components/LeftPullTabEmployee";
import { useLang } from "@components/LangContext";


export default function WebPage() {
  const { lang } = useLang();
  return (
    <LeftPullTab>
      <h1>{lang === "ja" ? "ここは /web ページにょん！" : "This is '/web'page!"}</h1>
      <p>{lang === "ja" ? "左のタブでメニューの開閉ができるにょ！" : "You can open and close the menu from the left tab!"}</p>
    </LeftPullTab>
  );
}
