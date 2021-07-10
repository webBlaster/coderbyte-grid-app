import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { login } from "../actions/auth";

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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          required
          onChange={handleInputChange}
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          required
          onChange={handleInputChange}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
