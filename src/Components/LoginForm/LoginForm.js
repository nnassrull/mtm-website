import { Fragment, useState } from "react";
import "./LoginForm.css";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPlaceholder, setIsPlaceholder] = useState(false);

  const handleInputFocus = () => {
    setIsPlaceholder(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setUsername("");
    setPassword("");
  };

  return (
    <Fragment>
      <div className="background">
        <div className="mainContainer">
          <div className="loginContainer">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                onFocus={handleInputFocus}
              />
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                onFocus={handleInputFocus}
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginForm;
