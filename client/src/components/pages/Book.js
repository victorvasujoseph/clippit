import React, { Component } from "react";
import { form, Card, CardGroup, Button, ListGroup } from "react-bootstrap";
// import { Card, CardGroup, ListGroupItem, ListGroup  } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import addMonths from "date-fns/addMonths";


class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      showStylist: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleStylist = this.handleStylist.bind(this);
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // let main = this.state.startDate;
    alert('You chose: ' + this.state.startDate);
    // console.log(main.moment().subtract(10, 'days').calendar());
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showStylist:
      !prevState.showWarning
    }))
  }
  handleStylist() {
    this.setState({ show: false });
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
            <button className="btn btn-outline-dark">Choose your date</button>
          </div>
        </form>

        <br></br>
        <div className="showStylist">
          <form onSubmit={this.handleStylist}>
            <label>Choose Your Stylist!</label>
            <CardGroup>
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
                  <Button variant="outline-dark" value="option1" id="5c8552e88596910fb313748e">Book Todd</Button>
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
                  <Button variant="outline-dark" value="option2" id="5c85531a5f45cc0fbf2f11e1">Book Christina</Button>
                </Card.Body>
              </Card>
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
                  <Button variant="outline-dark" value="option3" id="5c85c76b09acfa132dd8ea59">Book Julia</Button>
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
                  <Button variant="outline-dark" value="option4" id="5c85c7a14fc3af1346278599">Book Xavier</Button>
                </Card.Body>
              </Card>
            </CardGroup>
          </form>
        </div>
        <br /><br />
      </div>
    );
  }
}





export default Book;