import React, { useState, useEffect } from "react";
import { Data } from "../Data";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
  Typography,
} from "@material-ui/core";

function WorkoutTable({ day }) {
  const [velocity, setVelocity] = useState("");
  const [mainLift, setMainLift] = useState("");
  const [exercises, setExercises] = useState([]);

  //Return respective exercises based on day

  useEffect(() => {
    if (day === "Upper Body") {
      setMainLift("Bench Press");
      setExercises(Data.UpperBody);
    } else if (day === "Lower Body") {
      setMainLift("Squat");
      setExercises(Data.LowerBody);
    }
  }, [day]);

  return (
    <Container>
      {day ? (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ fontWeight: "bold" }}>Exercise</TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Target Velocity (m/s)
                </TableCell>
                <TableCell style={{ fontWeight: "bold" }}>
                  Sets X Reps
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{mainLift}</TableCell>
                <TableCell>{velocity}</TableCell>
                <TableCell>
                  3 X N/A
                  <br />
                  Stop set at 20% drop in velocity
                </TableCell>
              </TableRow>
              {exercises.map((exercise) => {
                return (
                  <TableRow>
                    <TableCell>{exercise.name}</TableCell>
                    <TableCell>N/A</TableCell>
                    <TableCell>{exercise.setsReps}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography variant="h2">
          Please Select A Day From The Dropdown Menu Above
        </Typography>
      )}
    </Container>
  );
}

export default WorkoutTable;
