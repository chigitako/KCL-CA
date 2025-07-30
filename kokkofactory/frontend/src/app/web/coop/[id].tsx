import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import AppBar from "../../components/AppBar";
import BackButton from "../../components/BackButton";
import HomeButton from "../../components/HomeButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Image from "next/image";
import Link from "next/link";

const CountEggsPage: React.FC = () => {
  const router = useRouter();
  const { id: coopId } = router.query; // 鶏舎IDを取得

  const [carton, setCarton] = useState<number>(0);
  const [egg, setEgg] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);
  const [averageWeight, setAverageWeight] = useState<number>(0);

  // coopId がまだ取得されていない場合は画面に「Loading...」を表示
  useEffect(() => {
    if (coopId) {
      const totalEggs = carton * 40 + egg;
      setTotal(totalEggs);
      setAverageWeight(totalEggs > 0 && weight > 0 ? weight / totalEggs : 0);
    }
  }, [coopId, carton, egg, weight]);

  const handleSave = async () => {
    if (!coopId) {
      alert("鶏舎IDが不明です");
      return;
    }

    try {
      // APIリクエストの発行
      const response = await fetch("/api/eggs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          coopId: Number(coopId),
          count: total,
          averageWeight,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("データが保存されました", data);
        alert(data.message); // 成功時のメッセージ表示
      } else {
        console.error("エラー:", data.message);
        alert(`エラー: ${data.message}`); // エラーメッセージ表示
      }
    } catch (error) {
      console.error("保存に失敗しました:", error);
      alert("保存に失敗しました: サーバーエラー");
    }
  };

  // coopIdがまだ取得されていない場合は「Loading...」を表示
  if (!coopId) return <div>Loading...</div>;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#FFFFF0", // 背景色（画像がない場合に表示される）
        padding: "20px",
        minHeight: "100vh",
        backgroundImage: "url(/images/haikei1.png)", // 画像の URL を指定
        backgroundSize: "923px 473px", // 背景画像サイズ
        backgroundPosition: "0 0", // 画像を左上に配置
        backgroundRepeat: "repeat", // 画像を繰り返し表示
      }}
    >
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
            src="/images/egg-carton.png"
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
            src="/images/egg1.png"
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
          <Image src="/images/scal1.png" alt="Scale" width={100} height={100} />
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
            sx={{ backgroundColor: '#ffd700' ,color:'#8B4513' }}
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

export default CountEggsPage;
