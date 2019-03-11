import React from "react";
import { Modal, Jumbotron, Button, Carousel, Row, Col, Card, CardDeck, ListGroup, ListGroupItem, Table } from 'react-bootstrap';

function Home() {
  return (
    <div>

<Carousel>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://66.media.tumblr.com/bb237e21757d82ea98eb75b5d49db87f/tumblr_pnzd70kbuV1y5a3hjo1_1280.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://66.media.tumblr.com/4d7747a1e5e5781ddea5595b13ff6817/tumblr_pnzd70kbuV1y5a3hjo2_1280.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://66.media.tumblr.com/336a859840386bc30489935add4d4397/tumblr_pnzd70kbuV1y5a3hjo3_1280.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

</Carousel>

<Jumbotron>

  <Row>
    <Col></Col>
    <Col><Button variant="outline-dark" size="lg" block href="/book">Book your appointment today!</Button></Col>
    <Col></Col>
  </Row>  

</Jumbotron>;

<div className="container">

<h1 style={{textAlign: "center"}}>Meet the Team</h1>

<br></br>

<CardDeck>
  <Card  border="info">
  <Card.Img variant="top" src="https://4.bp.blogspot.com/-cJ8eC0qf7nc/XIWAcA_KkaI/AAAAAAAAAG0/ENXzUqyS87w7GdGekoFAHAUbRr4NaH16gCLcBGAs/w945-h600-p-k-no-nu/Christina.jpg" />
    <Card.Body>
      <h3>Todd</h3>
      <Card.Text>
        "Best haircut I've ever gotten! Todd gave me the cleanest fade and I left looking and feeling great. I'll definitely be 
        seeing Todd again for my next cut. Huge props to Todd and the team, keep it up. Definitely 5 stars!"
        <br></br>
        <br></br>
        - John Rasmani
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Todd's Specialties:</strong></ListGroupItem>
        <ListGroupItem>Men's Cut and Style</ListGroupItem>
        <ListGroupItem>Beard Shaves and Trims</ListGroupItem>
        <ListGroupItem>Gray Blending</ListGroupItem>
      </ListGroup>
    <Card.Footer>
      <Button variant="outline-dark" href="/book">Book Appointment</Button>
    </Card.Footer>
  </Card>

  <Card border="warning">
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-sQcDvYeOcLw/XIWC7XcWrqI/AAAAAAAAAHA/zj-ikxQr86MA9pnoXcYXcRXrdlNODiAEwCLcBGAs/w945-h600-p-k-no-nu/Christina.jpg" />
    <Card.Body>
      <h3>Christina</h3>
      <Card.Text>
        "Christina is such a pro. When I arrived I wasn't sure what I wanted and I was a little nervous about working with a new stylist. I 
        let Christina get creative and by the end I had the best style and color I've ever gotten!"
        <br></br>
        <br></br>
        - Sally Henderson
      </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Christina's Specialties:</strong></ListGroupItem>
        <ListGroupItem>Hair Coloring and Highlights</ListGroupItem>
        <ListGroupItem>Scalp Care</ListGroupItem>
        <ListGroupItem>Wash and Blowout</ListGroupItem>
      </ListGroup>
    <Card.Footer>
      <Button variant="outline-dark" href="/book">Book Appointment</Button>
    </Card.Footer>
  </Card>
</CardDeck>

<br></br> 

<CardDeck>
  <Card border="success">
    <Card.Img variant="top" src="https://4.bp.blogspot.com/-TNChkFcRS9Q/XIV8fgMf69I/AAAAAAAAAGE/87JgDYGLCMI1IjRCpNL825SxdoRlidFPQCLcBGAs/s1600/Julia.jpg" />
    <Card.Body>
      <h3>Julia</h3>
      <Card.Text>
        "Julia is simply the best. I've been seeing her for 6 years now and I wouldn't dream of getting my hair cut and styled by 
        anyone else. She's not only one of the loveliest people I've met, but she really knows how to make you look good!"
        <br></br>
        <br></br>
        - Kamala Johnson
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Julia's Specialties:</strong></ListGroupItem>
        <ListGroupItem>Women's Cut and Style</ListGroupItem>
        <ListGroupItem>Hair Coloring and Higlights</ListGroupItem>
        <ListGroupItem>Hair Treatment</ListGroupItem>
      </ListGroup>
    <Card.Footer>
      <Button variant="outline-dark" href="/book">Book Appointment</Button>
    </Card.Footer>
  </Card>
  <Card border="danger">
    <Card.Img variant="top" src="https://4.bp.blogspot.com/-TgWScuicD6I/XIV8gZClWpI/AAAAAAAAAGQ/KnN0sX9ZAb444uFiTVSBBF_i1uSosZYkwCLcBGAs/s1600/Xavier.jpg" />
    <Card.Body>
      <h3>Xavier</h3>
      <Card.Text>
        "Xavier's attention to deail is like none other. I like really clean lines and styling and Xavier doesn't miss a hair. He's friendly and definitely knows
        his way around sheers and clippers. 5 Stars, 10/10..."
        <br></br>
        <br></br>
        - Darius Wyatt
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem><strong>Xavier's Specialties:</strong></ListGroupItem>
        <ListGroupItem>Hair Coloring and Highlights</ListGroupItem>
        <ListGroupItem>Men's and Women's Cut and Style</ListGroupItem>
        <ListGroupItem>Wash and Blowout</ListGroupItem>
      </ListGroup>
    <Card.Footer>
      <Button variant="outline-dark" href="/book">Book Appointment</Button>
    </Card.Footer>
  </Card>
</CardDeck>

<br></br>

</div>

<div>

<Jumbotron>

<h1 style={{textAlign: "center"}}>Services for Him</h1>

<br></br>

<Table striped bordered hover>
  <thead>
    <tr>
      <th><h2 style={{textAlign: "center"}}>Hair</h2></th>
      <th><h2 style={{textAlign: "center"}}>Other</h2></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td style={{textAlign: "center"}} >HAIRCUT</td>
    <td style={{textAlign: "center"}} >STRAIGHT RAZOR SHAVE</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HAIRCUT + STYLE</td>
    <td style={{textAlign: "center"}} >CLIPPER BEARD TRIM</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >BUZZ CUT</td>
    <td style={{textAlign: "center"}} >BARBER BEARD TRIM</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HEAD SHAVE</td>
    <td style={{textAlign: "center"}} >MUSTACHE TRIM</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >JUNIOR HAIRCUT</td>
    <td style={{textAlign: "center"}} >BEARD COLORING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >FATHER + SON PACKAGE</td>
    <td style={{textAlign: "center"}} >SCALP TREATMENT</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >STUDENT + SENIOR HAIRCUT</td>
    <td style={{textAlign: "center"}} >NOSE WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HAIR COLORING</td>
    <td style={{textAlign: "center"}} >EAR WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HIGHLIGHTS</td>
    <td style={{textAlign: "center"}} >EYEBROW WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >GRAY BLENDING</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
  </tbody>
</Table> 

<br></br>

<h1 style={{textAlign: "center"}}>Services for Her</h1>

<br></br>

<Table striped bordered hover>
  <thead>
    <tr>
      <th><h2 style={{textAlign: "center"}}>Hair</h2></th>
      <th><h2 style={{textAlign: "center"}}>Other</h2></th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td style={{textAlign: "center"}} >TRIM</td>
    <td style={{textAlign: "center"}} >SCALP TREATMENT</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HAIRCUT AND STYLE</td>
    <td style={{textAlign: "center"}} >NOSE WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >WASH + BLOWOUT</td>
    <td style={{textAlign: "center"}} >EAR WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >BRAZILIAN BLOWOUT</td>
    <td style={{textAlign: "center"}} >EYEBROW WAXING</td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >HAIR TREATMENT</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >ROOT TOUCHUP</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >ALL OVER COLORING</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >BALAYAGE</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >OMBRE</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
    <tr>
    <td style={{textAlign: "center"}} >COLOR CORRECTION</td>
    <td style={{textAlign: "center"}} ></td>
    </tr>
  </tbody>
</Table>

</Jumbotron>

<Row>
    <Col></Col>
    <Col><Button variant="outline-dark" size="lg" block href="/book">Book your appointment today!</Button></Col>
    <Col></Col>
</Row> 

<br></br>

</div>

</div>
);
}

export default Home;