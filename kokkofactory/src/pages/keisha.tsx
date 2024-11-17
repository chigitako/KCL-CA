import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "../components/AppBar";
import BackButton from "../components/BackButton";

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
      style={{
        ...style,
        backgroundColor: "rgba(255, 255, 204, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0",
        border: "none",
        overflow: "hidden",
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "8px",
        boxSizing: "border-box",
    }} // スタイルを直接渡す
    >
      <img
        src="/images/keisha.png"
        alt={label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />
    <span
      style={{
        position: "absolute",
        top: "8px",
        left: "3px",
        color: "#000",
        fontFamily: "Comic Sans MS, cursive, sans-serif",
        fontSize: "25px",
        zIndex: 1,
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "2px 8px",
        borderRadius: "8px",
      }}>
      {label}
    </span>
    </Button>
  );

  return (
    <div>

      <AppBar title="集卵　count" />

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
              position: "relative",
            }}
          >
              {/* ボタンの配置 */}
              <BasicButtons
                label={`鶏舎 ${coopId}`}
                path={`/count/${coopId}`} // 遷移先のパス
                style={{
                  width: "90%", // ボタンの幅
                  height: "90%", // ボタンの高さ
                }}
              />
          </Grid>
        ))}
      </Grid>

      <BackButton />


      {/* 戻るボタン */}
      <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
      <BackButton />
      </div>

    </div>
  );
};

export default CoopSelectionPage;




