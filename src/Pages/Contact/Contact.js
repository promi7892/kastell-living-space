import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import contact from "../../Images/contact.svg";
import "./Contact.css";
import Footer from "../Home/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="container">
        <Container className="mx-auto">
          <Row>
            <div className="text-center ">
              <h1 className="title mt-5">Contact Us</h1>
              <p className="mb-5 fw-normal w-50 mx-auto">
                Please get in touch with us for any enquiry. Our support team is
                waiting eagerly to serve you. We will get back to you as soon as
                possible.
              </p>
            </div>
            <Col className=" mx-auto my-auto">
              <img className=" w-100 text-center" src={contact} alt="" />
            </Col>
            <Col>
              <Form className="mx-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Name:</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Contact No</Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Number" />
                </Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>

                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Enter Your Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Your Message"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="text-white w-100 mx-auto fs-6 my-2 submit-btn"
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Contact;
