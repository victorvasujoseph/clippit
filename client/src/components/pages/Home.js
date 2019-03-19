import React, { Component } from "react";
import { Jumbotron, Button, Carousel, Row, Col, Card, CardDeck, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { getFromStorage} from '../utils/storage';


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false,
        token:"",
        customerID:""
    };
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
        console.log(obj);
        if (obj && obj.token) {
            console.log(obj);
            const { token, customerID } = obj;
            //verify token
            fetch("/api/auth/account/verify?token=" + token)
                .then(res => res.json())
                .then(json => {
                    if (json.success) {
                        this.setState({
                          token,
                          isLoggedIn: true,
                          customerID
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
  }

  render () {
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
            <Col>
              {this.state.isLoggedIn ? (
                  <Button variant="outline-dark" size="lg" block href="/book">Book your appointment today!</Button>
                ) : (
                  <Button variant="outline-dark" size="lg" block href="/login">Book your appointment today!</Button>
              )}
            </Col>
            <Col></Col>
          </Row>  

        </Jumbotron>;

        <div className="container">

        <h1 style={{textAlign: "center"}}>Meet the Team</h1>

        <br></br>

        <CardDeck>
          <Card  border="info">
          <Card.Img variant="top" src="https://66.media.tumblr.com/d194e6bbdf4ce20f0a2471d06b29e97c/tumblr_pok2xzImKL1y5a3hjo1_540.jpg" />
            <Card.Body>
              <h3>Todd Bond</h3>
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
              {this.state.isLoggedIn ? (
                  <Button variant="outline-dark" href="/book">Book Appointment</Button>
                ) : (
                  <Button variant="outline-dark" href="/login">Book Appointment</Button>
              )}
            </Card.Footer>
          </Card>

          <Card border="warning">
            <Card.Img variant="top" src="https://66.media.tumblr.com/0222c41ece9949d73a9b8e8c0ee4b462/tumblr_pok2pcvAtb1y5a3hjo2_540.jpg" />
            <Card.Body>
              <h3>Christina Leypold</h3>
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
              {this.state.isLoggedIn ? (
                  <Button variant="outline-dark" href="/book">Book Appointment</Button>
                ) : (
                  <Button variant="outline-dark" href="/login">Book Appointment</Button>
              )}
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br> 
        <CardDeck>
          <Card border="success">
            <Card.Img variant="top" src="https://4.bp.blogspot.com/-TNChkFcRS9Q/XIV8fgMf69I/AAAAAAAAAGE/87JgDYGLCMI1IjRCpNL825SxdoRlidFPQCLcBGAs/s1600/Julia.jpg" />
            <Card.Body>
              <h3>Julia Roberts</h3>
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
              {this.state.isLoggedIn ? (
                  <Button variant="outline-dark" href="/book">Book Appointment</Button>
                ) : (
                  <Button variant="outline-dark" href="/login">Book Appointment</Button>
              )}
            </Card.Footer>
          </Card>
          <Card border="danger">
            <Card.Img variant="top" src="https://4.bp.blogspot.com/-TgWScuicD6I/XIV8gZClWpI/AAAAAAAAAGQ/KnN0sX9ZAb444uFiTVSBBF_i1uSosZYkwCLcBGAs/s1600/Xavier.jpg" />
            <Card.Body>
              <h3>Xavier Charles</h3>
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
              {this.state.isLoggedIn ? (
                  <Button variant="outline-dark" href="/book">Book Appointment</Button>
                ) : (
                  <Button variant="outline-dark" href="/login">Book Appointment</Button>
              )}
            </Card.Footer>
          </Card>
        </CardDeck>
        <br></br>
        </div>
        <div>
        <Jumbotron>
        <h1 style={{textAlign: "left"}}>For Her ♀</h1>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><h2 style={{textAlign: "left"}}>Hair</h2></th>
              <th><h2 style={{textAlign: "left"}}>Extras</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td style={{textAlign: "left"}} >($120) <strong>HAIRCUT + STYLE</strong></td>
            <td style={{textAlign: "left"}} >($50) <strong>SCALP TREATMENT + REPAIR</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($100) <strong>WASH + BLOWOUT</strong></td>
            <td style={{textAlign: "left"}} >($75) <strong>OMBRE</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($100) <strong>ALL OVER COLORING</strong></td>
            <td style={{textAlign: "left"}} >($75) <strong>BALAYAGE</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($70) <strong>HAIR TREATMENT</strong></td>
            <td style={{textAlign: "left"}} >($50) <strong>COLOR CORRECTION</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($60) <strong>ROOT TOUCHUP</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>FACIAL WAXING</strong></td>
            </tr>
          </tbody>
        </Table>
        <br></br>
        <h1 style={{textAlign: "left"}}>For Him ♂</h1>
        <br></br>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th><h2 style={{textAlign: "left"}}>Hair</h2></th>
              <th><h2 style={{textAlign: "left"}}>Extras</h2></th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td style={{textAlign: "left"}} >($50) <strong>HAIRCUT</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>STRAIGHT RAZOR SHAVE</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($75) <strong>HAIRCUT + STYLE</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>CLIPPER BEARD TRIM</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($30) <strong>BUZZ CUT</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>BARBER BEARD TRIM</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($30) <strong>HEAD SHAVE</strong></td>
            <td style={{textAlign: "left"}} >($20) <strong>MUSTACHE TRIM</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($50) <strong>HAIR COLORING</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>BEARD COLORING</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($40) <strong>HIGHLIGHTS</strong></td>
            <td style={{textAlign: "left"}} >($40) <strong>SCALP TREATMENT</strong></td>
            </tr>
            <tr>
            <td style={{textAlign: "left"}} >($40) <strong>GRAY BLENDING</strong></td>
            <td style={{textAlign: "left"}} >($30) <strong>FACIAL WAXING</strong></td>
            </tr>
          </tbody>
        </Table> 
          <br></br>
          <Row>
            <Col></Col>
            <Col>
              {this.state.isLoggedIn ? (
                  <Button variant="outline-primary" size="lg" block href="/book">Book Appointment</Button>
                ) : (
                  <Button variant="outline-primary" size="lg" block href="/login">Book Appointment</Button>
              )}
            </Col>
            <Col><Button variant="outline-dark" size="lg" block href="/gallery">View our Gallery</Button></Col>
            <Col></Col>
          </Row>  
        </Jumbotron>;
        </div>
      </div>
    );
  }
}
export default Home;