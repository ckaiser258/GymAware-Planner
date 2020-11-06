import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import WorkoutTable from "./components/WorkoutTable";
import { TextField, MenuItem } from "@material-ui/core";

function App() {
  const [day, setDay] = useState("Select Your Day")
  return (
    <div className="App">
      <TextField select helperText="What day is it?" value={day}>
        <MenuItem>Lower Body</MenuItem>
        <MenuItem>Upper Body</MenuItem>
      </TextField>
      <Form />
      <WorkoutTable />
    </div>
  );
}

export default App;
