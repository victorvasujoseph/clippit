import React, { Component } from "react";
import { getFromStorage } from "../../components/utils/storage";
import {
  form,
  Card,
  CardDeck,
  Button,
  ListGroup,
  Modal,
  ButtonGroup
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import addMonths from "date-fns/addMonths";
import "whatwg-fetch";
import moment from "moment";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      show: false,
      visible: false,
      showStylist: false,
      showTimeSlot: false,
      value: "value",
      listStylist: [],
      selectedStylist: {},
      appointmentConfirmation: false,
      slot1: false,
      slot2: false,
      slot3: false,
      slot4: false,
      slot5: false,
      slot6: false,
      slot7: false,
      slot8: false,
      selectedTimeSlot: "",
      selectedSlot: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleStylist = this.handleStylist.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleStylistSelect = this.handleStylistSelect.bind(this);
    this.handleBookAppointment = this.handleBookAppointment.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    var day = moment(this.state.startDate).format("DD");
    var month = moment(this.state.startDate).format("MM");
    var year = moment(this.state.startDate).format("YYYY");
    // get the list of stylist for the selected Date
    fetch("/api/booking/stylist-available/" + day + "/" + month + "/" + year)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.length);
        console.log(data[0].id);

        this.setState({
          showStylist: true,
          listStylist: data
        });
      });
  }

  handleBookAppointment() {
    var day = moment(this.state.startDate).format("DD");
    var month = moment(this.state.startDate).format("MM");
    var year = moment(this.state.startDate).format("YYYY");
    const obj = getFromStorage("the_main_app");
    const { customerID } = obj;
    console.log(customerID);
    console.log(this.state.selectedStylist.id);
    console.log(this.state.selectedStylist.name);
    console.log(this.state.selectedSlot);
    console.log(day);
    console.log(month);
    console.log(year);

    fetch("/api/booking/book-appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        stylistID: this.state.selectedStylist.id,
        day: moment(this.state.startDate).format("DD"),
        month: moment(this.state.startDate).format("MM"),
        year: moment(this.state.startDate).format("YYYY"),
        timeSlot: this.state.selectedSlot,
        customerID: customerID
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          show: false,
          appointmentConfirmation: false,
          showStylist: false,
          showTimeSlot: false,
          value: "value",
          listStylist: [],
          selectedStylist: {},
          slot1: false,
          slot2: false,
          slot3: false,
          slot4: false,
          slot5: false,
          slot6: false,
          slot7: false,
          slot8: false,
          selectedTimeSlot: "",
          selectedSlot: ""
        });
      });
  }

  handleTime(timeSlot) {
    let time = "";

    switch (timeSlot) {
      case "slot1":
        time = "8:00 AM";
        break;
      case "slot2":
        time = "9:00 AM";
        break;
      case "slot3":
        time = "10:00 AM";
        break;
      case "slot4":
        time = "11:00 AM";
        break;
      case "slot5":
        time = "1:00 PM";
        break;
      case "slot6":
        time = "2:00 PM";
        break;
      case "slot7":
        time = "3:00 PM";
        break;
      case "slot8":
        time = "4:00 PM";
        break;
      default:
        break;
    }

    this.setState({
      appointmentConfirmation: true,
      selectedTimeSlot: time,
      selectedSlot: timeSlot
    });
  }

  handleToggleClick(event) {
    event.preventDefault();
    alert("You appointment is at " + this.state.value);
  }

  handleClose() {
    this.setState({
      show: false,
      appointmentConfirmation: false
    });
  }
  handleShow() {
    this.setState({
      show: true
    });
  }

  handleStylistSelect(obj) {
    console.log(obj.name);
    var day = moment(this.state.startDate).format("DD");
    var month = moment(this.state.startDate).format("MM");
    var year = moment(this.state.startDate).format("YYYY");
    fetch(
      "/api/booking/stylist-schedule/" +
        obj.id +
        "/" +
        day +
        "/" +
        month +
        "/" +
        year
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        let res = data[0];
        this.setState({
          showTimeSlot: true,
          selectedStylist: obj,
          slot1: res.slot1,
          slot2: res.slot2,
          slot3: res.slot3,
          slot4: res.slot4,
          slot5: res.slot5,
          slot6: res.slot6,
          slot7: res.slot7,
          slot8: res.slot8
        });
      });
  }

  handleStylist(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <br />
        <h3>Pick a date that best fits your schedule</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Date: </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              minDate={new Date()}
              maxDate={addMonths(new Date(), 5)}
              showDisabledMonthNavigation
              showMonthDropdown
              withPortal
            />
          </div>
          <div className="form-group">
            <button
              variant="primary"
              className="btn btn-outline-dark"
              onClick={this.handleShow}
            >
              {" "}
              Choose your date{" "}
            </button>
          </div>
        </form>

        <br />

        <CardDeck>
          {this.state.showStylist &&
            this.state.listStylist.length !== 0 &&
            this.state.listStylist.map(value => {
              return (
                <Card>
                  <Card.Img variant="top" src={value.image} />
                  <Card.Body>
                    <Card.Title>{value.name}</Card.Title>
                    <Card.Text>
                      <ListGroup variant="flush">
                        <ListGroup.Item>
                          Hair Coloring & Highlights
                        </ListGroup.Item>
                        <ListGroup.Item>Scalp Care</ListGroup.Item>
                        <ListGroup.Item>Wash & Blowout</ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <button
                      id={value.id}
                      variant="primary"
                      className="btn btn-outline-dark"
                      onClick={() => {
                        this.handleStylistSelect(value);
                      }}
                    >
                      Pick {value.name}
                    </button>
                  </Card.Footer>
                </Card>
              );
            })}
        </CardDeck>

        <br />
        <br />
        {this.state.showTimeSlot && (
          <div>
            <label>
              {" "}
              <b>Pick Your Slot : </b>
            </label>
            <ButtonGroup size="lg">
              {this.state.slot1 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot1");
                  }}
                >
                  {" "}
                  8:00 AM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>8:00 AM</strike>
                </Button>
              )}
              {this.state.slot2 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot2");
                  }}
                >
                  {" "}
                  9:00 AM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>9:00 AM</strike>
                </Button>
              )}
              {this.state.slot3 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot3");
                  }}
                >
                  {" "}
                  10:00 AM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>10:00 AM</strike>
                </Button>
              )}
              {this.state.slot4 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot4");
                  }}
                >
                  {" "}
                  11:00 AM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>11:00 AM</strike>
                </Button>
              )}
              {this.state.slot5 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot5");
                  }}
                >
                  {" "}
                  1:00 PM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>1:00 PM</strike>
                </Button>
              )}
              {this.state.slot6 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot6");
                  }}
                >
                  {" "}
                  2:00 PM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>2:00 PM</strike>
                </Button>
              )}
              {this.state.slot7 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot7");
                  }}
                >
                  {" "}
                  3:00 PM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>3:00 PM</strike>
                </Button>
              )}
              {this.state.slot8 ? (
                <Button
                  variant="light"
                  onClick={() => {
                    this.handleTime("slot8");
                  }}
                >
                  {" "}
                  4:00 PM{" "}
                </Button>
              ) : (
                <Button variant="light">
                  {" "}
                  <strike>4:00 PM</strike>
                </Button>
              )}
            </ButtonGroup>
          </div>
        )}
        <br />
        <br />
        <Modal
          {...this.props}
          show={this.state.appointmentConfirmation}
          onHide={this.handleClose}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Let's Confirm Your Appointment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>You Have Selected the Following Slot for your Appointment</p>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Date : {moment(this.state.startDate).format("DD")}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Month : {moment(this.state.startDate).format("MM")}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  Year : {moment(this.state.startDate).format("YYYY")}
                </ListGroup.Item>
                <ListGroup.Item>
                  Time : {this.state.selectedTimeSlot}
                </ListGroup.Item>
              </ListGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleBookAppointment}>
                Confirm Appointment
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal>
      </div>
    );
  }
}

export default Book;
