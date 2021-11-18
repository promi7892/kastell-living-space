import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import img1 from "../../../Images/buildling1.jpg";
import img2 from "../../../Images/buildling2.jpg";
import img3 from "../../../Images/buildling13.jpg";
import img4 from "../../../Images/buildling4.jpg";
import img5 from "../../../Images/buidlong6.jpg";
import img6 from "../../../Images/buildling5.jpg";
import "./PopularPlace.css";

const PopularPlace = () => {
  return (
    <div>
      <h1 className="title">Top Rated Locations</h1>
      <h5 className="title">Properties In Most Popular Places.</h5>
      <Container className="my-5">
        <Row>
          <Col className="d-flex border shadow m-3 w-50">
            <img className="image p-3 " src={img1} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">New York</h5>
              <h6>238 Properties</h6>
            </div>
          </Col>
          <Col className="d-flex  border shadow m-3">
            <img className="image p-3" src={img2} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">Los Angeles</h5>
              <h6>307 Properties</h6>
            </div>
          </Col>
          <Col className="d-flex  border shadow m-3">
            <img className="image p-3" src={img3} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">San Francisco</h5>
              <h6>458 Properties</h6>
            </div>
          </Col>
        </Row>
        <Row className="my-3">
          <Col className="d-flex border shadow m-3 w-50">
            <img className="image p-3 " src={img4} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">Huston</h5>
              <h6>238 Properties</h6>
            </div>
          </Col>
          <Col className="d-flex  border shadow m-3">
            <img className="image p-3" src={img5} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">Chicago</h5>
              <h6>248 Properties</h6>
            </div>
          </Col>
          <Col className="d-flex  border shadow m-3">
            <img className="image p-3" src={img6} alt="" />
            <div className="text-center my-auto">
              <h5 className="fw-bold">Brroklyn</h5>
              <h6>135 Properties</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PopularPlace;
