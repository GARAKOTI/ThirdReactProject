import "./LoginSignup.css";
import person from "../Assets/person.png";
import email from "../Assets/email.png";
import password from "../Assets/unlock.png";
import { useState } from "react";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="form-container">
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={person} className="logo" alt="" />
              <input type="text" placeholder="Name" />
            </div>
          )}
        </div>
        <div className="inputs">
          <div className="input">
            <img src={email} className="logo" alt="" />
            <input type="email" placeholder="E-mail" />
          </div>
        </div>
        <div className="inputs">
          <div className="input">
            <img src={password} className="logo" alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot">
            lost password? <span>Click Here!</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
