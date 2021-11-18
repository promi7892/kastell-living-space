import React from "react";
import { Card } from "react-bootstrap";
import agent1 from "../../../Images/Agents/agent1.jpg";
import agent2 from "../../../Images/Agents/agent2.jpg";
import agent3 from "../../../Images/Agents/agent3.jpg";
import agent4 from "../../../Images/Agents/agent5.jpg";

const Agents = () => {
  return (
    <div>
      <h1 className="title  my-4">Meet Our Agents</h1>
      <div className="container d-flex justify-content-evenly">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={agent1} />
          <Card.Body>
            <Card.Title>Blaire Waldrof</Card.Title>
            <Card.Text>Real Estate Agent</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={agent2} />
          <Card.Body>
            <Card.Title>Nate Archibald</Card.Title>
            <Card.Text>Real Estate Agent</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={agent3} />
          <Card.Body>
            <Card.Title>Chuck Bass</Card.Title>
            <Card.Text>Real Estate Agent</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={agent4} />
          <Card.Body>
            <Card.Title>Serena Verder Woodson</Card.Title>
            <Card.Text color="light">Real Estate Agent</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Agents;
