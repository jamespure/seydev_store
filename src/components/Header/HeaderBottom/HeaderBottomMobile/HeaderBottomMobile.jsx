import React from "react";
import classes from "./headerBottomMobileStyles.module.css";
import search from "../../../../assets/images/icons/search.svg";
import logo from "../../../../assets/images/logo/logo.svg";
import { Col, Container, Row } from "react-bootstrap";

const HeaderBottomMobile = () => {
  return (
    <div class={`${classes.ecHeaderBottom} d-lg-none`}>
      <Container className="position-relative">
        <Row>
          <Col>
            <div className="header-logo}">
              <a href="index.html">
                <img src={logo} alt="Site Logo" />
              </a>
            </div>
          </Col>

          <Col>
            <div className="header-search">
              <form className="ec-btn-group-form" action="#">
                <input
                  className="form-control"
                  placeholder="Enter Your Product Name..."
                  type="text"
                />
                <button className="submit" type="submit">
                  <img src={search} className="svg_img header_svg" alt="icon" />
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderBottomMobile;
