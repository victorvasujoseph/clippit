import React from "react";
import { Table } from 'react-bootstrap';


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

    </div>
  );
}

export default Appointment;
