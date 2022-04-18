import React from "react";
import {Card, Col, Container, Row } from "react-bootstrap";
import pic1 from '../../Images/gallery/01.jpg'
import pic2 from '../../Images/gallery/02.jpg'
import pic3 from '../../Images/gallery/03.jpg'
import pic4 from '../../Images/gallery/04.jpg'
import pic5 from '../../Images/gallery/05.jpg'
import pic6 from '../../Images/gallery/06.jpg'

const Gallery = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic1} />
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic2} />
          </Card>
        </Col>


        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic3} />
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic4} />
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic5} />
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic6} />
          </Card>
        </Col>

        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic1} />
          </Card>
        </Col>
        <Col>

          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pic4} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Gallery;
