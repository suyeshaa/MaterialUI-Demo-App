import React from "react";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";

const Typhy = () => {
  return (
    <>
      {/* this means that we want a div component with stylings of h2 */}
      <Typography variant="h2" component="div">
        Welcome to MUI
      </Typography>
      <Typography
        // variant="h3"
        // variant="subtitle1"
        variant="body1"
      >
        learn how to use MUI
      </Typography>
    </>
  );
};

export default Typhy;
