import React, { Component } from "react";
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

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate;
    console.log(main.format("L"));
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
          <div className="form-group">
            <button className="btn btn-danger">Add Date</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Book;