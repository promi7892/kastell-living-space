import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const EachProperty = (props) => {
  const { name, image, price, bed, bath, unit } = props.property;
  return (
    <div className="container mx-auto my-2 col-lg-4 col-md-12">
      <Card style={{ width: "23rem", height: "20rem" }} className="h-100 ">
        <Card.Img variant="top" src={image} className="h-100 w-100 p-3" />
        <Card.Body>
          <Card.Title className="text-center">
            <h4 className="heading">{name}</h4>
          </Card.Title>
          <Card.Text>
            <h4 className="text-start ">{price}</h4>
            <div className="d-flex justify-content-between mt-3 ">
              <p>{bed}</p>
              <p>{bath}</p>
              <p>{unit}</p>
            </div>
          </Card.Text>

          <Link
            to={`/booking/${name}
      `}
          >
            <Button className="border-0 w-100 rounded px-4 py-2 btn btn-info text-white fw-bold">
              Book Now
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EachProperty;
