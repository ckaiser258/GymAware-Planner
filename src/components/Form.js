import React, { useState, useEffect } from "react";
import WorkoutTable from "./WorkoutTable";
import { Data } from "../Data";
import { TextField, MenuItem } from "@material-ui/core";

function Form({ day }) {
  const [velocityRange, setVelocityRange] = useState("");
  const [velocityName, setVelocityName] = useState("");

  //Set velocity to menu value
  const changeVelocity = (e) => setVelocityRange(e.target.value);

  const getVelocityName = () => {
    //Find the velocity object that matches what was selected from menu
    const currentVelocity = Data.Velocities.filter((velocity) => {
      return velocity.range === velocityRange;
    });
    //We need this if statement to prevent "cannot find property name of undefined"
    //upon initial render, since nothing has been selected yet
    if (currentVelocity[0]) {
      //Set the velocityName state to the name property of the object found above
      setVelocityName(currentVelocity[0].name);
    }
  };

  useEffect(() => {
    getVelocityName()
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
