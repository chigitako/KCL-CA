import React, { useState, useEffect } from "react";
import Link from "next/link";

const buttonLabels = [
  {
    label: "集卵 count",
    path: "/keisha",
    illustrationSrc1: "/images/egg1.png", //通常時の画像
    illustrationSrc2: "/images/egg-carton.png", //ホバー時の画像
  },
  {
    label: "サイズ size",
    path: "/size",
    illustrationSrc1: "/images/size1.png", //通常時の画像
    illustrationSrc2: "/images/size2.png", //ホバー時の画像
  },
  {
    label: "鶏 chicken",
    path: "/keisha2",
    illustrationSrc1: "/images/chicken1.png",
    illustrationSrc2: "/images/chicken2.png",
  },
];

const TopButtonGrid: React.FC = () => {
  //状態管理のフック
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    //マウスホバー中の処理
    if (hoveredIndex !== null) {
      setImageSrc(buttonLabels[hoveredIndex].illustrationSrc1); //初期画面

      //画像を交互に切り替え
      interval = setInterval(() => {
        setImageSrc((prev) => {
          return prev === buttonLabels[hoveredIndex].illustrationSrc1
            ? buttonLabels[hoveredIndex].illustrationSrc2
            : buttonLabels[hoveredIndex].illustrationSrc1;
        });
      }, 500); //0.5秒ごとに切り替え
    } else {
      // ホバーしていないときは、最初の画像を表示
      setImageSrc("");
      if (interval) {
        clearInterval(interval);
      }
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [hoveredIndex]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // 縦並びに変更
        justifyContent: "center", // 中央に寄せる
        alignItems: "flex-start", // 上部に寄せる
        padding: "20px", // 左右の余白
        gap: "20px", //アイコン間の間隔を設定
        flexWrap: "wrap", //小さい画面で折り返しを許可
        width: "300px",
      }}
    >
      {buttonLabels.map((label, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)} //ホバー開始時
          onMouseLeave={() => setHoveredIndex(null)} //ホバー終了時
        >
          {/* 画像をクリック可能にする */}
          <Link href={label.path} passHref>
            <img
              src={hoveredIndex === index ? imageSrc : label.illustrationSrc1}
              alt={label.label}
              style={{
                width: "140px", // アイコンの幅を大きく
                height: "140px", // アイコンの高さを大きく
                borderRadius: "10px", // アイコンに角をつける
                marginBottom: "15px", // アイコンとボタン間に隙間を追加
                cursor: "pointer", // 画像をクリック可能に
                transition: "0.3s ease",
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopButtonGrid;
