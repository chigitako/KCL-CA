import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  path: string;
  illustrationSrc: string;
  sx?: React.CSSProperties; // sxプロパティを追加
};

export default function BasicButtons({ label, path, illustrationSrc, sx }: ButtonProps) {
  return (
    <Link href={path}>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          sx={{
            width: '200px', //任意の幅を指定
            height: '200px', //幅と同じ高さで正方形に
            minWidth: 'unset', //デフォルトの最小幅を無効化
            padding: 0, //ボタン内の余白を調整
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            background: `url(${illustrationSrc})`,
            backgroundSize: 'cover',
            color: '#000000',
            fontWeight: 'bold',
            fontSize: '16px',
            ...sx, // 追加のsxプロパティをマージ
          }}
        >
          {label}
        </Button>
      </Stack>
    </Link>
  );
}

