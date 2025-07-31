import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';

type ButtonProps = {
  label: string;
  path: string;
  illustration?: React.ReactNode;
};
export default function BasicButtons({ label, path }: ButtonProps) {
  return (
    <Link href={path}>
    <Stack spacing={2} direction="row">
      <Button variant="outlined"
      sx={{
        width: '200px', //任意の幅を指定
        height: '200px', //幅と同じ高さで正方形に
        minWidth: 'unset', //デフォルトの最小幅を無効化
        padding: 0, //ボタン内の余白を調整
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
      >
        {label}
        </Button>
    </Stack>
    </Link>
  );
}