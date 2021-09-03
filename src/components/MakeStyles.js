import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const MkStyl = () => {
  const useStyles = makeStyles({
    root: {
      background: "linear-gradient(45deg , #FE6B8B , #FF8E53)",
      border: 0,
      marginBottom: 15,
      padding: "15px 30px",
    },
    secondary: {
      background: "linear-gradient(45deg , #FF0000 , #6284FF)",
      border: 0,
      marginBottom: 15,
      padding: "30px 50px",
    },
  });

  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.root}
        size="large"
        variant="contained"
        color="secondary"
      >
        styled btn using makestyles/root
      </Button>

      <Button
        className={classes.secondary}
        size="large"
        variant="contained"
        color="secondary"
      >
        styled btn using makestyles/ secondary
      </Button>
    </div>
  );
};

export default MkStyl;
