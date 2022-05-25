import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderButtons from "./HeaderButtons/HeaderButtons";
import classes from "./headerStyles.module.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import logo from "../../assets/images/logo/logo.svg";
const Header = () => {
  return (
    <header>
      <HeaderTop />
      <div className="ec-header-bottom d-none d-lg-block">
        <Container className="position-relative">
          <Row>
            <div className="ec-flex">
              <div className="align-self-center">
                <div className="header-logo">
                  <a href="index.html">
                    <img src={logo} alt="Site Logo" />
                    <img
                      className="dark-logo"
                      src="assets/images/logo/dark-logo-8.png"
                      alt="Site Logo"
                      style={{ display: "none" }}
                    />
                  </a>
                </div>
              </div>

              <div className="align-self-center">
                <div className="header-search">
                  <form className="ec-btn-group-form" action="#">
                    <input
                      className="form-control"
                      placeholder="Enter Your Product Name..."
                      type="text"
                    />
                    <button className="submit" type="submit">
                      <img
                        src="assets/images/icons/search.svg"
                        className="svg_img header_svg"
                        alt=""
                      />
                    </button>
                  </form>
                </div>
              </div>

              <div className="align-self-center">
                <HeaderButtons />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
