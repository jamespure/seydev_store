import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeaderButtons from "../HeaderButtons/HeaderButtons";
import logo from "../../../assets/images/logo/logo.svg";
import classes from "./headerBottomStyles.module.css"
import search from "../../../assets/images/icons/search.svg";

const HeaderBottom = () => {
  return (
    <div className={`${classes.ecHeaderBottom} d-none d-lg-block`}>
      <Container className="position-relative">
        <Row>
          <div className={classes.ecFlex}>
            <div className="align-self-center">
              <div className={classes.headerLogo}>
                <Link to="">
                  <img src={logo} alt="Site Logo" />
                </Link>
              </div>
            </div>

            <div className="align-self-center">
              <div className={classes.headerSearch}>
                <form action="#">
                  <input
                    className={classes.formControl}
                    placeholder="Enter Your Product Name..."
                    type="text"
                  />
                  <button className={classes.submit} type="submit">
                    <img
                      src={search}
                      className={` ${classes.headerSvg}`}
                      alt="search"
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
  );
}

export default HeaderBottom