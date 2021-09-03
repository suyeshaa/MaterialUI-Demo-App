import React, { useState } from "react";
import { Checkbox } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Save } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";

const Chkbx = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      {/* we need to add many parametrs for this checkbox to wrok. these params are pretty intuitive */}
      <Checkbox
        checked={checked}
        onChange={() => setChecked(!checked)}
        color="primary"
        inputProps={{
          "aria-label": "secondary checkbox",
        }}
      />
      {/* to add actual visible label we do this 1)import formcontroledlabel first and then pass chcekbox as a prop to formcontrollabel */}
      <br />
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            color="secondary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="testing labeled checkbox"
      />
      <br />
      {/* to add icons on checkboxes */}
      <Checkbox
        checked={checked}
        icon={<Save />}
        checkedIcon={<Delete />}
        onChange={() => setChecked(!checked)}
        color="secondary"
        inputProps={{
          "aria-label": "secondary checkbox",
        }}
      />
    </div>
  );
};

export default Chkbx;
