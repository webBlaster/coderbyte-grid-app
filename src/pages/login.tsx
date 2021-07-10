import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import styled from "styled-components";

import Header from "../components/header";

const Form = styled.form`
  margin: 100px auto;
  width: 500px;
  @media (max-width: 550px) {
    width: 250px;
  }
`;

const Input = styled.input`
  border-radius: 5px;
  padding: 0.6rem 0.5rem;
  margin: 0.5rem auto;
  width: 480px;
  @media (max-width: 550px) {
    width: 230px;
  }
`;

const LoginButton = styled.input`
  padding: 0.6rem 0.5rem;
  width: 500px;
  margin: 0.5rem auto;
  @media (max-width: 550px) {
    width: 250px;
  }
`;

const Login: React.FC = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  //add input changes to state
  const handleInputChange = (event: any) => {
    event.preventDefault();
    setUserDetails({ ...userDetails, [event.target.name]: event.target.value });
  };

  //handle form submit
  const handleSubmit = (event: any) => {
    event.preventDefault();
    login(userDetails.username, userDetails.password, dispatch, history);
    setUserDetails({ username: "", password: "" });
  };

  return (
    <>
      <Header />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={handleInputChange}
          value={userDetails.username}
        />
        <br />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleInputChange}
          value={userDetails.password}
        />
        <br />
        <LoginButton type="submit" value="Login" />
      </Form>
    </>
  );
};

export default Login;
