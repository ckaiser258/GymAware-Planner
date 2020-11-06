import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import WorkoutTable from "./components/WorkoutTable";
import { TextField, MenuItem } from "@material-ui/core";

function App() {
  const [day, setDay] = useState("");

  function changeDay(e) {
    //Set day to menu value
    setDay(e.target.value);
  }

  return (
    <div className="App">
      {/* Create upper/lower body selection menu */}
      <TextField select onChange={changeDay} helperText="What day is it?">
        <MenuItem onChange={changeDay} value="Lower Body">
          Lower Body
        </MenuItem>
        <MenuItem onChange={changeDay} value="Upper Body">
          Upper Body
        </MenuItem>
      </TextField>

      {/* Render form and table. Pass day as props to table. */}
      <Form />
      <WorkoutTable day={day} />
    </div>
  );
}

export default App;
