import React from "react";
import { Container } from "reactstrap";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import "./footer.css"; // Ensure this is the path to your CSS file

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center fixed-bottom p-3"
    >
      <div>
        Connect with us..
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/Git-Extractor-107399428283927"
        >
          <FaFacebook className="icons" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/git_extractor/"
        >
          <FaInstagramSquare className="icons" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/home"
        >
          <FaTwitter className="icons" />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
