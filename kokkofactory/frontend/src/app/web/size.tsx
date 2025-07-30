/*import React, { useState } from "react";
import AppBar from "../components/AppBar";
import Button from "@mui/material/Button";
import Image from "next/image";
import HomeButton from "../components/HomeButton";
import BackButton from "../components/BackButton";

const styles: { [key: string]: React.CSSProperties } = {
  eggContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3列で並べる
    gap: "16px",
    padding: "0 16px",
  },
  eggItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  label: {
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "8px",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    width: "100%",
  },
  inputRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  inputBox: {
    width: "80px",
    height: "30px",
    fontSize: "1rem",
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  unitLabel: {
    fontSize: "0.9rem",
  },
};

const SizePage: React.FC = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFF0",
        padding: "20px",
        minHeight: "100vh",
        backgroundImage: "url(/images/haikei1.png)",
        backgroundSize: "923px 473px", // 背景画像サイズ
        backgroundPosition: "0 0", // 画像を左上に配置
        backgroundRepeat: "repeat", // 画像を繰り返し表示
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: 0,
          padding: 0,
        }}
      >
        <AppBar title="サイズ size" />

        <div style={styles.eggContainer}>
          {[
            { src: "/images/egg_LLL.JPG", label: "LLL 超特大" },
            { src: "/images/egg_LL.JPG", label: "LL 特大" },
            { src: "/images/egg_L.JPG", label: "L 大" },
            { src: "/images/egg_m.JPG", label: "M 中" },
            { src: "/images/egg_s.JPG", label: "S 小1" },
            { src: "/images/egg_ss.JPG", label: "S 小2" },
          ].map((item, index) => (
            <div key={index} style={styles.eggItem}>
              <Image
                src={item.src}
                alt={`卵サイズ: ${item.label}`}
                width={170}
                height={170}
                className="egg-image"
              />
              <label style={styles.label}>{item.label}</label>
              <div style={styles.inputContainer}>
                <div style={styles.inputRow}>
                  <input
                    type="number"
                    placeholder="カートン"
                    style={styles.inputBox}
                  />
                  <span style={styles.unitLabel}>カートン</span>
                </div>
                <div style={styles.inputRow}>
                  <input
                    type="number"
                    placeholder="個"
                    style={styles.inputBox}
                  />
                  <span style={styles.unitLabel}>個</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Button
            variant="contained"
            color="primary"
            style={{ width: "100px", height: "50px" }}
            sx={{ backgroundColor: "#ffd700", color: "#8B4513" }}
          >
            Save
          </Button>
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
      </div>
    </div>
  );
};

export default SizePage;
*/