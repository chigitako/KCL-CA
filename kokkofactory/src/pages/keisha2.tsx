import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AppBar from "../components/AppBar";
import BackButton from "../components/BackButton";
import { useRouter } from "next/router";

const CoopSelectionPage: React.FC = () => {
  const router = useRouter();

  const BasicButtons: React.FC<{
    label: string;
    coopId: number;
    style?: React.CSSProperties;
  }> = ({ label, coopId, style }) => (
    <Button
      variant="contained"
      onClick={() => router.push(`/chicken/${coopId}`)} // ここで動的に遷移
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
      }}
    >
      <img
        src="/images/keisha.png" // 画像のパスを確認
        alt={label}
        style={{
          width: "100%", // 画像の幅
          height: "100%", // 画像の高さ
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
        }}
      >
        {label}
      </span>
    </Button>
  );

  return (
    <div>
      <AppBar title="鶏舎を選択" />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((coopId) => (
          <Grid
            item
            xs={4}
            key={coopId}
            style={{
              height: "150px", // 高さ調整
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <BasicButtons
              label={`鶏舎 ${coopId}`}
              coopId={coopId}
              style={{
                width: "90%", // ボタンの幅
                height: "90%", // ボタンの高さ
              }}
            />
          </Grid>
        ))}
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
      >
        <BackButton />
      </div>
    </div>
  );
};

export default CoopSelectionPage;