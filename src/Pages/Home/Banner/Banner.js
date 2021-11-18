import React from "react";
import { Form, Row, Col, Button, Container, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";
import sample from "../../../Images/Videos/sample.mp4";
// https://i.ibb.co/C57t6DL/livin1.jpg
// https://i.ibb.co/nCbQbbg/livin2.jpg

const Banner = () => {
  return (
    <div>
      {/* <h1 className='title'>Banner</h1> */}

      <Container className="mx-auto w-100 h-50 banner">
        <video className="videoTag  mx-auto w-100 h-100" autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
        {/* 
        <Carousel fade className="videoTag  mx-auto w-100 h-100">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ibb.co/C57t6DL/livin1.jpg"
              alt="First slide"
            />

            <Carousel.Caption className="caption">
              <h3>“There is nothing like staying at home for real comfort.”</h3>

              <br />
              <br />
              <br />
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="carousel-item">
            <img
              className="d-block w-100"
              src="https://i.ibb.co/nCbQbbg/livin2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption className="caption">
              <h3>“Home is the starting place of love, hope and dreams.” </h3>

              <br />
              <br />
              <br />
              <br />
              <br />
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}

        <div className="searchForm w-75 mx-auto shadow rounded">
          <Form className="mx-auto ">
            <Row className="align-items-center">
              <Col xs="auto" className="my-2 ">
                <Form.Control placeholder="Enter Keyword" />
              </Col>
              <Col xs="auto" className="my-2">
                <Form.Control placeholder="Location..." />
              </Col>
              <Col xs="auto" className="my-2">
                <Form.Label
                  className="me-sm-2"
                  htmlFor="inlineFormCustomSelect"
                  visuallyHidden
                >
                  Preference
                </Form.Label>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                  <option value="0">Choose...</option>
                  <option value="1">New York</option>
                  <option value="2">Brooklyn</option>
                  <option value="3">Texas</option>
                  <option value="3">Vega</option>
                  <option value="3">Los Angelegs</option>
                </Form.Select>
              </Col>
              <Col xs="auto" className="my-2">
                <Button className="w-100 my-auto" variant="dark" type="submit">
                  Search Apartment
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
