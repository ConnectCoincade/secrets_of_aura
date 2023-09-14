import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Footer.css";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import logo1 from '../../assets/Group10.png'
// import logo from "../../assets/logo-soa.png";
const Footer = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <>
      <div className="footerContainer">
        <Nav>
          <Row className="Row">
            <Col xs={12} md={4} className="footer-col" onClick={gotoHome}>
              <img src={logo1} alt="logo" className="footer-logo" />
            </Col>
            <Col xs={12} md={2} className="footer-col footer-links">
              <p>
                <NavLink to="/about">About Us</NavLink>
              </p>
              <p>
                <NavLink to="/reading-n-scanning-service">Services</NavLink>
              </p>
              <p>
                <a href="#/" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </p>
              {/* <p>
                <a
                  href="https://3tdao.com/3TRetail.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Investor Deck
                </a>
              </p> */}
            </Col>
            <Col xs={12} md={2} className="footer-col footer-links">
              <p>
                <NavLink to="/aura-reading">Aura Reading</NavLink>
              </p>
              <p>
                <NavLink to="/chakra-analysis">Chakra Analysis</NavLink>
              </p>
            
              <p>
                <a href="/#" target="_blank" rel="noreferrer noopener">
                  Terms and Conditions
                </a>
              </p>
            </Col>
            <Col xs={12} md={4} className="footer-col pt-col">
              <p className="address">
                Connect with us at
                <br />
                <button
                  className="mailto"
                  onClick={() =>
                    (window.location = "mailto:connect@secretsodaura.com")
                  }
                >
                  connect@secretsodaura.com
                </button>
              </p>
              <div className="add">
              603, 6TH FLR, LAXMI PLAZA, LAXMI IND ESTATE, NEW LINK ROAD, ANDHERI WEST, Mumbai City MH 400053 IN
              </div>

              {/* <p className="address">
                <img src={linkedIn} alt="linkedIn" title="LinkedIn" />{" "}
                <img src={twitter} alt="twitter" title="twitter" />
              </p> */}
            </Col>
          </Row>
        </Nav>

        <Row className="Row">
          <Col md={4}></Col>
          <Col xs={12} lg={8} className="copyright mb-4">
            Copyright © 2023 Secrets Of Aura. All Rights Reserved.
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Footer;
