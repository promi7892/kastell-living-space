import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import "./Offersings.css";
import img1 from "../../../Images/offering1.jpg";
import img2 from "../../../Images/offering2.jpg";

const Offerings = () => {
  return (
    <div className="container my-5">
      <h1 className="title mt-5">Why Us?</h1>
      <h6 className="title mb-5">We provide full service at every step.</h6>
      <Container className="mx-auto mt-3 ">
        <Row>
          <Col>
            <img src={img1} className="img-fluid image1" alt="" />
          </Col>
          <Col>
            <div className="mb-3 offering-content">
              <h3 className="offering-title bg-light text-dark">
                Something About <br /> Our Company
              </h3>
              <p className="offer-details">
                Browse the Highest Qulaity Listings, Get the 360 Degree views,
                Apply online <br /> even pay your rent from any device
              </p>
              <Row xs="auto" className="d-flex">
                {/* <div className='d-flex'> */}
                <Col lg={4}>
                  <div className="bg-light mx-1 px-3 icon-div h-100">
                    <MdOutlineMapsHomeWork className="offering-icon mx-5 " />
                    <h6 className="fw-bold">Range Of Properties</h6>

                    <p className="offer-details">
                      <small>Lorem ipsum dolor sit amet consectetur</small>
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="bg-light mx-1 px-3 icon-div h-100">
                    <FaRegHandshake className="offering-icon mx-5" />
                    <h6 className="fw-bold">Trusted by thousands</h6>
                    <p className="offer-details">
                      <small>Lorem ipsum dolor sit amet consectetur</small>
                    </p>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="bg-light mx-1 px-3 icon-div h-100 ">
                    <GiMoneyStack className="offering-icon mx-5" />
                    <h6 className="fw-bold">Easy Financing Method</h6>
                    <p className="offer-details">
                      <small>Lorem ipsum dolor sit amet consectetur</small>
                    </p>
                  </div>
                </Col>

                {/* </div> */}
              </Row>
            </div>
            <img src={img2} alt="" className="w-100 img-fluid mt-4" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offerings;
