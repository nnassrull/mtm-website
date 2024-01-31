import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-form">
      <form className="login-details" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <span>Username: </span>
        <input type="username" value={username} onChange={handleUsername} />

        <span>Password: </span>
        <input type="password" value={password} onChange={handlePassword} />

        <button className="sign-in-button">Sign In</button>
      </form>
      {/* <div className="company-img">Company Image</div> */}
    </div>
  );
};

export default LoginForm;
