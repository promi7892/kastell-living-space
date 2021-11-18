import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogindata = { ...loginData };
    newLogindata[field] = value;
    console.log(newLogindata);
    setLoginData(newLogindata);
  };
  const handleLiginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Password did not Match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div>
      <div className="title text-center mt-5">
        <h1 className="fw-bold">Register</h1>
        <p className="">Please Register First</p>
      </div>
      <div className="container w-50">
        {!isLoading && (
          <form onSubmit={handleLiginSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                name="name"
                onBlur={handleOnBlur}
                placeholder="Enter your Name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                onBlur={handleOnBlur}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onBlur={handleOnBlur}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPlaintextPassword">
              <Form.Label>Re-Type Password</Form.Label>
              <Form.Control
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 6-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
            <Form.Check
              className="mt-3"
              type="checkbox"
              id="customControlAutosizing"
              label="Remember my preference"
            />
            <Button
              className="mt-3 text-white mx-auto "
              variant="info"
              type="submit"
            >
              Submit
            </Button>
            <br />
            <NavLink to="/login">
              <Button variant="link">Already Register? Plese Login</Button>
            </NavLink>{" "}
          </form>
        )}
        {isLoading && <Spinner animation="border" variant="secondary" />}
        {user?.email && <Alert variant="success">Register Successfully</Alert>}
        {authError && <Alert variant="danger">{authError}</Alert>}
        <br />
        <hr className=" mx-auto" /> <br />
        <button className="login bg-light shadow-sm border text-center w-100">
          <FcGoogle className="fs-3" /> Log In using Google
        </button>
      </div>
    </div>
  );
};

export default Register;
