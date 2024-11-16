import * as React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function DisableElevation() {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      onClick={() => {
        navigate(-1);
      }}
    >
      戻る
    </Button>
  );
}