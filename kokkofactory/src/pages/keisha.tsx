import React from "react";
import Grid from "@mui/material/Grid";
import BasicButtons from "../components/BasicButton"; // Buttonのインポートを修正
import AppBar from "../components/AppBar";
import BackButton from "../components/BackButton";

const CoopSelectionPage: React.FC = () => {
  return (
    <div>
      <AppBar title="集卵　count" />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((coopId) => (
          <Grid item xs={4} key={coopId}>
            <BasicButtons
              label={`鶏舎 ${coopId}`}
              path={`/count/${coopId}`} // 遷移先のパスを指定
            />
          </Grid>
        ))}
      </Grid>
      <BackButton />
    </div>
  );
};

export default CoopSelectionPage;
