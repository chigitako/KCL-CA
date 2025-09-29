"use client";
import LeftPullTab from "@components/LeftPullTab";
import styles from "./page.module.css";

export default function WebPage() {
  return (
    <LeftPullTab>
      <div className={styles.container}>
        {/* 鶏舎番号セレクター */}
        <div className={styles.selector}>
          <label className={styles.label}>鶏舎番号</label>
          <select className={styles.select}>
            <option>5号舎</option>
            <option>6号舎</option>
            <option>7号舎</option>
            <option>8号舎</option>
            <option>9号舎</option>
            <option>10号舎</option>
            <option>11号舎</option>
            <option>12号舎</option>
            <option>13号舎</option>
            <option>14号舎</option>
            <option>15号舎</option>
          </select>
        </div>

        {/* センサー情報カード */}
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.temp}`}>
            <h2 className={styles.cardTitle}>気温</h2>
            <p className={styles.cardValue}>38.6</p>
            <p className={styles.cardUnit}>℃</p>
          </div>

          <div className={`${styles.card} ${styles.humidity}`}>
            <h2 className={styles.cardTitle}>湿度</h2>
            <p className={styles.cardValue}>52</p>
            <p className={styles.cardUnit}>%</p>
          </div>

          <div className={`${styles.card} ${styles.water}`}>
            <h2 className={styles.cardTitle}>飲水温</h2>
            <p className={styles.cardValue}>26.6</p>
            <p className={styles.cardUnit}>℃</p>
          </div>
        </div>

        {/* カメラ映像とステータス */}
        <div className={styles.cameraBox}>
          <h2 className={styles.cardTitle}>カメラ</h2>
          <p className={styles.cameraStatus}>異常なし</p>
          <img
            src="/images/chicken.jpg" // public/images/chicken.jpg に配置
            alt="鶏舎カメラ映像"
            className={styles.cameraImage}
          />
        </div>
      </div>
    </LeftPullTab>
  );
}
