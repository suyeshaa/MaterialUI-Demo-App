import React from "react";
import { Button, Typography } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Toolbar } from "@material-ui/core";

const ApBr = () => {
  return (
    <AppBar color="primary">
      <Toolbar>
        <IconButton>
          <Menu />
        </IconButton>
        <Typography variant="h6">Learn MUI</Typography>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default ApBr;
