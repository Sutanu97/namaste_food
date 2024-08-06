import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtnState, setLoginBtnState] = useState("LOGIN");
  console.log("header component rerendered");
  useEffect(() => {
    console.log("use effect called");
  }, [loginBtnState]);

  return (
    <div className="heading">
      <div className="logo">
        <img src={LOGO_URL} alt="app-logo" className="logo-img"></img>
      </div>
      <div className="nav-container">
        <div id="nav">
          <Link className="nav-link" to={"/home"}>
            Home
          </Link>
        </div>
        <div id="nav">
          <Link className="nav-link" to={"/about"}>
            About Us
          </Link>
        </div>
        <div id="nav">
          <Link className="nav-link" to={"/contact"}>
            Contact Us
          </Link>
        </div>
        <div id="nav">
          <a href="#" className="nav-link">
            Cart
          </a>
        </div>
      </div>
      <div className="login-out-div">
        <button
          className="header-btn"
          onClick={() => {
            setLoginBtnState(loginBtnState === "LOGIN" ? "LOGOUT" : "LOGIN");
          }}
        >
          {loginBtnState}
        </button>
      </div>
    </div>
  );
};

export default Header;
