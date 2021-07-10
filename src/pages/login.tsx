import React from "react";

const Login = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="username" required />
        <br />
        <input type="password" placeholder="password" required />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
