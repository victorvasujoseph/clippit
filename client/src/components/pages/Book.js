import React, { Component } from "react";
import { form, Card, CardGroup, Button } from "react-bootstrap";
// import { Card, CardGroup, ListGroupItem, ListGroup  } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import addMonths from "date-fns/addMonths";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // let main = this.state.startDate;
    alert('You chose: ' + this.state.startDate);
    // console.log(main.format("L"));
  }


  render() {
    return (
      <div className="container">
        <br />
        <h3>Pick a date that best fit your schedule!</h3>
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
            // name="startDate"
            // dateFormat="MM/DD/YYYY"
            />
          </div>
          <br></br>
          <label>Choose Your Stylist!</label>
          <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://4.bp.blogspot.com/-cJ8eC0qf7nc/XIWAcA_KkaI/AAAAAAAAAG0/ENXzUqyS87w7GdGekoFAHAUbRr4NaH16gCLcBGAs/w945-h600-p-k-no-nu/Christina.jpg" height="163.7"/>
              <Card.Body>
                <Card.Title>Todd</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <Button variant="primary">Choose Me</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://1.bp.blogspot.com/-sQcDvYeOcLw/XIWC7XcWrqI/AAAAAAAAAHA/zj-ikxQr86MA9pnoXcYXcRXrdlNODiAEwCLcBGAs/w945-h600-p-k-no-nu/Christina.jpg" height="163.7" />
              <Card.Body>
                <Card.Title>Christina</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <Button variant="primary">Choose Me</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://4.bp.blogspot.com/-TNChkFcRS9Q/XIV8fgMf69I/AAAAAAAAAGE/87JgDYGLCMI1IjRCpNL825SxdoRlidFPQCLcBGAs/s1600/Julia.jpg" />
              <Card.Body>
                <Card.Title>Julia</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <Button variant="primary">Choose Me</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://4.bp.blogspot.com/-TgWScuicD6I/XIV8gZClWpI/AAAAAAAAAGQ/KnN0sX9ZAb444uFiTVSBBF_i1uSosZYkwCLcBGAs/s1600/Xavier.jpg" />
              <Card.Body>
                <Card.Title>Xavier</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
              </Card.Text>
                <Button variant="primary">Choose Me</Button>
              </Card.Body>
            </Card>
          </CardGroup>
          <br></br>
          <div className="form-group">
            <button className="btn btn-outline-dark">Book Your Appointment!</button>
          </div>
        </form>
      </div>
    );
  }
}





export default Book;