import BackButton from "@/components/BackButton";
import AppBar from "../components/AppBar";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";

const CountPage: React.FC = () => {
  const [carton, setCarton] = useState<number>(0); // カートンの個数
  const [egg, setEgg] = useState<number>(0); // 卵の個数
  const [total, setTotal] = useState<number>(0); // 合計の卵の個数
  const [weight, setWeight] = useState<number>(0); // 重さの入力フィールド
  const [coopId, setCoopId] = useState<number>(1); // 仮で鶏舎IDを設定

  // cartonやeggが変更された時に合計を計算
  const calculateTotal = () => {
    setTotal(carton * 30 + egg); // カートン数×30 + 卵の数
  };

  // cartonやeggが変更されたときに再計算する
  React.useEffect(() => {
    calculateTotal();
  }, [carton, egg]);


  const handleSave = async () => {
    try {
      const response = await fetch("/api/eggs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coopId,
          count: total, // 卵の数のみ送信
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // 成功メッセージ
      } else {
        alert(`保存に失敗しました: ${data.message}`); // 失敗時にエラーメッセージを表示
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("保存に失敗しました: サーバーエラー");
    }
  };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar title="集卵　count" />
      {/* メインコンテンツ */}
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        {/* 上部の数字とアイコン部分 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>5</div>
          <Image
            src="/images/egg_transparent.PNG"
            alt="Egg carton"
            width={100}
            height={100}
          />
          <TextField
            variant="outlined"
            style={{ width: "80px" }}
            type="number"
            value={carton}
            onChange={(e) => setCarton(Number(e.target.value))}

          />
          <span>個</span>
          <Image
            src="/images/egg_kari.jpg"
            alt="Egg"
            width={100}
            height={100}
          />
          <TextField
            variant="outlined"
            style={{ width: "80px" }}
            type="number"
            value={egg}
            onChange={(e) => setEgg(Number(e.target.value))}
          />
          <span>個</span>
        </div>

        {/* 合計と重量部分 */}
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            Total {total} 個
          </div>
          <Image
            src="/images/hakari.png"
            alt="Scale"
            width={100}
            height={100}
          />
          <TextField variant="outlined" style={{ width: "80px" }} />
          <span>g</span>
        </div>

        {/* 保存ボタン */}
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
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <BackButton />
      </div>
    </div>
  );
};

export default CountPage;
