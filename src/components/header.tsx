import React from "react";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { logout } from "../actions/auth";

const Header = () => {
  const dispatch = useDispatch();

  let isAuthenticated = useSelector(
    (state: RootStateOrAny) => state.auth.isAuthenticated
  );

  const handleClick = () => {
    logout(dispatch);
  };
  return (
    <div>
      <span>Shapes</span>
      <span>
        {isAuthenticated ? <button onClick={handleClick}>Logout</button> : null}
      </span>
    </div>
  );
};

export default Header;
