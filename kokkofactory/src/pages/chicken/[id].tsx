import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import HomeButton from "../../components/HomeButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";

const CountDeadChickensPage: React.FC = () => {
  const router = useRouter();
  const { id: coopId } = router.query;

  const [deadChickens, setDeadChickens] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.isReady && coopId) {
      setLoading(false);
    }
  }, [router.isReady, coopId]);

  const handleSave = async () => {
    if (!coopId || typeof coopId !== "string") {
      alert("鶏舎IDが取得できていません");
      return;
    }

    try {
      const response = await fetch(`/api/deadChickens`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coopId: Number(coopId), // 必要なら数値に変換
          count: deadChickens,
        }),
      });

      if (response.ok) {
        alert(
          `保存されました: 鶏舎 ${coopId} の死んだ鶏の数は ${deadChickens} です`
        );
      } else {
        alert("データの保存に失敗しました");
      }
    } catch (error) {
      console.error("APIエラー:", error);
      alert("エラーが発生しました");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar title={`鶏舎 ${coopId} の死んだ鶏のカウント`} />
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src="/images/chicken.jpg"
            alt="Dead chicken"
            width={100}
            height={100}
          />
          <TextField
            variant="outlined"
            style={{ width: "150px" }}
            type="number"
            label="死んだ鶏の数"
            value={deadChickens}
            onChange={(e) => setDeadChickens(Number(e.target.value))}
          />
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100px", height: "50px" }}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
        }}
      >
        <HomeButton />
        <BackButton />
      </div>
    </div>
  );
};

export default CountDeadChickensPage;
