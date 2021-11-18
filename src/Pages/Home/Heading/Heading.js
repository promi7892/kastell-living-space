import { Box } from "@mui/system";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
// import useAuth from "../../../Hooks/useAuth";
import "./Heading.css";
import logo from "../../../Images/Cataory/logo.jpg";

const Heading = () => {
  const { user, logout } = useAuth();

  // const { user, logout } = useFirebase();
  return (
    <div>
      <Navbar
        className="shadow fw-bold"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt=""></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="mx-1 navigation" href="/home">
                Home
              </Nav.Link>
              <Nav.Link className="mx-1 navigation" href="/explore">
                Explore
              </Nav.Link>

              <Nav.Link className="mx-1 navigation" href="/About">
                About
              </Nav.Link>
              <Nav.Link className="mx-1 navigation" href="/contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            {user?.email ? (
              <Box className="d-flex">
                <Nav.Link
                  className="mx-3 border-2 bg-dark rounded text-light navigation"
                  href="/dashboard"
                >
                  Dashboard
                </Nav.Link>

                <Button
                  className=" btn btn-dark text-light"
                  onClick={logout}
                  color="inherit"
                >
                  Log out
                </Button>
              </Box>
            ) : (
              <Nav.Link className="mx-1 navigation" href="/login">
                Login
              </Nav.Link>
            )}

            <Navbar.Text>
              <a className="m-4 p-4 text-decoration-none" href="#login">
                {user.displayName}
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Heading;
