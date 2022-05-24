import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import classes from "./headerStyles.module.css";
import icon from "../../assets/images/icons/category-icon.svg";
import user from "../../assets/images/icons/user.svg";
import wishlist from "../../assets/images/icons/wishlist.svg";
import cart from "../../assets/images/icons/cart.svg";
import menu from "../../assets/images/icons/menu.svg";

const Header = () => {
  return (
    <header>
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

            {/*<Link
              to="#ec-mobile-sidebar"
              className={`${classes.ecHeaderBtn} ${classes.ecSidebarToggle} d-lg-none`}
            >
              <img
                src={icon}
                className={`svg_img ${classes.headerSvg}`}
                alt="icon"
              />
  </Link>*/}

            <Col className={`text-center ${classes.headerTopCenter}`}>
              <div class={`${classes.headerTopMessage} ${classes.textUpper}`}>
                <span>Free Shipping</span>This Week Order Over - $75
              </div>
            </Col>

            <Col className="d-lg-none">
              <div className={classes.ecHeaderBottons}>
                <div className={`${classes.ecHeaderUser} ${classes.dropdown}`}>
                  <button
                    className={classes.dropdownToggle}
                    data-bs-toggle="dropdown"
                  >
                    <img
                      src={user}
                      className={`svg_img ${classes.headerSvg}`}
                      alt="user"
                    />
                  </button>
                  <ul
                    className={`${classes.dropdownMenu} ${classes.dropdownMenuRight}`}
                  >
                    <li>
                      <a className={classes.dropdownItem} href="register.html">
                        Register
                      </a>
                    </li>
                    <li>
                      <a className={classes.dropdownItem} href="checkout.html">
                        Checkout
                      </a>
                    </li>
                    <li>
                      <a className={classes.dropdownItem} href="login.html">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>

                <a
                  href="wishlist.html"
                  className={`${classes.ecHeaderBtn} ec-header-wishlist`}
                >
                  <div className="header-icon">
                    <img
                      src={wishlist}
                      className={`svg_img ${classes.headerSvg}`}
                      alt="wishlist"
                    />
                  </div>
                  <span className={classes.ecHeaderCount}>4</span>
                </a>

                <a
                  href="#ec-side-cart"
                  class={`${classes.ecHeaderBtn} ec-side-toggle"`}
                >
                  <div className="header-icon">
                    <img
                      src={cart}
                      className={`svg_img ${classes.headerSvg}`}
                      alt="cart"
                    />
                  </div>
                  <span
                    className={`${classes.ecHeaderCount} ec-cart-count cart-count-lable`}
                  >
                    3
                  </span>
                </a>

                <a
                  href="#ec-mobile-menu"
                  className={`${classes.ecHeaderBtn} ec-side-toggle d-lg-none`}
                >
                  <img
                    src={menu}
                    className={`svg_img ${classes.headerSvg}`}
                    alt="icon"
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

export default Header;
