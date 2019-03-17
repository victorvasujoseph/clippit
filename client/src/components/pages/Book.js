import React, { Component } from "react";
import { form, Card, CardGroup, Button, ListGroup, Modal, ModalDialog, Row, Form, Col } from "react-bootstrap";
// import { Card, CardGroup, ListGroupItem, ListGroup  } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import addMonths from "date-fns/addMonths";
import 'whatwg-fetch';
import moment from 'moment';

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      show: false,
      visible: false,
      value: 'value'
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
      startDate: date,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ showStylist: !this.state.showStylist })

    var day = moment(this.state.startDate).format("DD");
    var month = moment(this.state.startDate).format("MM");
    var year = moment(this.state.startDate).format("YYYY");
    // get the list of stylist for the selected Date
    fetch(
      "/api/booking/stylist-available" +
      "/" +
      day +
      "/" +
      month +
      "/" +
      year
    )
      .then(res => {
        if (res) {
          console.log(res);
        } else {
          console.log("API call to Stylist failed");
        }
      });
  }

  handleTime(event) {
    this.setState({ value: event.target.value });
    fetch(
      "/api/booking/insert-availability" +
      "/"
    );
  }

  handleToggleClick(event) {
    event.preventDefault();
    alert('You appointment is at ' + this.state.value);
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }
  handleShow() {
    this.setState({
      show: true,
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
          <button className="btn btn-outline-dark" onClick={this.handleShow}> Choose your date </button>
        </div>
      </form>

      <br></br>
      <Modal {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Choose Your Stylist!</Modal.Title>
        </Modal.Header>
        <ModalDialog
          size="lg"
          centered>
          <CardGroup>
            <Form onSubmit={this.handleStylist}>
              <Row className="show-grid">
                <Col sm="6">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://66.media.tumblr.com/32b9a3972b470ed5a131d76e2cd732b4/tumblr_poc8bs27AN1y5a3hjo2_500.jpg" />
                    <Card.Body>
                      <Card.Title>Todd</Card.Title>
                      <Card.Text>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Men's Cut & Style</ListGroup.Item>
                          <ListGroup.Item>Beard Shaves & Trims</ListGroup.Item>
                          <ListGroup.Item>Gray Blending</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                      <Button variant="outline-dark" value="option1" id="5c8552e88596910fb313748e" onClick={this.handleClose}>Book Todd</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://66.media.tumblr.com/e08f35e1b5b148bab1196393e7a149f3/tumblr_poc8bs27AN1y5a3hjo1_500.jpg" />
                    <Card.Body>
                      <Card.Title>Christina</Card.Title>
                      <Card.Text>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Hair Coloring & Highlights</ListGroup.Item>
                          <ListGroup.Item>Scalp Care</ListGroup.Item>
                          <ListGroup.Item>Wash & Blowout</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                      <Button variant="outline-dark" value="option2" id="5c85531a5f45cc0fbf2f11e1" onClick={this.handleClose}>Book Christina</Button>
                    </Card.Body>
                  </Card>
                </Col>

                <Col sm="6">
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://4.bp.blogspot.com/-TNChkFcRS9Q/XIV8fgMf69I/AAAAAAAAAGE/87JgDYGLCMI1IjRCpNL825SxdoRlidFPQCLcBGAs/s1600/Julia.jpg" />
                    <Card.Body>
                      <Card.Title>Julia</Card.Title>
                      <Card.Text>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Women's Cut and Style</ListGroup.Item>
                          <ListGroup.Item>Hair Coloring & Higlights</ListGroup.Item>
                          <ListGroup.Item>Hair Treatment</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                      <Button variant="outline-dark" value="option3" id="5c85c76b09acfa132dd8ea59" onClick={this.handleClose}>Book Julia</Button>
                    </Card.Body>
                  </Card>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://4.bp.blogspot.com/-TgWScuicD6I/XIV8gZClWpI/AAAAAAAAAGQ/KnN0sX9ZAb444uFiTVSBBF_i1uSosZYkwCLcBGAs/s1600/Xavier.jpg" />
                    <Card.Body>
                      <Card.Title>Xavier</Card.Title>
                      <Card.Text>
                        <ListGroup variant="flush">
                          <ListGroup.Item>Hair Coloring & Highlights</ListGroup.Item>
                          <ListGroup.Item>Men/Women Cut & Style</ListGroup.Item>
                          <ListGroup.Item>Wash and Blowout</ListGroup.Item>
                        </ListGroup>
                      </Card.Text>
                      <Button variant="outline-dark" value="option4" id="5c85c7a14fc3af1346278599" onClick={this.handleClose}>Book Xavier</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Form>
          </CardGroup>
        </ModalDialog>
      </Modal>

      <br></br>
      <br></br>
      <form onSubmit={this.handleToggleClick} handleClose={this.state.visible} onHide={this.handleClose}>
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
        <br></br>
        <br></br>
        <button className="btn btn-outline-dark" type="submit" value="Submit"> Book Appointment </button>
      </form>
    </div >
  );
}
}





export default Book;