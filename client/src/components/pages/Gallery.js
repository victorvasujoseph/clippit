import React from "react";
import { Image, Row, Button, ButtonGroup, Card, CardColumns } from 'react-bootstrap';


function Appointment() {
return (
<div className="container">

{/* <br></br>   

<Image src="https://3.bp.blogspot.com/-jXbtMtjF_UI/XIneANCOwAI/AAAAAAAAAJA/TNx-JvWPIb8LpTIKAHu0BPqG9PGWcXwIQCLcBGAs/s1600/Artboard.png" 
fluid style={{height: "100px"}}/>

<br></br> */}

<br></br>

<CardColumns>
  <Card>
    <Card.Img variant="top" src="https://1.bp.blogspot.com/-NGftwllbLW8/XInLQ1LU6uI/AAAAAAAAAIU/9vnJjN-VbK0Mo4NTAfa7wjNlxjbDuyP-gCLcBGAs/s1600/Gallery%2B12.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://3.bp.blogspot.com/-h_9TctXWEUQ/XInF7mOU1uI/AAAAAAAAAHk/n_pt_lQP_08mXfnMPQdzLiVo0HpIg-ufgCLcBGAs/s1600/Gallery%2B3.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://3.bp.blogspot.com/-DJwXNByAwYY/XInF7sFPeXI/AAAAAAAAAHo/fa6QS6vgS0wbg1O7DuIlOHoQXadKLsN4QCLcBGAs/s1600/Gallery%2B2.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://4.bp.blogspot.com/-L_laQMm2MAo/XInF8AR04YI/AAAAAAAAAHw/EtzKckKkfAIAJuVAqCWY3KwVhAi2oqVnwCLcBGAs/s1600/Gallery%2B4.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://3.bp.blogspot.com/-NT2wzk_YOiM/XInLRcpEqdI/AAAAAAAAAIY/aW6XS6vcetwkc-weMFvZOluO3eNinoTxQCLcBGAs/s1600/Gallery%2B5.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://2.bp.blogspot.com/-Hs5um6nbAKk/XInF8uhbmgI/AAAAAAAAAH0/psA6BQAvdd473xsLUJtcOat7J9EyjDxhQCLcBGAs/s1600/Gallery%2B6%2B%2528long%2529.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://4.bp.blogspot.com/-libL0Eq7-1k/XInLRiFMdDI/AAAAAAAAAIc/eyvHRy_JeCID1ZmTZd9KIHXOU2TbjZAxACLcBGAs/s1600/Gallery%2B7.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://3.bp.blogspot.com/-wHiEZMrZnp4/XInLSO0XxwI/AAAAAAAAAIg/iyIPXoMevfI-VlNmSCDN233neqIEkQffQCLcBGAs/s1600/Gallery%2B8.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://4.bp.blogspot.com/-007SjcflG1M/XInLSvwZHmI/AAAAAAAAAIk/FlJ4SZhldqQLhC-ytDmKPCvblg9E8rJwQCLcBGAs/s1600/Gallery%2B9.jpg" />
  </Card>
  <Card>
    <Card.Img variant="top" src="https://2.bp.blogspot.com/-P9s_ywkeceU/XInLQ8V7IoI/AAAAAAAAAIQ/EO4kLM7lNec1tC2a8Sw4UVXxagzs-N39QCLcBGAs/s1600/Gallery%2B11.jpg" />
  </Card>
  <Card>
  <Card.Img variant="top" src="https://4.bp.blogspot.com/-MD1UqyyLCek/XInF745gHUI/AAAAAAAAAHs/Pyc7nYa4VYcmtMr_sAWMwIPJm0AEVzSvgCLcBGAs/s1600/Gallery%2B1.jpg" />
  </Card>
  <Card>
  <Card.Img variant="top" src="https://static.boredpanda.com/blog/wp-content/uploads/2017/07/before-after-extreme-haircut-transformations-user-submissions-1-595f9e6dd4db8__700.jpg" />
  </Card>
  <Card>
  <Card.Img variant="top" src="https://www.demilked.com/magazine/wp-content/uploads/2017/10/59e0d04d25742-before-after-men-haircut-transformations-236-59dcde1e64265__700.jpg" />
  </Card>
</CardColumns>

<br></br>

<Row>
      <ButtonGroup className="mr-2" aria-label="First group">
        <Button style={{textAlign: "center"}} variant="outline-dark" type="submit" href="/book">Book Appointment</Button>
      </ButtonGroup>
      <ButtonGroup className="mr-2" aria-label="Second group">
        <Button style={{textAlign: "center"}} variant="outline-dark" type="submit" href="/home">Go Home</Button>
      </ButtonGroup>
</Row> 

<br></br>

</div>
);
}

export default Appointment;