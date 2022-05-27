import React from "react";
import HeaderBottom from "./HeaderBottom/HeaderBottom";
import classes from "./headerStyles.module.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import menuBanner from "../../assets/images/menu-banner/1.jpg";
import menuBanner2 from "../../assets/images/menu-banner/2.jpg";
import menuBanner3 from "../../assets/images/menu-banner/3.jpg";
import menuBanner4 from "../../assets/images/menu-banner/4.jpg";
import logo from "../../assets/images/logo/logo.svg";
import HeaderBottomMobile from "./HeaderBottom/HeaderBottomMobile/HeaderBottomMobile";
const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
      <HeaderBottomMobile />
      <div id="ec-main-menu-desk" className="d-none d-lg-block sticky-nav">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <div className="ec-main-menu">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li className="dropdown position-static">
                    <a href="javascript:void(0)">Categories</a>
                    <ul className="mega-menu d-block">
                      <li className="d-flex">
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">Classic Variation</a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar-col-3.html">
                              Left sidebar 3 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-left-sidebar-col-4.html">
                              Left sidebar 4 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar-col-3.html">
                              Right sidebar 3 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar-col-4.html">
                              Right sidebar 4 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-full-width.html">
                              Full width 4 column
                            </a>
                          </li>
                        </ul>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">Classic Variation</a>
                          </li>
                          <li>
                            <a href="shop-banner-left-sidebar-col-3.html">
                              Banner left sidebar 3 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-banner-left-sidebar-col-4.html">
                              Banner left sidebar 4 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-banner-right-sidebar-col-3.html">
                              Banner right sidebar 3 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-banner-right-sidebar-col-4.html">
                              Banner right sidebar 4 column
                            </a>
                          </li>
                          <li>
                            <a href="shop-banner-full-width.html">
                              Banner Full width 4 column
                            </a>
                          </li>
                        </ul>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">Columns Variation</a>
                          </li>
                          <li>
                            <a href="shop-full-width-col-3.html">
                              3 Columns full width
                            </a>
                          </li>
                          <li>
                            <a href="shop-full-width-col-4.html">
                              4 Columns full width
                            </a>
                          </li>
                          <li>
                            <a href="shop-full-width-col-5.html">
                              5 Columns full width
                            </a>
                          </li>
                          <li>
                            <a href="shop-full-width-col-6.html">
                              6 Columns full width
                            </a>
                          </li>
                          <li>
                            <a href="shop-banner-full-width-col-3.html">
                              Banner 3 Columns
                            </a>
                          </li>
                        </ul>
                        <ul className="d-block">
                          <li className="menu_title">
                            <a href="javascript:void(0)">List Variation</a>
                          </li>
                          <li>
                            <a href="shop-list-left-sidebar.html">
                              Shop left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-right-sidebar.html">
                              Shop right sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-banner-left-sidebar.html">
                              Banner left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-banner-right-sidebar.html">
                              Banner right sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-full-col-2.html">
                              Full width 2 columns
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul className="ec-main-banner w-100">
                          <li>
                            <a
                              className="p-0"
                              href="shop-left-sidebar-col-3.html"
                            >
                              <img
                                className="img-responsive"
                                src={menuBanner}
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="p-0"
                              href="shop-left-sidebar-col-4.html"
                            >
                              <img
                                className="img-responsive"
                                src={menuBanner2}
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="p-0"
                              href="shop-right-sidebar-col-3.html"
                            >
                              <img
                                className="img-responsive"
                                src={menuBanner3}
                                alt=""
                              />
                            </a>
                          </li>
                          <li>
                            <a
                              className="p-0"
                              href="shop-right-sidebar-col-4.html"
                            >
                              <img
                                className="img-responsive"
                                src={menuBanner4}
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)">Products</a>
                    <ul className="sub-menu">
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product page
                          <i className="ecicon eci-angle-right"></i>
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-left-sidebar.html">
                              Product left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-right-sidebar.html">
                              Product right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product 360
                          <i className="ecicon eci-angle-right"></i>
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-360-left-sidebar.html">
                              360 left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-360-right-sidebar.html">
                              360 right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product video
                          <i className="ecicon eci-angle-right"></i>
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-video-left-sidebar.html">
                              Video left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-video-right-sidebar.html">
                              Video right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown position-static">
                        <a href="javascript:void(0)">
                          Product gallery
                          <i className="ecicon eci-angle-right"></i>
                        </a>
                        <ul className="sub-menu sub-menu-child">
                          <li>
                            <a href="product-gallery-left-sidebar.html">
                              Gallery left sidebar
                            </a>
                          </li>
                          <li>
                            <a href="product-gallery-right-sidebar.html">
                              Gallery right sidebar
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="product-full-width.html">Product full width</a>
                      </li>
                      <li>
                        <a href="product-360-full-width.html">360 full width</a>
                      </li>
                      <li>
                        <a href="product-video-full-width.html">
                          Video full width
                        </a>
                      </li>
                      <li>
                        <a href="product-gallery-full-width.html">
                          Gallery full width
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:void(0)">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                      <li>
                        <a href="cart.html">Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="faq.html">FAQ</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="register.html">Register</a>
                      </li>
                      <li>
                        <a href="track-order.html">Track Order</a>
                      </li>
                      <li>
                        <a href="terms-condition.html">Terms Condition</a>
                      </li>
                      <li>
                        <a href="privacy-policy.html">Privacy Policy</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="offer.html">Hot Offers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
