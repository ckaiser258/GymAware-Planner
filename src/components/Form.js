import React, { useState } from "react";
import WorkoutTable from "./WorkoutTable"
import { Data } from "../Data";
import { TextField, MenuItem } from "@material-ui/core";

function Form({day}) {
  const [velocity, setVelocity] = useState("");

  //Set velocity to menu value
  const changeVelocity = (e) => setVelocity(e.target.value);

  return (
      <>
    <div>
      <TextField
        select
        onChange={changeVelocity}
        value={velocity}
        helperText="Please select your max velocity from last phase."
      >
        {Data.Velocities.map((velocity) => {
          return (
            <MenuItem onChange={changeVelocity} value={velocity.range}>
              {velocity.range}
            </MenuItem>
          );
        })}
      </TextField>
    </div>
    <div>
        <WorkoutTable day={day} velocity={velocity} />
    </div>
    </>
  );
}

export default Form;
