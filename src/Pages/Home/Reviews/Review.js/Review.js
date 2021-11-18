import React from "react";
import { Card } from "react-bootstrap";
import Rating from "react-rating";

const Review = ({ reviews }) => {
  const { name, description } = reviews;
  return (
    <div className="container mx-auto my-2 col-lg-4 col-md-12">
      <Card
        style={{ width: "23rem", height: "20rem" }}
        className="h-100 bg-light rounded shadow"
      >
        <Card.Body className="p-2 m-2 ">
          <Card.Title className="text-center">
            <h4 className="heading">Name: {name}</h4>
          </Card.Title>
          <hr />
          <Card.Text className="text-center">
            <p className="text-cente ">{description}</p>
          </Card.Text>
          <Rating className="text-center text-warning"></Rating>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
