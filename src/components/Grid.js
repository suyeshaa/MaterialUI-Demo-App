import React from "react";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Grd = () => {
  return (
    //this is the container grid that contains grid items inside
    <Grid container spacing={2} justify={"center"}>
      {/* this xs sm amd lg are given different values yo make paper responsive. it tells how much size it should habe based on the screen size(sm ,md, lg) */}
      <Grid item xs={3} sm={6} lg={8}>
        <Paper
          style={{ height: 75, width: "100%", backgroundColor: "#F4C2C2" }}
        />
      </Grid>

      <Grid item xs={3} sm={6} lg={8}>
        <Paper
          style={{ height: 75, width: "100%", backgroundColor: "#F4C2C2" }}
        />
      </Grid>

      <Grid item xs={3} sm={6} lg={8}>
        <Paper
          style={{ height: 75, width: "100%", backgroundColor: "#F4C2C2" }}
        />
      </Grid>
    </Grid>
  );
};

export default Grd;
