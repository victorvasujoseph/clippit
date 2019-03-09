import React from "react";
import { Jumbotron, Button, Carousel} from 'react-bootstrap';


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

  <h1>Book an appointment today!</h1>

    <Button variant="success" href="/book">Book Appointment</Button>
  
</Jumbotron>;
    </div>
  );
}

export default Home;
