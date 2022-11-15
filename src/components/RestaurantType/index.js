import React from "react";
// import Card from "react-bootstrap/Card";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RestaurantType = () => {
  // const [showMore, setShowMore] = useState(true);
  // const [cards, setCards] = useState([]);

  // useEffect(() => {
  //   if (showMore) {
  //     setCards([...restaurants]);
  //   } else {
  //     setCards([...restaurants.slice(0, 1)]);
  //   }
  // }, [showMore]);

  return (
    <>
      <Container >
        <Row className="reataurantSection">
          {restaurants.map((res) => (
            <Col xs={12} md={6} lg={4} className="mb-2" key={res.title}>
              <div className="restaurantImage">
                <img src={res.img} alt="restaurant images" className="restaurantImage"/>
              </div>
              <div className="restaurant-content">
                <h3 className="restaurant-title">{res.title}</h3>
                <p className="restaurant-description">{res.desc}</p>
              </div>
              {/* <Card style={{ width: "18rem" }} >
                <Card.Img variant="top" src={res.img} />
                <Card.Body>
                  <Card.Title>{res.title}</Card.Title>
                  <Card.Text>{res.desc}</Card.Text>
                </Card.Body>
              </Card> */}
            </Col>
          ))}
          {/* {
            <Col className="col-4">
              <Card
                style={{ width: "18rem" }}
                onClick={() => {
                  setShowMore((prevState) => !prevState);
                }}
              >
                <Card.Body>
                  <Card.Img variant="top" src="./images/orderonline.png" />
                  <Card.Text>{showMore ? "SHOW Less" : "SHOW More"}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          } */}
        </Row>
      </Container>
      {/* <div className='d-flex justify-content-around'>

    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/orderonline.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./images/dining.png" />
      <Card.Body>
        <Card.Title>order online</Card.Title>
        <Card.Text>
          stayhome and order to your door step
        </Card.Text>
      </Card.Body>
    </Card>
     <Card style={{ width: '18rem' }}>
     <Card.Img variant="top" src="./images/clubs.png" />
     <Card.Body>
       <Card.Title>Card Title</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
     </Card.Body>
   </Card>
   </div></> */}
    </>
  );
};
export default RestaurantType;

const restaurants = [
  {
    title: "Order Online",
    desc: "stay home and order to your door step",
    img: "./images/orderonline.png",
  },
  {
    title: "Dining",
    desc: "View the city’s favourite dining venues",
    img: "./images/clubs.png",
  },
  {
    title: "Nightlife and Clubs",
    desc: "Explore the city’s top nightlife outlets",
    img: "./images/dining.png",
  },
];
