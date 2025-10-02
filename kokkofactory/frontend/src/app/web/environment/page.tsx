"use client";
import LeftPullTab from "@components/LeftPullTab";
import { useState, useEffect } from 'react'; // ★ useStateとuseEffectをインポート
import styles from "./page.module.css";

// ★★★ 映像ストリームのベースURLを正確に定義 ★★★
// あなたが見つけたURLの「変化しない部分」に置き換えてください。
// 例: "http://10.0.0.2:8080/06EC4905-18B6-4AEB-BA3A-AB1373F3384A.jpg?rand="
const CAMERA_BASE_URL = "http://10.0.0.2:8080/06EC4905-18B6-4AEB-BA3A-AB1373F3384A.jpg?rand=";

export default function WebPage() {
    // 映像ソースURLを管理するStateを定義（初期値は空）
    const [cameraSrc, setCameraSrc] = useState<string|null>(null);

    useEffect(() => {
        // 映像の更新間隔を設定（100ミリ秒 = 0.1秒ごと）
        const updateInterval = 100;

        const intervalId = setInterval(() => {
            // ベースURLに、現在時刻のミリ秒（毎回異なる値）を付与して新しいURLを生成
            // これにより、ブラウザのキャッシュが回避され、強制的に画像が更新されます。
            const newSrc = CAMERA_BASE_URL + Date.now();
            setCameraSrc(newSrc);
        }, updateInterval); 

        // クリーンアップ関数: コンポーネントが画面から消えるときにタイマーを解除
        return () => clearInterval(intervalId);
    }, []); // 依存配列が空なので、初回レンダリング時に一度だけタイマーが設定されます

    const finalSrc = cameraSrc ?? undefined; // null合体演算子 (??) を使用

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
                        // ★ 動的に更新されるURLを使用
                        src={finalSrc} 
                        alt="鶏舎カメラ映像"
                        className={styles.cameraImage}
                        // 画像の読み込みに失敗した場合に静的画像を表示
                        onError={(e) => { 
                            e.currentTarget.onerror = null; // エラーの連鎖を防ぐ
                            e.currentTarget.src = "/images/chicken.jpg"; 
                        }}
                    />
                </div>
            </div>
        </LeftPullTab>
    );
}
