import React from "react";
import Button from "@mui/material/Button";

export default function BackButton() {

  const BackHome =  () => {
    location.href = '/top';
  }

  return (
    <Button
      variant="contained"
      onClick={BackHome}
      sx={{ backgroundColor: '#ffd700' ,color:'#8B4513' }}
    >
      🏠(top)
    </Button>
  );
}