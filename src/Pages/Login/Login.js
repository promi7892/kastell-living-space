import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLogindata = { ...loginData };
    newLogindata[field] = value;
    setLoginData(newLogindata);
  };
  const handleLiginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);

    e.preventDefault();
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };

  return (
    <div>
      <div className="title text-center mt-5">
        <h1 className="fw-bold">Login</h1>
        <p className="">Please login to proceed</p>
      </div>
      <div className="container w-50">
        <form onSubmit={handleLiginSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onBlur={handleOnChange}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onBlur={handleOnChange}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
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
          <NavLink to="/register">
            <Button variant="link">New User? Plese Register</Button>
          </NavLink>{" "}
          {isLoading && <Spinner animation="border" variant="secondary" />}
          {user?.email && (
            <Alert variant="success">Register Successfully</Alert>
          )}
          {authError && <Alert variant="danger">{authError}</Alert>}
        </form>
        <br />
        <hr className=" mx-auto" /> <br />
        <button
          onClick={handleGoogleSignIn}
          className="login bg-light shadow-sm border text-center w-100"
        >
          <FcGoogle className="fs-3" /> Log In using Google
        </button>
      </div>
    </div>
  );
};

export default Login;
