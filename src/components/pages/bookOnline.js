import React from "react";
// import { Card, CardGroup, ListGroupItem, ListGroup  } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';


class Blog extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      startDate: moment()
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
      <br/>
        <h3>Pick a date that best fit your schedule!</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Select Date:  </label>
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
              showTimeSelect
              name="startDate"
              dateFormat="MM/DD/YYYY"
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
//   return (
//     <div>
//       <h1>Booking Page</h1>

//       <CardGroup>

//       <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>

// <Card style={{ width: '18rem' }}>
//   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
//   <Card.Body>
//     <Card.Title>Card Title</Card.Title>
//     <Card.Text>
//       Some quick example text to build on the card title and make up the bulk of
//       the card's content.
//     </Card.Text>
//   </Card.Body>
//   <ListGroup className="list-group-flush">
//     <ListGroupItem>Cras justo odio</ListGroupItem>
//     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
//     <ListGroupItem>Vestibulum at eros</ListGroupItem>
//   </ListGroup>
//   <Card.Body>
//     <Card.Link href="#">Card Link</Card.Link>
//     <Card.Link href="#">Another Link</Card.Link>
//   </Card.Body>
// </Card>

//       </CardGroup>;

//       <CardGroup>

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
// <Card.Body>
// <Card.Title>Card Title</Card.Title>
// <Card.Text>
// Some quick example text to build on the card title and make up the bulk of
// the card's content.
// </Card.Text>
// </Card.Body>
// <ListGroup className="list-group-flush">
// <ListGroupItem>Cras justo odio</ListGroupItem>
// <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
// <ListGroupItem>Vestibulum at eros</ListGroupItem>
// </ListGroup>
// <Card.Body>
// <Card.Link href="#">Card Link</Card.Link>
// <Card.Link href="#">Another Link</Card.Link>
// </Card.Body>
// </Card>

// <Card style={{ width: '18rem' }}>
// <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
// <Card.Body>
// <Card.Title>Card Title</Card.Title>
// <Card.Text>
// Some quick example text to build on the card title and make up the bulk of
// the card's content.
// </Card.Text>
// </Card.Body>
// <ListGroup className="list-group-flush">
// <ListGroupItem>Cras justo odio</ListGroupItem>
// <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
// <ListGroupItem>Vestibulum at eros</ListGroupItem>
// </ListGroup>
// <Card.Body>
// <Card.Link href="#">Card Link</Card.Link>
// <Card.Link href="#">Another Link</Card.Link>
// </Card.Body>
// </Card>

// </CardGroup>;

//     </div>
//   );

export default Blog;
