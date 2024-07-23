import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="heading">
    <div className="logo">
      <img src={LOGO_URL} alt="app-logo" className="logo-img"></img>
    </div>
    <div className="nav-container">
      <div id="nav">
        <a href="#" className="nav-link">
          Home
        </a>
      </div>
      <div id="nav">
        <a href="#" className="nav-link">
          About us
        </a>
      </div>
      <div id="nav">
        <a href="#" className="nav-link">
          Contact us
        </a>
      </div>
      <div id="nav">
        <a href="#" className="nav-link">
          Cart
        </a>
      </div>
    </div>
  </div>
);

export default Header;
