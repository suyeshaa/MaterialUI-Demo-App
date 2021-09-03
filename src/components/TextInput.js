import React from "react";
import { TextField } from "@material-ui/core";

const TextInput = () => {
  return (
    <div>
      <TextField
        variant="filled"
        color="secondary"
        // type="date"
        // type="time"
        // label="the time"
        type="email"
        label="email"
        // value="test@text.com"            //we can also set some default value
        placeholder="the email"
      />
    </div>
  );
};

export default TextInput;
