import * as React from 'react';
import Link from 'next/link';

const buttonLabels = [
  { label: '集卵 count', path: '/keisha', illustrationSrc: '/images/count-egg.jpg' },
  { label: 'サイズ size', path: '/size', illustrationSrc: '/images/size-egg.jpg' },
  { label: '鶏 chicken', path: '/chicken', illustrationSrc: '/images/chicken.jpg' }
];

const TopButtonGrid: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // 縦並びに変更
        justifyContent: 'center', // 中央に寄せる
        alignItems: 'flex-start', // 上部に寄せる
        padding: '20px', // 左右の余白
        gap: '20px', //アイコン間の間隔を設定
        flexWrap: 'wrap', //小さい画面で折り返しを許可
        width: '300px',
      }}
    >
      {buttonLabels.map((label, index) => (
        <div
          key={index}
        >
          {/* 画像をクリック可能にする */}
          <Link href={label.path} passHref>
            <img
              src={label.illustrationSrc}
              alt={label.label}
              style={{
                width: '140px', // アイコンの幅を大きく
                height: '140px', // アイコンの高さを大きく
                borderRadius: '10px', // アイコンに角をつける
                marginBottom: '15px', // アイコンとボタン間に隙間を追加
                cursor: 'pointer', // 画像をクリック可能に
              }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopButtonGrid;
