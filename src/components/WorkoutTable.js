import React from "react";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@material-ui/core";

function WorkoutTable({day}) {
    console.log(day)
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{fontWeight: "bold"}}>Exercise</TableCell>
              <TableCell style={{fontWeight: "bold"}}>Target Velocity (m/s)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Hello</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default WorkoutTable;
