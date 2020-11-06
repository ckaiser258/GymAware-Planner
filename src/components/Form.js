import React, { useState } from "react";
import { TextField, MenuItem } from "@material-ui/core";

function Form() {
  const [velocity, setVelocity] = useState("");

  //Set velocity to menu value
  const changeVelocity = (e) => setVelocity(e.target.value);

  return (
    <div>
      <TextField
        select
        helperText="Please select your max velocity from last week."
        value={velocity}
      >
        <MenuItem onChange={changeVelocity} value="Testing">
          Testing
        </MenuItem>
      </TextField>
    </div>
  );
}

export default Form;
