import React, { useState } from "react";
import AppBar from "../components/AppBar"; // 上部バーのコンポーネント
import Button from "@mui/material/Button";
import Image from "next/image";

const SizePage: React.FC = () => {
  const [eggCount, setEggCount] = useState<number>(0); // 数を数えるステート

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        margin: 0,
        padding: 0,
        backgroundColor: "#FFFFF0", // 背景色（画像がない場合に表示される）
        minHeight: "100vh",
        backgroundImage: "url(/images/haikei1.png)", // 画像の URL を指定
        backgroundSize: "923px 473px", // 背景画像サイズ
        backgroundPosition: "0 0", // 画像を左上に配置
        backgroundRepeat: "repeat", // 画像を繰り返し表示
      }}
    >
      {/* AppBar */}
      <AppBar title="サイズ size" />

      {/* サイズの表示 */}
      <div style={styles.eggContainer}>
        {[
          { src: "/images/size-egg.jpg", label: "LLL\n超特大" },
          { src: "/images/size-egg.jpg", label: "LL\n特大" },
          { src: "/images/size-egg.jpg", label: "L\n大" },
          { src: "/images/size-egg.jpg", label: "M\n中" },
          { src: "/images/size-egg.jpg", label: "S\n小1" },
          { src: "/images/size-egg.jpg", label: "S\n小2" },
          { src: "/images/size-egg.jpg", label: "" },
          { src: "/images/size-egg.jpg", label: "" },
        ].map((item, index) => (
          <div key={index} style={styles.eggItem}>
            <Image
              src={item.src}
              alt={item.label}
              width={100}
              height={100}
              style={styles.eggImage}
            />
            <textarea style={styles.textBox}></textarea>
          </div>
        ))}
      </div>

      {/* セーブボタン */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100px", height: "50px" }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  eggContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    width: "100%",
    maxWidth: "100vw",
    boxSizing: "border-box",
    padding: "0 16px",
    flexGrow: 1,
  },
  eggItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  eggImage: {
    width: "80px",
    height: "auto",
  },
  textBox: {
    width: "100%",
    height: "40px",
    marginTop: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  countContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  countButton: {
    width: "200px",
    height: "50px",
    fontSize: "16px",
  },
};

export default SizePage;
