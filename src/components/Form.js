import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";

function Form() {
  return (
    <div>
      <TextField
        select
        helperText="Please select your max velocity from last week."
      >
        <MenuItem>Testing</MenuItem>
      </TextField>
    </div>
  );
}

export default Form;
