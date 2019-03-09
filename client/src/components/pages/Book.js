import React from "react";
import DatePicker from 'react-datepicker';


class Book extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(date) {
    this.setState({
      startDate: date
    })
  };

  handleSubmit(e) {
    e.preventDefault();
    let main = this.state.startDate
    console.log(main.format('L'));
  };

  render() {
    return (
      <div className="container">
        <br />
        <h3>Pick a date that best fit your schedule!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Date:  </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              name="startDate"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-success">Add Date</button>
          </div>
        </form>
      </div>

    );
  }
}

export default Book;