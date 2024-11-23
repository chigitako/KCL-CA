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
    >
      🏠(top)
    </Button>
  );
}