import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BiChevronRight} from "react-icons/bi"

import "./index.css";
const PopularLocalities = () => {
  const [showMore, setShowMore] = useState(true);
  const [boxes, setBoxes] = useState([]);
  useEffect(() => {
    if (showMore) {
      setBoxes([...popularCities]);
    } else {
      setBoxes([...popularCities.slice(0, 5)]);
    }
  }, [showMore]);
  return (
    <Container >
      <Row className="popularLocalities">
        <h1 className="popularHeading">
          Popular localities in and around{" "}
          <span className="headingHighlight">Mumbai.</span>
        </h1>
      </Row>
      <Row className="popularLocalities2">
        {boxes.map((box) => (
          <Col lg={4} md={6} sm={6} xs={12} className="mb-3">
            <div className="popularBox d-flex justify-content-between align-items-center">
              <div>
                <p className="name">{box.city}</p>
                <p className="places">{box.place}</p>
              </div>
              <BiChevronRight className='right-icon'/>

            </div>
          </Col>
        ))}
        {
          <Col className="col-4">
            <div
              className="popularBox d-flex justify-content-between align-items-center"
              onClick={() => {
                setShowMore((prevState) => !prevState);
              }}
            >
              <div>
              <p className="name">{showMore ? "ShowLess" : "show More"}</p>


              </div>
              <BiChevronRight className='right-icon'/>

            </div>
          </Col>
        }
      </Row>
    </Container>
  );
};
export default PopularLocalities;
const popularCities = [
  {
    city: "LowerParel",
    place: "70 Places",
  },
  {
    city: "powai",
    place: "923 Places",
  },
  {
    city: "Malad Wali West",
    place: "70 Places",
  },
  {
    city: "Boriwali West",
    place: "70 Places",
  },
  {
    city: "Bandra Kurla COmplex",
    place: "350 Places",
  },
  {
    city: "jirgan chowpathy",
    place: "160 Places",
  },
  {
    city: "vasai",
    place: "20 Places",
  },
  {
    city: "Juhu",
    place: "200 Places",
  },
];
