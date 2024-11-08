import React from "react";
import Grid from "@mui/material/Grid";
import BasicButtons from "../components/Button"; // Buttonのインポートを修正
import AppBar from "../components/AppBar";

const CoopSelectionPage: React.FC = () => {
  return (
    <div>
      <AppBar />
      <Grid container spacing={2} style={{ padding: "20px" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((coopId) => (
          <Grid item xs={4} key={coopId}>
            <BasicButtons
              label={`鶏舎 ${coopId}`}
              path={`/coop/${coopId}`} // 遷移先のパスを指定
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CoopSelectionPage;
