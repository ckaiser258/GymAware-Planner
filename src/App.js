import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { TextField, MenuItem } from "@material-ui/core";

function App() {
  const [day, setDay] = useState("");

  //Set day to menu value
  const changeDay = (e) => setDay(e.target.value);

  return (
    <div className="App">
      <h1>VBT PLANNER</h1>

      {/* Create upper/lower body selection menu */}
      <div style={{margin: 10}}>
      <TextField
        select
        onChange={changeDay}
        value={day}
        helperText="What day is it?"
      >
        <MenuItem onChange={changeDay} value="Lower Body">
          Lower Body
        </MenuItem>
        <MenuItem onChange={changeDay} value="Upper Body">
          Upper Body
        </MenuItem>
      </TextField>
      </div>

      {/* Render form and table. Pass day as props. */}
      <Form day={day} />
    </div>
  );
}

export default App;
