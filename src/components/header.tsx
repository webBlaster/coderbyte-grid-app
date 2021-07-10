import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { logout } from "../actions/auth";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: whitesmoke;
  box-shadow: 0 0 10px 0 #aaaaaa;
`;

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    logout(dispatch);
  };

  let isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  return (
    <Container>
      <span>Shapes</span>
      <span>
        {isAuthenticated ? <button onClick={handleClick}>Logout</button> : null}
      </span>
    </Container>
  );
};

export default Header;
