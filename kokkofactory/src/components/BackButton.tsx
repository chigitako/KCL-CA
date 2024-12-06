import React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router"; // Next.jsのuseRouterをインポート

export default function BackButton() {
  const router = useRouter(); // useRouterを呼び出してrouterを定義

  return (
    <Button
      variant="contained"
      onClick={() => {
        router.back(); // routerを使って前のページに戻る
      }}
      sx={{ backgroundColor: '#ffd700' ,color:'#8B4513' }}
    >
      ←(back)
    </Button>
  );
}
