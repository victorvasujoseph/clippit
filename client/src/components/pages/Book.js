import React, { Component } from "react";
import {
  form,
  Card,
  CardDeck,
  CardGroup,
  CardColumns,
  Button,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  ListGroup,
  Modal,
  ModalDialog,
  Row,
  Form,
  Col
} from "react-bootstrap";
// import { Card, CardGroup, ListGroupItem, ListGroup  } from 'react-bootstrap';
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
      value: "value",
      listStylist: [],
      slot1: false,
      slot2: false,
      slot3: false,
      slot4: false,
      slot5: false,
      slot6: false,
      slot7: false,
      slot8: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleStylist = this.handleStylist.bind(this);
    this.handleTime = this.handleTime.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showStylist: !this.state.showStylist });

    var day = moment(this.state.startDate).format("DD");
    var month = moment(this.state.startDate).format("MM");
    var year = moment(this.state.startDate).format("YYYY");
    // get the list of stylist for the selected Date
    fetch(
      "/api/booking/stylist-available" + "/" + day + "/" + month + "/" + year
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log(data.length);
        console.log(data[0].id);

        this.setState({
          visible: true,
          listStylist: data
        });
      });
  }

  handleTime(event) {
    this.setState({ value: event.target.value });
  }

  handleToggleClick(event) {
    event.preventDefault();
    alert("You appointment is at " + this.state.value);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }
  handleShow() {
    this.setState({
      show: true
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
            <button className="btn btn-outline-dark" onClick={this.handleShow}>
              {" "}
              Choose your date{" "}
            </button>
          </div>
        </form>

        <br />

        <CardDeck>
          {this.state.listStylist.length !== 0 &&
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
                        <ListGroup.Item>
                          Scalp Care
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Wash & Blowout
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Button variant="primary">
                      Pick {value.name}
                    </Button>
                  </Card.Footer>
                </Card>
              );
            })}
        </CardDeck>

        <br />
        <br />
        <form
          onSubmit={this.handleToggleClick}
          handleClose={this.state.visible}
          onHide={this.handleClose}
        >
          <label>
            Pick your time &nbsp;&nbsp;
            <select value={this.state.value} onChange={this.handleTime}>
              <option value="8:00 AM">8:00 AM</option>
              <option value="9:00 AM">9:00 AM</option>
              <option value="10:00 AM">10:00 AM</option>
              <option value="11:00 AM">11:00 AM</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="3:00 PM">3:00 PM</option>
            </select>
          </label>
          <br />
          <br />
          <button className="btn btn-outline-dark" type="submit" value="Submit">
            {" "}
            Book Appointment{" "}
          </button>
        </form>
      </div>
    );
  }
}

export default Book;
