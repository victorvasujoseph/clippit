import React from "react";
import { Table, ButtonGroup, Button } from 'react-bootstrap';


function Appointment() {
  return (
    <div className="container">

    <br></br>

<Table responsive striped bordered hover>
  <thead>
    <tr>
      <th>Date</th>
      <th>Time</th>
      <th>Service Provider</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</Table>

<ButtonGroup className="mr-2" aria-label="First group">
  <Button variant="outline-dark" type="submit" href="/book">Book New Appointment</Button>
</ButtonGroup>

<ButtonGroup className="mr-2" aria-label="Second group">
  <Button variant="outline-dark" type="submit" href="/home">Return Home</Button>
</ButtonGroup>

    </div>
  );
}

export default Appointment;
