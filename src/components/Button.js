import React from "react";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { ButtonGroup } from "@material-ui/core";

const Btn = () => {
  return (
    <div>
      {/* using material ui we can also directly add link to a btn using href */}
      <Button
        // to add icon we mention where we want icon start/end in this case it start and the mention the icon component that we want and import it from the lib at the top
        startIcon={<SaveIcon />}
        size="large"
        href="a"
        //we can also add our own styles if we want
        style={{ fontSize: 20 }}
        variant="contained"
        color="secondary"
        // disabled
      >
        This is a btn
      </Button>
      <br />

      {/* if we have multiple button we can wrap them inside button group and give common styles to button group */}
      {/* import button group first */}
      <ButtonGroup variant="contained" color="primary" size="large">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<DeleteIcon />}>Discard</Button>
      </ButtonGroup>
    </div>
  );
};

export default Btn;
