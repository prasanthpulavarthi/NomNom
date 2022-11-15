import React from "react";
import "./index.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <>
      <Container fluid className="banner">
        <Row className="navbar m-0 p-0 justify-content-center">
          <Col sm="auto"> 
           <nav className="navbar navbar-expand-lg navbar-dark  mynav fixed-top">
        <div className="container">
            <a className="navbar-brand poppins-font-regular brand-name" href="/"><img className='logo me-3' src="./images/frame.png" alt="logo"/>Get the App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto nav-links">
                <a href="/" className="nav-link link poppins-font-regular">Investor Relations</a>
                <a href="/" className="nav-link link poppins-font-regular">Add restaurant</a>
                <a href="/" className="nav-link link poppins-font-regular">Log in</a>
                <a href="/" className="nav-link link poppins-font-regular">Sign up</a>
          
               
            </div>
            </div>
        </div>
</nav></Col>
        </Row>
        <Row className="content align-items-center">
          <Col>
            <Row className="heading m-0 p-0 justify-content-center">
              <Col sm="auto">
                <img src="./images/Frame.png" alt="bannerIcon" />
              </Col>
              <Col sm="auto px-0">
                NOM-<span className="custom-color-secondary">NOM</span>
              </Col>
            </Row>
            <Row className="justify-content-center m-0 p-0">
              <Col sm="auto">
                <div className="sub-heading">
                  Discover the best food &amp; drinks in mumbai
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center m-0 p-0">
              <Col sm="auto" className="searchBox d-flex py-3 px-4">
                <div className="location align-self-center">
                  <img
                    src="./images/location-icon.svg"
                    className="location-icon"
                    alt="location"
                  />
                  <select className="location-dropdown">
                    <option>Mumbai</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
                <div className="align-self-center search">
                  <img
                    src="./images/search.png"
                    alt="search"
                    className="search-icon"
                  />
                  <input
                    type="text"
                    placeholder="search for restaurant cuisine or dish"
                    className="search-input"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Header;
