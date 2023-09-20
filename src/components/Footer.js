import * as React from "react";
import logo from "../assets/logoWhite.png";
import github from "../assets/github2_white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerCol">
        <img src={logo} alt="" className="dbLogo" />
        <a
          href="https://www.davidebalice.dev"
          target="_blank"
          className="footerLink"
          rel="noreferrer"
        >
          www.davidebalice.dev
        </a>
      </div>
      <div className="footerCol">
        <p className="white pZero">view project on</p>

        <a
          href="https://github.com/davidebalice/animated-ui-react-framer-motion"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="" className="dbLogo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
