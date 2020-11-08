import React, { useState, useEffect } from "react";
import WorkoutTable from "./WorkoutTable";
import { Data } from "../Data";
import { TextField, MenuItem } from "@material-ui/core";

function Form({ day }) {
  const [velocityRange, setVelocityRange] = useState("");
  const [velocityName, setVelocityName] = useState("");

  //Set velocity to menu value
  const changeVelocity = (e) => setVelocityRange(e.target.value);

  const fetchVelocityName = () => {
    //Find the velocity object that matches what was 
    const currentVelocity = Data.Velocities.filter((velocity) => {
      return velocity.range === velocityRange;
    });
    //We need this if statement to prevent "cannot find property name of undefined"
    //if nothing has yet been selected
    if (currentVelocity[0]) {
      //Set the velocityName state to the name property of the object being returned
      setVelocityName(currentVelocity[0].name);
    }
  };

  useEffect(() => {
    fetchVelocityName()
  }, [velocityRange])

  return (
    <>
      <div style={{marginBottom: 20}}>
        <TextField
          select
          onChange={changeVelocity}
          value={velocityRange}
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
        <WorkoutTable day={day} velocityRange={velocityRange} velocityName={velocityName} />
      </div>
    </>
  );
}

export default Form;
