import React, { Component } from "react";
import { Table, ButtonGroup, Button } from "react-bootstrap";
import { getFromStorage } from "../utils/storage";
import "whatwg-fetch";

class Appointment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      appointmentList: []
    };
  }

  componentDidMount() {
    const obj = getFromStorage("the_main_app");
    if (obj && obj.token) {
      const { token, customerID } = obj;
      //verify token
      console.log(customerID);
      fetch("/api/auth/account/verify?token=" + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              isLoggedIn: true
            });
            // GET the appointment information
            fetch("/api/booking/customer-schedule/" + customerID)
              .then(response => response.json())
              .then(data => {
                
                var listX = data.map(value => {
                  
                  switch (value.timeSlot) {
                    case "slot1":
                      value.timeSlot = "8:00 AM";
                      break;
                    case "slot2":
                      value.timeSlot = "9:00 AM";
                      break;
                    case "slot3":
                      value.timeSlot = "10:00 AM";
                      break;
                    case "slot4":
                      value.timeSlot = "11:00 AM";
                      break;
                    case "slot5":
                      value.timeSlot = "1:00 PM";
                      break;
                    case "slot6":
                      value.timeSlot = "2:00 PM";
                      break;
                    case "slot7":
                      value.timeSlot = "3:00 PM";
                      break;
                    case "slot8":
                      value.timeSlot = "4:00 PM";
                      break;
                    default:
                      value.timeSlot = "";
                      break;
                  }
                  return value;
                })
                

                this.setState({
                  appointmentList: listX
                });
              });
          } else {
            this.setState({
              isLoggedIn: false
            });
          }
        });
    } else {
      this.setState({
        isLoggedIn: false
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
          {this.state.appointmentList.map(value => {
            return (
              <tbody>
                <tr>
                  <td>
                    {value.month +
                      "/" +
                      value.day +
                      "/" +
                      value.year}
                  </td>
                  <td>{value.timeSlot}</td>
                  <td>{value.stylistID}</td>
                </tr>
              </tbody>
            );
          })}
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
