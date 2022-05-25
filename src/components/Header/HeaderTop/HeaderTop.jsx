import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { IoLogoInstagram } from 'react-icons/io';
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import classes from './headerTopStyles.module.css'
import icon from "../../../assets/images/icons/category-icon.svg";
import menu from "../../../assets/images/icons/menu.svg";
import HeaderButtons from '../HeaderButtons/HeaderButtons';

const HeaderTop = () => {
  return (
    <div className={`${classes.headerTop}`}>
      <Container>
        <Row className="align-items-center">
          <Col
            className={`text-left ${classes.headerTopLeft} d-none d-lg-block`}
          >
            <div className={classes.headerTopSocial}>
              <span className={`${classes.socialText} ${classes.textUpper}`}>
                Follow us on:
              </span>
              <ul className="mb-0">
                <li className="list-inline-item">
                  <Link className={classes.hdrFacebook} to="#">
                    <TiSocialFacebook />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className={classes.hdrTwitter} to="#">
                    <TiSocialTwitter />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link className={classes.hdrInstagram} to="#">
                    <IoLogoInstagram />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>

          <Col className={`text-center ${classes.headerTopCenter}`}>
            <div className={`${classes.headerTopMessage} ${classes.textUpper}`}>
              <span>Free Shipping</span>This Week Order Over - $75
            </div>
          </Col>

          <Col className="d-lg-none">
            <HeaderButtons>
              <Link
                to=""
                className={`${classes.ecHeaderBtn} ec-side-toggle d-lg-none`}
              >
                <img
                  src={menu}
                  className={`svg_img ${classes.headerSvg}`}
                  alt="icon"
                />
              </Link>
            </HeaderButtons>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderTop