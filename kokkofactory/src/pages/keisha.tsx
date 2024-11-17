import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "../components/AppBar";
import BackButton from "../components/BackButton";
import keishaImage from "../../public/images/keisha.png"; // 背景画像のインポート

const CoopSelectionPage: React.FC = () => {
  // ボタンコンポーネント（BasicButtons を内包）
  const BasicButtons: React.FC<{
    label: string;
    path: string;
    style?: React.CSSProperties;
  }> = ({ label, path, style }) => (
    <Button
      variant="contained"
      href={path}
      style={style} // スタイルを直接渡す
    >
      {label}
    </Button>
  );

  return (
    <div>
      {/* アプリのヘッダー */}
      <AppBar title="集卵　count" />

      {/* グリッドレイアウト */}
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((coopId) => (
          <Grid
            item
            xs={4} // グリッドの幅を指定
            key={coopId}
            style={{
              height: "150px", // 高さを固定
              display: "flex", // 子要素の中央揃え
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${keishaImage})`,
                backgroundSize: "cover", // 背景画像を枠にフィット
                backgroundPosition: "center", // 背景画像の中央寄せ
                border: "1px solid #ccc",
                borderRadius: "8px",
                display: "flex", // 子要素の中央揃え
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* ボタンの配置 */}
              <BasicButtons
                label={`鶏舎 ${coopId}`}
                path={`/count/${coopId}`} // 遷移先のパス
                style={{
                  width: "90%", // ボタンの幅
                  height: "60%", // ボタンの高さ
                  background: "rgba(255, 255, 255, 0.7)", // 背景透過
                  border: "1px solid #ccc", // ボタンの境界線
                  color: "#000", // テキスト色
                  fontWeight: "bold", // テキストの強調
                  textAlign: "center", // テキストの中央揃え
                }}
              />
            </div>
          </Grid>
        ))}
      </Grid>

      {/* 戻るボタン */}
      <BackButton />
    </div>
  );
};

export default CoopSelectionPage;




