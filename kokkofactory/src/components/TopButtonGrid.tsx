import * as React from 'react';
import { Button } from '@mui/material';  // MUIのButtonを使う場合のインポート
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
        flexDirection: 'row', // 横並びに変更
        justifyContent: 'space-evenly', // ボタン間を均等に配置
        alignItems: 'center', // 水平方向に中央配置
        height: '100vh', // 画面全体の高さを指定
        padding: '0 20px', // 左右の余白
        backgroundColor: '#ffffad', // 淡い黄系の色の背景
      }}
    >
      {buttonLabels.map((label, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffff80', // ボタン背景色：ユニバーサルカラー（クリーム）
            borderRadius: '15px', // 丸みを帯びた角
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // 影を追加
            padding: '20px',
            width: '250px', // ボタンの横幅を大きく
            textAlign: 'center', // テキストを中央に
            cursor: 'pointer',
          }}
        >
          {/* 文字表記を削除し、アイコン部分のみを表示 */}
          <img
            src={label.illustrationSrc}
            alt={label.label}
            style={{
              width: '100px', // アイコンの幅を大きく
              height: '100px', // アイコンの高さを大きく
              borderRadius: '10px', // アイコンに角をつける
              marginBottom: '15px', // アイコンとボタン間に隙間を追加
            }}
          />
          {/* ボタンのサイズを大きく */}
          <Link href={label.path}>
            <Button
              variant="outlined"
              sx={{
                width: '100%', // ボタンを親要素の幅いっぱいに
                height: '70px', // ボタンの高さを大きく
                fontSize: '1.2rem', // ボタンのフォントサイズを大きく
                borderRadius: '10px', // ボタンの角を丸く
                marginTop: '10px', // ボタンとアイコンの間に隙間を追加
              }}
            >
              {label.label}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TopButtonGrid;
