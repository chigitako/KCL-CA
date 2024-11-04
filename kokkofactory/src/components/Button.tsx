import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="outlined"
      sx={{
        width: '100px', //任意の幅を指定
        height: '100px', //幅と同じ高さで正方形に
        minWidth: 'unset', //デフォルトの最小幅を無効化
        padding: 0, //ボタン内の余白を調整
      }}
      >
        鶏舎番号とか
        </Button>
    </Stack>
  );
}
