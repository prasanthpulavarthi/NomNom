import React from 'react'
import "./index.css"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Accordion } from 'react-bootstrap'
import AccordionItem from 'react-bootstrap/esm/AccordionItem'
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader'
import AccordionBody from 'react-bootstrap/esm/AccordionBody'



const ExploreSection=()=> {
  return (
    <>
    <Container>
    <Row className='explore-section mb-5'>
            <h2 className='explore-heading'>Explore options near me</h2>
            <Col>
            
                <Accordion className='explore-container' defaultActiveKey="0" >
                  <AccordionItem className='explore-option' eventKey="0">
                    <AccordionHeader className='explore-item'>Popular cuisines near me</AccordionHeader>
                 
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option' eventKey="1">
                    <AccordionHeader className='explore-item'>Popular restaurant types near me  </AccordionHeader>
                 
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option' eventKey="2">
                    <AccordionHeader className='explore-item'>Top restaurant chains</AccordionHeader>
                    
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                  <AccordionItem className='explore-option' eventKey="3">
                    <AccordionHeader className='explore-item'>Cities we deliver to</AccordionHeader>
                   
                    <AccordionBody>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat
                    </AccordionBody>
                  </AccordionItem>
                </Accordion>
            </Col>
        </Row>
    </Container>
   
    </>

    )
}
export default ExploreSection;
