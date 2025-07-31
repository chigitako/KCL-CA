/*import BackButton from "../components/BackButton";
import AppBar from "../components/AppBar";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeButton from "../components/HomeButton";

const CountPage: React.FC = () => {
  const router = useRouter();
  const { id: coopId } = router.query; // URLのパラメータから鶏舎IDを取得

  const [carton, setCarton] = useState<number>(0); // カートンの個数
  const [egg, setEgg] = useState<number>(0); // 卵の個数
  const [total, setTotal] = useState<number>(0); // 合計の卵の個数
  const [weight, setWeight] = useState<number>(0); // 重さの入力
  const [averageWeight, setAverageWeight] = useState<number>(0); // 卵1個あたりの平均重量

  // cartonやeggが変更された時に合計を計算
  const calculateTotal = () => {
    const totalEggs = carton * 40 + egg; // カートンから卵の総数を計算
    setTotal(totalEggs);

    if (totalEggs > 0 && weight > 0) {
      const eggWeight = weight / totalEggs; // 1個あたりの平均重量
      setAverageWeight(eggWeight); // 1個あたりの平均重量を設定
    } else {
      setAverageWeight(0); // 卵数が0なら平均は0
    }
  };

  // carton, egg, weightが変更されたときに再計算する
  useEffect(() => {
    calculateTotal();
  }, [carton, egg, weight]);

  const handleSave = async () => {
    if (!coopId) {
      alert("鶏舎IDが不明です");
      return;
    }

    try {
      const coopIdNumber = Number(coopId); // coopIdを数値に変換
      if (isNaN(coopIdNumber)) {
        alert("無効な鶏舎IDです");
        return;
      }

      const response = await fetch("/api/eggs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coopId: coopIdNumber, // coopIdを送信
          count: total, // 卵の数
          averageWeight: averageWeight, // 卵1個あたりの平均重量
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // 成功メッセージ
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("保存に失敗しました: サーバーエラー");
    }
  };

  if (!coopId) {
    return <div>Loading...</div>; // coopIdが取得できるまで待機
  }

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar title={`鶏舎 ${coopId} の卵のカウント`} />
      <div
        style={{
          flex: 1,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
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
          <span>カートン</span>
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
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <div style={{ fontSize: "1.5rem", marginBottom: "10px" }}>
            Total: {total} 個
          </div>
          <Image src="/images/scale.png" alt="Scale" width={100} height={100} />
          <TextField
            variant="outlined"
            style={{ width: "80px" }}
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
          />
          <span>g</span>
          <div>1個あたり平均: {averageWeight.toFixed(2)} g</div>
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

export default CountPage;
*/