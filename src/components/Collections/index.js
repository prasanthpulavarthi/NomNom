import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./index.css";

const Collections = () => {
  return (
    <Container>
      <Row>
        <h1 className="collections">Collections</h1>
        <div className="d-flex justify-content-between collections-heading">
          <p>
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </p>
          <p>All Collections in Mumbai</p>
        </div>

        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="text-white">
            <Card.Img src="./images/collections1.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Newly Opened</Card.Title>

              <Card.Text>34 Places</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="bg-dark text-white">
            <Card.Img src="./images/collections2.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Best Of Mumbai</Card.Title>

              <Card.Text>139 Places</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="bg-dark text-white">
            <Card.Img src="./images/collections3.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Trending This Week</Card.Title>

              <Card.Text>39 Places</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12}>
          <Card className="bg-dark text-white">
            <Card.Img src="./images/collections4.png" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>Work Friendly Places</Card.Title>

              <Card.Text>135 places</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Collections;
