"use client";
import LeftPullTab from "@components/LeftPullTabEmployee";
import styles from "./page.module.css";
import { useLang } from "@components/LangContext";

export default function WebPage() {
  const { lang } = useLang();

  return (
    <LeftPullTab>
      <div className={styles.container}>
        {/* 鶏舎番号セレクター */}
        <div className={styles.selector}>
          <label className={styles.label}>{lang === "ja" ? "鶏舎番号" : "House Number"}</label>
          <select className={styles.select}>
            <option>{lang === "ja" ? "5号舎" : "House 5"}</option>
            <option>{lang === "ja" ? "6号舎" : "House 6"}</option>
            <option>{lang === "ja" ? "7号舎" : "House 7"}</option>
            <option>{lang === "ja" ? "8号舎" : "House 8"}</option>
            <option>{lang === "ja" ? "9号舎" : "House 9"}</option>
            <option>{lang === "ja" ? "10号舎" : "House 10"}</option>
            <option>{lang === "ja" ? "11号舎" : "House 11"}</option>
            <option>{lang === "ja" ? "12号舎" : "House 12"}</option>
            <option>{lang === "ja" ? "13号舎" : "House 13"}</option>
            <option>{lang === "ja" ? "14号舎" : "House 14"}</option>
            <option>{lang === "ja" ? "15号舎" : "House 15"}</option>
          </select>
        </div>

        {/* センサー情報カード */}
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.temp}`}>
            <h2 className={styles.cardTitle}>{lang === "ja" ? "気温" : "Temperature"}</h2>
            <p className={styles.cardValue}>38.6</p>
            <p className={styles.cardUnit}>℃</p>
          </div>

          <div className={`${styles.card} ${styles.humidity}`}>
            <h2 className={styles.cardTitle}>{lang === "ja" ? "湿度" : "Humidity"}</h2>
            <p className={styles.cardValue}>52</p>
            <p className={styles.cardUnit}>%</p>
          </div>

          <div className={`${styles.card} ${styles.water}`}>
            <h2 className={styles.cardTitle}>{lang === "ja" ? "飲水温" : "Water Temp"}</h2>
            <p className={styles.cardValue}>26.6</p>
            <p className={styles.cardUnit}>℃</p>
          </div>
        </div>

        {/* カメラ映像とステータス */}
        <div className={styles.cameraBox}>
          <h2 className={styles.cardTitle}>{lang === "ja" ? "カメラ" : "Camera"}</h2>
          <p className={styles.cameraStatus}>{lang === "ja" ? "異常なし" : "No abnormality"}</p>
          <img
            src="/images/chicken.jpg" // public/images/chicken.jpg に配置
            alt={lang === "ja" ? "鶏舎カメラ映像" : "Chicken house camera feed"}
            className={styles.cameraImage}
          />
        </div>
      </div>
    </LeftPullTab>
  );
}
