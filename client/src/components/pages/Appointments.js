import React, { Component } from "react";
import { Table, ButtonGroup, Button } from 'react-bootstrap';
import { getFromStorage } from '../utils/storage';

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading:false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.customerID) {
      const { customerID } = obj;
      //verify Customer ID
      fetch("/api/booking/customer-schedule/verify?customerID=" + customerID)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            console.log(json);
          } else {
            console.log("API Error");
          }
        });
    } else {
      this.setState({
        isLoading: false
      });
    }
  }

  render() {
    return (
      <div className="container">
        <br />

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
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </Table>

        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="outline-dark" type="submit" href="/book">
            Book New Appointment
          </Button>
        </ButtonGroup>

        <ButtonGroup className="mr-2" aria-label="Second group">
          <Button variant="outline-dark" type="submit" href="/Home">
            Return Home
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default Appointment;
